document.getElementById("form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const product_name = e.target.product_name.value;
    const box_size = e.target.box_size.value;
    try{
        await axios.post("/boxes",{product_name,box_size});
    }catch(err){
        console.error(err);
    }
});