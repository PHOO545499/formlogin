const registerEmail = "ayemyatmyatkyaw545499@gmail.com";
const registerPassword = "123456789";

function login(e) {
    e.preventDefault();

    let email = e.target[0].value;
    let pw = e.target[1].value;

    if (email && pw) {
        if (email === registerEmail && pw === registerPassword) {
            document.querySelector("#success").innerHTML = "Login Successfully";
            document.querySelector(".container").style.display = "none";
        }
        else if (email === registerEmail && pw !== registerPassword) {
            document.querySelector("#error").innerHTML = "Wrong Password!!!";
        }
        else if (email !== registerEmail && pw === registerPassword) {
            document.querySelector("#error").innerHTML = "Wrong Email!!!";
        }
        else if (email !== registerEmail && pw !== registerPassword) {
            document.querySelector("#error").innerHTML = "Wrong Informations!!!";
        }
    }
    else {
        document.querySelector("#error").innerHTML = "Please Fill All Input Fields";
    }
}