// 배열 리터럴의 경우 전개 구문을 사용해서 배열과 같이 반복 가능한 객체를 0개 이상의 요소로 확장합니다.

const cats =["blue", "Scout", "Rocket"];
const dog = ["Rusty", "Wyatt"];
const allPets = [...cats, ...dog]