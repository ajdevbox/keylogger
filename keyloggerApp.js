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

  let mykey = e.key;
  let mycode = e.code;
  let mywhich = e.which;

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

// this changes the keyboard colors 
document.addEventListener("keyup", (e) => {
  let keybtn = document.getElementById("esc");
  let mywhich = e.which;

  switch (mywhich) {
    case 27: 
     keybtn = document.getElementById("esc");
      // keybtn.style.backgroundColor = "#d53369";
      //swicth stat,emt working but the if statement within this is not working//
      if ((keybtn.style.backgroundColor = "#fff")) {
        keybtn.style.backgroundColor = "#d53369"
      } else {
        console.log("i am here")
      }
      // 
      break;

    case 20:
      // console.log("");
      keybtn = document.getElementById("20");
      keybtn.style.backgroundColor = "#d53369";
      break;

    case 81:
      // console.log("");
      keybtn = document.getElementById("81");
      keybtn.style.backgroundColor = "#d53369";
      break;

    case 87:
      // console.log("");
      keybtn = document.getElementById("87");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 69:
      // console.log("");
      keybtn = document.getElementById("69");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 82:
      // console.log("");
      keybtn = document.getElementById("82");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 84:
      // console.log("");
      keybtn = document.getElementById("84");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 89:
      // console.log("");
      keybtn = document.getElementById("89");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 85:
      // console.log("");
      keybtn = document.getElementById("85");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 73:
      // console.log("");
      keybtn = document.getElementById("73");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 79:
      // console.log("");
      keybtn = document.getElementById("79");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 80:
      // console.log("");
      keybtn = document.getElementById("80");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 219:
      // console.log("");
      keybtn = document.getElementById("219");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 221:
      // console.log("");
      keybtn = document.getElementById("221");
      keybtn.style.backgroundColor = "#d53369";
      break;
    case 8:
      // console.log("");
      keybtn = document.getElementById("8");
      keybtn.style.backgroundColor = "#d53369";
      break;
  } 

  console.log(`2nd one : ${mywhich}`);
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
