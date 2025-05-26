
// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileOverlay = document.getElementById('mobile-overlay');
const mainContainer = document.querySelector('.main-container');
const newsToggle = document.getElementById('news-toggle');
const newsPanel = document.getElementById('news-panel');
const closeNews = document.getElementById('close-news');
const pageTitle = document.getElementById('page-title');

// Navigation links and pages
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// State
let sidebarCollapsed = false;
let mobileSidebarOpen = false;
let newsPanelOpen = false;

// Page titles mapping
const pageTitles = {
    'home': 'Welcome to SarkariResult',
    'jobs': 'Latest Jobs',
    'results': 'Results',
    'admissions': 'Admissions',
    'answer-keys': 'Answer Keys'
};

// Initialize the application
function init() {
    console.log('Initializing SarkariResult application...');
    
    // Set up event listeners
    setupEventListeners();
    
    // Set initial state
    showPage('home');
    updatePageTitle('home');
    
    // Check if mobile
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('collapsed');
        mainContainer.classList.remove('sidebar-collapsed');
        sidebarCollapsed = false;
    }
    
    console.log('Application initialized successfully');
}

// Set up all event listeners
function setupEventListeners() {
    // Sidebar toggle (desktop)
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Mobile menu toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileSidebar);
    }
    
    // Mobile overlay click
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', closeMobileSidebar);
    }
    
    // News panel toggle
    if (newsToggle) {
        newsToggle.addEventListener('click', toggleNewsPanel);
    }
    
    // Close news panel
    if (closeNews) {
        closeNews.addEventListener('click', closeNewsPanel);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Window resize
    window.addEventListener('resize', handleResize);
    
    // Escape key to close modals
    document.addEventListener('keydown', handleKeydown);
    
    console.log('Event listeners set up successfully');
}

// Toggle sidebar collapse (desktop)
function toggleSidebar() {
    console.log('Toggling sidebar...');
    
    if (window.innerWidth > 768) {
        sidebarCollapsed = !sidebarCollapsed;
        
        if (sidebarCollapsed) {
            sidebar.classList.add('collapsed');
            mainContainer.classList.add('sidebar-collapsed');
        } else {
            sidebar.classList.remove('collapsed');
            mainContainer.classList.remove('sidebar-collapsed');
        }
        
        console.log('Sidebar collapsed:', sidebarCollapsed);
    }
}

// Toggle mobile sidebar
function toggleMobileSidebar() {
    console.log('Toggling mobile sidebar...');
    
    mobileSidebarOpen = !mobileSidebarOpen;
    
    if (mobileSidebarOpen) {
        sidebar.classList.add('mobile-open');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.remove('mobile-open');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    console.log('Mobile sidebar open:', mobileSidebarOpen);
}

// Close mobile sidebar
function closeMobileSidebar() {
    console.log('Closing mobile sidebar...');
    
    mobileSidebarOpen = false;
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Toggle news panel
function toggleNewsPanel() {
    console.log('Toggling news panel...');
    
    newsPanelOpen = !newsPanelOpen;
    
    if (newsPanelOpen) {
        newsPanel.classList.add('active');
    } else {
        newsPanel.classList.remove('active');
    }
    
    console.log('News panel open:', newsPanelOpen);
}

// Close news panel
function closeNewsPanel() {
    console.log('Closing news panel...');
    
    newsPanelOpen = false;
    newsPanel.classList.remove('active');
}

// Handle navigation between pages
function handleNavigation(event) {
    event.preventDefault();
    
    const link = event.currentTarget;
    const page = link.getAttribute('data-page');
    
    console.log('Navigating to page:', page);
    
    // Update active link
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    link.classList.add('active');
    
    // Show page
    showPage(page);
    updatePageTitle(page);
    
    // Close mobile sidebar if open
    if (mobileSidebarOpen) {
        closeMobileSidebar();
    }
}

// Show specific page
function showPage(pageId) {
    console.log('Showing page:', pageId);
    
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(`${pageId}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Update page title
function updatePageTitle(pageId) {
    const title = pageTitles[pageId] || 'SarkariResult';
    
    if (pageTitle) {
        pageTitle.textContent = title;
    }
    
    // Update document title
    document.title = `${title} - SarkariResult`;
    
    console.log('Page title updated to:', title);
}

// Handle window resize
function handleResize() {
    const width = window.innerWidth;
    
    console.log('Window resized to:', width);
    
    if (width <= 768) {
        // Mobile view
        if (sidebarCollapsed) {
            sidebar.classList.remove('collapsed');
            mainContainer.classList.remove('sidebar-collapsed');
            sidebarCollapsed = false;
        }
    } else {
        // Desktop view
        if (mobileSidebarOpen) {
            closeMobileSidebar();
        }
        
        // Close news panel on larger screens
        if (width >= 1280 && newsPanelOpen) {
            closeNewsPanel();
        }
    }
}

// Handle keyboard shortcuts
function handleKeydown(event) {
    if (event.key === 'Escape') {
        if (mobileSidebarOpen) {
            closeMobileSidebar();
        }
        if (newsPanelOpen) {
            closeNewsPanel();
        }
    }
}

// Utility function to simulate button interactions
function addButtonInteractions() {
    // Add click handlers for various buttons
    document.addEventListener('click', function(event) {
        const target = event.target;
        
        // Handle category card clicks
        if (target.closest('.category-card')) {
            console.log('Category card clicked:', target.closest('.category-card'));
            // You can add navigation logic here
        }
        
        // Handle update card clicks
        if (target.closest('.update-card')) {
            console.log('Update card clicked:', target.closest('.update-card'));
            // You can add modal or navigation logic here
        }
        
        // Handle result card clicks
        if (target.closest('.result-card')) {
            console.log('Result card clicked:', target.closest('.result-card'));
            // You can add result viewing logic here
        }
        
        // Handle admission card clicks
        if (target.closest('.admission-card')) {
            console.log('Admission card clicked:', target.closest('.admission-card'));
            // You can add application logic here
        }
        
        // Handle news item clicks
        if (target.closest('.news-item')) {
            console.log('News item clicked:', target.closest('.news-item'));
            // You can add news detail logic here
        }
        
        // Handle specific button clicks
        if (target.classList.contains('read-more')) {
            console.log('Read more clicked');
            // Add read more functionality
        }
        
        if (target.classList.contains('check-result')) {
            console.log('Check result clicked');
            // Add result checking functionality
        }
        
        if (target.classList.contains('apply-now')) {
            console.log('Apply now clicked');
            // Add application functionality
        }
        
        if (target.classList.contains('view-details')) {
            console.log('View details clicked');
            // Add details viewing functionality
        }
        
        if (target.classList.contains('view-all-btn')) {
            console.log('View all clicked');
            // Add view all functionality
        }
        
        if (target.classList.contains('view-all-news')) {
            console.log('View all news clicked');
            // Add view all news functionality
        }
    });
}

// Simulate data loading and dynamic content
function simulateDataLoading() {
    console.log('Simulating data loading...');
    
    // You can add loading states and dynamic content here
    setTimeout(() => {
        console.log('Data loaded successfully');
        // Update UI with loaded data
    }, 1000);
}

// Add smooth scrolling behavior
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize touch gestures for mobile
function initializeTouchGestures() {
    let startX = 0;
    let startY = 0;
    
    document.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (!startX || !startY) return;
        
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        
        const diffX = startX - endX;
        const diffY = startY - endY;
        
        // Horizontal swipe detection
        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    // Swipe left - close sidebar if open
                    if (mobileSidebarOpen) {
                        closeMobileSidebar();
                    }
                } else {
                    // Swipe right - open sidebar if closed and near edge
                    if (!mobileSidebarOpen && startX < 50) {
                        toggleMobileSidebar();
                    }
                }
            }
        }
        
        startX = 0;
        startY = 0;
    }, { passive: true });
}

// Performance optimization: Debounce resize handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced resize handler
window.addEventListener('resize', debounce(handleResize, 250));

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing application...');
    
    init();
    addButtonInteractions();
    simulateDataLoading();
    addSmoothScrolling();
    initializeTouchGestures();
    
    console.log('SarkariResult application fully loaded and ready!');
});

// Export functions for potential external use
window.SarkariResult = {
    showPage,
    toggleSidebar,
    toggleMobileSidebar,
    toggleNewsPanel,
    updatePageTitle
};
