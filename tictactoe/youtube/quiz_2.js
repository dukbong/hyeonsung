/*버튼 클릭시 hello event bubbling을 alert 하게 해라
단. 이벤트리스너를 button에 달면안된다.*/

const $div = document.querySelector("div");

$div.addEventListener("click",()=>alert("hello event bubbling"))