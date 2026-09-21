function searchBus() {

    const fromLocation = document.getElementById("fromLocationName").value.trim();
    const toLocation = document.getElementById("toLocationName").value.trim();
    const travelDate = document.getElementById("departureTime").value;

    const url = `https://api.freeprojectapi.com/api/BusBooking/searchBus?fromLocation=${encodeURIComponent(fromLocation)}&toLocation=${encodeURIComponent(toLocation)}&travelDate=${encodeURIComponent(travelDate)}`;

    console.log("FROM:", fromLocation);
    console.log("TO:", toLocation);
    console.log("DATE:", travelDate);
    console.log("URL:", url);

    fetch(url)
        .then(response => response.json())
        .then(result => {

            console.log("API RESPONSE:", result);

            const scheduleTable = document.getElementById("scheduleTable");

            scheduleTable.innerHTML = "";

            if (result.length === 0) {

                scheduleTable.innerHTML = `
                    <div class="col-12">
                        <div class="alert alert-warning text-center">
                            No buses found for this route.
                        </div>
                    </div>
                `;

                return;
            }

            result.forEach(bus => {

                scheduleTable.innerHTML += `
                    <div class="col-lg-4 col-md-6 mb-4">

                        <div class="card shadow-lg border-0 rounded-4 h-100">

                            <div class="card-header bg-dark text-white">
                                <h5 class="mb-0">
                                    ${bus.busName || "EasyRide Bus"}
                                </h5>
                            </div>

                            <div class="card-body">

                                <h6 class="fw-bold">
                                    ${bus.fromLocation || fromLocation}
                                    →
                                    ${bus.toLocation || toLocation}
                                </h6>

                                <hr>

                                <p>
                                    <strong>Departure:</strong>
                                    ${bus.departureTime || "N/A"}
                                </p>

                                <p>
                                    <strong>Arrival:</strong>
                                    ${bus.arrivalTime || "N/A"}
                                </p>

                                <button class="btn btn-primary w-100">
                                    Book Now
                                </button>

                            </div>

                        </div>

                    </div>
                `;
            });

        })
        .catch(error => {
            console.error("ERROR:", error);
        });
}

// ----------------------------------------------------------------------------------------------------

function confirmbtnOnAction() {

    // Form validation
    const form = document.getElementById("bookingForm");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }


    // Get values from HTML
    const custId = document.getElementById("custId").value;
    const scheduleId = document.getElementById("scheduleId").value;
    const bookingDate = document.getElementById("bookingDate").value;

    const passengerName = document.getElementById("passengerName").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const seatNo = document.getElementById("seatNo").value;


    // Convert datetime-local value to ISO date
    const date = new Date(bookingDate);
    const isoBookingDate = date.toISOString();


    // Headers
    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "application/json");


    // JSON data
    const raw = JSON.stringify({

        "bookingId": 0,

        "custId": Number(custId),

        "bookingDate": isoBookingDate,

        "scheduleId": Number(scheduleId),

        "busBookingPassengers": [

            {
                "passengerId": 0,

                "bookingId": 0,

                "passengerName": passengerName,

                "age": Number(age),

                "gender": gender,

                "seatNo": Number(seatNo)
            }

        ]

    });


    console.log("Sending data:");
    console.log(raw);


    // Request options
    const requestOptions = {

        method: "POST",

        headers: myHeaders,

        body: raw,

        redirect: "follow"

    };


    // Show loading message
    document.getElementById("bookingMessage").innerHTML = `

        <div class="alert alert-info">

            Booking is being processed...

        </div>

    `;


    // POST API
    fetch(
        "https://api.freeprojectapi.com/api/BusBooking/PostBusBooking",
        requestOptions
    )

    .then((response) => {

        console.log("Status:", response.status);

        if (!response.ok) {

            throw new Error(
                "API Error: " + response.status
            );

        }

        return response.json();

    })

    .then((result) => {

        console.log("API Response:", result);


        // Get response values
        const bookingId = result.bookingId;
        const responseCustId = result.custId;
        const responseBookingDate = result.bookingDate;
        const responseScheduleId = result.scheduleId;


        // Display success message
        document.getElementById("bookingMessage").innerHTML = `

            <div class="alert alert-success shadow-sm">

                <h5 class="fw-bold mb-3">

                    Booking Added Successfully!

                </h5>

                <hr>

                <p class="mb-2">

                    <strong>Booking ID:</strong>

                    ${bookingId}

                </p>

                <p class="mb-2">

                    <strong>Customer ID:</strong>

                    ${responseCustId}

                </p>

                <p class="mb-2">

                    <strong>Schedule ID:</strong>

                    ${responseScheduleId}

                </p>

                <p class="mb-0">

                    <strong>Booking Date:</strong>

                    ${responseBookingDate}

                </p>

            </div>

        `;


        // Console
        console.log("Booking ID:", bookingId);
        console.log("Customer ID:", responseCustId);
        console.log("Schedule ID:", responseScheduleId);
        console.log("Booking Date:", responseBookingDate);


        // Success alert
        alert(
            "Booking Added Successfully!\n\n" +
            "Booking ID: " + bookingId
        );

    })

    .catch((error) => {

        console.error("Booking Error:", error);


        // Display error
        document.getElementById("bookingMessage").innerHTML = `

            <div class="alert alert-danger shadow-sm">

                <h5 class="fw-bold">

                    Booking Failed!

                </h5>

                <p class="mb-0">

                    ${error.message}

                </p>

            </div>

        `;

    });

}



// Delete button
function deleteBooking() {

    document.getElementById("bookingForm").reset();

    document.getElementById("bookingMessage").innerHTML = "";

}