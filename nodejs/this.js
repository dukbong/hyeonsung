console.log(this);
// global를 가르키지 않는다.
// 이건 우선 외워야할거같다.

function a() {
    console.log(this === global);
    // 하지만 함수내에서는 javascript에서 익혔던 this와 같다.
    // this는 함수 호출시 정해진다.
}

a();