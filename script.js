
// Google Sheets script
const scriptURL = "https://script.google.com/macros/s/AKfycby3UmcnoWgYtPFTd4C4AanrZ5XlpOJWGOTlNH7-shEoyTmxX_Q9RKueJrqyA0MuI5mEAA/exec";

// Access the form and message element from the DOM
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

// Event listener for form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Send form data to the Google Sheets script URL using Fetch API
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // If the submission is successful, display a success message
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = ""; // Clear the message after 5 seconds
            }, 5000);
            form.reset(); // Reset the form fields
        })
        .catch((error) => {
            // If there's an error, log it to the console
            console.error("Error!", error.message);
        });
});
