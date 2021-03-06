export default {
    name: "MovieKidsComponent",

    template: `
    <section>

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
            <img class="star col-sm-5" src="images/rating.png" alt="star">
            </section>
            <br>

            <section class="like row">
            <p>Like:</p>

<div class="bs-example">
    <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-link">
            <input type="radio" name="options" autocomplete="off" checked> <img tabindex="1" src="images/thumbs-up-icon.svg" alt="star">
        </label>
        <label class="btn btn-link active">
            <input type="radio" name="options" autocomplete="off"> <img tabindex="1" src="images/thumbs-down-icon.svg" alt="star">
        </label>
    </div>
    </div>

            </section>

            <section class="row">
            <p>Share:</p> 

            <a class="btn btn-link" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            <img  src="images/share-icon.svg" alt="star"> 
            </a>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
            
            <h1 class="share">Hey there! Sorry you can't share!</h1>
            
            </div>
          </div>
          



</section>
        
            

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

            let url = `./admin/index.php?media=movies&adult=0&year=${year}`;

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