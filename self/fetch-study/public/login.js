const $name = document.querySelector("#name");
const $job = document.querySelector("#job");
const $btn = document.querySelector("#btn");

$btn.addEventListener("click", login);

function login(){
    const req = {
        name : $name.value,
        job : $job.value,
    };
    // console.log(req); //obj형식
    // console.log(JSON.stringify(req)); // 문자형태
    fetch("/login",{
        method : "POST",
        headers : {
            "Content-type" : "application/json",
        },
        body : JSON.stringify(req),
    });
}