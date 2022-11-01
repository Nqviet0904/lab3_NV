var search = document.getElementById("demo");
// var respone = fetch('./trangchu.html');
// respone.then((response)=>{
//   response.json();
// })
// .then((data)=>console.log(data))
var data = sessionStorage.getItem('search');
if(data== null){
  console.log("NULL");
}
var result = document.getElementById('result');
result.innerHTML = data;


// var form = document.querySelector('form');

search.addEventListener("keypress",function(e){
  if (e.keyCode ===13 && search.value.length>0){
   window.location = "./timkiem.html"

  }
});

