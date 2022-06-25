#include <stdio.h>

int main(void){
    int i;
    printf("%d\n", i);
    return 0;
}
// 지역 변수의 경우 초기화가 이루어지지 않기 때문에 오류가 발생한다.

int main(void){
    int i;
    for (i = 0; i < 5; i++){
        int tmp = 1;
        printf("1번 출력물 = %d",tmp);
        tmp++; 
    }
    printf("2번 출력물 = %d",tmp);
    return 0;
}
// 1번 출력물의 경우 1이 다섯번 출력된다.
// >> 위 코드에서는 scope가 블록이기 때문에 블록이 종료되면 stack에서 제거된 후 다시 생성된다.
// 2번 출력물의 경우 오류가 발생한다.
// >> tmp는 블록안에 있는 지역변수이기 때문에 블록이 종료되면 stack에서 제거된다.

int tmp = 1;

int main(void){
    int i;
    for (i = 0; i < 5; i++){
        printf("1번 출력물 = %d", tmp);
        tmp++;
    }
    printf("2번 출력물 = %d", tmp);
    return 0;
}
// 1번 출력물은 1 2 3 4 5 이다.
// >> tmp++을 통해 전역변수의 tmp가 1씩 증가한다.
// 2번 출력물은 6 이다.
// >> 1번출력물 5가 출력된 후 tmp++ 을 통해 tmp는 6이 된다.

int tmp = 1;

int main(void){
    int tmp = 0;
    printf("tmp의 값은 = %d", tmp);
    return 0;
}
// tmp의 값은 = 0 이 출력된다.
// 변수의 값을 호출할때는 순서가 지역변수를 찾고 없을 경우 전역변수를 찾게 된다.
// >> 전역변수와 지역변수의 변수명이 같다고 덮어쓰거나 하지 못한다.
// >>>> 포인터를 이용해서 다르다는걸 아래에서 확인해보자.

int tmp = 1;

int main(void){
    // 전역변수 주소값 알아보기 
    int *global;
    global = &tmp;
    printf("전역변수 tmp의 주소값 = %p, tmp의 값 = %d\n",global, tmp);
    // 지역변수 주소값 알아보기
    int tmp = 10;
    int *local;
    local = &tmp;
    printf("지역변수 tmp의 주소값 = %p, tmp의 값 = %d\n",local, tmp);
    
    return 0;
}
// 출력결과
// 전역변수 tmp의 주소값 = 0x5d7130, tmp의 값 = 1
// 지역변수 tmp의 주소값 = 0x7fffd45e1c44, tmp의 값 = 10
// >> 주소값의 경우 프로그램을 실행할때마다 달라진다.