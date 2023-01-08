//your code here
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
    //    console.log(user) 
    // myWork(user);

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

// myFunction()

btnGetUser.addEventListener("click", myFunction)

