//single element

// const form = document.getElementById("todo-form");
// console.log(form)
// const form = document.querySelector("#todo-form")
// console.log(form)

//multiple element

// const items = document.querySelectorAll(".item");
// items.forEach((item) => {console.log(item);})
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"))

// const todos = document.querySelector("#todo-list")
// todos.remove();
// todos 다 지우기
// todos.style.background = "red";
// todos background 색상 입히기
// todos.lastElementChild.remove();
//todos에 맨 마지막꺼를 삭제한다.
// todos.firstElementChild.textContent = "hello"
//todos에 맨 처음꺼 내용을 hello로 바꾼다.
// todos.lastElementChild.innerHTML = "<h1>bye~</h1>"
//todos에 맨 마지막 내용을 html을 이용해 바꾼다.

const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
let del = document.getElementsByClassName("item");

button.addEventListener("click", function (e) {
   //변수.addEventListener(어떤 이벤트, 어떤 기능)
  e.preventDefault();
  if (todoInput.value === "") {
    msg.style.display = "block";
    //none은 안보이게 block은 보이게
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
    //setTimeout(()=>{기능},기능을 실행할 시간)
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  li.classList.add("item");
  todos.appendChild(li);
  todoInput.value = "";

  /*▽▽▽▽▽▽▽▽삭제기능▽▽▽▽▽▽▽▽*/
  for (let z = 0; z < del.length; z++) {
    const hoho = del[z];
    hoho.addEventListener("click", function (j) {
      hoho.remove();
    });
  }
  /*△△△△△△△△삭제기능△△△△△△△△*/
});

//정말 기본적인 기능만있는 상태입니다.


