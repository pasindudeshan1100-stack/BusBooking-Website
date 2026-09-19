function searchLocations() {

    const locationId = document.getElementById("locationId").value;

    if (locationId === "") {
        alert("Please enter Location ID");
        return;
    }

    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch(
        `https://api.freeprojectapi.com/api/BusBooking/GetBusLocationById?id=${locationId}`,
        requestOptions
    )
        .then((response) => {

            if (!response.ok) {
                throw new Error("Location not found");
            }

            return response.json();
        })

        .then((result) => {

            console.log(result);

            let location = result;

            let busLocation = document.getElementById("locations");
            busLocation.innerHTML = "";          
            busLocation.innerHTML += `

                <div class="col-sm-6 col-lg-3">

                    <div class="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">

                        <div class="bg-dark text-white p-4">

                            <div class="d-flex justify-content-between align-items-center">

                                <h5 class="mb-0 fw-bold">
                                    ${location.locationName}
                                </h5>

                                <span class="badge rounded-pill text-bg-primary">
                                    ${location.code}
                                </span>

                            </div>

                        </div>


                        <div class="card-body p-4">

                            <div class="mb-3">

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Location ID
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${location.locationId}
                                </h6>

                            </div>


                            <div class="mb-3">

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Location Code
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${location.code}
                                </h6>

                            </div>


                            <div>

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Location
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${location.locationName}
                                </h6>

                            </div>

                        </div>


                        <div class="card-footer bg-white border-0 p-4 pt-0">

                            <button
                                class="btn btn-info text-white fw-semibold me-2"
                                onclick="UpdateLocation(${location.locationId})"
                                type="button">

                                Update

                            </button>


                            <button
                                class="btn btn-danger fw-semibold"
                                onclick="deleteLocation(${location.locationId})"
                                type="button">

                                Delete

                            </button>

                        </div>

                    </div>

                </div>

            `;

        })

        .catch((error) => {

            console.error(error);

            document.getElementById("locations").innerHTML = `

                <div class="col-12">

                    <div class="alert alert-danger">
                        Location not found.
                    </div>

                </div>

            `;
        });
}

function addLocationbtnOnAction() {
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const locationName = document.getElementById("location_name").value;
const code = document.getElementById("code").value;

const raw = JSON.stringify({
  "locationId": 0,
  "locationName": locationName,
  "code": code
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/PostBusLocation", requestOptions)
  .then((response) => response.json())
  .then((result) =>{
     console.log(result); 
      alert("Location added successfully!");
    window.location.href = "locations.html";
    })
  .catch((error) => console.error(error));
}