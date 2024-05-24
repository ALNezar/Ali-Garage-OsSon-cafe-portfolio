const scriptURL =
    "https://script.google.com/macros/s/AKfycby3UmcnoWgYtPFTd4C4AanrZ5XlpOJWGOTlNH7-shEoyTmxX_Q9RKueJrqyA0MuI5mEAA/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });