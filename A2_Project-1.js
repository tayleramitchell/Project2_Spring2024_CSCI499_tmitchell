/// Function to call the API search
f/// Function to call the API search
function apiSearch() {
    $.ajax({
        type: 'GET',
        dataType: "jsonp",
        url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyDulRZLxn06o16k0CCza9D4Qr_E_Ny1OFYcx=46e2a3afd41414c8b=" + $("#query").val(),
        success: function(result) {
            console.log('data: ', result);
            var searchOutput = '';
            var len = result.items.length;
            for (var i = 0; i < len; i++) {
                searchOutput += `<p><a href="${result.items[i].title}">${result.items[i].link}</a>: ${result.items[i].snippet}</p>`;
            }


            $("#searchResults").html(searchOutput);
        }
    });
}// Function to call the API search




  function toggleFade() {
    var content = document.getElementById("content");
    content.classList.toggle("hidden");
  }
  function ChangeBColor() {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
