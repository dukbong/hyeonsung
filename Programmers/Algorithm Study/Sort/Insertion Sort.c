#include <stdio.h>

int main(void) {
	int i, j, temp;
	int array[10] = { 1,10,5,8,7,6,4,3,2,9 };
	for (i = 0; i < 9; i++) {
		j = i;
		while (array[j] > array[j + 1]) {
			temp = array[j];
			array[j] = array[j + 1];
			array[j + 1] = temp;
			j = j - 1;
		}
	}
	for (i = 0; i < 10; i++) {
		printf("%d ", array[i]);
	}
	return 0;
}
//시간 복잡도
// O(N * N)
// 시간복잡도가 같은 버블, 선택 중 가장 빠른 실행시간을 가졌다.
// 거의 정렬된 상태라면 가장 빠른 정렬 알고리즘이다.