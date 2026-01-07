// Home Page Page-Specific Logic

const classCategories = [
    {
        name: "ALL",
        title: "Explore All Our Fitness Journeys",
        description: "Discover a wide range of classes designed to meet every fitness goal. From high-intensity training to mindful recovery, find the perfect class for you.",
        image: "assets/images/classAll.jpg",
        label: "ALL CLASSES",
        hint: "gym collage"
    },
    {
        name: "SIGNATURE CLASS",
        title: "Elite Signature Training Programs",
        description: "Push your limits with our elite, high-intensity strength and conditioning classes, designed for maximum results and peak performance.",
        image: "assets/images/classSignature.jpg",
        label: "SIGNATURE",
        hint: "strength training"
    },
    {
        name: "MIND & BODY",
        title: "Balance, Focus, and Recovery",
        description: "Throughout our journey to fitness with us. These essential items to assist our customers in improving their overall health and achieving balance.",
        image: "assets/images/journey.jpg",
        label: "MIND & BODY",
        hint: "fitness portrait"
    },
    {
        name: "CYCLING",
        title: "Endurance and Cardio Burn",
        description: "Experience high-energy indoor cycling classes that boost your endurance, torch calories, and strengthen your lower body in a motivating group setting.",
        image: "assets/images/classCycling.jpg",
        label: "CYCLING",
        hint: "spin class"
    },
    {
        name: "CARDIO",
        title: "Heart-Rate Focused Training",
        description: "Elevate your heart rate with our dynamic cardio classes, including HIIT, boxing, and treadmill workouts for ultimate cardiovascular fitness.",
        image: "assets/images/classCardio.jpg",
        label: "CARDIO",
        hint: "boxing workout"
    },
    {
        name: "MEDITATION",
        title: "Mindfulness and Deep Recovery",
        description: "Find your center with guided meditation and yoga sessions. These classes focus on breathing, mindfulness, and gentle postures for mental clarity and recovery.",
        image: "assets/images/classMeditation.jpg",
        label: "MEDITATION",
        hint: "meditation yoga"
    },
];

document.addEventListener('DOMContentLoaded', () => {
    // Fitness Class Tabs Logic
    const tabsContainer = document.querySelector('.fitness-tabs');
    const contentContainer = document.querySelector('.fitness-content-container');

    if (tabsContainer && contentContainer) {
        // Initial Render (Default: MIND & BODY based on React code, or first one? React state default was "MIND & BODY")
        let activeTab = "MIND & BODY";

        function renderTabs() {
            tabsContainer.innerHTML = classCategories.map(cat => {
                const isActive = cat.name === activeTab;
                return `
                    <button class="tab-btn ${isActive ? 'active' : ''}" data-name="${cat.name}">
                        <span class="${isActive ? 'text-white' : 'text-muted'}">${cat.name}</span>
                        ${isActive ? `
                        <svg class="tab-underline" viewBox="0 0 50 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.5 2.5C10.5 1.5 25 1 37.5 2.5C40.9254 2.85858 45.5 3.5 47.5 4" stroke="#E5483B" stroke-width="2" stroke-linecap="round"></path>
                        </svg>` : ''}
                    </button>
                `;
            }).join('');
        }

        function renderContent() {
            const activeCategory = classCategories.find(cat => cat.name === activeTab) || classCategories[0];

            contentContainer.innerHTML = `
                <div class="fitness-card">
                  <div class="fitness-card-text">
                    <h3 class="fitness-card-title">${activeCategory.title}</h3>
                    <p class="fitness-card-desc">${activeCategory.description}</p>
                    <div class="fitness-avatars">
                      <img src="assets/images/trainer1.jpg" alt="Trainer 1" class="avatar z-0">
                      <img src="assets/images/trainer2.jpg" alt="Trainer 2" class="avatar z-10 border-black">
                      <img src="assets/images/trainer3.jpg" alt="Trainer 3" class="avatar z-20">
                    </div>
                  </div>
                  <div class="fitness-card-image-wrapper">
                    <img src="${activeCategory.image}" alt="${activeCategory.label}" class="fitness-card-img">
                    <a href="service.html" class="fitness-arrow-btn">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 -rotate-45" style="transform: rotate(-45deg);"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                    <p class="fitness-card-label">
                      ${activeCategory.label}
                    </p>
                  </div>
                </div>
            `;
        }

        // Initial call
        renderTabs();
        renderContent();

        // Event Delegation for Tabs
        tabsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.tab-btn');
            if (btn) {
                activeTab = btn.dataset.name;
                renderTabs();
                renderContent();
            }
        });
    }

    // Accordion Logic
    const accordionPills = document.querySelectorAll('.accordion-pill');

    accordionPills.forEach(pill => {
        const header = pill.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            const isOpen = pill.classList.contains('active');

            // Close all first (Strict 1 open policy like React)
            accordionPills.forEach(p => {
                p.classList.remove('active');
                const content = p.querySelector('.accordion-content');
                const iconPath = p.querySelector('.accordion-icon path');
                // Reset to Plus
                if (iconPath) iconPath.setAttribute('d', 'M5 12h14M12 5v14');
                // Note: Standard Plus path is d="M5 12h14"/><path d="M12 5v14" but concise single string logic needed? 
                // Lucide Plus: <path d="M5 12h14"/><path d="M12 5v14"/>
                // Lucide Minus: <path d="M5 12h14"/>
                // I will swap the innerHTML of the SVG icon wrapper
                const iconSvg = p.querySelector('.accordion-icon');
                if (iconSvg) iconSvg.innerHTML = '<path d="M5 12h14"/><path d="M12 5v14"/>';
            });

            if (!isOpen) {
                pill.classList.add('active');
                const iconSvg = pill.querySelector('.accordion-icon');
                if (iconSvg) iconSvg.innerHTML = '<path d="M5 12h14"/>'; // Minus
            }
        });
    });
});

