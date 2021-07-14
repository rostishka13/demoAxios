
let counter = 0
function getData() {
   counter +=1
  axios
  .get(`https://swapi.dev/api/people/${counter}`)
  .then(res => {
    showOutput(res),
    showImg(`https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`
    )})
  .catch(err => console.error(err));
}





// Show output in browser

function showOutput(res) {
  document.getElementById('res').innerHTML = `
  
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">

      <pre>${JSON.stringify(res.data['name'], null, 2)}</pre>
      <pre>${JSON.stringify(res.data['hair_color'], null, 2)}</pre>
      <pre>${JSON.stringify(res.data['birth_year'], null, 2)}</pre>

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
// document.getElementById('next').addEventListener('click', incCounter);



// document.getElementById('get_data').addEventListener('click', getAllData);

// document.getElementById('post').addEventListener('click', addTodo);
// document.getElementById('update').addEventListener('click', updateTodo);
// document.getElementById('delete').addEventListener('click', removeTodo);
// document.getElementById('sim').addEventListener('click', getData);
// document.getElementById('headers').addEventListener('click', customHeaders);
// document
//   .getElementById('transform')
//   .addEventListener('click', transformResponse);
// document.getElementById('error').addEventListener('click', errorHandling);
// document.getElementById('cancel').addEventListener('click', cancelToken);