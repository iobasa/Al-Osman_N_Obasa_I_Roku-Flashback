export default {
    name: "MovieComponent",

    props: ['currentuser'],

    template: `
    <section class="bg-movie">

    <div >

        <div class="main-h1">
        <h1>Welcome {{currentuser.username}}! What decade will you travel to today?</h1>
        </div>


    </div>

        <div class="media-info">
            <ul class="media-genres">
            <li>
                <p>Filter by Decade:</p>
                </li>
                <li>
                    <a href="50s" @click.prevent="filterMedia('5')">1950's</a>
                </li>
                <li>
                    <a href="60s" @click.prevent="filterMedia('6')">1960's</a>
                </li>
                <li>
                    <a href="70s" @click.prevent="filterMedia('7')">1970's</a>
                </li>
                <li>
                    <a href="80s" @click.prevent="filterMedia('8')">1980's</a>
                </li>
                <li>
                    <a href="90s" @click.prevent="filterMedia('9')">1990's</a>
                </li>
                <li>
                    <a href="All" @click.prevent="retrieveVideoContent">All</a>
                </li>
            </ul>
        </div>

    <div class="row">
        <div class="col-12">
        <div class=" clearfix">


                    <!-- button -->
            <div>

            <div type="button" data-toggle="modal" data-target="#exampleModalCenter1">
            <img v-for="item in allRetrievedVideos" :src=" 'images/' + item.cover" alt="media thumb" @click="loadNewMovie(item)" class="media-thumb">
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
        filterMedia(year){
            //debugger;

            let url = `./admin/index.php?media=movies&adult=1&year=${year}`;

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

                let url = `./admin/index.php?media=movies&adult=1`;

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