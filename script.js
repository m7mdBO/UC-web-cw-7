const movie1 = {
    name : "up",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN9jzeRUXXffZUjApVXUU0yj5nOdS2Hu9nDKe2RcGnurBngSTnPU4wk0q18UDPqoYn6uQ&usqp=CAU",
}
const movie2 = {
    name : "home alone",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF7vRib7xG5OsKXp93d7TGmKudxn_NoLKE44Fw-4n2Qpnq90WoE703WJF5tTJZGmWR464&usqp=CAU",
}
const movie3 = {
    name : "smile",
    img :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfapoXN8ZTfacFj-LQSBO5dvkx8XlWpBzbJFctOqKUzDmMn9A6UDglVtY23qyYxleaDjU&usqp=CAU",
}
let movies = []

movies.push(movie1)
movies.push(movie2)
movies.push(movie3)

let movieContainer = document.getElementById("container");


movies.forEach((movie) => {
    movieContainer.innerHTML += `
    <div class="movie">
        <img src="${movie.img}" alt="${movie.name} picture" />
        <h2>${movie.name}</h2>
    </div>
   `;
});

const randomIndex = Math.floor(Math.random() * movies.length);

const movieTitleElement = document.getElementById("movie-title");
const movieImageElement = document.getElementById("movie-image");

movieTitleElement.textContent = movies[randomIndex].name;
movieImageElement.src = movies[randomIndex].img;
movieImageElement.alt = movies[randomIndex].name;