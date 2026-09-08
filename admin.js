const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusLocations", requestOptions)
    .then((response) => response.json())
    .then((result) => {

        console.log(result);

        let busLocation = document.getElementById("locations");

        for (let i = 0; i < result.length; i++) {

busLocation.innerHTML += `
    
<div class="col-sm-6 col-lg-3">

    <div class="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">

        <div class="bg-dark text-white p-4">

            <div class="d-flex justify-content-between align-items-center">

                <h5 class="mb-0 fw-bold">
                    ${result[i].locationName}
                </h5>

                <span class="badge rounded-pill text-bg-primary">
                    ${result[i].code}
                </span>

            </div>

        </div>

        <div class="card-body p-4">

            <div class="mb-3">
                <small class="text-uppercase text-secondary fw-semibold">
                    Location ID
                </small>

                <h6 class="fw-bold mt-1">
                    ${result[i].locationId}
                </h6>
            </div>

            <div class="mb-3">
                <small class="text-uppercase text-secondary fw-semibold">
                    Location Code
                </small>

                <h6 class="fw-bold mt-1">
                    ${result[i].code}
                </h6>
            </div>

            <div>
                <small class="text-uppercase text-secondary fw-semibold">
                    Location
                </small>

                <h6 class="fw-bold mt-1">
                    ${result[i].locationName}
                </h6>
            </div>

        </div>

        <div class="card-footer bg-white border-0 p-4 pt-0">

            <button class="btn btn-dark w-100 rounded-pill fw-semibold">
                View Location
            </button>

        </div>

    </div>

</div>

`;

        }
    })
    .catch((error) => console.error(error));




fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusVendors", requestOptions)
  .then((response) => response.json())
  .then((result) => {

    console.log(result);

    let busVendor = document.getElementById("vendors");

    for (let i = 0; i < result.length; i++) {

      busVendor.innerHTML += `
    
<div class="col-sm-6 col-lg-3">

    <div class="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">

        <div class="bg-dark text-white p-4">

            <div class="d-flex justify-content-between align-items-center">

                <h5 class="mb-0 fw-bold">
                    ${result[i].vendorName}
                </h5>


            </div>

        </div>

        <div class="card-body p-4">

            <div class="mb-3">
                <small class=" text-secondary fw-semibold">
                    Vendor ID
                </small>

                <h6 class="fw-bold mt-1">
                    ${result[i].vendorId}
                </h6>
            </div>

            <div class="mb-3">
                <small class=" text-secondary fw-semibold">
                    Email
                </small>
                 <h6 class="fw-bold mt-1">
                    ${result[i].emailId}
                </h6>
            </div>

            <div>
                <small class=" text-secondary fw-semibold">
                    Contact No
                </small>

                <h6 class="fw-bold mt-1">
                    ${result[i].contactNo}
                </h6>
            </div>

        </div>

        <div class="card-footer bg-white border-0 p-4 pt-0">

            <button class="btn btn-dark w-100 rounded-pill fw-semibold">
                View Vendor
            </button>

        </div>

    </div>

</div>

`;

    }
  })
  .catch((error) => console.error(error));




fetch("https://api.freeprojectapi.com/api/BusBooking/GetAllUsers", requestOptions)
    .then((response) => response.json())
    .then((result) => {

        console.log(result);

        let users = document.getElementById("Users");

        for (let i = 0; i < result.data.length; i++) {

            users.innerHTML += `

                <div class="col-sm-6 col-lg-3">

                    <div class="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">

                        <!-- Header -->
                        <div class="bg-dark text-white p-4">

                            <h5 class="mb-0 fw-bold">
                                ${result.data[i].fullName}
                            </h5>

                        </div>


                        <!-- Body -->
                        <div class="card-body p-4">

                            <div class="mb-3">

                                <small class="text-uppercase text-secondary fw-semibold">
                                    User ID
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${result.data[i].userId}
                                </h6>

                            </div>


                            <div class="mb-3">

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Username
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${result.data[i].userName}
                                </h6>

                            </div>


                            <div class="mb-3">

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Email
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${result.data[i].emailId}
                                </h6>

                            </div>


                            <div>

                                <small class="text-uppercase text-secondary fw-semibold">
                                    Contact No
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${result.data[i].phoneNumber}
                                </h6>

                            </div>

                        </div>


                        <!-- Footer -->
                        <div class="card-footer bg-white border-0 p-4 pt-0">

                            <button class="btn btn-dark w-100 rounded-pill fw-semibold">
                                View User
                            </button>

                        </div>

                    </div>

                </div>

            `;
        }

    })
    .catch((error) => console.error(error));