// 배열의 값을 난수로 받기
#include <stdio.h>
#define SIZE 20

int main(void) {
	int a[SIZE];
    // 배열 초기화
	for (int i = 0; i < SIZE; i++) {
		a[i] = rand() % 100 + 1;
	}
    // 배열 출력
	for (int i = 0; i < SIZE; i++) {
		printf("a[%2d] = %3d \n", i, a[i]);
	}
	return 0;
}

// 배열의 값을 scanf를 통해 받기
#define _CRT_SECURE_NO_WARNINGS
// scanf로 인해 오류가 발생시 작성해준다.
#define SIZE 5
#include <stdio.h>

int main(void) {
	int score[SIZE] = { 0 };
	for (int i = 0; i < SIZE; i++) {
		printf("%d번째 학생의 점수는 ? ", i + 1);
		scanf("%d", &score[i]);
	} 
	for (int i = 0; i < SIZE; i++) {
		printf("score[%2d] = %3d \n", i, score[i]);
	}
	return 0;
}

// 배열의 크기를 지정하지 않은 상태에서 배열 출력
#define _CRT_SECURE_NO_WARNINGS
#define SIZE 5
#include <stdio.h>

int main(void) {
	int score[] = { 1,2,3 };
	
	for (int i = 0; i < SIZE; i++) {
		printf("score[%2d] = %3d \n", i, score[i]);
        // 인덱스 3,4번에 쓰레기 값이 출력된다.
	}

	printf("=====================================\n");

	for (int i = 0; i < sizeof(score) / sizeof(score[1]); i++) {
		printf("score[%2d] = %3d \n", i, score[i]);
        // 내가 초기화한 인덱스까지만 출력된다.
	}
	return 0;
}

//배열 복사하는 방법 & 배열이 같은지 비교하는 방법
#define _CRT_SECURE_NO_WARNINGS
#define SIZE 5
#include <stdio.h>

int main(void) {
	int a[SIZE] = { 1,2,3,4,5 };
	int b[5];

	// b=a 이런식의 복사는 안된다.
	// 배열의 변수명은 배열0번째 주소를 가지기 때문이다.

	for (int i = 0; i < SIZE; i++) {
		b[i] = a[i];
	}

	for (int i = 0; i < SIZE; i++) {
		printf("a[%2d] = %3d\t", i, a[i]);
		printf("b[%2d] = %3d\n", i, b[i]);
	}

	// 배열이 같은지 비교
	// if(a == b) 이런식으로하면 안된다.
	// 이유는 서로 다른 주소값을 가지고 있기 때문이다.
	for (int i = 0; i < SIZE; i++) {
		if (a[i] != b[i]){
			printf("다른 배열이다.");
			return 0;
		}
	}
	printf("같은 배열이다.");
	return 0;
}