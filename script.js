
// 🌐 Internet Awareness JavaScript

// 1. Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        document.querySelector(targetId).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// 2. Welcome alert message
window.onload = function() {
    alert("Welcome! Stay safe while browsing the internet.");
};


// 3. Cybersecurity tips rotation
const tips = [
    "Use strong passwords with symbols and numbers.",
    "Do not click unknown links.",
    "Always log out from shared devices.",
    "Keep your software updated.",
    "Avoid sharing personal information online."
];

let tipIndex = 0;

function showTip() {
    const tipBox = document.getElementById("tip-box");
    if (tipBox) {
        tipBox.innerText = tips[tipIndex];
        tipIndex = (tipIndex + 1) % tips.length;
    }
}

// Change tip every 5 seconds
setInterval(showTip, 5000);


// 4. Contact form validation
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


// 5. Button click awareness message
function showWarning() {
    alert("Be careful! Never share your password with anyone.");
}
