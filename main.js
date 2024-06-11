const form = document.getElementById("infoForm");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email1 = document.getElementById("email");
    let email2 = document.getElementById("verify-email");
    if(email1.value != email2.value) {
        alert("make sure your emails match")
    }
});