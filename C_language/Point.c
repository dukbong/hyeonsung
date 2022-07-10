#include <stdio.h>

int main(void){
    int i = 0;
    char c = 'a';
    double f = 12.332;
    
    int*   pi = NULL;
    char*  pc = &c;
    float* pf = &f;
    printf("%d\n", pc);
    printf("%d\n", pf);

    p = &i; // p는 i의 주소를 가지고 있다.
    printf("%d\n", i);
    printf("%d\n", *p); // 간접참조 연산자
    // 결과값 0, 0

    i = 50;
    printf("%d\n", i);
    printf("%d\n", *p); // 간접참조 연산자
    // 결과값 50, 50

    *p = 100;
    printf("%d\n", i);
    printf("%d\n", *p); // 간접참조 연산자
    // 결과값 100, 100

    return 0;
}
//-----------------------------------------------------

int main(void){
    int x = 20, y = 10;
    int* p;

    p = &x;
    printf("p = %d\n", p);
    printf("*p = %d\n",*p);

    p = &y;
    printf("p = %d\n", p);
    printf("*p = %d\n",*p);
    return 0;
}
//-----------------------------------------------------

int main(void){
    int i = 50;
    char c = 'a';
    int* p = &i;
    char* pc = &c;

    printf("i = %d\n", *p);
    printf("c = %c\n", *pc);
    // 결과 50 a;

    *p = 20;
    *pc = 'c';
    printf("i = %d\n",i);
    printf("c = %c\n", c);
    // 결과 20 c;
    return 0;
}
// 변수 타입과 포인터 타입이 달라고 작동은 할수 있지만
// 꼭 변수 타입과 포인터 타입은 맞춰줘야한다.

//-----------------------------------------------------
#include <stdio.h>

void swap(int *px, int *py);

int main(void) {
	int a = 100, b = 200;
	printf("a = %d, b = %d\n", a, b);
	swap(&a, &b); // 주소를 넘겨준다.
	printf("a = %d, b = %d\n", a, b);
	return 0;
}

void swap(int *px, int *py) { // 포인터로 받는다.
	int tmp;
	printf("x = %d. y = %d\n", *px, *py);
    // 포인터가 가르키는 값을 바꾼다.
	tmp = *px; 
	*px = *py;
	*py = tmp;
	printf("x = %d. y = %d\n", *px, *py);
}

//-----------------------------------------------------

int main(void) {
	char* pc = (char*)10000;
	int* pi = (int *)10000;
	double* pd = (double *)10000;

	printf("증가전\n\n");
	printf("pc = %d, pi = %d, pd = %d\n\n", pc, pi, pd);
	pc++;
	pi++;
	pd++;
	printf("1 증가후\n\n");
	printf("pc = %d, pi = %d, pd = %d\n\n", pc, pi, pd);
	printf("2 증가후\n\n");
	printf("pc = %d, pi = %d, pd = %d\n\n", pc+2, pi+2, pd+2);

	return 0;
}

//-----------------------------------------------------

int main(void) {
	int i = 10;
	int* pi = &i;
	printf("i = %d, pi = %d\n", i, pi);
	(*pi)++; // 포인터가 가리키는 값이 1증가
	printf("i = %d, pi = %d\n", i, pi);

	printf("i = %d, pi = %d\n", i, pi);
	*pi++; // 포인터가 가지고 있는 주소값이 1 증가
	printf("i = %d, pi = %d\n", i, pi);
	printf("이제 pi는 i를 가리키지 않는다.\n");
    // 왜냐하면 121번 줄에서 pi의 주소값을 증가시켰기 때문이다.
	printf("*pi = %d\n\n", *pi);
	return 0;
}

//-----------------------------------------------------

int main(void){
    int a[] {1,2,3};
    printf("a = %p\n", a); // 주소가 나온다.
    printf("a+1 = %p\n", a + 1);
    printf("*a = %p\n", *a);
    printf("*(a+1) = %p\n", *(a+1));
    return 0;
}

//-----------------------------------------------------

#include <stdio.h>
#define SIZE 5
int main(void) {
    int a[] = { 1,10,100,1000,100000 };
    int* p;
    p = a;

    for (int i = 0; i < SIZE; i++) {
        printf("a[%d] = %d\n", i, a[i]);
        printf("a[%d] = %d\n", i, p[i]);
        printf("a[%d] = %d\n", i, *(p+i));
        printf("\n\n");
    }
    return 0;
}