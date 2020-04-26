import FooterComponent from './FooterComponent.js';

export default {
    name: "AudioComponent",

    props: ['currentmedia'],

    template: `
    <section class="bg-music">

    <div class="buttons">
    <div class="button" @click="navToBasics()"> Back to categories </div>

    </div>

    <div>

        <div class="main-h1">
        <h1>Welcome {{currentmedia.username}}! What decade will you travel to today?</h1>
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
            <div>
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

        <div class="media-container row">
        <section class="media-sec col">
        <img :src=" 'images/' + currentMediaDetails.cover" alt="media thumb" class="music-thumb">
        <audio controls :src=" 'audio/' + currentMediaDetails.music_audio"  class="fs-audio"></audio>
            <h4 class="media-title">{{currentMediaDetails.music_title}}</h4>
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
            <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=large&width=77&height=28&appId" width="77" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
          
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" class="twitter-share-button" data-show-count="false"><img src="images/tweet.svg" alt="tweet" class="svg"></a>
            
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

        <footers/>



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

            let url = `./admin/index.php?media=music&adult=1&year=${year}`;

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

                let url = `./admin/index.php?media=music&adult=1`;

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
        },

        navToBasics() {
            //debugger;

            localStorage.setItem("cachedUser", JSON.stringify(this.currentmedia));

            //send this user to its home page , and pass the user object to the home page
            this.$router.push({ name: "entry", params: { currentuser: this.currentmedia }})
        }
    },

    components: {
        footers: FooterComponent ,
      },
}