const API = "https://rickandmortyapi.com/api/character";
let list = document.querySelector(".list");
let list2 = document.querySelector(".list2");
async function getCharacters() {
  let res = await fetch(API);
  let data = await res.json();
  console.log(data);
  data.results.forEach((elem) => {
    // createTask(elem);
    list.innerHTML += `
    <div class="card">
    <img src="${elem.image}" alt="" />
    <h5>${elem.name}</h5>
    <h5>${elem.gender}</h5>
    </div>
    `;
  });
}
getCharacters();

const API2 = "http://localhost:8000/characters";

// function createTask(b) {
//   console.log(b);
//   fetch(API2, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify(b),
//   });
// }

async function getCharacters2() {
  let res = await fetch(API2);
  let data = await res.json();
  console.log(data);
  data.forEach((elem) => {
    list2.innerHTML += `
    <div class="card">
    <img src="${elem.image}" alt="" />
    <h5>${elem.name}</h5>
    <h5>${elem.gender}</h5>
    </div>
    `;
  });
}
getCharacters2();
