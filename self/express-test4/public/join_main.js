// document.getElementById("form").addEventListener("submit",async(e)=>{
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;
//     const address = e.target.address.value;
//     try{
//         await axios.post("/auth", {email, password, address});
//         console.log("ok");
//     }catch(err){
//         console.error(err);
//     }
// });