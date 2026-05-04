    const form = document.getElementById('contact-form');
    const thanksMessage = document.getElementById('thanks-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault(); // Prevents the page from redirecting to Formspree's site

        const formData = new FormData(form);
        
        // Send the data using Fetch API
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            form.style.display = 'none'; // Hide the form
            thanksMessage.style.display = 'block'; // Show the success message
        } else {
            alert("Oops! There was a problem submitting your form. Please try again.");
        }
    });
