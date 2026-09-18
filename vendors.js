function searchVendors() {

    const vendorId = document.getElementById("vendorId").value;

    if (vendorId === "") {
        alert("Please enter Vendor ID");
        return;
    }

    fetch(`https://api.freeprojectapi.com/api/BusBooking/GetBusVendorsById?id=${vendorId}`)
        .then(response => {

            if (!response.ok) {
                throw new Error("Vendor not found");
            }

            return response.json();
        })

        .then(result => {

            console.log(result);

            let vendor = result;

            // API එක array එකක් return කළොත්
            if (Array.isArray(result)) {

                if (result.length === 0) {
                    throw new Error("Vendor not found");
                }

                vendor = result[0];
            }

            document.getElementById("vendors").innerHTML = `

                <div class="col-sm-6 col-lg-3">

                    <div class="card h-100 border-0 shadow-lg rounded-4 overflow-hidden">

                        <div class="bg-dark text-white p-4">

                            <h5 class="mb-0 fw-bold">
                                ${vendor.vendorName}
                            </h5>

                        </div>


                        <div class="card-body p-4">

                            <div class="mb-3">

                                <small class="text-secondary fw-semibold">
                                    Vendor ID
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${vendor.vendorId}
                                </h6>

                            </div>


                            <div class="mb-3">

                                <small class="text-secondary fw-semibold">
                                    Email
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${vendor.emailId}
                                </h6>

                            </div>


                            <div>

                                <small class="text-secondary fw-semibold">
                                    Contact No
                                </small>

                                <h6 class="fw-bold mt-1">
                                    ${vendor.contactNo}
                                </h6>

                            </div>

                        </div>


                        <div class="card-footer bg-white border-0 p-4 pt-0">

                            <button
                                class="btn btn-info text-white fw-semibold"
                                type="button">

                                View

                            </button>


                            <button
                                class="btn btn-danger fw-semibold"
                                type="button"
                                onclick="deleteVendor(${vendor.vendorId})">

                                Delete

                            </button>

                        </div>

                    </div>

                </div>

            `;

        })

        .catch(error => {

            console.error(error);

            document.getElementById("vendors").innerHTML = `

                <div class="col-12">

                    <div class="alert alert-danger">
                        Vendor not found.
                    </div>

                </div>

            `;
        });
}

function updateVendor(vendorId) {
    window.location.href = `vendorform.html`;

    const vendor
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "vendorId": 0,
  "vendorName": "string",
  "contactNo": "string",
  "emailId": "string"
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/PutBusVendors", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
}