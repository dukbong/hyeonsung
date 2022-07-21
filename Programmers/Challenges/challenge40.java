// 같은 숫자는 싫어

import java.util.*;

public class Solution {
    public int[] solution(int[] arr) {
        ArrayList<Integer> answerList = new ArrayList<>();
        
        for(int i = 0; i < arr.length; i++){
            if(answerList.size() == 0){
                answerList.add(arr[i]);
            }else{
                if(answerList.get(answerList.size()-1) != arr[i]){
                    answerList.add(arr[i]);
                }
            }
        }
        int[] answer = answerList.stream().mapToInt(Integer::intValue).toArray();
        return answer;
    }
}