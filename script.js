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
        const minScale = parseFloat(scaleInput.getAttribute('min')) || 0.25;
        const maxScale = parseFloat(scaleInput.getAttribute('max')) || 100;

        // Validate input and provide visual feedback
        if (isNaN(scaleFactor) || scaleFactor < minScale || scaleFactor > maxScale) {
            scaleInput.style.borderColor = '#d32f2f';
            scaleInput.style.outline = '2px solid #d32f2f';
            return;
        } else {
            scaleInput.style.borderColor = '';
            scaleInput.style.outline = '';
        }

        // Update loaf count if the element exists (for main recipe)
        if (loafCountSpan) {
            const unit = loafCountSpan.getAttribute('data-unit') || 'Loaf';
            const pluralUnit = loafCountSpan.getAttribute('data-plural-unit') || 'Loaves';
            loafCountSpan.textContent = `${scaleFactor} ${scaleFactor === 1 ? unit : pluralUnit}`;
        }

        // Update all ingredient quantities
        const quantitySpans = [starterMinQtySpan, starterMaxQtySpan, waterQtySpan, flourQtySpan, saltQtySpan, ...document.querySelectorAll('.extra-qty')];

        quantitySpans.forEach(span => {
            if (span) {
                const baseQty = parseFloat(span.getAttribute('data-base-qty'));
                if (!isNaN(baseQty)) {
                    const newQty = baseQty * scaleFactor;

                    // Special handling for salt/small quantities to show 1 decimal place if < 10
                    if ((span.id === 'salt-qty' || span.classList.contains('small-qty')) && newQty < 10) {
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
