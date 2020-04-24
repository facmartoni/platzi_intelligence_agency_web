let = $accordion = document.getElementById("accordion");

let ciaData = null;

fetch(
  "https://app.scrapinghub.com/api/v2/datasets/kdybI1E79Ww/download?format=json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // Work with JSON data here
    ciaData = data;
    cards = ciaData.map(
      (x, idx) => `
    <div class="card">
    <div class="card-header bg-dark" id="heading${idx}">
      <h2 class="mb-0">
        <button
          class="btn btn-outline-light"
          type="button"
          data-toggle="collapse"
          data-target="#collapse${idx}"
          aria-expanded="true"
          aria-controls="collapse${idx}"
        >
          ${x.title}
        </button>
      </h2>
    </div>

    <div
      id="collapse${idx}"
      class="collapse"
      aria-labelledby="heading${idx}"
      data-parent="#accordion"
    >
      <div class="card-body">
        ${x.body}
        <br>
        <br>
        <a href=${x.url} target="_blank">Ver más</a>
      </div>
    </div>
  </div>
    `
    );
    for (i = 0; i < cards.length; i++) {
      $accordion.innerHTML += cards[i];
    }
  })
  .catch((err) => {
    // Do something for an error here
  });
