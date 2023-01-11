/*
let btnImage = document.getElementById("image")
let btnName = document.getElementById("name")
let btnAge = document.getElementById("age")
let btnEmail = document.getElementById("email")
let btnPhone = document.getElementById("phone")
let additionalInform = document.getElementById("inform")
let btnGetUser = document.getElementById("getUser")

let displayAge = 28
let displayEmail = "surasddd@gmail.com"
let displayPhone = 2457812345

async function myFunction() {
    let response = await fetch("https://randomuser.me/api/")
    let response1 = await response.json();
    let user = await response1.results[0]
   

function myWork(user) {
    btnName.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`

    // btnImage.setAttribute('src',`${user.picture.large}`);   // this also work for random image change.

    btnImage.src = user.picture.large

    displayAge = user.dob.age
    displayEmail = user.email
    displayPhone = user.phone

}
return myWork(user);
}
function ageFun() {
    additionalInform.innerText = displayAge
}
btnAge.addEventListener("click", ageFun)

function emailFun() {
    additionalInform.innerText = displayEmail
}
btnEmail.addEventListener("click", emailFun)

function phoneFun() {
    additionalInform.innerText = displayPhone
}
btnPhone.addEventListener("click", phoneFun)


btnGetUser.addEventListener("click", myFunction)

*/



async function fetchdata() {
    const url = "https://randomuser.me/api/";
    const data = await fetch(url);
    const response = await data.json();
    // console.log(response);
    return response.results[0];
  }
  const showuser = () => {
    fetchdata().then((data) => {
      console.log(data.name.first, data.name.last);
      console.log(data.picture.large);
      document.getElementById(
        "img-box"
      ).innerHTML = `<img src="${data.picture.large}">`;
      document.getElementById(
        "username"
      ).innerHTML = `${data.name.first} ${data.name.last}`;
      const ageButton = document.getElementById("age");
      ageButton.addEventListener("click", () => {
        console.log(data.dob.age);
        document.getElementById("output").innerHTML = `<h1>${data.dob.age}<h1>`;
      });
      const EmailButton = document.getElementById("email");
      EmailButton.addEventListener("click", () => {
        console.log(data.email);
        document.getElementById("output").innerHTML = `<h1>${data.email}<h1>`;
      });
      const PhoneButton = document.getElementById("phone");
      PhoneButton.addEventListener("click", () => {
        console.log(data.phone);
        document.getElementById("output").innerHTML = `<h1>${data.phone}<h1>`;
      });
    });
  };
  
  showuser();
  const newUser =document.getElementById("getUser");
  newUser.addEventListener("click", () => {
    showuser();
  });