
/*
    콜백 함수 (Callback Function) 연습하기

    콜백 함수는 파라미터로 함수가 전달되는 함수입니다.
    Javascript에서는 함수를 변수처럼 취급하여 사용할 수 있습니다.
*/



/*
    Q. 변수의 이름이 numberList인 배열을 생성하고, 1, 2, 3, 4, 5 값을 갖도록 초기화 해봅시다.
*/

let numberList = [1, 2, 3, 4, 5];


/*
    Q. Array.prototype.forEach() 메소드를 사용해 numberList의 요소를 하나씩 출력해 봅시다.
*/

numberList.forEach( (element) => {
    console.log(element);
})


/*
    Q. 함수의 이름은 callback1 파라미터는 item이면서 item + 10을 출력하는 함수를 작성해 봅시다.
*/
let callback1 = function(item) {
    console.log(item + 10);
}

/*
    Q. Array.prototype.forEach() 메소드를 사용해 파라미터로 callback1 함수를 넘겨봅시다.
*/

numberList.forEach(callback1);






/*
    Q. 변수의 이름이 numberList2인 배열을 생성하고, 2, 5, 6, 7, 8, 9, 10 값을 갖도록 초기화 해봅시다.
*/

let numberList2 = [2, 5, 6, 7, 8, 9, 10];


/*
    Q. 함수의 이름은 callback2 파라미터는 item이면서 item이 홀수이면 false, 짝수이면 true를 반환하는 함수를 작성해 봅시다.
*/

let callback2 = function(item이면서) {
    if(item이면서 % 2 === 0) {
        return true;
    }

    return false;
}


/*
    Q. Q. Array.prototype.filter() 메소드를 사용해 파라미터로 callback2 함수를 넘겨봅시다.
*/

let evenNumberList = numberList2.filter(callback2);

console.log(evenNumberList);






/*
    Q. 변수의 이름이 stringList인 배열을 생성하고, "Hello", "Goodbye", "Nice to meet you" 값을 갖도록 초기화 해봅시다.
*/

let stringList = ["Hello", "Goodbye", "Nice to meet you"];


/*
    Q. 함수 이름은 callback3 파라미터는 item이면서 item에 " SSAFY" 를 추가하여 반환하는 함수를 작성해 봅시다.
*/
let callback3 = function(item) {
    return item + " SSAFY";
}


/*
    Q. Q. Array.prototype.map() 메소드를 사용해 파라미터로 callback3 함수를 넘겨봅시다.
*/
// 위에서 선언한 함수 map 함수의 인자로 전달
let newStringList = stringList.map(callback3);

console.log(newStringList);
