import { dispalyData , dispalyDetails } from "./ui.js";

const shooter =document.getElementById('shooter');
const mmorpg =document.getElementById('mmorpg');
const sailing =document.getElementById('sailing');
const permadeath =document.getElementById('permadeath');
const superhero =document.getElementById('superhero');
const pixel =document.getElementById('pixel');






// async function getgames(category) {
// try{
//     const options = {
//         method: 'GET',
//         headers: {
//             'x-rapidapi-key': 'c52fd16a48mshe4d41046f72a834p1f30b0jsn9edbfe17af35',
//             'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };

//     loading.classList.replace('d-none','d-flex')

//     const response= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
//     const finalData =await response.json();


//     //  console.log(finalData[0].id);


//     dispalyData(finalData)
//     loading.classList.replace('d-flex','d-none')
// }
    
//     catch (error) {
//         console.error(error);
//     }

// }

class Gamefetch {
    constructor() {
        this.apiKey = 'c52fd16a48mshe4d41046f72a834p1f30b0jsn9edbfe17af35';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
        this.loading = document.querySelector('.loading');
    }

    async getGames(category) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': this.apiKey,
                    'x-rapidapi-host': this.apiHost
                }
            };

            this.loading.classList.replace('d-none', 'd-flex');

            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
            const finalData = await response.json();

            // this.displayData(finalData);
            console.log(finalData);
            dispalyData(finalData)
            this.loading.classList.replace('d-flex', 'd-none');
        } catch (error) {
            console.error(error);
        }
    }

    displayData(data) {
       
        console.log(data);
    }
}


const GameFetch = new Gamefetch();
GameFetch.getGames(mmorpg.innerHTML.toLowerCase()); 


// getGames(mmorpg.innerHTML.toLowerCase())

// mmorpg.addEventListener('click',function () {
//     mmorpg.classList.add('active');
//     shooter.classList.remove('active');
//     sailing.classList.remove('active');
//     permadeath.classList.remove('active');
//     superhero.classList.remove('active');
//     pixel.classList.remove('active');
//     GameFetch.getGames(mmorpg.innerHTML.toLowerCase());
// })




// shooter.addEventListener('click' , function () {
//     mmorpg.classList.remove('active');
//     shooter.classList.add('active');
//     sailing.classList.remove('active');
//     permadeath.classList.remove('active');
//     superhero.classList.remove('active');
//     pixel.classList.remove('active');
//     GameFetch.getGames(shooter.innerHTML.toLowerCase());
// })



// sailing.addEventListener('click' , function () {
//     mmorpg.classList.remove('active');
//     shooter.classList.remove('active');
//     sailing.classList.add('active');
//     permadeath.classList.remove('active');
//     superhero.classList.remove('active');
//     pixel.classList.remove('active');
    
//     GameFetch.getGames(sailing.innerHTML.toLowerCase());
    
 


// permadeath.addEventListener('click' , function () {
//     mmorpg.classList.remove('active');
//     shooter.classList.remove('active');
//     sailing.classList.remove('active');
//     permadeath.classList.add('active');
//     superhero.classList.remove('active');
//     pixel.classList.remove('active');
//     GameFetch.getGames(permadeath.innerHTML.toLowerCase());

    



// superhero.addEventListener('click' , function () {
//     mmorpg.classList.remove('active');
//     shooter.classList.remove('active');
//     sailing.classList.remove('active');
//     permadeath.classList.remove('active');
//     superhero.classList.add('active');
//     pixel.classList.remove('active');
//     GameFetch.getGames(superhero.innerHTML.toLowerCase());
    



// pixel.addEventListener('click' , function () {
//     mmorpg.classList.remove('active');
//     shooter.classList.remove('active');
//     sailing.classList.remove('active');
//     permadeath.classList.remove('active');
//     superhero.classList.remove('active');
//     pixel.classList.add('active');
//     GameFetch.getGames(pixel.innerHTML.toLowerCase());
    


function handleCategoryClick(clickedCategory) {
    const categories = [mmorpg, shooter, sailing, permadeath, superhero, pixel];
    categories.forEach(category => category.classList.remove('active'));
    clickedCategory.classList.add('active');
    GameFetch.getGames(clickedCategory.innerHTML.toLowerCase());
}


mmorpg.addEventListener('click', () => handleCategoryClick(mmorpg));
shooter.addEventListener('click', () => handleCategoryClick(shooter));
sailing.addEventListener('click', () => handleCategoryClick(sailing));
permadeath.addEventListener('click', () => handleCategoryClick(permadeath));
superhero.addEventListener('click', () => handleCategoryClick(superhero));
pixel.addEventListener('click', () => handleCategoryClick(pixel));





// export async function getDetailes(id) {
//     try {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': 'c52fd16a48mshe4d41046f72a834p1f30b0jsn9edbfe17af35',
//                 'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//             }
//         };
//         loading.classList.replace('d-none','d-flex')

//         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
//         const finalData = await response.json();

// console.log(finalData);
// console.log(finalData.thumbnail);
// dispalyDetails(finalData)
// loading.classList.replace('d-flex','d-none')


//     } catch (error) {
//         console.error(error);

//     }
    
// }

    
    


class Detailesfetch {
    constructor() {
        this.apiKey = 'c52fd16a48mshe4d41046f72a834p1f30b0jsn9edbfe17af35';
        this.apiHost = 'free-to-play-games-database.p.rapidapi.com';
        this.loading = document.querySelector('.loading');
    }

    async getDetails(id) {
        try {
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': this.apiKey,
                    'x-rapidapi-host': this.apiHost
                }
            };

            this.loading.classList.replace('d-none', 'd-flex');

            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
            const finalData = await response.json();

            this.displayDetails(finalData);
            console.log(finalData);
            dispalyDetails(finalData)
            this.loading.classList.replace('d-flex', 'd-none');
        } catch (error) {
            console.error(error);
        }
    }

    displayDetails(details) {
        
        console.log(details);
    }
}

export const detailesFetch = new Detailesfetch();


