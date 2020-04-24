
import AllUsersComponent from './components/AllUsersComponent.js';
import LoginComponent from './components/LoginComponent.js';
import UserHomeComponent from './components/UserHomeComponent.js';
import EntryPointComponent from './components/EntryPointComponent.js';
import MovieComponent from './components/MovieComponent.js';
import TvComponent from './components/TvComponent.js';
import AudioComponent from './components/AudioComponent.js';

(() => {
  let router = new VueRouter({
    // set routes
    routes: [
      // { path: '/', redirect: { name: "login" } },
      { path: '/login', name: "login", component: LoginComponent },
      { path: '/users', name: 'users', component: AllUsersComponent },
      { path: '/userhome', name: 'home', component: UserHomeComponent, props: true },
      { path: '/entry', name: 'entry', component: EntryPointComponent, props: true },
      { path: '/movie', name: 'movie', component: MovieComponent},
      { path: '/tv', name: 'tv', component: TvComponent},
      { path: '/music', name: 'music', component: AudioComponent},
    ]
  });

  const vm = new Vue({
    data: {
      authenticated: false,
      administrator: false,
      user: [],

      //currentUser: {},
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        this.user = data;
      },

      logout() {
        // push user back to login page
        this.$router.push({ name: "login" });
        this.authenticated = false;

        if (localStorage.getItem("cachedUser")) {
          localStorage.removeItem("cachedUser");
        }
      }
    },

    created: function() {
        //check for a user in localStorage
        // if we've logged in before, this should be here until we annually remove

        if (localStorage.getItem("cachedUser")) {
          let user = JSON.parse(localStorage.getItem("cachedUser"));

          this.authenticated = true;

          this.$router.push({ name: "home", params: { currentuser: user }});
        } else {
          this.$router.push({ name: "login" });
        }
    },

    router: router
  }).$mount("#app");

  // router.beforeEach((to, from, next) => {
  //   //console.log('router guard fired!', to, from, vm.authenticated);

  //   if (vm.authenticated == false) {
  //     next("/login");
  //   } else {
  //     next();
  //   }
  // });
})();