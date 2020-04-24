export default {
    name: "TheEntryPointComponent",

    props: ['currentuser'],

    template: `
        <div class="container">

        <div v-if="currentuser.admin === '1'">
                <section id="title">
                <h1>Check out out library of movies, tv shows, and music ranging from the 50’s-90’s!</h1>
                </section>

                <section class="filter row">

                <section class="icon text-center col-sm">
                <router-link to="/movie" class="login"><img src="images/filmstrip-icon.png" alt="movies"></router-link>
                <p>Movies</p>
                </section>

                <section class="icon text-center col-sm">
                <router-link to="/tv" class="login"><img src="images/tv-icon.png" alt="TV"></router-link>
                <p>TV</p>
                </section>

                <section class="icon text-center col-sm">
                <router-link to="/music" class="login"><img src="images/music-note.png" alt="Music"></router-link>
                <p>Music</p>
                </section>

                </section>

        </div>








        <div v-else>

        <div class="main-h1">
        <h1>Welcome {{currentuser.username}}! What decade will you travel to today?</h1>
        </div>

                <section class="filter row">

                <section class="icon text-center col-sm">
                <a href="movie" class="login" @click.prevent="filterMedia('movies')"><img src="images/filmstrip-icon.png" alt="movies"></a>
                <p>Movies</p>
                </section>

                <section class="icon text-center col-sm">
                <a href="movie" class="login" @click.prevent="filterMedia('tv')"><img src="images/tv-icon.png" alt="movies"></a>
                <p>TV</p>
                </section>

                <section class="icon text-center col-sm">
                <a href="movie" class="login" @click.prevent="filterMedia('music')"><img src="images/music-note.png" alt="movies"></a>
                <p>Music</p>
                </section>

                </section>


            
                <div class="row">
                    <div class="col-12">
                    <div class=" clearfix">
            
            
                                <!-- button -->
                        <div>
            
                        <div type="button" data-toggle="modal" data-target="#exampleModalCenter1">
                        <div>
                        <img v-for="item in allRetrievedVideos" :src=" 'images/' + item.cover" alt="media thumb" @click="loadNewMovie(item)">
                        </div>
                        </div>
            
                        </div>

                        
            
            
                    
                    </div>
                    </div>
                </div>
            
                <!-- Modal -->
                <div class="modal fade " id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content" role="document">
                    <div id="modal-facts___BV_modal_header_" class="modal-header">
                        <div type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </div>
                    </div>
                    <div class="modal-content modal-body">
                    
                    
                    <div class="row">
                    <div class="media-container">
                        <video autoplay controls muted :src=" 'video/' + currentMediaDetails.movies_trailer"  class="fs-video"></video>
                    </div>
            
                    <div class="media-container row">
                    <section class="media-sec col">
            <h4 class="media-title">{{currentMediaDetails.movies_title}} ({{currentMediaDetails.movies_runtime}})</h4>
            <span class="media-time">{{currentMediaDetails.movies_genre}}</span><br>
            <span class="media-time">Rated: {{currentMediaDetails.movies_rating}}</span>
            <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
            </section>
            
                        <section class="media-sec col">
                        
                        <section class="stars row">
                        <p>Rating:</p>
                        <img class="col-sm-1" src="images/star.png" alt="star">
                        <img class="col-sm-1" src="images/star.png" alt="star">
                        <img class="col-sm-1" src="images/star.png" alt="star">
                        <img class="col-sm-1" src="images/star.png" alt="star">
                        <img class="col-sm-1" src="images/star-half.png" alt="star">
                        </section>
            
                        <p>Like:</p>
            
                        <p>Share:</p>
            
                        <label for="inputComment">Comment:</label>
                <input type="text" class="form-control" id="inputComment" placeholder="Write a Comment..">
                <button type="button" class="btn btn-warning">Submit</button>
                        
                        </section>
                    </div>
            
                    
                </div>
                    
                    </div>
                    </div>
                    </div>
                    </div>
            
            
            
                </section>


        </div>




        </div>
    `,

    
    data: function () {
        return {
            currentMediaDetails: {},
            allRetrievedVideos: []
        }
    },

    created: function(){
        this.retrieveVideoContent();
    },

    methods: {
        filterMedia(tbl){
            //debugger;

            let url = `./admin/index.php?media=${tbl}&adult=0`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })
        },


        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            //debugger;

                let url = `./admin/index.php?media=movies&adult=0`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("cachedVideo", JSON.stringify(data));
                    
                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })


            
        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    }
}