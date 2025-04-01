function  fetchMenu(callbackFunction) {
  return new Promise(function(resolve, reject){
      // callbackFunction()   - 바로 실행
  setTimeout(()=> {
    // #2
    let data = { firstMenu: "구독" }

    if (error) {
      reject(error);
    }
    // callbackFunction(error, data)   // - 5초 뒤에 실행
    // return data;
    resolve(data);
  }, 5000);
  // return { firstMenu: "구독" }
  });
}




let menu;

//프로미스 문법으로 작성된 코드
fetchMenu()
.then(function (result){
  //호출되면 실행될 코드를 넣어주세요
  console.log("5초 뒤 실행", result)
  menu = result;
})
.catch(function(error){
  console.log("에러 처리");
  return
});


//콜백 함수로 작성된 코드
fetchMenu(function (error, result) {
  if (error) {
    console.log("에러 처리");
    return;
  }
  //호출되면 실행될 코드를 넣어주세요
  console.log("5초 뒤 실행", result)
menu = result;
// #1
console.log("출력 결과 : ", menu);

rederPageUI(function(response){
  response;
  menu;
  });
});