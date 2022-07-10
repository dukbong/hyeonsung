var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Queue = /** @class */ (function () {
    function Queue() {
        this.data = [];
    }
    Queue.prototype.push = function (item) {
        this.data.push(item);
    };
    Queue.prototype.pop = function () {
        return this.data.shift();
    };
    return Queue;
}());
var queue = new Queue();
queue.push(0);
queue.push("1");
console.log(queue.pop().toFixed()); // 0
// console.log(queue.pop().toFixed()); << Runtime Error
// ⭐Number.prototype.toFixed >> "1"은 Number 타입이 아니므 Error가 발생한다.
//===========================================================
var Queue2 = /** @class */ (function () {
    function Queue2() {
        this.data2 = [];
    }
    Queue2.prototype.push = function (item) {
        this.data2.push(item);
    };
    Queue2.prototype.pop = function () {
        return this.data2.shift();
    };
    return Queue2;
}());
var NumberQueue = /** @class */ (function (_super) {
    __extends(NumberQueue, _super);
    function NumberQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NumberQueue.prototype.push = function (item) {
        _super.prototype.push.call(this, item);
    };
    NumberQueue.prototype.pop = function () {
        return _super.prototype.pop.call(this);
    };
    return NumberQueue;
}(Queue2));
var queue2 = new NumberQueue();
queue2.push(0);
// ⭐의도치 않은 실수를 사전 검출 가능하다.
queue2.push(+"1"); // 실수를 사전 인지하고 수정할 수 있다.
console.log(queue2.pop().toFixed()); // 0
console.log(queue2.pop().toFixed()); // 1
