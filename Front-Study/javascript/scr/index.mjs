// import {변수, 함수} from "파일 경로";

import  { pi,sum } from "./math";

console.log(pi, sum(10, 20));

//default export 문법
import message from "./app";    // ./ = 상대 경로

//import 라이브러리이름 from "라이브러리이름"
import lodashLibrary from "lodash";

console.log(lodashLibrary,VERSION);

// console.log(message);
// console.log(sum(10,20))