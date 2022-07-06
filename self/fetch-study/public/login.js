const $name = document.querySelector("#name");
const $job = document.querySelector("#job");
const $btn = document.querySelector("#btn");

$btn.addEventListener("click", login);

async function login(){
        // const req = {
        //     name : $name.value,
        //     job : $job.value,
        // };
        // // console.log(req); //obj형식
        // // console.log(JSON.stringify(req)); // 문자형태
        // fetch("/login",{
        //     method : "POST",
        //     headers : {
        //         "Content-type" : "application/json",
        //     },
        //     body : JSON.stringify(req),
        // })
        // .then(()=>{
        //     window.location.replace("/home");
        // });
        const data ={
            name : $name.value,
            job : $job.value,
        };
        try{
            await axios.post("/login",data);
        }catch(err){
            console.error(err);
        }
        
}