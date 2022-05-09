let i = 0;
function recurse(){
    i++;
    recurse();
}
try{
    recurse();
} catch(ex){
    alert("최대크기는 " + i + "\nerror" + ex);
}

//이걸 브라우저에 쳐보면 callstack size를 확인할 수 있다.