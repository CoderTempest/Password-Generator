

function generator() {

    const passlength = parseInt(document.getElementById("len").value);
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;

    const lowerchars = "abcdefghijklmnopqrstuvwxyz";
    const upperchars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchars = "0123456789";
    const symbolchars = "~`!@#$%^&*()_-{}[]:;<>,.?/\\|";

    let allowedchars = "";
    let password = "";


    allowedchars += lower ? lowerchars : "";
    allowedchars += upper ? upperchars : "";
    allowedchars += number ? numberchars : "";
    allowedchars += symbol ? symbolchars : "";


    if (allowedchars.length === 0) {
        const warning = "You need to select at least one set of characters.";
        document.getElementById("password").textContent = warning;
    }
    else {
        for (let i = 0; i < passlength; i++) {
            const randomindex = Math.floor(Math.random() * allowedchars.length);
            password += allowedchars[randomindex];
        }

        document.getElementById("password").textContent = password;

    }




}

document.getElementById("generate").onclick = generator;
