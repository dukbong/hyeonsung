/*
    모델 정의 방법에는 2가지가 있다.
    interface : 변수 타입만을 체크한다.
    classes   : 변수 타입과 인스턴스 또한 생성할 수 있다.
*/

export interface Board{
    id : string,
    title : string,
    description : string,
    status : BoardStatus,
}

export enum BoardStatus{
    PUBLIC = "PUBLIC",
    PRIVATE = "PRIVATE",
}