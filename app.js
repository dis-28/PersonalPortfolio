document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
    }

    document.querySelectorAll("[data-dropdown].active").foreach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove("active");
    })
})

function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mailboxsid28@gmail.com",
        Password: "Gallardo2803",
        To: 'mailboxsid28@gmail.com',
        From: document.getElementById('email').value,
        Subject: "new contact from enquiry",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
