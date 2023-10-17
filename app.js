console.log('hi');

// ajax : 비동기적 자바스크리트 동작들
// Asynchronous Javascript and Xml => 일부만 가져오는 기법

// *fetch api를 활용한 post요청 
// ? fetch란 http 파이프라인을 구성하는 요청과 응답을 js로 인터페이스를 제공.
// ? 네트워크 리소스를 비동기적으로 취득하는 것이 가능
// ! 콜백 기반의 XMLHttpRequest와 달리 프로미스 기반의 개선된 개체제인 fetch

// 모르는 것 : promise, XMLHttpRequest


// * get 방식과 post 방식은 작성법이 다르다. 내장함수
// *매개변수 작성할 것들
// method - post, body - post payload, header - 추가 http 요청 헤더
// * fetch()메서드를 활용
// url에 post 요청을 보냄 / 


fetch('https://jsonplaceholder.typicode.com/posts', {
  method : "POST",
  headers : {
    'Accept' : 'application/json',
    "Content-type" : 'application/json'
  },
  body : JSON.stringify({"id" : 78912})
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
// {"ID" : 101}
  
// ! XMLHttpRequest 예시
// const data = JSON.stringify({
//   title: 'foo',
//   body: 'bar',
//   userId: 1
// });

// const xhr = new XMLHttpRequest();

// xhr.onload = () => {
//   if (xhr.status === 201) {
//     const post = JSON.parse(xhr.responseText);
//     console.log(post);
//   } 
// };

// xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(data);
//{title: 'foo', body: 'bar', userId: 1, id: 101}

// ! XMLHttpRequest 예시 2
let xhr = new XMLHttpRequest();
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    console.log(xhr.status); // 201
    console.log(xhr.responseText); // DATA 그대로..
  }};

let data = `{
  "Id": 78912,
  "Customer": "Jason Sweet",
  "Quantity": 1,
  "Price": 18.00
}`;

xhr.send(data);