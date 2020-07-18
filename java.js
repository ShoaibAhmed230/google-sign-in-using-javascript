const email = "shebi345@gmail.com";
function login(){
    inputvalue = document.querySelector(".fxemail").value;
    if(inputvalue==email){
        window.location.href = "password.html";

        alert("Congrates! your email is correct")
    }
    else{
        alert("your email isnot correct")
    }
    console.log(inputvalue);
}
const pass = "1234";

function signin(){
    inputvalue = document.querySelector(".fxemail").value;

    if(inputvalue==pass){
        window.location.href = "welcome.html";

        alert("your pass is correct")

    }
    else{
        alert("your pass is incorrect");
    }
}