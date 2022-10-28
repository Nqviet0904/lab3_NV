var search = document.getElementById("demo");

search.addEventListener("keypress",function(e){
  if (e.keyCode ===13 && search.value.length>0){
    window.location = "./timkiem.html"
  }
})
