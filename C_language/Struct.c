#include <stdio.h>
#include <string.h>

struct student{ // 이중 구조체
    int num;
    char name[20];
    struct date birth;
    double grade;
}

struct date {
    int year;
    int month;
    int day;
}

int main(void){
    struct student s1;
    s1.num = 11111;
    strcpy(s1.name,"jam");
    s1.birth.year = 2022;
    s1.birth.month = 7;
    s1.birth.day = 25;

    return 0;
}

//==================================================

struct point{
    int x;
    int y;
}
int main(void){
    struct point s1 = {10,20};
    struct point s2 = {20,10};
    // p1을 p2로 복사하는 방법
    p2.x = p1.x;
    p2.y = p2.y;

    //or

    p2 = p1;
}

//==================================================

struct student {
    int num;
    char name[20];
    double grade;
}
int main(void){
    struct student s1[3]; // 구조체를 가진 3칸 짜리 배열
    s[0].num = 1;
    strcpy(s[0].name, "kim");
    s[0].grade = 4.42;
}

//==================================================

struct employee { // 구조체 정의
	char name[20];
	int age;
	int gender;
	int salary;
};

int main(void) {
	struct employee emp1 = { "jang", 20, 1, 15000 }; //  구조체 초기화
	struct employee emp2 = { "choi", 30, 2, 25000 };

	struct employee* p1;
	p1 = &emp1;
	struct employee* p2;
	p2 = &emp2;

	printf("emp1 주소는 %p\n", p1);
	printf("emp2 주소는 %p\n", p2);

	printf("%s %d %d %d\n", emp1.name, emp1.age, emp1.gender, emp1.salary);
	printf("%s %d %d %d\n", (*p1).name, (*p1).age, (*p1).gender, (*p1).salary);

	printf("%s %d %d %d\n", emp2.name, emp2.age, emp2.gender, emp2.salary);
    printf("%s %d %d %d\n", (*p2).name, p2->age, (*p2).gender, p2->salary);
	return 0;
}

//==================================================

struct student{
    int num;
    char name[20];
    double grade;
}
int main(void){
    struct student s = {10, "kim", 4.3};
    printf("학번은 %d\n", s.num);
    printf("이름은 %s\n", s.name);
    printf("학점은 %.2f\n", s.grade);

    struct student *p;
    p = &s;
    printf("학번은 %d\n", (*p).num);
    printf("이름은 %d\n", (*p).name);
    printf("학점은 %d\n", (*p).grade);

    printf("학번은 %d\n", p->num);
    printf("이름은 %d\n", p->name);
    printf("학점은 %d\n", p->grade);
    return 0;
}

//==================================================

struct student {
    int num;
    char name[20];
    double grade;
};

int equal2(struct student* p1, struct student* p2);

int main(void) {
    struct student s1 = { 10, "lee", 4.4 };
    struct student s2 = { 20, "kim", 5.4 };

    if (equal2(&s1, &s2) == 1) {
        printf("구조체의 num이 같다.");
    }
    else {
        printf("구조체의 num이 다르다.");
    }

    return 0;
}
// 구조체를 전체 다 넘기기 때문에 좋지 않다.
int equal1(struct student s1, struct student s2) {
    if (s1.num == s2.num) {
        return 1;
    }
    else {
        return 0;
    }
}

// 4byte만 쓰면 되기 때문에 좋다.
int equal2(struct student* p1, struct student* p2) {
    printf("*p1.num = %d, *p2.num = %d\n\n", (*p1).num, (*p2).num);
    if ((*p1).num == (*p2).num) {
        return 1;
    }
    else {
        return 0;
    }
}

//==================================================

struct student {
    int num;
    char name[20];
    double grade;
};

int equal2(struct student* p1, struct student* p2);
struct student create();

int main(void) {
    struct student s1 = { 10, "lee", 4.4 };
    struct student s2 = { 20, "kim", 5.4 };
    struct student s4 = create();
    printf("%d %s %.2f\n\n", s4.num, s4.name, s4.grade);

    if (equal2(&s1, &s2) == 1) {
        printf("구조체의 num이 같다.");
    }
    else {
        printf("구조체의 num이 다르다.");
    }

    return 0;
}

int equal2(struct student* p1, struct student* p2) {
    if ((*p1).num == (*p2).num) {
        return 1;
    }
    else {
        return 0;
    }
}

struct student create() {
    struct student s3;
    s3.num = 3;
    strcpy(s3.name, "jam");
    s3.grade = 4.4;
    return s3;
}

//==================================================

// 공용체

union example { // 몇개를 써도 가장 큰 한개의 메모리 만큼만 생성한다.
	char c;
	int i;
	int j;
};

struct examples { 
	char c;
	int i;
	int j;
};

int main(void) { // 초기화를 하나씩만 할 수 있다.
	struct examples e1;
	union example e = { 'a' };
	printf("%c %d %d\n\n", e.c, e.i, e.j);

	printf("%d\n", sizeof(e));
	printf("%d\n\n", sizeof(e1));

	e.i = 500;
	printf("%c\t %d\t %d\n\n", e.c, e.i, e.j);
	return 0;
}

//==================================================

// enum

enum days {SUN, MON, TUE, WED, THU, FRI, SAT}; // 0 1 2 3 4 5 6
enum dayss { SUN = 7, MON, TUE, WED, THU, FRI, SAT }; // 7 8 9 10 11 12
enum daysss { SUN = 7, MON = 3, TUE, WED, THU, FRI, SAT }; // 7 3 4 5 6 7


int main(void) { // 초기화를 하나씩만 할 수 있다.
	enum days d;
	d = TUE; // 인덱스 값 반환
	printf("%d\n", d); 
	return 0;
}