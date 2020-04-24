import MovieKidsComponent from './MovieKidsComponent.js';
import TvKidsComponent from './TvKidsComponent.js';
import AudioKidsComponent from './AudioKidsComponent.js';

export default {
    name: "TheUserHomeComponent",

    props: ['currentuser'],

    template: `
<div class="container">


<!-- show media icons here -->
<div class="row"> <!-- 2-up for nav and media info -->
<section class="filter row">


            <li v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
            <section class="icon-kids text-center col-sm">
                <a href="movie" @click.prevent="filterMedia('movies')"><img v-bind:src="[media.iconClass]" alt="movies"></a>
                
                
                <p class="d-none d-md-block">{{ media.description }}</p>
                </section>
            </li>

            </section>

</div>

<component :is="this.activeComponent"></component>
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
        }
    }
}