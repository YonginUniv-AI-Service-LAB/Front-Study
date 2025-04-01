async function init() {

//1.메뉴 선언
  let menu; //undefined
  //2.메뉴 데이터 호출해서 할당
  menu = await fetchMenu();
  //3. 메뉴 데이터 콘솔에 출력
  console.log(menu);
}

init();


async function init() {
  try {
    let menu;
    menu = await fetchMenu();
    await renderPageUI();
    console.log("출력 결과 : ", menu);
  } catch(error) {
    console.log("에러 처리");
  }
}
