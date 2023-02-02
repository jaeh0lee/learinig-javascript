// 배열 안에는 넣고 싶은건 뭐든지 저장을 할수 있습니다.
// 객체 또한 값으로 지정하고 싶은건 뭐든지 저장할수 있습니다 (숫자 , 문자열, 불리언 , 배열 , 객체)

// 배열과 객체를 합치는건 각자 따로 사용할때보다 훨씬 더 강력합니다.
// 가끔 순서가 있는 데이터 인데 배열에 넣으면 안되는 경우도 있습니다.



const comments = [
    {username : "Jaeho" ,text : "lol", votes : 9},
    {username : "Park" ,text : "lol", votes : 2},
    {username : "LEE" ,text : "lol", votes : 3},
    {username : "Fish" ,text : "lol", votes : 5}
]

// 2번쨰 Park 을 찾는법은 comments[1].text 
// 대부분의 데이터와 