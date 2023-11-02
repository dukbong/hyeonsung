import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {

	static StringBuilder sb = new StringBuilder();
	
	public static void main(String[] args) throws IOException {
		new Main().solution();
	}

	private void solution() throws IOException{
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int[] pobi = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		int[] crong = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
		
		boolean pobiCheck  = oddAndEven(pobi);
		boolean crongCheck = oddAndEven(crong);
		
		printCol(pobi, crong);
		
		if(!(pobiCheck && crongCheck)){
			printCol(pobi, crong);
			sb.append(-1).append("\n");
		}else{
			int pobiBigNumber  = bigNumberReturn(pobi);
			int crongBigNumber = bigNumberReturn(crong);
			
			printCol(pobi, crong);
			sb.append(matchResult(pobiBigNumber, crongBigNumber)).append("\n");
		}
		
		System.out.println(sb.toString());
	}
	
	// 이쁘게 출력하기 위한 기능
	private void printCol(int[] pobi, int[] crong){
		if(sb.length() == 0){
			sb.append("pobi").append("\t\t").append("crong").append("\t\t").append("result").append("\n");
		}else{
			sb.append(Arrays.toString(pobi)).append("\t").append(Arrays.toString(crong)).append("\t");
		}
	}
	
	// 1. 왼쪽은 홀수 오른쪽은 짝수 및 시작 페이지인지 마지막 페이지인지 판별 기능
	private boolean oddAndEven(int[] array){
		return array[0] % 2 != 0 && array[1] % 2 == 0 && array[0] != 1 && array[1] != 400 ? true : false;
	}
	
	// 2. 각 배열의 큰수를 반환하는 기능
	private int bigNumberReturn(int[] array){
		int[] left  = numberToIntArray(array[0]);
		int[] right = numberToIntArray(array[1]);
		
		int bigNumber = bigNumberSearch(left, right);
		return bigNumber;
	}
	
	// 3. 숫자를 배열로 바꿔주는 기능
	private int[] numberToIntArray(int num){
		int length = String.valueOf(num).length();
		int[] array = new int[length];
		
		for(int i = length - 1; i >= 0; i--){
			array[i] = num % 10;
			num = num / 10;
		}
		
		return array;
	}
	
	// 4. 왼쪽과 오른쪽 둘중에 큰 값을 반환하는 기능
	private int bigNumberSearch(int[] left, int[] right){
		int leftBigNumber  = sumOrMulti(left);
		int rightBigNumber = sumOrMulti(right);
		if(leftBigNumber > rightBigNumber){
			return leftBigNumber;
		}
		return rightBigNumber;
	}
	
	// 4-1. 곱셈과 덧셈중 어느 것이 큰지 판별하는 기능
	private int sumOrMulti(int[] array){
		int sum   = Arrays.stream(array).sum();
		int multi = Arrays.stream(array).reduce(1, (acc, cur) -> acc * cur);
		
		if(sum > multi){
			return sum;
		}
		return multi;
	}
	
	// 5. 결과 판별 기능
	private int matchResult(int pobi, int crong){
		if(pobi > crong){
			return 1;
		}else if (crong > pobi){
			return 2;
		}else{
			return 0;
		}
	}
}
