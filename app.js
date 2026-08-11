const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));