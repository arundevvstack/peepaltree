/* PEEPAL TREE - CMS RELATIONAL MOCK DATABASE */

(function() {
  const PeepalDatabase = {
    Destinations: [
      {
        id: "varkala",
        name: "Varkala",
        heroImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
        description: "Cliffside sanctuary overlooking the Arabian Sea, where red clay cliffs meet golden sands and spiritual healing runs deep.",
        culture: "Home to the ancient Janardanaswamy Temple and mineral springs believed to contain holy waters that cleanse the spirit.",
        gallery: [
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Slow Travel Guide to Varkala - Peepal Tree",
        seoDesc: "Discover the cliffside wellness sanctuary of Varkala, Kerala. Browse boutique homestays, nature retreats, and cultural circles."
      },
      {
        id: "wayanad",
        name: "Wayanad",
        heroImage: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=1200&q=80",
        description: "Misty highlands where spice plantations drift into ancient cave systems, wrapping you in an emerald blanket of pure peace.",
        culture: "Rooted in tribal history and Neolithic carvings at the Edakkal Caves, reflecting millennia of human interaction with these hills.",
        gallery: [
          "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1626509657820-21a48c1cf366?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Misty Mountain Escapes in Wayanad - Peepal Tree",
        seoDesc: "Explore the organic coffee valleys and high-canopy eco-resorts of Wayanad. Find eco-adventures and mindfulness retreats."
      },
      {
        id: "munnar",
        name: "Munnar",
        heroImage: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        description: "Lush tea carpets rolling over endless peaks, where cool mountain breezes clear the mind and wild neelakurinji blooms sleep.",
        culture: "A historic convergence of high-range pioneers, tea-leaf pluckers, and rare wildlife conservation inside Eravikulam National Park.",
        gallery: [
          "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1508215885820-4585e56135c8?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Serene Tea Ridges of Munnar - Peepal Tree",
        seoDesc: "Plan your wellness journey to Munnar. Connect with expert naturalists, stay in heritage estates, and slow down your pace."
      },
      {
        id: "alleppey",
        name: "Alleppey",
        heroImage: "https://images.unsplash.com/photo-1593693411515-c202e974eb87?auto=format&fit=crop&w=1200&q=80",
        description: "A labyrinth of silent canals, coconut-fringed lagoons, and expansive backwaters where life drifts at the pace of a country boat.",
        culture: "Famed for the heritage of Kettuvallam houseboats, rhythmic Nehru Trophy boat races, and slow lake-village crafts.",
        gallery: [
          "https://images.unsplash.com/photo-1593693411515-c202e974eb87?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Backwater Gatherings in Alleppey - Peepal Tree",
        seoDesc: "Experience standard backwater living in Alleppey. Explore eco-friendly farm stays, kayak through small canals, and join community circles."
      },
      {
        id: "thekkady",
        name: "Thekkady",
        heroImage: "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?auto=format&fit=crop&w=1200&q=80",
        description: "Dense evergreen canopies echoing with trumpeting elephants, spice scents, and the rhythmic lapping of the Periyar lake.",
        culture: "A bio-reserve rich in organic cardamoms, pepper heritage, and the traditional martial art of Kalaripayattu.",
        gallery: [
          "https://images.unsplash.com/photo-1516690561799-46d8f74f90f6?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Spice Reserves of Thekkady - Peepal Tree",
        seoDesc: "Rebuild your connection to nature in Thekkady. Stay in organic spice villas, walk alongside forest rangers, and learn wilderness tracking."
      },
      {
        id: "bekal",
        name: "Bekal",
        heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        description: "Golden shores framing Kerala's largest keyhole fort, a place of silent coastal trails and premium therapeutic retreats.",
        culture: "Marked by historic forts standing strong against the waves, beachside folklore, and ancient fishing settlements.",
        gallery: [
          "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Coastal Solitude at Bekal - Peepal Tree",
        seoDesc: "Experience premium solitude in Bekal. Discover beachfront wellness villages, fort-walks, and cultural storytelling circles."
      },
      {
        id: "kovalam",
        name: "Kovalam",
        heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80",
        description: "Three crescent beaches bordered by a grove of endless coconut palms, serving as the traditional home of Ayurvedic science.",
        culture: "World-famous Ayurvedic lineage, local catamaran fishing practices, and vintage beachside cafes.",
        gallery: [
          "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80"
        ],
        seoTitle: "Ayurveda Retreats in Kovalam - Peepal Tree",
        seoDesc: "Rebalance at the heart of Ayurveda in Kovalam. Compare yoga camps, professional Panchakarma wellness centers, and beachfront boutique villas."
      }
    ],

    Properties: [
      {
        id: "ananda-treehouse",
        destinationId: "wayanad",
        name: "Ananda Treehouse Lodge",
        type: "Eco Resort",
        description: "High-canopy architectural structures built entirely of native bamboo and thatch, nestled inside Wayanad's misty cardamom woods.",
        gallery: [
          "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80"
        ],
        amenities: ["Natural Spring Pool", "Bamboo Deck", "Cardamom Walks", "Solar Power", "Organic Farm-to-Table Dining"],
        location: "Pookode Peak, Wayanad, Kerala",
        policies: "Quiet hours after 9 PM. No single-use plastics permitted on site.",
        hostName: "Madhavan Nair",
        hostBio: "Third-generation spice farmer and environmental educator dedicated to high-canopy preservation."
      },
      {
        id: "soul-kovalam",
        destinationId: "kovalam",
        name: "Soul Kovalam Wellness Sanctuary",
        type: "Wellness Center",
        description: "A terracotta-walled wellness sanctuary overlooking a secluded beachfront, dedicated to authentic Panchakarma and silent yoga.",
        gallery: [
          "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
        ],
        amenities: ["Ayurvedic Treatment Room", "Beach Yoga Shala", "Saltwater Mineral Pool", "Silent Meditation Garden", "Sattvic Kitchen"],
        location: "Lighthouse Beach Road, Kovalam, Kerala",
        policies: "Alcohol-free and digital-free main shala zones.",
        hostName: "Dr. Lakshmi Priya",
        hostBio: "BAMS physician and meditation facilitator with over 18 years of clinical Ayurvedic practice."
      },
      {
        id: "varkala-cliffside",
        destinationId: "varkala",
        name: "Varkala Cliffside Heritage Homestay",
        type: "Heritage Property",
        description: "A meticulously restored 120-year-old wooden Nalukettu villa sitting gracefully at the northern edge of the Varkala cliffs.",
        gallery: [
          "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80"
        ],
        amenities: ["Ocean View Verandah", "Clay Tile Roofs", "Traditional Courtyard", "Home Cooked Kerala Meals", "Hammock Grove"],
        location: "North Cliff, Varkala, Kerala",
        policies: "Pet friendly. Respectful integration with the neighborhood community.",
        hostName: "Devika & Ramesh",
        hostBio: "Artists and history curators who opened their ancestral home to share slow-coastal living."
      },
      {
        id: "alleppey-backwater-farm",
        destinationId: "alleppey",
        name: "Alleppey Backwater Farm Stay",
        type: "Farm Stay",
        description: "An active organic paddy and coconut farm situated on a private islet, accessible only via a silent wooden canoe trip.",
        gallery: [
          "https://images.unsplash.com/photo-1593693411515-c202e974eb87?auto=format&fit=crop&w=600&q=80"
        ],
        amenities: ["Paddy View Cottages", "Kayak Dock", "Organic Veggie Gardens", "Traditional Canoe Rides", "Fisherman Deck"],
        location: "Kainakary Lagoon, Alleppey, Kerala",
        policies: "Check-in by boat before sunset. Respect native water habitats.",
        hostName: "Kora Zachariah",
        hostBio: "Permaculturist and classic lake oarsman teaching carbon-neutral backwater farming."
      }
    ],

    Spaces: [
      { id: "canopy-suite", propertyId: "ananda-treehouse", name: "Canopy Nest Suite", description: "Breathtaking treehouse room 40 feet high.", capacity: 2, pricePerNight: 8500, gallery: [] },
      { id: "forest-cabin", propertyId: "ananda-treehouse", name: "Cardamom Valley Cabin", description: "Ground-level stone cabin with outdoor bath.", capacity: 3, pricePerNight: 6000, gallery: [] },
      { id: "ocean-room", propertyId: "soul-kovalam", name: "Ocean Vista Villa", description: "Terracotta villa with direct private beach paths.", capacity: 2, pricePerNight: 12000, gallery: [] },
      { id: "heritage-suite", propertyId: "varkala-cliffside", name: "Nalukettu Courtyard Suite", description: "Grand high-ceiling room framing the central court.", capacity: 2, pricePerNight: 5000, gallery: [] }
    ],

    Facilitators: [
      {
        id: "acharya-shaji",
        name: "Acharya Shaji",
        photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
        bio: "Dedicated master of traditional yoga and silent breathwork who spent a decade in the silent forests of the Western Ghats.",
        expertise: "Yoga, Silent Breathwork, Yoga Nidra",
        rating: 4.95,
        followersCount: 1420,
        socialLinks: { instagram: "@acharya_shaji", website: "shajiyoga.org" },
        verificationStatus: "Verified"
      },
      {
        id: "maya-sen",
        name: "Maya Sen",
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
        bio: "Earthy ceramist and clay architect focused on teaching natural creative therapy using soil collected from local Kerala rivers.",
        expertise: "Clay Sculpting, Art Therapy, Eco-Design",
        rating: 4.88,
        followersCount: 890,
        socialLinks: { instagram: "@maya_clay_stories" },
        verificationStatus: "Verified"
      },
      {
        id: "dr-unni",
        name: "Dr. Unnikrishnan",
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
        bio: "Ayurvedic specialist focusing on chronic stress relief and metabolic harmony through personalized organic culinary science.",
        expertise: "Sattvic Nutrition, Marma Therapy, Ayurveda",
        rating: 4.98,
        followersCount: 2200,
        socialLinks: { website: "drunni-ayurveda.com" },
        verificationStatus: "Verified"
      }
    ],

    Experiences: [
      {
        id: "silent-forest-breath",
        title: "Western Ghats Silent Forest Breathwork",
        description: "A deep therapeutic breathing experience held under the early morning mist of the Wayanad tree canopies. Learn to clear stress and expand lung capacity through pristine highland air.",
        category: "Wellness",
        facilitatorId: "acharya-shaji",
        propertyId: "ananda-treehouse",
        destinationId: "wayanad",
        duration: "3 Hours",
        price: 2500,
        capacity: 12,
        schedule: "Every Tuesday & Saturday at 6:30 AM",
        gallery: [
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
        ],
        tags: ["Meditation", "Breathwork", "Nature Connection"],
        waitlistCount: 2
      },
      {
        id: "sacred-clay-sculpting",
        title: "Earthy Sacred Clay & River-Soil Sculpting",
        description: "Work with native river bed clay. Maya leads an intimate, tactile art session to quiet the analytical mind and feel the physical energy of the soil beneath your fingertips.",
        category: "Creativity",
        facilitatorId: "maya-sen",
        propertyId: "varkala-cliffside",
        destinationId: "varkala",
        duration: "4 Hours",
        price: 3200,
        capacity: 8,
        schedule: "Every Thursday at 2:00 PM",
        gallery: [
          "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
        ],
        tags: ["Art Therapy", "Handmade Clay", "Slow Craft"],
        waitlistCount: 0
      },
      {
        id: "sattvic-food-alch",
        title: "Sattvic Culinary Alchemy Masterclass",
        description: "Discover the Ayurvedic concepts of Tridosha balancing food preparation. Walk through our spice gardens, harvest fresh herbs, and co-create an earthy multi-course lunch.",
        category: "Food",
        facilitatorId: "dr-unni",
        propertyId: "soul-kovalam",
        destinationId: "kovalam",
        duration: "5 Hours",
        price: 4500,
        capacity: 10,
        schedule: "Every Sunday at 9:30 AM",
        gallery: [
          "https://images.unsplash.com/photo-1543083503-0c379b7779fd?auto=format&fit=crop&w=600&q=80"
        ],
        tags: ["Ayurveda Cooking", "Organic Farming", "Healing Meals"],
        waitlistCount: 1
      }
    ],

    Retreats: [
      {
        id: "highland-mindfulness",
        title: "Highland Canopy Silent Yoga & Mindfulness",
        description: "A 4-day immersive sanctuary retreat among the giant cardamom ferns. Includes premium eco-resort canopy suite stay, all Ayurvedic Sattvic dining, organic tea ceremonies, and 12 breathwork sessions.",
        facilitatorId: "acharya-shaji",
        propertyId: "ananda-treehouse",
        destinationId: "wayanad",
        durationDays: 4,
        price: 34000,
        capacity: 8,
        startDate: "2026-06-12",
        gallery: [
          "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=600&q=80",
          "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=600&q=80"
        ],
        roomAllocation: "Canopy Nest Suite",
        schedule: [
          "Day 1: Arrival & Grounding Sunset Meditation",
          "Day 2: Sunrise Breathwork & Mountain Hiking Trail",
          "Day 3: Eco-pottery Session & Forest Fire Circle",
          "Day 4: Integration Ritual & Departure"
        ]
      },
      {
        id: "coastal-ayurveda-renew",
        title: "Coastal Soul Ayurvedic Renewal & Panchakarma",
        description: "A beautiful 5-day custom rejuvenation retreat right beside the Kovalam crescent sands. Includes deep oil therapies, organic dietary alignment, beach yoga shala sessions, and natural sea-salt wellness scrubs.",
        facilitatorId: "dr-unni",
        propertyId: "soul-kovalam",
        destinationId: "kovalam",
        durationDays: 5,
        price: 48000,
        capacity: 6,
        startDate: "2026-06-20",
        gallery: [
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
        ],
        roomAllocation: "Ocean Vista Villa",
        schedule: [
          "Day 1: Ayurvedic Doctor Consultation & Warm Herb Pour",
          "Day 2: Beachside Yoga Nidra & Abhyanga Detox",
          "Day 3: Spice Farm Foraging & Shirodhara Stream Therapy",
          "Day 4: Sunset Catamaran Flow & Clay Packs",
          "Day 5: Rebalance Ritual & Personal Path Blueprint"
        ]
      }
    ],

    Gatherings: [
      {
        id: "varkala-sunset-circle",
        title: "Peepal Circle: Varkala Cliffside Sunset Sharing",
        description: "An offline community gathering to discuss slow travel, deep connection, and mindful daily living. We gather in a circular seating circle on the heritage lawn under the sunset sky.",
        type: "Free",
        price: 0,
        capacity: 25,
        date: "2026-06-05",
        time: "5:00 PM",
        locationName: "Varkala Cliffside Heritage Lawn"
      },
      {
        id: "wayanad-birding-walk",
        title: "Nature Gathering: Wayanad Silent Forest Trails",
        description: "A slow, mindful, non-disruptive hike led by local forest rangers. We listen to the native birds, recognize endemic herbs, and practice walking meditation.",
        type: "Paid",
        price: 500,
        capacity: 15,
        date: "2026-06-10",
        time: "7:00 AM",
        locationName: "Ananda Forest Boundaries"
      }
    ],

    Stories: [
      {
        id: "healing-hands-soil",
        title: "Healing Hands: Finding Ourselves in the Local River-Soil",
        category: "Facilitator Stories",
        summary: "Ceramist Maya Sen shares her philosophy on why touching wet, organic clay connects modern minds to their root physical senses.",
        body: "<p>In an age dominated by glass screens, our touch is consistently smooth, sterile, and non-reciprocal. When we sink our palms into raw, untreated clay harvested from the river beds of Kerala, we receive immediate weight, resistance, and temperature.</p><p>This tactile conversation forces our focus down into the physical body, quietening the overstimulated mind. Working with clay isn't about producing a perfect porcelain vase; it is about letting the hands mold, fail, reshape, and surrender to raw earth.</p>",
        author: "Maya Sen",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80"
      },
      {
        id: "cardamom-valley-spirit",
        title: "The Cardamom Highs: A Journal of Slow Mountain Nights",
        category: "Travel Journals",
        summary: "A slow reflection on sleeping forty feet high in a bamboo treehouse, surrounded by misty western ghat valleys and local owls.",
        body: "<p>Night in the high valleys of Wayanad doesn't arrive suddenly; it seeps through the leaves as the cardamom scent thickens. Resting on a cot made of hand-woven coir, you listen to the rhythmic pulse of wild cicadas and the occasional low hoot of forest owls.</p><p>Here, without electric buzzes or artificial blue lights, sleep comes naturally with the darkness. You awaken not to a metallic alarm, but to the soft golden rays breaking through canopy gaps, indicating that it is time to take your first deep breath of the morning air.</p>",
        author: "Arundev V.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=600&q=80"
      }
    ]
  };

  // Attach to window so all pages can use this database
  if (typeof window !== "undefined") {
    window.PeepalDatabase = PeepalDatabase;
  }
})();
