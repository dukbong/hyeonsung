
### SQL 연산순서
FROM > WHERE > GROUP BY > HAVING > SELECT > ORDER BY

DML : SELECT, INSERT, UPDATE, DELETE
DDL : CREATE, ALTER, MODIFY, DROP
TCL : ROLLBACK, COMMIT
DCL : GRANT, REVOKE

### DISTINCT
컬럼 값들의 중복을 제거 한 후 결과 출력 

```SQL
SELECT DISTINCT(COL1) FROM TABLE; 
SELECT DISTINCT(COL1, COL2) FROM TABLE;
-- 두개 이상일 경우 2가지를 모두 동일한 것들만 제거한다.
```

### ALIAS
SELECT 절에서 사용 가능, WHERE 절에서는 사용 불가능
(연산 순서를 생각하면 알 수 있다.)

```SQL
SELECT COL AS NAME FROM TABLE;
SELECT COL NAME FROM TABLE; 
-- AS는 생략이 가능하다.
```

### CONCAT
```SQL
SELECT COL1 + COL2 + COL3 FROM TABLE;   -- SQL SERVER
SELECT COL1 || COL2 || COL3 FROM TABLE; -- ORACLE
SELECT CONCAT(COL1, COL2) FROM TABLE;   -- CONCAT은 인수가 무조건 2개이다.
```

### 논리 연산자는 패스

### SQL 연사자 패스

### ESCAPE
만약 '_', '%'같은 데이터가 들어간 것을 조회하고 할때 사용한다.

```SQL
SELECT * FROM TABLE WHERE EMAIL LIKE '@_%' ESCAPE '@'; -- 이러면 _는 문자 취급을 받게된다.
```

### ROWNUM, TOP
ORACLE에서 WHERE절 옆에 ROWNUM
SQL SERVER의 경우 SELECT 옆에 TOP

### NULL의 정의
모르는 값이며 정의되지 않는 값을 말한다.
NULL과 산술연산의 결과는 무조건 NULL이고 논리연산시 FALSE이다.

조건절에 NULL이 들어갈 경우 FALSE를 반환한다.

집계 함수(SUM, COUNT, MIN, MAX ...)사용시 NULL은 데이터 대상에서 제외시킨다.

정렬시에는 ORACLE에서는 NULL을 가장 큰 값으로 생각하고 SQL SERVER에서는 가장 작은 값으로 생각한다.

COL이 NULL이면 0을 반환하고 NULL이 아닐 경우 COL을 반환한다.
NVL(COL, 0);
ISNULL(COL, 0);

COL1이 NULL이면 0을 반환하고 NULL이 아닐 경우 1을 반환한다.
NVL2(COL1, 1, 0);

COL이 0이면 NULL을 반환하고 아니면 COL을 반환한다.
NULLIF(COL, 0);

COL1, COL2, COL3중 NULL이 아닌 첫번째 값을 반환한다.
COALESCE(COL1, COL2, COL3);

### 정렬
SQL의 실행 속도가 느려진다.
가장 마지막에 실행된다.

기본값은 ASC(오름 차순)

```SQL
SELECT COL1, COL2 FROM TABLE ORDER BY COL1 DESC, COL2;
-- COL1을 내림차순으로 정렬하고 만약 같은 값이 있다면 COL2를 오름차순하여 정렬하시오

SELECT COL1, COL2 FROM TABLE ORDER BY 2, 1 DESC;
-- 2는 COL2를 의미히고 1은 COL1을 의미한다. (출력 순서)
-- COL2를 오름차순으로 정렬하고 만약 같은 값이 있다면 COL1을 내림차순하여 정렬하시오.
```

### 숫자 함수
ROUND(222.45, 1) : 소수점 둘쨰자리에서 반올림하여 첫째자리까지 출력
ROUND(225.67, 0) : 소수점 첫째자리에서 반올림하여 정수만 출력

CEIL(ORACLE) / CEILING(SQL SERVER) 올림 함수
FLOOR 버림 함수
파라미터 사용법은 ROUND와 동일하다.

```SQL
SELECT CEIL(22.22) FROM DUAL;  -- 23
-- CEIL은 인수와 가장 가까운 정수 중 큰값을 나타내준다.

SELECT FLOOR(22.22) FROM DUAL; -- 22
-- FLOOR는 인수와 가장 가까운 정수 중 작은값을 나타낸다.
```

### 문자 함수
LOWER, UPPER : 소문자로 대문자로
TRIM, LTRIM, RTRIM : 양쪽 공백 제거, 왼쪽 공백 제거, 오른쪽 공백 제거
LPAD, RPAD : 특정 자리를 정하고 왼쪽 오른쪽의 공백을 채워주는 함수

```SQL
SELECT LPAD(10, 'HELLO', "*") FROM DUAL; -- *****HELLO
SELECT RPAD(10, 'HELLO', ".") FROM DUAL; -- HELLO.....
```

SUBSTR : 원하는 위치에서 얼마큼을 지정하면 잘라서 보여준다.

```SQL
SELECT SUBSTR('HELLO' 2,3) FROM DUAL; -- ELL
```

INSTR : 지정한 문자와 동일한 것이 있는 최초의 위치를 알려준다.

```SQL
SELECT INSTR('HELLO', 'LL') FROM DUALL; -- 3
```

### 날짜 함수
TO_CHAR  : 날짜형 데이터를 문자로 출력해준다.
TO_DATAE : 문자형 데이터를 날짜형으로 출력해준다.

```SQL
SELECT TO_CHAR(SYSDATE, 'YYYY-MM-DD') FROM DUAL; -- 2023-11-01
SELECT TO_DATE('2023-11-01') FROM DUAL;

-- SYSDATE : ORACLE / GETDATE() : SQLSERVER
```

### 조건문
DECODE 구문

```SQL
SELECT DECODE(COL, 'A', 1, 'B', 2, 3) FROM DUAL;
-- COL의 값이 'A'이면 1을 반환 'B'라면 2를 반환 둘다 아니라면 3을 반환
```

CASE WHEN THEN 구문

```SQL
SELECT 
    CASE WHEN COL = 'A' THEN 1
         WHEN COL = 'B' THEN 2
         ELSE 3
    END
FROM TABLE;
```

### 집계함수
NULL이 포함되지 않는다.

|COL1|COL2|COL3|
|------|---|---|
|NULL|NULL|1|
|2|3|2|
|1|NULL|NULL|

```SQL
SELECT SUM(COL1 + COL2 + COL3) FROM DUAL;
-- NULL+ NULL + 1 = NULL
-- 2 + 3 + 2 = 7
-- 1 + NULL + NULL
-- 결과는 7

SELECT SUM(COL1) + SUM(COL2) + SUM(COL3) FROM DUAL;
-- 2 + 1 = 3
-- 3 = 3
-- 1 + 2 = 3
-- 결과는 9
```

### GROUP BY
집약 기능을 가지고 있다.
GROUP BY절에 있는 컬럼만 SELECT절에서 사용할 수 있다.

### JOIN
#### NATURAL JOIN
- 반드시 두 테이블 간의 동일한 이름과 타입을 가진 컬럼이 필요하다.
- JOIN에 이용되는 컬럼은 명시하지 않아도 자동으로 조인에 사용된다.
- 동일한 이름을 갖는 컬럼이 있지만 타입이 다를 경우 오류가 발생한다.
- JOIN하는 테이블 간의 동일 컬럼이 SELECT절에 기술 되도 테이블 이름을 생략해야 한다.

```SQL
SELECT DEPARTMENT_ID DI, DEPARTMENT_NAME DN, LOCATION_ID LI, CITY FROM DEPARTMENT
NATURAL JOIN LOCATIONS
WHERE CITY = 'SEATTLE';
```

#### USING
- USING 절은 조인에서 사용될 컬럼을 지정ㅎ나다.
- NATURAL JOIN과 USING은 함께 사용할 수 없다.
- 조인에 이용되지 않은 동일 이름을 가진 컬럼은 컬럼명 앞에 테이블명을 기술한다.
- 조인 컬럼은 괄호로 묶어서 기술해야 한다.

#### LEFT OUTER JOIN
ANSI 표준 방법과 ORACLE SQL 방법이 있다.
```SQL
-- ORACLE SQL 
SELECT * FROM TABLE A LEFT OUTER JOIN TABLE B ON (A.COL1 = B.COL1);

-- ANSI 표준
SELECT * FROM TABLE A, TABLE B WHERE A.COL1 = B.COL1(+);
```

#### JOIN 순서
예시) FROM A, B, C
우선 A와 B가 JOIN 되고 그 결과와 C가 JOIN 된다.

### 서브 쿼리
SELECT    : 스칼라 서브쿼리
FROM      : 인라인 뷰 (메인 쿼리의 컬럼 사용 가능)
WHERE     : 중첩 서브쿼리
GROUP BY  : 사용 불가능
HAVING    : 중첩 서브쿼리
ORDER BY  : 스칼라 서브쿼리

ANY / SOME : 어느하나라도 만족하면 TRUE
ALL : 전체가 만족하면 TRUE
EXIST : 행이 1개라도 존재하면 TRUE

### 집합 연산자
UNION ALL : 합 집합 / 중복 데이터 존재 O / 정렬 작업 X / 빠르다.
UNION : 합 집합 / 중복 데이터 존재 X / 정렬 작업 O / 느리다.
INTERSECT : 교 집합 / 정렬 작업 O
MINUS : 차 집합 / 정렬 작업 O


### DDL
TRUNCATE : 테이블 내부 구조는 남아 있으나 데이터만 모두 삭제된다.
DROP : 테이블 구조와 데이터 모두 삭제된다.

DELETE : 데이터만 삭제되고 ROLLBACK, COMMIT이 가능하다. 
