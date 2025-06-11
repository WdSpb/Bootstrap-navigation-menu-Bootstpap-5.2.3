document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const searchBtn = document.getElementById('search-btn');
    const searchContainer = document.querySelector('.search-input-container');
    const searchInput = document.querySelector('.search-input');
    const searchForm = document.getElementById('search-form');
    
    // Toggle search or submit form
    if (searchBtn && searchContainer && searchForm) {
        searchBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            if (searchContainer.classList.contains('active')) {
                // If search is open
                if (searchInput.value.trim() !== '') {
                    // If there's a search query, submit the form
                    searchForm.submit();
                } else {
                    // If search input is empty, close search
                    searchContainer.classList.remove('active');
                }
            } else {
                // Open search if closed
                searchContainer.classList.add('active');
                setTimeout(() => {
                    if (searchInput) searchInput.focus();
                }, 10);
            }
        });
    }
    
    // Submit form when pressing Enter in search field
    if (searchForm) {
        searchForm.addEventListener('submit', function(e) {
            // Prevent form submission if query is empty
            if (searchInput.value.trim() === '') {
                e.preventDefault();
                searchContainer.classList.remove('active');
            }
        });
    }
    
    // Close search when clicking outside
    document.addEventListener('click', function(e) {
        if (searchContainer.classList.contains('active')) {
            const isClickInside = searchContainer.contains(e.target) || 
                                 (searchBtn && searchBtn.contains(e.target));
            
            if (!isClickInside) {
                searchContainer.classList.remove('active');
            }
        }
    });
    
    // Prevent closing when clicking inside search container
    if (searchContainer) {
        searchContainer.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});
