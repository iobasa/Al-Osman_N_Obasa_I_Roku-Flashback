// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source
Vue.component('poster', {
  props: {
    vidsource: String,
    thumb: String
  },

  template: `
  <li>
  <a :href="vidsource" v-on:click.prevent="$emit('make-selection')">
    <img :src="'images/' + thumb" alt="movie poster">
  </a>
</li>
`
})
var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user: {
      // isadmin: false,
      // avatar: null,
      // isLoggedIn: true
    }, // separate by a comma


    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],

    videotitle: "video title goes here",
    vidsource: "",
    videodescription: "video description here",

    showDetails: false
  },

  created: function(){
    // vue instance is ready to go, mostly - add some live data to the VM
    console.log('created lifecycle hook fired, go get user data')
    this.fetchUsers();
  },

  methods: { 
    logInOut() {

    },


    setUserPrefs(){
      // this is the preferences control, hit the api when ready (or use a component)
      console.log('set user prefs here');
    },

    userLogin() {
      // call the login route, or load the login component
      console.log('do login / logout on click');

        // this is a ternary statement -> shorthand for if / else
        // the expression evaluates to true or false - if it's true, set the value equal to left of the colon. if it's false, set the value equal to the right.
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },

    loadMovie() { //{name, vidsource, description}
      debugger;
      console.log('show these details: ', movie);

      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

        // make the movie details show up
      this.showDetails = true;
    },

    fetchUsers() {
      // get our user data here and push it back into the VM
      console.log('fetch user data here');

      const url = './admin/index.php?user=true';

      fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        // push our user data into the VM
        this.user = data[0];
      })
      .catch((err) => console.log(err))
    }
  }
});
