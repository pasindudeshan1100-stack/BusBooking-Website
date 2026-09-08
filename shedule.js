const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.freeprojectapi.com/api/BusBooking/GetBusSchedules", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);

    let busShedule = document.getElementById("scheduleTable");

    for (let i = 0; i < result.length; i++) {

      busShedule.innerHTML += `
      
      <div class="col-lg-4 col-md-6 mb-4">

        <div class="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">

          <!-- Card Header -->
          <div class="card-header bg-dark text-white border-0 p-4">
            <div class="d-flex justify-content-between align-items-center">

              <div>

                <h4 class="fw-bold mb-0 mt-1">
                  ${result[i].busName}
                </h4>
              </div>

              <span class="badge bg-primary rounded-pill px-3 py-2">
                BUS
              </span>

            </div>
          </div>


          <!-- Card Body -->
          <div class="card-body p-4">

            <!-- Bus Number -->
            <div class="d-flex align-items-center mb-3">

              <div class="bg-primary bg-opacity-10 rounded-3 p-3 me-3">
                <i class="bi bi-bus-front-fill text-primary fs-4"></i>
              </div>

              <div>

                <h6 class="fw-bold mb-0">
                  ${result[i].fromLocationName} - ${result[i].toLocationName}
                </h6>
              </div>

            </div>


            <hr>


            <!-- Time -->
            <div class="row text-center my-4">

              <div class="col-5">
                <small class="text-muted d-block">
                  Departure
                </small>

                <h5 class="fw-bold text-dark mt-2">
                  ${result[i].departureTime}
                </h5>
              </div>


              <div class="col-2 d-flex align-items-center justify-content-center">
                <i class="bi bi-arrow-right-circle-fill text-primary fs-4"></i>
              </div>


              <div class="col-5">
                <small class="text-muted d-block">
                  Arrival
                </small>

                <h5 class="fw-bold text-dark mt-2">
                  ${result[i].arrivalTime}
                </h5>
              </div>

            </div>


            <!-- Book Button -->
            <button class="btn btn-primary w-100 rounded-3 py-2 fw-bold">
              <i class="bi bi-ticket-perforated-fill me-2"></i>
              Book Now
            </button>

          </div>

        </div>

      </div>

      `;
    }

  })
  .catch((error) => console.error(error));
  