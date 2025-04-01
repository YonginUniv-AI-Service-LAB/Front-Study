function Mybutton(props) {
  const [isClicked, setIsClicked] = React.useState(false);

  return React.createElement(
      'button',
      { onClick: () => setIsClicked(true) },
      isClicked ? 'Clicked!' : 'Click here!'
  )
}//리액트의 함수 컴포넌트

//리액트 돔에 render 함수를 사용해서 리액트 컴포넌트를 돔 컨테이너에 렌더링하는 코드
//이 코드가 필요한 이유->스크립트 태그를 사용해서 컴포넌트를 가져왔다고 해도, 컴포넌트가 화면에 보이는 것이 아니기 때문에!
const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Mybutton), domContainer);
