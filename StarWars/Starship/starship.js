
let counter = 1
function getData() {
   counter +=1
  axios
  .get(`https://swapi.dev/api/starships/${counter}`)
  .then(res => {
    showOutput(res),
    showImg(`https://starwars-visualguide.com/assets/img/starships/${counter}.jpg`
    )})
  .catch(err => console.error(err));
}

// Show output in brows
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">

      <pre>${JSON.stringify(res.data["name"], null, 2)}</pre>
      <pre>${JSON.stringify(res.data["model"], null, 2)}</pre>
      <pre>${JSON.stringify(res.data["manufacturer"], null, 2)}</pre>

    </div>
  </div>
  
`;
}
function showImg(url){
  document.getElementById('img').innerHTML =`
    <img src="${url}" alt="">
  `
}

// Event listeners
document.getElementById('get').addEventListener('click', getData);
