function validateLogin(event) {
    event.preventDefault();

    let mail = document.getElementById("mail");
    let passwords = document.getElementById("passwords");

    let bug = document.getElementById("bug");
    let bug1 = document.getElementById("bug1");

    // Username validation
    if (mail.value === "admin") {
        // Valid username
        bug.innerHTML = "Username is Valid";
        bug.style.color = "green";
    } else {
        // Invalid username
        bug.innerHTML = "Invalid Username.";
        bug.style.color = "red";
        return false;
    }

    // Password validation
    if (passwords.value === "12345") {
        bug1.innerHTML = "Password is Valid";
        bug1.style.color = "green";
    } else {
        bug1.innerHTML = "Invalid Password.";
        bug1.style.color = "red";
        return false;
    }


    toMainPage();
    return true;
}

function toMainPage() {
    window.location.href = "home.html";
}





