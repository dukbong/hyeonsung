const id_list = ["muzi","apeach","frodo","neo"];
const report = ["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"];

function solution(id_list,report,k){
    const answer = new Array(id_list.length).fill(0);
    // 길이가 id_list와 같으면서 0을 가진 배열 생성

    const report_list = {};
    id_list.map((user)=>{
        report_list[user] = [];
    });
    // report_list.map을 통해 객체로 만든다.
    /*
    {
        muzi : [],
        apeach : [],
        frodo : [],
        neo : []
    }
    */

    report.map((user)=>{
        const [user_id, report_id] = user.split(" ");
        // report.map을 통해 배열을 분할한다.
        // ["muzi","frodo"],["apeach","frodo"]...
        if (!report_list[report_id].includes(user_id)){
            report_list[report_id].push(user_id);
        // report 당한 사람을 기준으로 신고한 사람들을 나열한다.
        }
    });

    for (const key in report_list){
        if(report_list[key].length >= k){
            report_list[key].map((user)=>{
                answer[id_list.indexOf(user)] = answer[id_list.indexOf(user)] + 1;
            });
        }
    }
    return answer;
}
solution(id_list,report,2);
