// create a couple of component we can request and render
import landingComponent from "./components/landingComponent.js";
import signUpComponent from "./components/signUpComponent.js";
import loginComponent from "./components/loginComponent.js";
import ErrorComponent from "./components/ErrorComponent.js";
// these are the same as Express routes -> router.get('/', ... do something with the request)

(() => {
    let router = new VueRouter({
        routes : [
    { path: '/', name: 'landing', component: landingComponent },
    { path: '/signUp', name: 'signUp', component: signUpComponent },
    { path: '/login', name: 'login', component: loginComponent },
    { path: '*', name: 'error', component: ErrorComponent }
]

});

const vm = new Vue({

    data: {
      authenticated: false,
      administrator: false,

      mockAccount: {
        username: "user",
        password: "password"
      },

      user: [],

      //currentUser: {},
    },

    created: function () {
      // do a localstorage session check and set authenticated to true if the session still exists
      // if the cached user exists, then just navigate to their user home page

      // the localstorage session will persist until logout
    },

    methods: {
      setAuthenticated(status, data) {
        this.authenticated = status;
        // handle implicit type coercion (bad, bad part of JS)
        // turn our admin 1 or 0 back into a number
        this.administrator = parseInt(data.isadmin);
        this.user = data;
      },

      logout() {
        // delete local session

        // push user back to login page
        this.$router.push({ path: "/login" });
        this.authenticated = false;
        this.administrator = false;
      }
    },

    router: router
  }).$mount("#app");

  // add some router security here
  router.beforeEach((to, from, next) => {
    console.log('router guard fired');
    // if the Vue authenticated property is set to false, then
    // push the user back to the login screen (cuz they're not logged in)

    if (vm.authenticated !== false) {
      next("/login");
    } else {
      next();
    }
  })
})();