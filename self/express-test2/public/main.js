document.getElementById("user-form").addEventListener("submit",async (e)=>{
    e.preventDefault();
    const name = e.target.username.value;
    const comment = e.target.usercomment.value;
    try{
        await axios.post("/users",{name, comment});
    }catch(err){
        console.error(err);
    }
});