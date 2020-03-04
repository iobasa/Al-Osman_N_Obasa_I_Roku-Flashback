export default {
        template: `<div> 


        <section id="title">
        <h1 >Welcome to Roku Flashback! Your source for all classic and retro media. Indulge in some nostalgia today! </h1>
        </section>

        <section class="filter">
        <a href=""><img src="images/movies.png" alt="movies"></a>
        <a href=""><img src="images/TV.png" alt="tv"></a>
        <a href=""><img src="images/music.png" alt="music"></a>
        </section>

        <section id="check-out">
        <h2>Check out out library of movies, tv shows, and music ranging from the 50’s-90’s</h2>
        </section>

        <section class="filter-sections">
        <h1 class="filter-head">Movies</h1>
        <a href=""><img src="images/breakfast-tiffanys.png" alt="breaskfast at tiffany's"></a>
        </section>

        <section class="filter-sections">
        <h1 class="filter-head">TV</h1>
        <a href=""><img src="images/fresh-prince.png" alt="freash prince"></a>
        </section>

        <section class="more">
        <h3>...And More!</h3>
        <router-link to="/login" class="login">Login to Watch</router-link>
        </section>

        <section class="filter-sections">
        <h1 class="filter-head">Music</h1>
        <a href=""><img src="images/bees-gees.png" alt="Bees Gees"></a>
        
        </section>

        <section class="more">
        <h3>...And More!</h3>
        <router-link to="/login" class="login">Login to Listen</router-link>
        </section>

        </div>
        `,
}

