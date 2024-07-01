import { detailesFetch } from "./index.js";



const row = document.getElementById('row');
const detailes = document.getElementById('detailes');
const games = document.getElementById('games');



export function dispalyData(list){
    let container =``;
    for (let i = 0; i < list.length; i++) {
        container +=`
        <div class="col-md-4 col-lg-3 col-sm-6">
              <div class="gamess">
                <div id="${list[i].id}" class="card  rounded-2 mb-3">
                    <div class="card-body text-white">
                    <h5 class="card-title">
                        <img
                        src="${list[i].thumbnail}"
                        alt=""
                        class="w-100 rounded-top-3"
                        />
                    </h5>

                    <div
                        class="card-detailes d-flex justify-content-between align-items-lg-baseline"
                    >
                        <p class="card-detailes-title">${list[i].title}</p>
                        <p class="bg-primary text-white p-2 rounded-3 card-detailes-free">Free</p>
                    </div>
                    <div class="card-detailes-text text-center opacity-50">
                        <p>
                        ${list[i].short_description.slice(0,50)}
                        </p>
                    </div>
                    </div>
                    <div class="card-footer bg-transparent">
                    <div
                        class="d-flex justify-content-between align-items-lg-baseline"
                    >
                        <p class="badge genre badge-color m-0">${list[i].genre}</p>
                        <p class="badge platform badge-color m-0">${list[i].platform}</p>
                    </div>
                    </div>
                </div>
              </div>
            </div>
        `
         
    }


    row.innerHTML=container;

    const elments =document.getElementsByClassName(`card`); 


   

  for (let card of elments) {
    card.addEventListener('click',function () {

      const elementId = this.id
      detailesFetch.getDetails(elementId);
      console.log(elementId);

      games.classList.replace('d-block','d-none')
      detailes.classList.replace('d-none','d-block')
      
      
    })
}
}


export function dispalyDetails(list) {
    let container =``;

    
        container = `
        <div class="container my-5">
        <div
          class="header-details-game text-white d-flex justify-content-between align-items-center"
        >
          <p class="py-4 mb-2 details-game">Details Game</p>

          <div class="header-icon">
            <i class="fa fa-xmark"></i>
          </div>
        </div>

        <div class="row text-white">
          <div class="col-sm-4">
            <div class="details-img w-100">
              <img src="${list.thumbnail}" class="w-100" alt="" />
            </div>
          </div>
          <div class="col-sm-8 ">
            <h2 class="details-title">Title: ${list.title}</h2>
            <p>
              <span class="font">Category: </span>
              <span class="badge rounded-2 p-1 bg-primary font2">${list.genre}</span>
            </p>
            <p>
              <span class="font">Platform: </span>
              <span class="badge rounded-2 p-1 bg-primary font2">${list.platform}</span>
            </p>
            <p>
              <span class="font">Status: </span>
              <span class="badge rounded-2 p-1 bg-primary font2">${list.status}</span>
            </p>

            <p class="description">
              ${list.description}
            </p>

            <button class="show-game btn border border-warning text-white">
            <a target="_blank" class="text-decoration-none text-white" href="${list.game_url}">Show Game</a>
              
            </button>
          </div>
        </div>
      </div>`
  

      detailes.innerHTML=container;
      

     const headerIcon = document.querySelector('.header-icon');

     console.log(headerIcon);

     headerIcon.addEventListener('click',function () {
      detailes.classList.replace('d-block','d-none')
      games.classList.replace('d-none','d-block')
     })


}

