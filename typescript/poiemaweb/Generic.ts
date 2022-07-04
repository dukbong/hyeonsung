class Queue{
    protected data: any[] = [];

    push(item:any){
        this.data.push(item);
    }

    pop(){
        return this.data.shift();
    }
}

const queue = new Queue();
queue.push(0);
queue.push("1");

console.log(queue.pop().toFixed()); // 0
// console.log(queue.pop().toFixed()); << Runtime Error
// ⭐Number.prototype.toFixed >> "1"은 Number 타입이 아니므 Error가 발생한다.

//===========================================================

class Queue2{
    protected data2: any[] = [];

    push(item: any){
        this.data2.push(item);
    }

    pop(){
        return this.data2.shift();
    }
}

class NumberQueue extends Queue2{
    push(item: number){
        super.push(item);
    }

    pop(): number{
        return super.pop();
    }
}

const queue2 = new NumberQueue();
queue2.push(0);
// ⭐의도치 않은 실수를 사전 검출 가능하다.
queue2.push(+"1"); // 실수를 사전 인지하고 수정할 수 있다.

console.log(queue2.pop().toFixed()); // 0
console.log(queue2.pop().toFixed()); // 1