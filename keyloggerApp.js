// console.log("Hello World")

// const key = document.getElementById('key')
// const code = document.getElementById('code')
// document.addEventListener('keyup', (event)=> {
//     key.textContent = event.key
//     code.textContent = event.code
// });
// document.addEventListener('keyup', (event)=> {
//     if () {
//     }
//     key.textContent = event.key
//     code.textContent = event.code
// });
/*====================================*/
// const colorChange = (color) => {
//   document.addEventListener("keyup", (evt) => {
//     let mykey = evt.keyCode;
//     console.log(mykey);

//     const listOfKeys = document.querySelectorAll(".key");

//     listOfKeys.every((element) => {
//       let keybd = element.id;
//       console.log("here i am", element);
//       console.log(keybd);

//       // element.getAttribute(65)

//       if (mykey == keybd) {
//         console.log("a key will turn red");
//         console.log(keybd);
//       }
//     });
//   });

// const  divA = document.getElementById('div-a')

// let colorNew = color
// colorNew = (divA.style.backgroundColor = `${color}`);
// console.log(`this changes the color of the div : ${colorNew}`);
// };

// colorChange(`red`);

document.addEventListener("keyup", (e) => {
  const key = document.getElementById("mykey");
  const code = document.getElementById("mycode");
  const which = document.getElementById("mywhich");

  // let mykey = e.key;
  // let mycode = e.code;
  // let mywhich = e.which;

  key.innerHTML = `${e.key}`;
  key.style.color = "#d53369";
  key.style.paddingTop = "50px";

  code.innerHTML = `${e.code}`;
  code.style.color = "#d53369";
  code.style.paddingTop = "50px";

  which.innerHTML = `${e.which}`;
  which.style.color = "#d53369";
  which.style.paddingTop = "50px";

  // console.log(`you entered : ${mykey}`);
  // console.log(`This is code :${mycode}`);
  // console.log(`The KeyCode :${mywhich}`);
});

/* ==============================================*/

// document.addEventListener("keyup", (evt) => {
//   document.getElementById(mywhich).classList = "esc";

// });

//}

/* ============================================ */

// change the colour of the keyboard on press
document.addEventListener("keyup", (e) => {
  let btnId = e.which;

  // function togglebtn() { // this is the function that changes the colour of the key
  //   document.getElementById(btnId).classList = "escoff";
  //   setTimeout(function () {
  //     document.getElementById(btnId).classList = "esc";
  //   }, 0100);

  // }

  function toggleclass(esc, caps) {
    document.getElementById(btnId).classList = esc;
    setTimeout(function () {
      document.getElementById(btnId).classList = caps;
    }, 0100);
  }
  // function toggleTwo() { // this is the function that changes the colour of the key caps lock
  //   document.getElementById(btnId).classList = "capsoff";
  //   setTimeout(function () {
  //     document.getElementById(btnId).classList = "caps";
  //   }, 0100);

  // }
  // document.getElementById(btnId).classList = "esc"

  switch (
    btnId // this is the switch statement that calls the function
  ) {
    case 20:
      console.log("this is Capslock");
      toggleclass("capsoff", "caps");
      return;

    case 81:
      console.log("this is q");
      //togglebtn();
      break;

    case 87:
      console.log("this is w");
      //togglebtn();
      break;

    case 69:
      console.log("this is e");
      //togglebtn();
      break;

    case 82:
      console.log("this is r");
      //togglebtn();
      break;

    case 84:
      console.log("this is t");
      //togglebtn();
      break;

    case 85:
      console.log("this is u");
      //togglebtn();
      break;

    case 73:
      console.log("this is i");
      //togglebtn();
      break;

    case 79:
      console.log("this is o");
      //togglebtn();
      break;

    case 80:
      console.log("this is p");
      //togglebtn();

      break;

    case 65:
      console.log("this is a");
      //togglebtn();
      break;

    case 68:
      console.log("this is s");
      //togglebtn();
      break;

    case 70:
      console.log("this is d");
      //togglebtn();
      break;

    case 83:
      console.log("this is f");
      //togglebtn();

      break;
    case 13:
      toggleclass("enter", "enteroff");
      return;
  }
});

// /*====================================*/

// // const key = document.getElementById('a')

// // document.addEventListener('keyup', (e) => {

// //     let keyCode = e.which

// //     if ( keyCode == "65" || keyCode == "A" ) {
// //         a.style.backgroundColor ="blue";
// //     } else {
// //         console.log ("not a")
// //     }

// // });

//     // document.addEventListener('keyup', (e) => {

// //     let mykey = e.key

// //     key.style.backgroundColor ="blue";

//     // let mycode = e.code
//     // let mykey = e.which

//     //
//     // console.log(mycode);
//     // console.log(mykey);

//     // if (e.key == "a" || "A") {

// //
