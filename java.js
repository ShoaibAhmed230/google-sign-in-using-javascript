const email = "shebi345@gmail.com";
function login(){
    let  bordercolor = document.querySelector(".fxemail");
    let errorspan = document.querySelector(".errspn");
    let erroricon = document.querySelector(".fas");
    let spanvalue = document.querySelector(".note");
    let inputvalue = document.querySelector(".fxemail").value;
    if(inputvalue==email){
        window.location.href = "password.html";
        // alert("Congrates! your email is correct");
    }
 
    else{        
       spanvalue.style.display="block";
       erroricon.style.display="block";
       errorspan.style.display="flex";
       bordercolor.style.border="1px solid red";
    }
    console.log(spanvalue);
    console.log(inputvalue);
}
const pass = "1234";

function signin(){
    let erricn = document.querySelector(".email i");
    let  bordercolor = document.querySelector(".fxemail");
    let errorspan = document.querySelector(".errspn");
    let erroricon = document.querySelector(".fas");
    let spanvalue = document.querySelector(".note");
    inputvalue = document.querySelector(".fxemail").value;

    if(inputvalue==pass){
        window.location.href = "welcome.html";

        // alert("your pass is correct");

    }
    else{
        erricn.style.display="block";
        spanvalue.style.display="block";
       erroricon.style.display="block";
       errorspan.style.display="flex";
       bordercolor.style.border="1px solid red";
    }
}