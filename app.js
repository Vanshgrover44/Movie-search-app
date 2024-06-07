//api when page is reloaded
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//api for images
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
// api when user search for the movie
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moviebox = document.querySelector("#movie-box")


// function for api calling 
const getmovies = async function (api) {
    const response = await fetch(api)
    const data = await response.json()
    // console.log(data )
    showmovies(data.results);
}

//function to show  movies on screen when screen is reloaded
const showmovies = function (data) {
    // console.log(data)
    moviebox.innerHTML = ""
    data.forEach(
        function (item) {
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
            <img src="${IMGPATH+item.poster_path}" alt="" />
            <div class="overlay">
                <div class="title">
                    <h2>rating:</h2>
                    <span>${item.vote_average}</span>
                </div>
                
                <h2>${item.original_title}</h2>
                <h3> language: ${item.original_language}</h3>
                  
                <p>
                ${item.overview}
                </p>
            </div>`
            moviebox.append(box)
        } 
    );
}


// event on input when user enter some input and search the value and show on screen   
document.querySelector("#search").addEventListener(
    "keyup", function(event)
    {
        if (event.target.value !== " ") {
            getmovies(SEARCHAPI + event.target.value);
            
        } else {
            getmovies(APIURL);            
        }
    }
)
getmovies(APIURL);