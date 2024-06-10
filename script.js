const reservationForm = document.forms["reservation-form"];
      const reservationMsg = document.getElementById("reservation-msg");

      reservationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, {
          method: "POST",
          body: new FormData(reservationForm),
        })
          .then((response) => {
            reservationMsg.innerHTML = "Reservation made successfully";
            setTimeout(function () {
              reservationMsg.innerHTML = "";
            }, 5000);
            reservationForm.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });

      (function () {
        emailjs.init("mKOhyIqR3YWS2l_Ow"); // Replace with your EmailJS user ID
      })();

      document
        .getElementById("reservation-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          emailjs.sendForm("Zuhair_Ahmed", "template_eysuf9e", this).then(
            function () {
              document.getElementById("reservation-msg").innerHTML =
                "Reservation request sent successfully";
              setTimeout(function () {
                document.getElementById("reservation-msg").innerHTML = "";
              }, 5000);
              document.getElementById("reservation-form").reset();
            },
            function (error) {
              document.getElementById("reservation-msg").innerHTML =
                "Failed to send reservation request";
            }
          );
        });
