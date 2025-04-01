function  fetchMenu(callbackFunction) {
  // callbackFunction()   - 바로 실행
  setTimeout(()=> {
    // #2
    let data = { firstMenu: "구독" }
    callbackFunction(data)   // - 5초 뒤에 실행
    return data;
  }, 5000);
  // return { firstMenu: "구독" }
}

let menu;
menu = fetchMenu(function (result) {
  //호출되면 실행될 코드를 넣어주세요
  console.log("5초 뒤 실행", result)
menu = result;
// #1
console.log("출력 결과 : ", menu);
});