#define _CRT_SECURE_NO_WARNINGS

#include <stdio.h>
#include <ctype.h> // 문자를 처리할때

int main(void) {
    int c; 

    while ((c = getchar())!=EOF){
        if (islower(c)){ // 소문자인지 확인(false = 0)
            c = toupper(c); // 대문자로 변환
            putchar(c);
        }
    }
    return 0;
}

//===========================================================

#include <stdio.h>
#include <string.h> // 문자열을 처리할때

int main(void){
    char s1[10] = "hello"; // 쓸데없이 10개 공간을 차지한다.
    char *s2 = "hello";  // 정확히 6개의 공간만 차지한다.
    // 24와 25는 비슷한 의미이다.
    printf("%s의 길이는 %d \n",s1, strlen(s1)); // 문자열 길이 반환
    printf("%s의 길이는 %d \n",s2, strlen(s2));
    return 0;
}

//===========================================================

#include <stdio.h>
#include <string.h>

int main(void){
    char s1[10] = "hello";
    char s2[10];

    strcpy(s2, s1); // s1에 있는 값을 s2로 복사한다.

    printf("src = %s\n", s1);
    printf("dst = %s\n", s2);
    return 0;
}

//===========================================================

#include <stdio.h>
#include <string.h>

int main(void){
    char s1[20] = "world";
    char s2[20] = "hello";

    strcat(s2, s1); // s1을 s2 뒤에 붙여라. (s1의 원본 훼손은 없다.)

    printf("src = %s",s1);
    printf("dst = %s",s2);
    return 0;
}

//===========================================================

#include <stdio.h>
#include <string.h>

int main(void){
    char s1[10] = "world";
    char s2[10] = "world";

    if ( strcmp(s2, s1) == 0){ // 두 문자열을 비교한다.
        // 두 문자열이 같다면 0을 반환한다.
        printf("동일한 배열입니다.\n");
    }else {
        printf("다른 배열입니다.");
    }
    printf("s1 = %s\n", s1);
    printf("s2 = %s\n", s2);
    return 0;
}

//===========================================================

#include <stdio.h>
#include <ctype.h>

int main(void){
    char s1[10] = "100";
    char s2[10] = "12.9";
    int num1;
    double num2, result;

    num1 = atoi(s1);
    num2 = atof(s2);

    result = num1 + num2;
    printf("%d + %f = %.2f\n\n", num1, num2, result);
    return 0;
}

//===========================================================

#include <stdio.h>

int main(void){
    int i;
    char menu[5][10] = {
        "init",
        "open",
        "close",
        "read",
        "write",
    };
    
    for(int i = 0; i < 5; i++){
        printf("%d번 메뉴 : %s\n\n", i+1, menu[i]);
    }
    
    return 0;
}

//===========================================================

#include <stdio.h>
#include <string.h>

int main(void){
    char s1[30] = "The Little Prince";
    char *ptr = strtok(s1," "); // s1 문자열을 " "단위로 잘라라

    while( ptr != NULL){// 자른 문자열들을 하나씩 출력한다.
        printf("%s\n", ptr); 
        ptr = strtok(NULL, " ");
    }
    return 0;
} 

//===========================================================

