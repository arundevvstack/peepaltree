/* PEEPAL TREE - GLOBAL WIREFRAME LAYOUT & INTERACTIVE EVENTS */

(function() {
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Page View Tracking
    const store = window.PeepalStore;
    const db = window.PeepalDatabase;
    if (store) {
      const path = window.location.pathname;
      const file = path.substring(path.lastIndexOf('/') + 1) || "index.html";
      const key = file.replace(".html", "");
      
      // Page specific tracking mapping
      if (["index", "about", "experiences", "retreats", "destinations", "properties", "admin"].includes(key)) {
        store.trackPageView(key === "index" ? "home" : key);
      }
    }

    // 2. Render Shared Header dynamically
    renderSharedHeader();

    // 3. Render Shared Footer dynamically
    renderSharedFooter();

    // 4. Render Fixed Role Switcher Widget (For QA/Simulation)
    renderRoleSwitcherWidget();

    // 5. Scroll Header Shadow Effect
    const header = document.getElementById("site-header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });

    // 6. Universal Click Bindings
    setupGlobalClickListeners();

    // 7. Observe Scroll-Reveals (Aesthetic Micro-Animations)
    setupScrollReveals();
  });

  function renderSharedHeader() {
    const headerContainer = document.getElementById("site-header");
    if (!headerContainer) return;

    const path = window.location.pathname;
    const file = path.substring(path.lastIndexOf('/') + 1) || "index.html";

    // Setup Grouped Navigation Menu HTML
    let navHTML = `
      <nav class="main-nav" id="main-nav">
        <a href="index.html" ${file === "index.html" ? "class='active'" : ""}>Home</a>
        
        <div class="nav-item-dropdown">
          <a href="#" class="${["destinations.html", "properties.html", "facilitators.html"].includes(file) ? "active" : ""}">Discover ▾</a>
          <div class="dropdown-menu">
            <a href="destinations.html" class="dropdown-item">Kerala Destinations</a>
            <a href="properties.html" class="dropdown-item">Boutique Properties</a>
            <a href="facilitators.html" class="dropdown-item">Facilitator Network</a>
          </div>
        </div>

        <div class="nav-item-dropdown">
          <a href="#" class="${["experiences.html", "retreats.html"].includes(file) ? "active" : ""}">Journeys ▾</a>
          <div class="dropdown-menu">
            <a href="experiences.html" class="dropdown-item">Mindful Experiences</a>
            <a href="retreats.html" class="dropdown-item">Wellness Retreats</a>
          </div>
        </div>

        <div class="nav-item-dropdown">
          <a href="#" class="${["community.html", "stories.html"].includes(file) ? "active" : ""}">Circle & Stories ▾</a>
          <div class="dropdown-menu">
            <a href="community.html" class="dropdown-item">Community Circles</a>
            <a href="stories.html" class="dropdown-item">Slow Journals</a>
          </div>
        </div>

        <a href="about.html" ${file === "about.html" ? "class='active'" : ""}>Philosophy</a>
      </nav>
    `;

    headerContainer.innerHTML = `
      <div class="container">
        <a href="index.html" class="logo-link">
          <span class="logo-icon"></span>
          <span class="logo-text">peepal tree</span>
        </a>
        
        ${navHTML}

        <div class="header-actions">
          <a href="membership.html" class="btn btn-primary btn-small">Circle Membership</a>
          <button class="nav-toggle" id="nav-toggle" aria-label="Toggle Navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    `;

    // Mobile Navigation Toggle click handler
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
        toggle.classList.toggle("active");
        if (nav.classList.contains("mobile-open")) {
          // Flatten dropdowns inside mobile view for easy tap targets
          nav.setAttribute("style", "display: flex; flex-direction: column; position: absolute; top: var(--header-height); left: 0; width: 100%; background: var(--color-coconut); padding: var(--space-md) var(--space-lg); border-bottom: 1px solid var(--color-border); box-shadow: var(--shadow-md); z-index: 999; gap: var(--space-md); height: 80vh; overflow-y: auto;");
          nav.querySelectorAll(".dropdown-menu").forEach(d => {
            d.setAttribute("style", "position: static; display: flex; transform: none; box-shadow: none; border: none; padding-left: var(--space-md); opacity: 1; visibility: visible;");
          });
        } else {
          nav.removeAttribute("style");
          nav.querySelectorAll(".dropdown-menu").forEach(d => d.removeAttribute("style"));
        }
      });
    }
  }

  function renderSharedFooter() {
    const footerContainer = document.getElementById("site-footer");
    if (!footerContainer) return;

    footerContainer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="logo-link" style="margin-bottom:var(--space-md);">
              <span class="logo-icon" style="background-color:var(--color-sand-light);"></span>
              <span class="logo-text" style="color:var(--color-sand-light);">peepal tree</span>
            </a>
            <p>A soulful hospitality and experience network connecting mindful travelers, retreat facilitators, and boutique nature properties.</p>
            <div class="footer-socials">
              <a href="#" class="social-link" aria-label="Instagram">IG</a>
              <a href="#" class="social-link" aria-label="YouTube">YT</a>
              <a href="#" class="social-link" aria-label="Pinterest">PIN</a>
            </div>
          </div>
          
          <div class="footer-links">
            <h4>Explore</h4>
            <ul>
              <li><a href="destinations.html">Kerala Destinations</a></li>
              <li><a href="experiences.html">Mindful Experiences</a></li>
              <li><a href="retreats.html">Wellness Retreats</a></li>
              <li><a href="properties.html">Boutique Properties</a></li>
            </ul>
          </div>

          <div class="footer-links">
            <h4>Ecosystem</h4>
            <ul>
              <li><a href="facilitators.html">Facilitator Network</a></li>
              <li><a href="community.html">Community Gatherings</a></li>
              <li><a href="stories.html">Stories & Guides</a></li>
              <li><a href="membership.html">Circle Membership</a></li>
            </ul>
          </div>

          <div class="footer-newsletter">
            <h4>Subscribe to the Circle</h4>
            <p>Receive slow travel journals, priority retreat schedules, and local tales from Kerala.</p>
            <form class="newsletter-form" id="footer-newsletter-form">
              <input type="email" placeholder="Your email address" required aria-label="Email Address">
              <button type="submit" class="btn btn-terracotta btn-small">Join</button>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 Peepal Tree. Rooted in Kerala. Built with slow purpose.</p>
          <div class="footer-legal-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="refund.html">Refund Policy</a>
          </div>
        </div>
      </div>
    `;

    // Bind Newsletter Submit
    const form = document.getElementById("footer-newsletter-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = form.querySelector("input");
        const store = window.PeepalStore;
        const comps = window.PeepalComponents;
        if (store && comps) {
          const added = store.subscribeNewsletter(input.value);
          if (added) {
            comps.showToast("Welcome to the Peepal Circle newsletter!");
          } else {
            comps.showToast("You are already subscribed to the Circle.");
          }
          input.value = "";
        }
      });
    }
  }

  function renderRoleSwitcherWidget() {
    const store = window.PeepalStore;
    const comps = window.PeepalComponents;
    if (!store || !comps) return;

    let widget = document.getElementById("peepal-role-switcher");
    if (!widget) {
      widget = document.createElement("div");
      widget.id = "peepal-role-switcher";
      widget.className = "role-switch-widget";
      document.body.appendChild(widget);
    }

    const currentRole = store.getRole();
    widget.innerHTML = `
      <span class="role-switch-label">Role:</span>
      <select class="role-select" id="peepal-role-select">
        <option value="Guest" ${currentRole === "Guest" ? "selected" : ""}>Guest Traveler</option>
        <option value="Partner" ${currentRole === "Partner" ? "selected" : ""}>Property Partner</option>
        <option value="Facilitator" ${currentRole === "Facilitator" ? "selected" : ""}>Facilitator</option>
        <option value="Admin" ${currentRole === "Admin" ? "selected" : ""}>Platform Admin</option>
      </select>
    `;

    const select = widget.querySelector("#peepal-role-select");
    select.addEventListener("change", (e) => {
      const selected = e.target.value;
      store.setRole(selected);
      comps.showToast(`Switched active environment: ${selected} Workspace`);
      
      // If switched to admin and not already on admin.html, guide them
      if (selected === "Admin" && !window.location.pathname.includes("admin.html")) {
        setTimeout(() => {
          comps.showToast("Opening Platform Control Center...");
          setTimeout(() => {
            window.location.href = "admin.html";
          }, 1200);
        }, 1000);
      }
    });
  }

  function setupGlobalClickListeners() {
    document.addEventListener("click", (e) => {
      const store = window.PeepalStore;
      const comps = window.PeepalComponents;
      if (!store || !comps) return;

      // 1. Dynamic Booking buttons
      const bookingBtn = e.target.closest(".booking-trigger-btn");
      if (bookingBtn) {
        const type = bookingBtn.getAttribute("data-type");
        const id = bookingBtn.getAttribute("data-id");
        comps.openBookingModal(type, id);
      }

      // 2. Favorite Toggle buttons
      const favBtn = e.target.closest(".favorite-toggle-btn");
      if (favBtn) {
        const id = favBtn.getAttribute("data-id");
        const isFavNow = store.toggleFavorite(id);
        favBtn.classList.toggle("active", isFavNow);
        
        if (isFavNow) {
          comps.showToast("Saved to your slow journeys catalog.");
          favBtn.querySelector("span") ? favBtn.querySelector("span").innerText = "♥" : null;
        } else {
          comps.showToast("Removed from saved items.");
          favBtn.querySelector("span") ? favBtn.querySelector("span").innerText = "♡" : null;
        }
      }
    });
  }

  function setupScrollReveals() {
    if (typeof IntersectionObserver === "undefined") return;

    const sections = document.querySelectorAll(".fade-in-section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px"
    });

    sections.forEach(sec => observer.observe(sec));
  }
})();
