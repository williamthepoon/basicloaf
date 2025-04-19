// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed'); // DEBUG: Check if script runs

    // --- Recipe Scaler Functionality ---
    const scaleInput = document.getElementById('scale-input');
    const loafCountSpan = document.getElementById('loaf-count');
    const starterMinQtySpan = document.getElementById('starter-min-qty');
    const starterMaxQtySpan = document.getElementById('starter-max-qty');
    const waterQtySpan = document.getElementById('water-qty');
    const flourQtySpan = document.getElementById('flour-qty');
    const saltQtySpan = document.getElementById('salt-qty');

    function updateQuantities() {
        if (!scaleInput) return;
        console.log('Updating quantities...'); // DEBUG
        const scaleFactor = parseFloat(scaleInput.value);
        if (isNaN(scaleFactor) || scaleFactor <= 0) {
            console.log('Invalid scale factor'); // DEBUG
            return;
        }
        if (loafCountSpan) {
             loafCountSpan.textContent = `${scaleFactor} ${scaleFactor === 1 ? 'Loaf' : 'Loaves'}`;
        }
        [starterMinQtySpan, starterMaxQtySpan, waterQtySpan, flourQtySpan, saltQtySpan].forEach(span => {
            if (span) {
                const baseQty = parseFloat(span.getAttribute('data-base-qty'));
                if (!isNaN(baseQty)) {
                    const newQty = baseQty * scaleFactor;
                    if (span === saltQtySpan && newQty < 10) {
                         span.textContent = newQty.toFixed(1);
                    } else {
                         span.textContent = Math.round(newQty);
                    }
                }
            }
        });
    }

    if (scaleInput) {
        console.log('Scaler input found, attaching listener.'); // DEBUG
        scaleInput.addEventListener('input', updateQuantities);
    } else {
        console.log('Scaler input not found on this page.'); // DEBUG
    }

    // --- Hamburger Menu Toggle Functionality ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    console.log('Checking for menu elements:', menuToggle, mainNav); // DEBUG: See if elements are found

    if (menuToggle && mainNav) {
        console.log('Menu toggle button and nav found. Attaching click listener.'); // DEBUG
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle button CLICKED!'); // DEBUG: Check if click fires
            mainNav.classList.toggle('menu-open');
            console.log('Toggled menu-open class. Nav classes:', mainNav.classList); // DEBUG: See the class list

            if (mainNav.classList.contains('menu-open')) {
                menuToggle.innerHTML = '✕';
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    } else {
        console.error('ERROR: Menu toggle button or main nav element not found!'); // DEBUG: Log error if elements missing
    }

    // --- Footer Year Update ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        console.log('Updating footer year.'); // DEBUG
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.log('Footer year element not found.'); // DEBUG
    }

}); // End of DOMContentLoaded listener
