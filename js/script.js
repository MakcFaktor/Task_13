document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let valid = true;

    // Валідація імені
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
      valid = false;
      document.getElementById("nameError").textContent = "Ім'я є обов'язковим";
    } else {
      document.getElementById("nameError").textContent = "";
    }

    // Валідація повідомлення
    const message = document.getElementById("message").value;
    if (message.trim().length < 5) {
      valid = false;
      document.getElementById("messageError").textContent =
        "Повідомлення має бути не менше 5 символів";
    } else {
      document.getElementById("messageError").textContent = "";
    }

    // Валідація номера телефону
    const phone = document.getElementById("phone").value;
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      valid = false;
      document.getElementById("phoneError").textContent =
        "Номер телефону має починатись з +380 та містити 9 цифр";
    } else {
      document.getElementById("phoneError").textContent = "";
    }

    // Валідація email
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      valid = false;
      document.getElementById("emailError").textContent =
        "Некоректний формат email";
    } else {
      document.getElementById("emailError").textContent = "";
    }

    if (valid) {
      console.log({
        name: name,
        message: message,
        phone: phone,
        email: email,
      });
      alert("Повідомлення успішно відправлено");
    }
  });
