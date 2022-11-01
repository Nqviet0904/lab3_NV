var search = document.getElementById("demo");
var h1elements = document.getElementsByTagName("h1");
var pelements = document.getElementsByTagName("p");
var h2elements = document.getElementsByTagName("h2");
var text = "";
search.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && search.value.length > 0) {
    for (var i = 0; i < h1elements.length; i++) {
      if (
        h1elements[i].textContent
          .toUpperCase()
          .includes(search.value.toUpperCase())
      ) {
        var htmls = `<h1>${h1elements[i].textContent}</h1>`;
        text = text + htmls;
      }
    }
    for (var i = 0; i < h2elements.length; i++) {
      console.log(
        h2elements[i].innerText.toUpperCase().includes(search.value.toUpperCase())
      );
      if (
        h2elements[i].innerText.toUpperCase().includes(search.value.toUpperCase())
      ) {
        var htmls = `<h2>${h2elements[i].innerText}</h2>`;
        text = text + htmls;
      }
    }
    for (var i = 0; i < pelements.length; i++) {
        console.log(pelements[i].innerText.toUpperCase().includes(search.value.toUpperCase())
      );
      if (
        pelements[i].innerText.toUpperCase().includes(search.value.toUpperCase())
      ) {
        var htmls = `<li>${pelements[i].innerText}</li>`;
        text = text + htmls;
      }
    }
    window.localStorage.setItem("search", text);
    window.location.href = "./timkiem.html";
  }
});
