async function init(){
  // 1. 메뉴 선언
  let menu;
  // 2. 메뉴 데이터 호출해서 할당
  menu = await fetchMenu();
  // 3. 메뉴 데이터 콘솔에 출력
  console.log(menu);
}

init();