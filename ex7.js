if("serviceWorker" in navigator){
  navigator.serviceWorker.register("./sw.js").then(function(){
      console.log("Service Worker on")
  })
} 
let r=[]

function replace(category){
  jokes(category)
}
function jokes(category){
fetch(`https://api.chucknorris.io/jokes/random?category=${category}`, {
  method: "GET",
  headers: {
  'Content-Type': 'application/json',
  },
  })
  .then(response => response.json())
  .then(response => {
  console.log(response)
  if (r.length < 1) {
    for (i = 0; i < 1; i++) {
        r.push(response.value)
    }
    console.log(r)
    post();
}
else {
    for (i = 0; i < 1; i++) {
        r.shift()
        r.push(response.value)
    }
    post0()
}
  });}
  function post() {
    for (i = 0; i < 1; i++) {
        let h1 = document.createElement("p");
        h1.setAttribute("id", `joke`)
        let dvc1c = document.getElementById(`col1`)
        h1.innerText = r[0];
        dvc1c.appendChild(h1);
    }
}
function post0() {
  for (i = 0; i < 1; i++) {
      let dvc1c = document.getElementById(`joke`)
      dvc1c.innerText=r[0];
  }
}