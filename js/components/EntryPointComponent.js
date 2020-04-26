import MovieKidsComponent from './MovieKidsComponent.js';
import TvKidsComponent from './TvKidsComponent.js';
import AudioKidsComponent from './AudioKidsComponent.js';
import FooterComponent from './FooterComponent.js';


export default {
    name: "TheEntryPointComponent",

    props: ['currentuser'],

    template: `
    <div>
    
        <div v-if="currentuser.admin === '1'">
    
    
        <!-- Modal -->
    <div class="modal fade " id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
    <div class="modal-content" role="document">
    <div id="modal-facts___BV_modal_header_" class="modal-header">
        <div type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </div>
      </div>
    <div class="modal-content modal-body">
      
    <div class="adult-alert">
      <h1>Hi There! {{currentuser.username}}, this is an adult account!<br><br> If you are a kid please navigate to a kids account by clicking <router-link class="btn btn-link close alert-type" data-dismiss="modal" to="/users" role="button">Here!</router-link></h1>
    
      
    
      <p>If not, please enjoy!!</p>
    </div>
    
    </div>
    </div>
    </div>
    </div>
    
    
    
                <section id="title">
                <h1>Check out out library of movies, tv shows, and music ranging from the 50’s-90’s!</h1>
                </section>

                
                <p class="category text-center">Pick your choice of Media</p>
    
                <section class="filter row">
    
                <section class="icon text-center col-sm">
                <div @click="navToMovie()"><img src="images/movie-icon.png" alt="movies"></div>
                <p>Movies</p>
                </section>
    
                <section class="icon text-center col-sm">
                <div @click="navToTv()"><img src="images/tv-iconKids.png" alt="TV"></div>
                <p>TV</p>
                </section>
    
                <section class="icon text-center col-sm">
                <div @click="navToMusic()"><img src="images/music-icon.png" alt="Music"></div>
                <p>Music</p>
                </section>
    
                </section>
    
        </div>
    
    
    
    
    
    
    
    
    
        <div v-else>
    
        <div class="mainkids-h1">
        <h1>Welcome {{currentuser.username}}! What decade will you travel to today?</h1>
    
        <p class="text-center">Media Categories</p>
        </div>
    
    
    <section class="filter row">
    
    <section class="icon-kids text-center col-sm" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                        
                <img class="login" v-bind:src="[media.iconClass]" alt="movies">
                
                
                <p class="d-none d-md-block">{{ media.description }}</p>
                
            
            </section>
    
            </section>
    
    
    <component :is="this.activeComponent"></component>
    
        <footers/>
    
    
        </div>
        </div>
    
    
    
    
        
    
    </div>
    `,

    
     data: function() {
        return {
            activeComponent: MovieKidsComponent,
            
            mediaTypes: [
                { iconClass: "images/movie-icon.png", description: "Movies", component: MovieKidsComponent },
                { iconClass: "images/tv-iconKids.png", description: "TV", component: TvKidsComponent },
                { iconClass: "images/music-icon.png", description: "Music", component: AudioKidsComponent },
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        },

        navToMovie() {
            //debugger;

            localStorage.setItem("cachedUser", JSON.stringify(this.currentuser));

            //send this user to its home page , and pass the user object to the home page
            this.$router.push({ name: "movie", params: { currentmedia: this.currentuser }})
        },

        navToTv() {
            //debugger;

            localStorage.setItem("cachedUser", JSON.stringify(this.currentuser));

            //send this user to its home page , and pass the user object to the home page
            this.$router.push({ name: "tv", params: { currentmedia: this.currentuser }})
        },

        navToMusic() {
            //debugger;

            localStorage.setItem("cachedUser", JSON.stringify(this.currentuser));

            //send this user to its home page , and pass the user object to the home page
            this.$router.push({ name: "music", params: { currentmedia: this.currentuser }})
        },
    },

    components: {
        footers: FooterComponent ,
      },
}