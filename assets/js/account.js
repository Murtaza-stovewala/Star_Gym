document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabsContainer = document.querySelector('.tabs-container');
    if (tabsContainer) {
        const triggers = tabsContainer.querySelectorAll('.tab-trigger');
        const contents = tabsContainer.querySelectorAll('.tab-content');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                // Remove active class from all triggers and contents
                triggers.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked trigger
                trigger.classList.add('active');

                // Show corresponding content
                const targetId = trigger.dataset.target;
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }

    // Toggle Switches (Visual only for now since no backend)
    const switches = document.querySelectorAll('.switch-input');
    switches.forEach(switchInput => {
        switchInput.addEventListener('change', (e) => {
            // Logic to handle switch toggle (e.g., API call)
            console.log(`Switch ${e.target.id} toggled: ${e.target.checked}`);
        });
    });
});
