     document.querySelector("#contact-form").addEventListener("submit", function(e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();
      if (!name || !email || !subject || !message) {
        alert("Please fill all fields.");
        e.preventDefault();
      }
    });
  