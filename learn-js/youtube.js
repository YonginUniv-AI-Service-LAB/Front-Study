function fetchMenu(callbackFunction){
  return new Promise(function(resolve, reject){
    setTimeout(()=>{
      let data =  {firsrMenu : "구독"}

      if(error){
        reject(error);
      }
      // callbackFunction(error, data);
      // return data;
      resolve(data)
    }, 5000);
  })

  // return  {firsrMenu : "구독"}
}

async function init(){
  try{
    let menu;
    menu = await fetchMenu();
    await renderPageUI();
    console.log("출력 결과 : ", menu);
  } catch(error){
    console.log("에러 처리");
  }

}

let menu;

//프로미스 문법으로 작성된 코드
fetchMenu().then(function(result){
    //호출되면 실행될 코드를 넣어주세요
    console.log("5초 뒤 실행", result);
    menu = result;
  
    console.log("출력 결과 : ", menu);
})
.then(function(result){})
.catch(function(error) {
  console.log("에러 처리");
  return;
});

//콜백 함수로 작성된 코드
fetchMenu(function(error, result){
  if (error){
    console.log("에러 처리");
    return;
  }
  //호출되면 실행될 코드를 넣어주세요
  console.log("5초 뒤 실행", result);
  menu = result;

  console.log("출력 결과 : ", menu);

  renderPageUI(function(error, response){
    response;
    menu;
  });
});

