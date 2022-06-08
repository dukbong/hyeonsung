document.getElementById("user-form").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const name = e.target.uname.value;
    const comment = e.target.ucomment.value;
    try{
        await axios.post("/users", {name, comment});
    }catch(err){
        console.error(err);
    }
});

document.getElementById("new-form").addEventListener("submit",async (e)=>{
    await axios.get("/about");
});