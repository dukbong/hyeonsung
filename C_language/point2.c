#include <stdio.h>

int main (){
    int *p; // 선언시 변수 앞에 *를 붙이면 포인터 선언
    int a = 10;
    p = &a; // 포인터 p에 a의 주소를 저장한다.
    printf("%d", *p); // 실행시 *를 붙이면 해당 주소가 가르키는 값(값이 없다면 주소)
    return 0;
}

int main(){
    int a[5] = {1,2,3,4,5};
    int *ptr;

    ptr = &a[0]; // 변수 a의 주소값을 ptr에 저장
    int b = *(ptr + 1); // a[1]과 같다.
    printf("%d", b); // 2
    return 0;
}

/*
#include <avr/io.h> : 환경에서 정의된 경로(path)에서 io.h 파일을 찾아서 포함

#define : 상수를 정의
 >> #define PI 3.141592 // 프로그램 실행 중 수정 불가
 >> #define EXAMPLE(x,y) (x)*(x)+(y)*(y) // 매크로 정의
    int a = EXAMPLE(1,5); // 1*1+5*5 = 26

typedef문 : 자료형을 재정의
  typedef unsigned int u_16
  unsigned int i = 0;
  u_16 j = 0;

전처리기를 이용한 선택적 컴파일
  - 두번 컴파일 하는 것을 방지
#undef >> 정의된 매크로 해제
#ifdef >> 정의되어 있으면 실행
#ifndef >> 정의되어 있지 않으면 실행
#if >> 참인 경우 실행
#elif >> #else if
#else >> 거짓인 경우 실행
#endif >> #if문 종료
#line >> 소스코드 행 번호 출력
#pragma >> 컴파일러 마다 다름
*/