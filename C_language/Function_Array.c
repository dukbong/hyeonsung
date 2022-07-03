#define _CRT_SECURE_NO_WARNINGS
#define SIZE 5
#include <stdio.h>

// 함수 선언
void inArr(int a[], int n);
void prtArr(int a[], int n);
void selectSort(int a[], int n);
int biSearch(int a[], int n, int key);

int main(void) {
	int data[SIZE]; // 배열 선언
	int key; // 변수 선언

	// 함수 호출
	inArr(data, SIZE);
	printf("정렬 전 ========================\n");
	prtArr(data, SIZE);
	selectSort(data, SIZE);
	printf("정렬 후 ========================\n");
	prtArr(data, SIZE);
	printf("이진탐색 ========================\n");
	printf("찾을 값을 입력하세요.");
	scanf("%d", &key);
	int search = biSearch(data, SIZE, key);
	if (search == -1) {
		printf("찾는 숫자 %d는 없습니다.", key);
	}
	else {
		printf("찾는 숫자 %d는 배열의 %d있습니다.", key, search);
	}
	return 0;
}

// 함수 정의 (용도 : 초기화)
void inArr(int a[], int n) {
	for (int i = 0; i < n; i++) {
		printf("값을 넣어라");
		scanf("%d", &a[i]);
	}
}
// 함수 정의 (용도 : 출력)
void prtArr(int a[], int n) {
	for (int i = 0; i < n; i++) {
		printf("data[%2d] = %3d\n", i, a[i]);
	}
}
// 함수 정의 (용도 : 선택 정렬)
void selectSort(int a[], int n) {
	int i, j, min, index, temp;
	for (i = 0; i < n; i++) {
		min = 99;
		for (j = i; j < n; j++) {
			if (min > a[j]) {
				min = a[j];
				index = j;
			}
		}
		// swap
		temp = a[i];
		a[i] = a[index];
		a[index] = temp;
	}
}

int biSearch(int a[], int n, int key) {
	int low = 0;
	int high = n - 1;
	int middle;

	while (low <= high) {
		printf("[%d - %d]", low, high);
		middle = (low + high) / 2;
		if (key == a[middle]) {
			return middle;
		}
		else if (key > a[middle]) {
			low = middle + 1;
		}
		else {
			high = middle - 1;
		}
	}
	return -1;
}