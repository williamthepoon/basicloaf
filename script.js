// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {

    // --- Recipe Scaler Functionality ---
    const scaleInput = document.getElementById('scale-input');
    const loafCountSpan = document.getElementById('loaf-count'); // Span to show loaf count
    const starterMinQtySpan = document.getElementById('starter-min-qty');
    const starterMaxQtySpan = document.getElementById('starter-max-qty');
    const waterQtySpan = document.getElementById('water-qty');
    const flourQtySpan = document.getElementById('flour-qty');
    const saltQtySpan = document.getElementById('salt-qty');

    function updateQuantities() {
        // Check if scaleInput exists before proceeding (only runs on recipe page)
        if (!scaleInput) return;

        const scaleFactor = parseFloat(scaleInput.value);

        if (isNaN(scaleFactor) || scaleFactor <= 0) {
            return; // Exit if input is invalid
        }

        // Update Loaf Count Display
        if (loafCountSpan) {
             loafCountSpan.textContent = `${scaleFactor} ${scaleFactor === 1 ? 'Loaf' : 'Loaves'}`;
        }

        // Calculate and Update Ingredient Quantities
        [starterMinQtySpan, starterMaxQtySpan, waterQtySpan, flourQtySpan, saltQtySpan].forEach(span => {
            if (span) {
                const baseQty = parseFloat(span.getAttribute('data-base-qty'));
                if (!isNaN(baseQty)) {
                    const newQty = baseQty * scaleFactor;
                    if (span === saltQtySpan && newQty < 10) {
                         span.textContent = newQty.toFixed(1); // 1 decimal place for small salt amounts
                    } else {
                         span.textContent = Math.round(newQty); // Round others to whole number
                    }
                }
            }
        });
    }

    // Add event listener only if the scale input exists on the current page
    if (scaleInput) {
        scaleInput.addEventListener('input', updateQuantities);
        // Optional: updateQuantities(); // Call once on load if needed for initial display
    }

    // --- Hamburger Menu Toggle Functionality ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav'); // Target the <nav> element

    // Check if both elements exist before adding the listener
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // Toggle the 'menu-open' class on the <nav> element
            mainNav.classList.toggle('menu-open');

            // Change button text/icon when menu is open/closed
            if (mainNav.classList.contains('menu-open')) {
                menuToggle.innerHTML = '✕'; // Cross mark
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰'; // Hamburger icon
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Optional: Close menu if user clicks outside (add if desired)
        /*
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = menuToggle.contains(event.target);

            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('menu-open')) {
                mainNav.classList.remove('menu-open');
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
        */
    }

    // --- Footer Year Update ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}); // End of DOMContentLoaded listener
