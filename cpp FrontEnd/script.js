document.addEventListener('DOMContentLoaded', () => {
    // Tab switching for Activity & Requests card
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons and hide all content
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.add('hidden'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Show the corresponding tab content
            const targetTabId = button.dataset.tab + '-tab'; // e.g., 'incoming-tab'
            document.getElementById(targetTabId).classList.remove('hidden');
        });
    });

    // --- You'll add more JavaScript here for: ---
    // 1. Fetching user data from your backend API after login.
    // 2. Populating skills lists dynamically.
    // 3. Populating recommended matches dynamically.
    // 4. Handling button clicks (e.g., 'Request Swap', 'Accept', 'Decline').
    // 5. User menu dropdown functionality (if you implement one).
    // 6. Any real-time updates (e.g., for notifications).
    // 7. Input validation for the search bar (if needed client-side).
});