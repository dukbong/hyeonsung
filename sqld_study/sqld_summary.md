### SQL 명령문 개괄

1. 연산 순서 : FROM - WHERE - GROUP BY - HAVING - SELECT - ORDER BY'
2. 종류
    - DML : SELECT, INSERT, DELETE, UPDATE, MERGE, CALL, EXPLAIN PLAN, LOCK TABLE
    - DDL : CREATE, ALTER, DROP, RENAME, COMMENT, TRUNCATE
    - TCL : ROLLBACK, COMMIT
    - DCL : GRANT, REVOKE

### SELECT
1. DISINCT (중복 제거) : SET 자료구조로 생각
2. AS
    1. SELECT
        - AS 생략가능
        - 컬럼명에 띄어쓰기
    2. FROM은 사용 불가능=
  
3. CONCAT : 인수는 무조건 2개
    1. "+" : SQL SERVER
    2. ||  : ORACLE 

### 논리 연산자

연산 순서 : NOT - AND - OR 
1. AND ( A AND B ) : A와 B모두 만족
2. OR ( A OR B ) : A와 B 둘중에 하나라도 만족 
3. NOT ( NOT A, B ) : A와 B 모두 아닌


### SQL 연산
1. BETWEEN ( A BETWEEN 1 AND 2 ) : A가 1이상 2이하 인 것
2. IN ( A IN (1, 2, 3) : A는 1,2,3 중에 하나 인 것
3. LIKE ( A LIKE '_L%' ) : A는 '?L'로 시작하는 문자인 

  - " _ " : 미지의 한 글자
  - " % " : 0이상의 글자
  - ESCAPE ( A LIKE 'A@_A' ESCAPE '@' ) : A에 'A_A'가 포함되어있는 것 (@ 대신 아무 글자나 가능하다)

4. ROWNUM : WHERE절에 사용되며 ROWNUM은 1을 무조건 포함되어야 한다.
5. TOP : SELECT절에 사용되며 ( TOP (N) 컬럼명 )


### NULL
1. 부재, 모르는 값
2. NULL을 가지고 연산 한다면 그것은 WHERE 절에서 FLASE와 같은 의미를 갖는다.
3. 정렬상 의미 (ORACLE : 무한, SQLSERVER : -무한)

#### NVL, NVL2, ISNULL : 널뛰기
NVL(값 1, 값 2) : 값 1이 NULL이면 값 2 아니면 값 1

ISNULL(값 1, 값 2) : 값 1이 NULL이면 값 2 아니면 값 1

NVL2(값 1, 값 2, 값 3) : 값 1이 NULL이면 값 3 아니면 값 2

#### NULLIF : 같이 널자
NULLIF(값 1, 값 2) : 값 1 == 값 2 : NULL / 값 1 != 값 2 : 값 1

#### COALESCE : 널 아닌 첫번째 값
COALESCE(값 1, 값 2, 값 3 ...)


### 정렬
특성
- 가장 마지막에 실행
- 성능이 느려질 수 있다.
- NULL과의 관계

컬럼 번호 정렬
- 출력되는 컬럼의 수보다 큰값은 안된다.

인수 두개 ( ORDER BY SAL DESC, ENAME ASC )
- SAL이 같으면 ENAME 오름 차


### 숫자 함수
1. ROUND ( ROUND (12345.554) ) : 12346
    - 0이 생략된 것이다.
    - 5이상일 경우 반올림해주고 5 미만일 경우 버린다.
    - 함수의 형태 ( ROUND ( 값, 자리수) ) : 자리수 0은 소수 첫번째자리를 의히한다.
  
2. CEIL (SQL SERVER에서는 CEILING)
     - CEIL ( 값 ) : 값과 가장 가까운 큰 정수가 온다.
     - 반대의 경우 FLOOR ( 값 ) : 값과 가장 가까운 작은 정수가 온다.

### DECODE / CASE
1. CASE WHEN THEN 구문
   ```SQL
   -- 원래 구조
   CASE
     WHEN ~ THEN ~ -- 조건 1
     WHDN ~ THEN ~ -- 조건 2
     ELSE ~ -- 조건 1과 조건 2가 만족하지 못할때 실행된다.
     -- 만약 ELSE이 없고 두 조건이 만족하지 못하면 NULL이 나온다.
   END
   ```

2. DECODE
   ```SQL
   DECODE (컬럼명, 'M', '남자','F','여자','기타')
   --if( 컬럼명 == 'M'){
   --  return '남자'
   --}else if (컬럼명 == 'F'){
   --  return '여자'
   --}else{
   --  return '기타'
   --}
   ```

### JOIN
1. NATURAL JOIN과 USING은 중복 컬럼을 하나만 출력, 제일 앞에 등장, ALIAS 사용 불가
2. LEFT OUTER JOIN
     - A LEFT OUTER JOIN B = A COL = B COL(+)
  
### 서브쿼리
1. SELECT : SCALAR
2. FROM : INLINE VIEW > 메인 쿼리의 컬럼 사용 가능
3. WHERE : 거의 모든 쿼리 사용 가능 (중첩 서브 쿼리)
4. GROUP BY : X
5. HAVING : 거의 모든 쿼리 사용 가능 (중첩 서브 쿼리)
6. ORDER BY : SCALAR

### 서브 쿼리 사용
1. ANY / SOME : 하나라도 만족하는 값이 있다면 TRUE
2. ALL : 전체가 만족해야 TRUE
3. EXIST : 서브쿼리 결과 행이 1개라도 존재하면 TRUE

### 집합 연산자
1. UNION : 합 집합 / 중복 데이터 존재 X / 정렬 작업 O
2. INTERSECT : 교 집합
3. MINUS (EXCEPT) : 차 집합
4. UNION ALL : 합 집합 / 중복 데이터 존재 / 정렬 작업 X / 빠른게 장점 (나머지는 다 정렬 작업을 하기 때문에 느리다.)

### DDL
1. TURNCATE(DDL) VS DROP(DDL) : TURNCATE는 구조가 남지만 DROP은 구조도 삭제된다.
2. TURNCATE(DDL) VS DELETE(DML) : DML은 ROLLBACK이 가능하지만 TURNCATE는 불가능하다.

### VIEW
독립성 편리성 보안성을 가진게 특징이다.

### 그룹함수
1. ROLLUP
2. CUBE
3. GROUPINGSETS

[참고 사이트](https://velog.io/@dongchyeon/%EC%98%A4%EB%9D%BC%ED%81%B4Oracle-%EA%B7%B8%EB%A3%B9-%ED%95%A8%EC%88%98-ROLLUP-CUBE-GROUPING-%EB%93%B1)

NULL 다 찾으면서 총합행이 있다면 ROLLUP OR CUBE이다.
총합행이 없다면 GROUPINGSETS

### 윈도우 함수
1. RANK 중복은 건너뛴다. (예시 : 1, 1, 3, 4 ...)
2. DENSE RANK :중복을 건너뛰지 않는다. (예시 : 1, 1, 2, 3, ...)

### 계층형 질의
1. PRIOR 자식 테이터 = 부모 데이터
2. 부모에서 자식으로 가면 순반

### 절차형 PL/SQL

1. EXCEPTION은 생략이 가능하다.
2. PROCEDURE : 값이 나오지 않는다.
3. TRIGGER : COMMIT / ROLLBACK이 안된다.
4. USER DEFINED : 값이 무조건 나온다.

### 식별자
1. 주식별자 : 유최불존 (유일성, 최소성, 불변성, 존재성 4가지를 만족하면 후보키가 되며 그 중 대표가 기본키)

#### 식별자와 비식별자
1. 식별자 ( 강한 관계 ) / 비식별자 ( 약한 관계 )
2. 단점
     - 식별자( SQL 구문 복잡, PK 속성 수 증가 )
     - 비식별자 ( 불필요한 JOIN의 수가 증가하며 느려진다. )
  
### ERD  서술 규칙
1. 좌상단에서 우하단으로 작성
2. 관계명 표기는 필수가 아니다.
3. UML은 객체지향에서만 쓰인다.

### 성능 데이터 모델링
1. 아키텍쳐 모델링 : 테이블, 파티션
2. SQL 명령문 : 조인 수행 원리, 옵티마이저, 실행계획

둘중에 아키텍쳐가 더 효과적이다.


### 정규화
1. 1차 정규화 : 원자성
2. 2차 정규화 : 부분 함수 종속 제거
3. 3차 정규화 : 이행 함수 종속 제거
4. BCNF :
