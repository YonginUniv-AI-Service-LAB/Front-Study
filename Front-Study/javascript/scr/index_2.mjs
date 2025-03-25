function fetchMenuInfo(){
    let menu;
  return $.get("http://domain.com/api/menu", function(response){
    menu = response;
  });
}

//1. 사용자 정보 요청
fetchUser(); //0.1초
//2. 좌측 메뉴 정보 요청
let menu;
fetchMenuInfo(function(response){
  menu = response;
}); //1시간
//3. 영상 본문 요청
fetchContents;  //1초
//4. UI 표식
renderPageUI(menu); //2초

//총합 : 최소 1시간