// Test script to verify scrolling fixes
console.log("Testing scroll behavior...");

// Test function to scroll to each section
function testScrolling() {
    const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            console.log(`✅ Section '${sectionId}' found at position:`, element.offsetTop);
        } else {
            console.log(`❌ Section '${sectionId}' NOT found!`);
        }
    });
}

// Run test when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', testScrolling);
} else {
    testScrolling();
}
