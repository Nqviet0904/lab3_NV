var inputsearch = document.getElementById("input-search");
var btnsearch = document.getElementById('btn-search')
var h1elements = document.getElementsByTagName("h1");
var pelements = document.getElementsByTagName("p");
var h2elements = document.getElementsByTagName("h2");
var xuli = function() {
var text = "";
  for (var i = 0; i < h1elements.length; i++) {
    if (
      h1elements[i].textContent
        .toUpperCase()
        .includes(inputsearch.value.toUpperCase())
    ) {
      var htmls = `<h1>${h1elements[i].textContent}</h1>`;
      text = text + htmls;
    }
  }
  for (var i = 0; i < h2elements.length; i++) {
    console.log(
      h2elements[i].innerText.toUpperCase().includes(inputsearch.value.toUpperCase())
    );
    if (
      h2elements[i].innerText.toUpperCase().includes(inputsearch.value.toUpperCase())
    ) {
      var htmls = `<h2>${h2elements[i].innerText}</h2>`;
      text = text + htmls;
    }
  }
  for (var i = 0; i < pelements.length; i++) {
      console.log(pelements[i].innerText.toUpperCase().includes(inputsearch.value.toUpperCase())
    );
    if (
      pelements[i].innerText.toUpperCase().includes(inputsearch.value.toUpperCase())
    ) {
      var htmls = `<li>${pelements[i].innerText}</li>`;
      text = text + htmls;
    }
  }
  window.sessionStorage.setItem("search", text);
}
inputsearch.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 && inputsearch.value.length > 0) {
    xuli();
    window.location.href = "./timkiem.html";
  }
});
btnsearch.addEventListener('click',function(){
  if (inputsearch.value.length >0){
  console.log("abc")

    xuli();
  console.log("loi")

    window.location.href = "./timkiem.html"
  }
})
