class node { // 기본구조 만들기
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LikedList { // 연결리스트 시작
    constructor() {
      let init = new node("init");
      this.head = init;
      this.tail = init;
      this.size = 0;
    }
    // 맨 앞에 하나씩 추가하기
    unshift(data) {
      let newnode = new node(data);
      let current = this.head;
      newnode.next = current.next;
      current.next = newnode;
      if(this.tail.data === "init"){
        this.tail = newnode;
      }
      this.size++;
    }
    // 마지막에 하나씩 추가하기
    push(data) {
      let newnode = new node(data);
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = newnode;
      this.tail = newnode;
      this.size++;
    }
    // 원하는 위치에 하나씩 추가하기
    insert(data, location) {
      let newnode = new node(data);
      let current = this.find(location);
      newnode.next = current.next;
      current.next = newnode;
      this.size++;
      while (current.next != null) {
        current = current.next;
      }
      this.tail = current;
    }
    find(location) {
      let current = this.head;
      while (current.data != location) {
        current = current.next;
      }
      return current;
    }
    // 앞에꺼 하나씩 제거하기
    shift() {
      let current = this.head;
      current.next = current.next.next;
      this.size--;
    }
    // 맨뒤에꺼 하나씩 제거하기
    pop() {
      let current = this.head;
      while (current.next.next != null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
      this.size--;
    }
    // 원하는 위치 하나씩 제거하기
    splice(location) {
      let current = this.head;
      let currentpre = this.head;
      let last = this.head;
      while (current.data != location) {
        current = current.next;
      }
      while (currentpre.next.data != location) {
        currentpre = currentpre.next;
      }
      currentpre.next = current.next;
      while (last.next != null) {
        last = last.next;
      }
      this.tail = last;
      this.size--;
    }
    // 원하는 값 수정하기
    change(location, change_value){
      let current = this.head;
      while(current.data != location){
        current = current.next;
      }
      current.data = change_value;
    }
    // 전체 값을 배열로 리턴하기
    printArr(){
      let current = this.head;
      let arr = [];
      while(current.next!= null){
        arr.push(current.next.data);
        current = current.next;
      }
      return arr;
    }
    // 전체 길이 리턴하기
    printLength(){
      return this.size;
    }
  }
  
  let a = new LikedList();
  a.unshift(1);
  a.unshift(2);
  a.push(3);
  a.insert(99,2);
  a.pop();
  let b = a.printLength();
  console.log(a);
  console.log(b);
  