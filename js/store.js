/* PEEPAL TREE - SECURE STATE CONTROLLER & ANALYTICS INSTRUMENTATION */

(function() {
  const STORE_KEY = "peepal_tree_store_v1";

  // Helper to load or initialize state
  function getInitialState() {
    const defaultState = {
      bookings: [
        {
          id: "bk-101",
          type: "experience",
          targetId: "silent-forest-breath",
          targetName: "Western Ghats Silent Forest Breathwork",
          date: "2026-06-02",
          price: 2500,
          status: "confirmed",
          seats: 2,
          attendeeName: "Elena Rostova",
          attendeeEmail: "elena@slowtravel.com",
          notes: "Focusing on breath recovery post-pneumonia."
        },
        {
          id: "bk-102",
          type: "retreat",
          targetId: "highland-mindfulness",
          targetName: "Highland Canopy Silent Yoga & Mindfulness",
          date: "2026-06-12",
          price: 34000,
          status: "pending",
          seats: 1,
          roomAllocation: "Canopy Nest Suite",
          attendeeName: "Arundev V.",
          attendeeEmail: "arundevv@me.com",
          notes: "Gluten-free diet required."
        },
        {
          id: "bk-103",
          type: "gathering",
          targetId: "varkala-sunset-circle",
          targetName: "Peepal Circle: Varkala Cliffside Sunset Sharing",
          date: "2026-06-05",
          price: 0,
          status: "confirmed",
          seats: 1,
          attendeeName: "Ananya Pillai",
          attendeeEmail: "ananya.p@gmail.com",
          notes: ""
        }
      ],
      favorites: ["silent-forest-breath", "ananda-treehouse"],
      waitlist: [
        { id: "wt-01", targetId: "silent-forest-breath", name: "Marc Dupond", email: "marc@france.fr" }
      ],
      newsletter: ["arundevv@me.com"],
      memberships: [
        { id: "mem-01", name: "Arundev V.", email: "arundevv@me.com", tier: "Sage Circle", joinedDate: "2026-05-30" }
      ],
      activeRole: "Guest", // Roles: Guest, Partner, Facilitator, Admin
      analytics: {
        pageViews: {
          home: 420,
          experiences: 180,
          retreats: 95,
          destinations: 150,
          properties: 120,
          admin: 14
        },
        itemViews: {
          "silent-forest-breath": 210,
          "sacred-clay-sculpting": 140,
          "highland-mindfulness": 88
        },
        revenue: 68000,
        funnel: {
          browse: 420,
          select: 180,
          checkout: 85,
          complete: 48
        }
      }
    };

    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem(STORE_KEY);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch (e) {
          console.error("Failed to parse stored Peepal Tree state", e);
        }
      }
    }
    return defaultState;
  }

  const state = getInitialState();

  // Save changes to localStorage and dispatch custom event
  function saveState() {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(STORE_KEY, JSON.stringify(state));
    }
    // Fire event for visual state binders
    window.dispatchEvent(new CustomEvent("peepalStoreChange", { detail: state }));
  }

  const PeepalStore = {
    getState: () => state,

    // Role switcher logic
    setRole: (role) => {
      state.activeRole = role;
      saveState();
    },

    getRole: () => state.activeRole,

    // Favorites handlers
    toggleFavorite: (itemId) => {
      const idx = state.favorites.indexOf(itemId);
      if (idx > -1) {
        state.favorites.splice(idx, 1);
      } else {
        state.favorites.push(itemId);
      }
      saveState();
      return state.favorites.includes(itemId);
    },

    isFavorite: (itemId) => state.favorites.includes(itemId),

    // Booking actions
    addBooking: (bookingData) => {
      const newBooking = {
        id: "bk-" + Math.floor(Math.random() * 90000 + 10000),
        status: bookingData.price === 0 ? "confirmed" : "pending",
        ...bookingData
      };
      state.bookings.unshift(newBooking);
      
      // Update analytics funnel
      state.analytics.funnel.complete++;
      state.analytics.revenue += newBooking.price * (newBooking.seats || 1);
      
      saveState();
      return newBooking;
    },

    cancelBooking: (bookingId) => {
      const bk = state.bookings.find(b => b.id === bookingId);
      if (bk) {
        bk.status = "cancelled";
        saveState();
      }
    },

    updateBookingStatus: (bookingId, status) => {
      const bk = state.bookings.find(b => b.id === bookingId);
      if (bk) {
        bk.status = status;
        saveState();
      }
    },

    // Waitlist setup
    addToWaitlist: (targetId, name, email) => {
      const entry = {
        id: "wt-" + Math.floor(Math.random() * 90000 + 10000),
        targetId,
        name,
        email
      };
      state.waitlist.push(entry);
      saveState();
      return entry;
    },

    // Newsletter setup
    subscribeNewsletter: (email) => {
      if (!state.newsletter.includes(email)) {
        state.newsletter.push(email);
        saveState();
        return true;
      }
      return false;
    },

    // Membership Circle setup
    joinMembership: (name, email, tier) => {
      const exists = state.memberships.find(m => m.email === email);
      if (!exists) {
        const newMember = {
          id: "mem-" + Math.floor(Math.random() * 90000 + 10000),
          name,
          email,
          tier,
          joinedDate: new Date().toISOString().split("T")[0]
        };
        state.memberships.push(newMember);
        saveState();
        return newMember;
      }
      return exists;
    },

    // Core Analytics Instrumentation
    trackPageView: (pageKey) => {
      if (state.analytics.pageViews[pageKey] !== undefined) {
        state.analytics.pageViews[pageKey]++;
        state.analytics.funnel.browse++;
        saveState();
      }
    },

    trackItemView: (itemId) => {
      if (state.analytics.itemViews[itemId] === undefined) {
        state.analytics.itemViews[itemId] = 0;
      }
      state.analytics.itemViews[itemId]++;
      state.analytics.funnel.select++;
      saveState();
    },

    trackCheckoutStep: () => {
      state.analytics.funnel.checkout++;
      saveState();
    }
  };

  if (typeof window !== "undefined") {
    window.PeepalStore = PeepalStore;
  }
})();
