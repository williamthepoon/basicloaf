// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the HTML elements we need to interact with
    const scaleInput = document.getElementById('scale-input');
    const loafCountSpan = document.getElementById('loaf-count'); // Span to show loaf count

    // Get references to the spans holding the ingredient quantities
    const starterMinQtySpan = document.getElementById('starter-min-qty');
    const starterMaxQtySpan = document.getElementById('starter-max-qty');
    const waterQtySpan = document.getElementById('water-qty');
    const flourQtySpan = document.getElementById('flour-qty');
    const saltQtySpan = document.getElementById('salt-qty');

    // Function to update ingredient quantities based on the scale factor
    function updateQuantities() {
        // Get the current scale factor from the input field, convert it to a number
        const scaleFactor = parseFloat(scaleInput.value);

        // --- Input Validation ---
        // Check if the scaleFactor is a valid positive number. If not, exit the function.
        if (isNaN(scaleFactor) || scaleFactor <= 0) {
            // Optionally, provide feedback to the user here (e.g., reset to 1, show error message)
            // For now, we just stop processing if the input is invalid
            return;
        }

        // --- Update Loaf Count Display ---
        // Update the text indicating the number of loaves (optional, assumes scale=1 means 1 loaf)
        if (loafCountSpan) {
             // Handle pluralization simply
             loafCountSpan.textContent = `${scaleFactor} ${scaleFactor === 1 ? 'Loaf' : 'Loaves'}`;
             // More complex rounding/display logic could be added if needed for fractional loaves
        }


        // --- Calculate and Update Quantities ---
        // Go through each ingredient span
        [starterMinQtySpan, starterMaxQtySpan, waterQtySpan, flourQtySpan, saltQtySpan].forEach(span => {
            // Check if the span element actually exists on the page
            if (span) {
                // Get the base quantity stored in the 'data-base-qty' attribute
                const baseQty = parseFloat(span.getAttribute('data-base-qty'));

                // Check if the base quantity is a valid number
                if (!isNaN(baseQty)) {
                    // Calculate the new quantity
                    const newQty = baseQty * scaleFactor;

                    // Update the text content of the span
                    // Round to nearest whole number for grams (common in baking)
                    // For salt, maybe allow one decimal if needed for small scales?
                    if (span === saltQtySpan && newQty < 10) { // Example: more precision for salt if total is small
                         span.textContent = newQty.toFixed(1); // 1 decimal place
                    } else {
                         span.textContent = Math.round(newQty); // Round to nearest whole number
                    }
                }
            }
        });
    }

    // --- Event Listener ---
    // Check if the scale input element exists on the page
    if (scaleInput) {
        // Add an event listener that calls updateQuantities whenever the input value changes
        scaleInput.addEventListener('input', updateQuantities);

        // Optional: Call the function once on page load to set initial loaf count display if needed
        // updateQuantities(); // Uncomment if you want the "1 Loaf" text updated immediately
    }

}); // End of DOMContentLoaded listener
