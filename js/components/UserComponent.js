export default {
    props: ['liveuser'],

    template: `
    <div class="col-xs-12 col-sm-6 col-md-4 mx-auto">
        <div @click="navToUserHome()">
            <div class="user-profile text-center">
                <img :src="'images/user/' + liveuser.avatar + '.jpg'">
                <p>{{ liveuser.username }}</p>
            </div>
        </div>
    </div>`,

    created: function() {
        if (this.liveuser.avatar === null || this.liveuser.avatar === "null"){
            this.liveuser.avatar = "temp_avatar";
        }
    },

    methods: {
        navToUserHome() {
            //debugger;

            localStorage.setItem("cachedUser", JSON.stringify(this.liveuser));

            //send this user to its home page , and pass the user object to the home page
            this.$router.push({ name: "entry", params: { currentuser: this.liveuser }})
        }
    }

}