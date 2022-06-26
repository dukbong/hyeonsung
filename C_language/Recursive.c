#include <stdio.h>

void func(void);

int main(void){
    int tmp = 10;  // 1번

    {
        int tmp = 50;  // 2번
        printf("Block in %d\n", tmp);
    }

    printf("Block out %d", tmp);
    func();
    printf("Block out %d", tmp);
    return 0;
}
void func(void){
    int tmp = 60;  // 3번
    printf("Func in %d", tmp);
}
// 결과값
// Block in 50
// Block out 10;
// Func in 60;
// Block out 10;
// 1번, 2번, 3번은 서로 다른 변수이다.

int main(void){
    printf("Static과 Auto 변수의 차이");
    for (int i = 0; i < 3; i++){
        func();
    }
    return 0;
}
void func(void){
    static int cnt = 0;
    int local = 0;
    printf("func() in %d, %d\n", ++cnt, ++local);
}
// 결과값
// Static과 Auto 변수의 차이
// func() in 1, 1
// func() in 2, 1
// func() in 3, 1

// Static은 프로그램이 끝나야 저장공간을 반납하기 때문에 블록이 종료되도 유지된다.

long fact(int n);

int main(void){
    int n;
    printf("정수를 입력하세요.");
    scanf("%d", &n);
    fact(n);
    return 0;
}

long fact(int n){
    printf("%d", n);
    if (n === 1){
        return 1;
    }else{
        printf(" * ");
        return n * fact(n-1);
    }
}
// 재귀함수를 이용한 factorial 문제

int main(void){
    int i,j;
    int answer = 1;
    printf("정수를 입력하세요.");
    scanf("%d",&j);
    for(i = 1; i <=j; i++){
        answer = answer * i;
    }
    printf("%d! = %d",j, answer);
}
// for문을 이용한 factorial 문제