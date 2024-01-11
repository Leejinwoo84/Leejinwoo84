// 홀수/짝수
let num = Math.ceil(Math.random() * 100);       // 1 ~ 100 사이의 정수값
      /*= Math.random(1 + 100 );    <- Math.random() 0~1 사이의 무한한소수값을 구하는것 같은데 식이 완성되는이유. % 때문?*/
num = Math.random() * 100;
console.log(`${num}`);
num = Math.ceil(num);
console.log(`${num}`);

if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`);            // () :연산, {} : 객체, []: 배열 ?
}

if (num % 2 == 1) {
    console.log(`${num} 은/는 홀수입니다.`);
}

num = Math.ceil(Math.random() * 100);
if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`);
} else {
    console.log(`${num} 은/는 홀수입니다.`);
}

// 조건문 안에 실행문이 한개만 있는 경우에는 { } 생략할 수 있음
num = Math.ceil(Math.random() * 100);
if (num % 2 == 0)
    console.log(`${num} 은/는 짝수입니다.`);
else
    console.log(`${num} 은/는 홀수입니다.`);

// 3항 연산자
num = Math.ceil(Math.random() * 100);
let result = (num % 2 == 0) ? '짝수' : '홀수';      // 조건 ? 참일때의 값 : 거짓일때의 값
console.log(`${num} 은/는 ${result}입니다.`);
