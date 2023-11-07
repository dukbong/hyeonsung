### 자주 쓰지만 자주 까먹는 것들

#### Java BackTracking을 이용한 조합과 순열

조합
```java
public class Main{
  public static void main(String[] args){
    int[] arr = new int[]{1,2,3,4,5};
    // 경로 확인을 위해 arr과 같은 크기로 만든다.    
    boolean[] bArr = new boolean[arr.length];
    int n = 3; // 몇개를 뽑을것인지 입력

    machine(arr, bArr, arr.length, n, 0);
  }

  private void machine(int[] arr, boolean[] bArr, int length, int count, int start){
    // 재귀의 종료를 위한 조건문
    if(count == 0){
      for(int i : arr){
        System.out.print(arr[i]);
      }
      System.out.println();
      return;
    }

    for(int i = start; i < length; i++){
      if(!bArr[i]){
        bArr[i] = true;
        machine(arr, bArr, length, count - 1, i + 1);
        bArr[i] = false;
      }
    }
  }
}
```
