/* PEEPAL TREE - DYNAMIC RESUSABLE UI ELEMENTS */

(function() {
  // Helper for launching toasts
  function showToast(message, duration = 4000) {
    let container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <span>${message}</span>
      <span class="toast-close">&times;</span>
    `;

    container.appendChild(toast);

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.remove();
    });

    setTimeout(() => {
      toast.style.animation = "toast-slide-in 0.4s ease reverse";
      setTimeout(() => {
        toast.remove();
      }, 400);
    }, duration);
  }

  // Universal dynamic Booking Dialog engine
  function openBookingModal(type, targetId) {
    let modal = document.getElementById("peepal-booking-modal");
    if (!modal) {
      modal = document.createElement("dialog");
      modal.id = "peepal-booking-modal";
      modal.className = "custom-modal";
      document.body.appendChild(modal);
    }

    const db = window.PeepalDatabase;
    const store = window.PeepalStore;
    if (!db || !store) return;

    let title = "";
    let price = 0;
    let detailsHTML = "";
    let targetObject = null;

    if (type === "experience") {
      targetObject = db.Experiences.find(e => e.id === targetId);
      if (!targetObject) return;
      title = targetObject.title;
      price = targetObject.price;
      detailsHTML = `
        <div class="form-group">
          <label class="form-label" for="booking-date">Select Schedule</label>
          <select id="booking-date" class="form-select">
            <option value="2026-06-02">${targetObject.schedule}</option>
            <option value="2026-06-09">Next session (following week)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="booking-seats">Number of Seats (Capacity: ${targetObject.capacity})</label>
          <select id="booking-seats" class="form-select">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
          </select>
        </div>
      `;
    } else if (type === "retreat") {
      targetObject = db.Retreats.find(r => r.id === targetId);
      if (!targetObject) return;
      title = targetObject.title;
      price = targetObject.price;
      detailsHTML = `
        <div class="form-group">
          <label class="form-label">Duration & Date</label>
          <p style="font-weight:600; color:var(--color-terracotta);">${targetObject.durationDays} Days starting on ${targetObject.startDate}</p>
        </div>
        <div class="form-group">
          <label class="form-label" for="booking-room">Boutique Room Allocation</label>
          <select id="booking-room" class="form-select">
            <option value="${targetObject.roomAllocation}">${targetObject.roomAllocation} (Included in Package)</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label" for="booking-seats">Attendees</label>
          <select id="booking-seats" class="form-select">
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
          </select>
        </div>
      `;
    } else if (type === "gathering") {
      targetObject = db.Gatherings.find(g => g.id === targetId);
      if (!targetObject) return;
      title = targetObject.title;
      price = targetObject.price;
      detailsHTML = `
        <div class="form-group">
          <label class="form-label">Gathering Details</label>
          <p style="color:var(--color-slate); font-size:0.9rem;">
            📅 Date: ${targetObject.date} | ⏰ Time: ${targetObject.time}<br>
            📍 Location: ${targetObject.locationName}
          </p>
        </div>
        <input type="hidden" id="booking-seats" value="1">
      `;
    }

    // Register active selection for analytics
    store.trackCheckoutStep();

    modal.innerHTML = `
      <div class="modal-header">
        <h3 style="font-size:1.35rem; font-family:var(--font-heading);">${title}</h3>
        <button class="modal-close-btn">&times;</button>
      </div>
      <form id="peepal-booking-form">
        ${detailsHTML}
        
        <div class="form-group">
          <label class="form-label" for="attendee-name">Attendee Full Name</label>
          <input type="text" id="attendee-name" class="form-input" required placeholder="Arundev V.">
        </div>
        <div class="form-group">
          <label class="form-label" for="attendee-email">Attendee Email Address</label>
          <input type="email" id="attendee-email" class="form-input" required placeholder="arundev@peepaltree.com">
        </div>
        <div class="form-group">
          <label class="form-label" for="attendee-notes">Special Requests & Health Notes</label>
          <textarea id="attendee-notes" class="form-textarea" rows="3" placeholder="Dietary habits, post-exercise needs, mobility requirements..."></textarea>
        </div>

        <div style="border-top:1px solid var(--color-border); padding-top:var(--space-md); margin-top:var(--space-md); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span style="font-size:0.8rem; color:var(--color-slate); display:block;">Total Summary Cost</span>
            <strong style="font-size:1.4rem; color:var(--color-forest);" id="modal-price-display">
              ${price === 0 ? "Free Gathering" : "₹" + price.toLocaleString()}
            </strong>
          </div>
          <button type="submit" class="btn btn-terracotta">Confirm Registration</button>
        </div>
      </form>
    `;

    // Seat price updates
    const seatsSelect = modal.querySelector("#booking-seats");
    if (seatsSelect && price > 0) {
      seatsSelect.addEventListener("change", (e) => {
        const mul = parseInt(e.target.value) || 1;
        modal.querySelector("#modal-price-display").innerText = "₹" + (price * mul).toLocaleString();
      });
    }

    // Modal Close handlers
    const closeBtn = modal.querySelector(".modal-close-btn");
    closeBtn.addEventListener("click", () => {
      modal.close();
    });

    // Form submits
    const form = modal.querySelector("#peepal-booking-form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const seats = parseInt(modal.querySelector("#booking-seats").value) || 1;
      const bData = {
        type,
        targetId,
        targetName: title,
        date: modal.querySelector("#booking-date") ? modal.querySelector("#booking-date").value : (targetObject.date || new Date().toISOString().split("T")[0]),
        price: price * seats,
        seats,
        attendeeName: modal.querySelector("#attendee-name").value,
        attendeeEmail: modal.querySelector("#attendee-email").value,
        notes: modal.querySelector("#attendee-notes").value
      };

      if (type === "retreat") {
        bData.roomAllocation = targetObject.roomAllocation;
      }

      const res = store.addBooking(bData);
      modal.close();

      if (res.status === "confirmed") {
        showToast(`Registration placed successfully! Code: ${res.id}`);
      } else {
        showToast(`Booking received. Pending approval from ${type === "retreat" ? "retreat host" : "facilitator"}.`);
      }

      // If we are on the admin page, reload lists automatically
      if (window.peepalAdminInit) {
        window.peepalAdminInit();
      }
    });

    modal.showModal();
  }

  // Clean horizontal custom bar graph generator (CSS only)
  function renderAnalyticsChart(elementId, dataset, labelField, valueField, maxLimit = null) {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (!maxLimit) {
      maxLimit = Math.max(...dataset.map(d => d[valueField])) || 1;
    }

    let html = `<div style="display:flex; flex-direction:column; gap:var(--space-sm);">`;
    dataset.forEach(item => {
      const percentage = (item[valueField] / maxLimit) * 100;
      html += `
        <div>
          <div style="display:flex; justify-content:space-between; font-size:0.8rem; font-weight:600; color:var(--color-forest); margin-bottom:2px;">
            <span>${item[labelField]}</span>
            <span>${item[valueField]}</span>
          </div>
          <div style="width:100%; height:12px; background-color:var(--color-sand); border-radius:var(--radius-full); overflow:hidden;">
            <div style="width:${percentage}%; height:100%; background-color:var(--color-sage); border-radius:var(--radius-full); transition: width 1s ease;"></div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    el.innerHTML = html;
  }

  // Attach elements to window objects
  if (typeof window !== "undefined") {
    window.PeepalComponents = {
      showToast,
      openBookingModal,
      renderAnalyticsChart
    };
  }
})();
