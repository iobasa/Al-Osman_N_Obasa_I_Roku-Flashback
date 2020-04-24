import MovieKidsComponent from './MovieKidsComponent.js';
import TvKidsComponent from './TvKidsComponent.js';
import AudioKidsComponent from './AudioKidsComponent.js';


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


        </div>




        </div>
    `,

    
     data: function() {
        return {
            activeComponent: MovieKidsComponent, TvKidsComponent, AudioKidsComponent,
            
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
        }
    }
}