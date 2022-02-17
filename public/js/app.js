function darkFunction() {
    document.getElementById("body").classList.toggle("dark");
    document.getElementById("nav").classList.toggle("light");
    document.getElementById("footer").classList.toggle("light");
    document.getElementById("switcher").classList.toggle("fa-toggle-on");
    document.getElementById("logo").classList.toggle("filter");
    document.querySelector(".intro p").classList.toggle("dark-text");
    var links = document.querySelectorAll(".dark_link");
    links.forEach(element => {
        element.classList.toggle("dark-text");
    });
    var logo = document.querySelectorAll(".skill_logo");
    logo.forEach(element => {
        element.classList.toggle("filter");
    });
}

function effect() {
    document.getElementById('logo').classList.add("logo_glow");
}

function noeffect() {
    document.getElementById('logo').classList.remove("logo_glow");
}

function validate() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    if (fname.length < 3 || fname.length > 20) {
        alert("Not valid First Name \n at least type 4 characters \n at most type 20 characters");
        return false
    }
    if (lname.length < 3 || lname.length > 20) {
        alert("Not valid Last Name \n at least type 4 characters \n at most type 20 characters");
        return false
    }
    if (email.indexOf('@') == -1) {
        alert("Enter Valid Email");
        return false
    }
    if (subject.length < 3 || subject.length > 20) {
        alert("Not valid Subject \n at least type 4 characters \n at most type 20 characters");
        return false
    }
    if (message.length <= 20) {
        alert("Enter at least 20 character message");
        return false
    }
    alert('Form submitted successfully');
    return true;
}