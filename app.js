function btnCreateAccountOnAction(){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const fullName=document.getElementById("txtFullName").value;
const phoneNumber=document.getElementById("txtPhoneNumber").value;
const userName=document.getElementById("txtUserName").value;
const emailId=document.getElementById("txtemailId").value;
const password=document.getElementById("txtPassword").value;

const raw = JSON.stringify({
  "userId": 0,
  "phoneNumber": phoneNumber,
  "userName": userName,
  "emailId": emailId,
  "fullName": fullName,
  "role": "string",
  "createdDate": "2026-08-13T06:33:35.810Z",
  "password": password,
  "projectName": "BussBooking",
  "refreshToken": "string",
  "refreshTokenExpiryTime": "2026-08-13T06:33:35.810Z"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/AddNewUser", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    if(result.result){
        window.location.href = "index.html"
    }else{
      alert("Account Created Successfully!");
    }
   
  })
  .catch((error) => {
    console.error(error)
     alert("Account creation failed!");


  });
}
function btnLoginOnAction(){
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const userName=document.getElementById("userName").value;
const password=document.getElementById("txtPassword").value;
const raw = JSON.stringify({
  "userName": userName ,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/login", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    if (result.result === true) {
      alert("Login Success.");
      window.location.href="index.html"
    } else {
      alert("Invalid Username or Password");
    }
  })
  .catch((error) => console.error(error));
}