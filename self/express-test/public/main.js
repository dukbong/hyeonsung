document.getElementById("user-form").addEventListener("submit",async (e)=>{
    const name = e.target.username.value;
    const comment = e.target.usercomment.value;
    try{
        await axios.post("/users", {name, comment});
    }catch(err){
        console.error(err);
    }
    e.target.username.value = "";
    e.target.usercomment.value = "";
});

document.getElementById("get-form").addEventListener("submit",async (e)=>{
    const name = e.target.getusername;
    try{
        await axios.get("/users", {name});
    }catch(err){
        console.error(err);
    }
    e.target.getusername.value = "";
}); 