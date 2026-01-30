// Wait for the HTML document to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {

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
        const scaleFactor = parseFloat(scaleInput.value);
        if (isNaN(scaleFactor) || scaleFactor <= 0) {
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
        scaleInput.addEventListener('input', updateQuantities);
    }

    // --- Hamburger Menu Toggle Functionality ---
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function () {
            mainNav.classList.toggle('menu-open');

            if (mainNav.classList.contains('menu-open')) {
                menuToggle.innerHTML = '✕';
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '☰';
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // --- Footer Year Update ---
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

}); // End of DOMContentLoaded listener
