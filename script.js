// Get the modal elements
const modals = {
    modal1: document.getElementById("modal1"),
    modal2: document.getElementById("modal2"),
    modal3: document.getElementById("modal3"),
    modal4: document.getElementById("modal4"),
    modal5: document.getElementById("modal5"),
    modal6: document.getElementById("modal6")
};

// Get the button elements
const buttons = {
    btn1: document.getElementById("openModal1"),
    btn2: document.getElementById("openModal2"),
    btn3: document.getElementById("openModal3"),
    btn4: document.getElementById("openModal4"),
    btn5: document.getElementById("openModal5"),
    btn6: document.getElementById("openModal6")
};

// Get the close elements using the close class
const closeButtons = {
    close1: modals.modal1.querySelector(".close"),
    close2: modals.modal2.querySelector(".close"),
    close3: modals.modal3.querySelector(".close"),
    close4: modals.modal4.querySelector(".close"),
    close5: modals.modal5.querySelector(".close"),
    close6: modals.modal6.querySelector(".close")
};

// Get the notification container (for success message)
const notificationContainer = document.createElement('div');
notificationContainer.style.position = 'fixed';
notificationContainer.style.top = '10px';
notificationContainer.style.right = '10px';
notificationContainer.style.backgroundColor = '#28a745';
notificationContainer.style.color = 'white';
notificationContainer.style.padding = '10px 20px';
notificationContainer.style.borderRadius = '5px';
notificationContainer.style.fontSize = '18px';
notificationContainer.style.zIndex = '1000';
notificationContainer.style.display = 'none';
document.body.appendChild(notificationContainer);

// Function to open a modal
function openModal(modal) {
    modal.style.display = "block";
}

// Function to close a modal
function closeModal(modal) {
    modal.style.display = "none";
}

// Function to show notification
function showNotification(message) {
    notificationContainer.textContent = message;
    notificationContainer.style.display = 'block';
    setTimeout(() => {
        notificationContainer.style.display = 'none';
    }, 3000); // Hide after 3 seconds
}

// Add event listeners to the buttons to open modals
buttons.btn1.addEventListener("click", () => openModal(modals.modal1));
buttons.btn2.addEventListener("click", () => openModal(modals.modal2));
buttons.btn3.addEventListener("click", () => openModal(modals.modal3));
buttons.btn4.addEventListener("click", () => openModal(modals.modal4));
buttons.btn5.addEventListener("click", () => openModal(modals.modal5));
buttons.btn6.addEventListener("click", () => openModal(modals.modal6));

// Add event listeners to the close buttons
closeButtons.close1.addEventListener("click", () => closeModal(modals.modal1));
closeButtons.close2.addEventListener("click", () => closeModal(modals.modal2));
closeButtons.close3.addEventListener("click", () => closeModal(modals.modal3));
closeButtons.close4.addEventListener("click", () => closeModal(modals.modal4));
closeButtons.close5.addEventListener("click", () => closeModal(modals.modal5));
closeButtons.close6.addEventListener("click", () => closeModal(modals.modal6));

// Add event listeners to close modals when clicking outside of the modal content
Object.values(modals).forEach(modal => {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Add event listeners to the forms
const forms = {
    form1: document.getElementById("contactForm1"),
    form2: document.getElementById("contactForm2"),
    form3: document.getElementById("contactForm3"),
    form4: document.getElementById("contactForm4"),
    form5: document.getElementById("contactForm5"),
    form6: document.getElementById("contactForm6")
};

// Function to handle form submission
function handleFormSubmit(form, formNumber, formName) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        // Form submission logic here
        console.log(`Form ${formNumber} submitted!`);
        // Optionally clear the form or show a success message
        form.reset(); // Clear the form fields
        closeModal(modals[`modal${formNumber}`]); // Close the modal after submission
        showNotification(`Форма "${formName}" успешно отправлена!`); // Show success notification
    });
}

// Attach form submission handlers
handleFormSubmit(forms.form1, 1, "Сайт-визитка");
handleFormSubmit(forms.form2, 2, "Корпоративный сайт");
handleFormSubmit(forms.form3, 3, "Интернет-магазин");
handleFormSubmit(forms.form4, 4, "Сайт-визитка");
handleFormSubmit(forms.form5, 5, "Корпоративный сайт");
handleFormSubmit(forms.form6, 6, "Интернет-магазин");
