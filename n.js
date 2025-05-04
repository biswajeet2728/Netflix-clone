let inp = document.getElementById("in");
let inp2 = document.getElementById("in2");
let inp3 = document.getElementById("input");
let bu = document.getElementById("b");
let bu2 = document.getElementById("b2");
let bu3 = document.getElementById("button");
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


function check(){
    if(emailPattern.test(inp.value) || emailPattern.test(inp2.value) || emailPattern.test(inp3.value)){
        alert("Sign in done. Netflix welcomes you in the world of movies");
        
        return;
    }
    alert("Invalid email");
    
    
    
};

bu.addEventListener("click" , check);
bu2.addEventListener("click" , check);
bu3.addEventListener("click" , check);