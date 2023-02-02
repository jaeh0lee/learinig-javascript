// 객체도 일종의 배열처럼 구조에 여러 데이터 조각을 저장하게 해준다.
// 배열은 데이터 순서가 중요하지만 객체는 그렇지 않습니다. 키 : 값 또는 프로퍼티라는걸 이용해서 데이터가 저장됩니다.
// 프로퍼티란 두개의 정보가 모인것으로 레이블과 같이 키(key)와 값(value)로 구성됩니다.

const fitBitDate = {
    totalSteps  : 308727, // 각각의 프로퍼티로 한쌍을 이루고 있습니다.
    totalMiles : 211.7,
    avgCalorieBurn : 5755,
    workoutsThisWeek : '5 of 7',
    avgGoodSleep : '2 : 13'
}

// 즉 프로퍼티는 키와 값으로 이루어저 있고 그 키를 사용해서 데이터를 다시 불러올수 있습니다.

fitBitDate(totalSteps)
