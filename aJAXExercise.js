const $gifZone = $("#gifzone");
const $searchInput = $("#search");

function addGif(gifs) {
  let numResults = gifs.data.length;
  if (numResults) {
    let randomIndex = Math.floor(Math.random() * numResults);
    let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
    let $newGif = $("<img>", {
      src: gifs.data[randomIndex].images.original.url,
      class: "w-100"
    });
    $newCol.append($newGif);
    $gifZone.append($newCol);
  }
}

$("form").on("submit", async function(evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  addGif(response.data);
});

$(".remove").on("click", function() {
  $gifZone.empty();
});