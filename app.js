console.log('hi');

// ajax : 비동기적 자바스크리트 동작들
// Asynchronous Javascript and Xml => 일부만 가져오는 기법

// *fetch api를 활용한 post요청 
// ? fetch란 http 파이프라인을 구성하는 요청과 응답을 js로 인터페이스를 제공.
// ? 네트워크 리소스를 비동기적으로 취득하는 것이 가능
// ! 콜백 기반의 XMLHttpRequest와 달리 프로미스 기반의 개선된 개체제인 fetch

// 모르는 것 : promise, XMLHttpRequest

// ! XMLHttpRequest 예시
function reqListener(){
  console.log(this.responseText);
}

const req = new XMLHttpRequest();
// req.addEventListener('load', reqListener);
// req.open("POST","http://www.example.org/example.txt")
// req.send();

req.open('post','http://jsonplaceholder.typicode.com/todos/1');
req.setRequestHeader("Custom-Header1", "hello");
req.setRequestHeader("Custom-Header2", "test");


// * get 방식과 post 방식은 작성법이 다르다. 내장함수
// *매개변수 작성할 것들
// method - post, body - post payload, header - 추가 http 요청 헤더
// * fetch()메서드를 활용
// url에 post 요청을 보냄 / 
// fetch()