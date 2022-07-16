// 문자열 초기화
#include <stdio.h>

int main(void) {
	char ch; // 문자형 변수 선언
	char ch2 = 'a'; // 문자형 변수 초기화

	printf("%c", ch2);
	return 0;
}

//======================================================

int main(void) {
	char ch; // 문자형 변수 선언
	char ch2 = 'a'; // 문자형 변수 초기화
	char a[4]; // 문자 배열 선언
	char a2[4] = { 'a','b','c','\0' }; // 문자 배열 초기화
	char a3[4] = "abc"; // 문자 배열 초기화
	char a4[4] = "abcdef";
	char a5[6] = "abc"; // {'a','b','c','\0','\0','\0'}
	char a6[4] = ""; // {'\0','\0','\0','\0'}
	char a7[] = "abcedfg";
	// char a8[]; >> Error! 초기화 하지 않으면 안된다.

	printf("a2의 크기 = %d, 내용 = %s\n", sizeof(a2), a2);
	printf("a3의 크기 = %d, 내용 = %s\n", sizeof(a3), a3);
	printf("a4의 크기 = %d, 내용 = %s\n", sizeof(a4), a4);
	printf("a5의 크기 = %d, 내용 = %s\n", sizeof(a5), a5);
	printf("a6의 크기 = %d, 내용 = %s\n", sizeof(a6), a6);
	printf("a7의 크기 = %d, 내용 = %s\n", sizeof(a7), a7);

	printf("\n\n\n");
	return 0;
}

//======================================================

// 문자열 복사
// for문을 사용한 문자열 복사
int main(void) {
	char str1[4] = "You";
	char str2[4];
	int i;
	for (i = 0; str1[i] != '\0'; i++) {
		str2[i] = str1[i];
	}
	str2[i] = '\0';
	printf("원본 = %s\n\n", str1);
	printf("사본 = %s\n\n", str2);
	return 0;
}
// ⭐ 라이브러리 사용해서 복사
int main(void) {
	char str1[4] = "You";
	char str2[4];
	strcpy(str2, str1);

	printf("원본 = %s\n", str1);
	printf("사본 = %s\n", str2);
	return 0;
}

//======================================================

//문자열 수정
int main(void) {
	char str1[4] = "Yoo";

	str1[2] = 'u';
	printf("str1 = %s", str1);
	return 0;
}

//======================================================

//getchar() & putchar()
int main(void) {
	int ch;
	printf("한 문자씩 입력하세요(종료 : Ctrl + Z\n");
	while ((ch = getchar()) != EOF) {
		putchar(ch);
	}
	// a를 치면 a가 나오고 v를 치면 v가 나온다.
    // 버퍼
	return 0;
}

//_getchar() & _putchar()
int main(void) {
	int ch;
	printf("한 문자씩 입력하세요(종료 : Ctrl + Z\n");
	while ((ch = _getch()) != EOF) {
		_putch(ch);
	}
	return 0;
}

//======================================================

// 문자 입출력
int main(void) {
	int name[20];
	printf("이름 : ");
	scanf("%s", name);
	// ⭐ 띄어쓰기 하면 띄어쓰기 전까지만 printf 된다.
	// ex) ap ple >> ap 이런식으로
	printf(name);
	return 0;
}

int main(void) {
	int name[20];
	printf("이름 : ");
	gets_s(name, sizeof(name));
	// gets_s는 문자를 입력받는 라이브러리 중 하나이다.
	// ⭐ 띄어쓰기 해도 전체 문자열이 출력된다.
	puts(name);
	return 0;
}