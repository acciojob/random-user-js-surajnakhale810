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



const imageElement = document.getElementById('image');
const nameElement = document.getElementById('name');
const ageButton = document.getElementById('age');
const emailButton = document.getElementById('email');
const phoneButton = document.getElementById('phone');
const additionalInfoElement = document.getElementById('additional-info');
const getUserButton = document.getElementById('getUser');

const RANDOM_USER_API = "https://randomuser.me/api/";
let age = 24;
let email = "avi7000201383@gmail.com";
let phone = "(+91) 7000201383";

function getRandomUser(){
     return fetch(RANDOM_USER_API).then(res => res.json()).then(res => res.results[0]);
}

async function renderRandomUser(){
     let randomUser = await getRandomUser();
     imageElement.src = randomUser.picture.large;
     nameElement.innerText = `${randomUser.name.first} ${randomUser.name.last}`;
     age = randomUser.dob.age;
     email = randomUser.email;
     phone = randomUser.phone;
     console.log(randomUser);
}

renderRandomUser();

ageButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = age;
});
emailButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = email;
});
phoneButton.addEventListener('click', _ => {
     additionalInfoElement.innerText = phone;
});

getUserButton.addEventListener('click', renderRandomUser);