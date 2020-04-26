export default {
    template: `
        <div class="container">
            <div class="container">
                <h1 class="display-4">Roku Flashback is your source for all retro media!</h1>
                <form class="login-form">
                    <div class="form-row align-items-center col-md-6">

                            <label class="sr-only" for="inlineFormInputName">Name</label>
                            <input v-model="input.username" type="text" class="form-control form-control-lg" id="inlineFormInputName" placeholder="username" required>

                            <label class="sr-only" for="inlineFormPassword">Name</label>
                            <input v-model="input.password" type="password" class="form-control form-control-lg" id="inlineFormPassword" placeholder="password" required>

                            <button v-on:click.prevent="register()" type="submit" class="btn btn-light col-md-12">Register</button>
                    </div>
                </form> 
            </div>
        </div>
     `,

    data() {
        return {
            input: {
                username: "",
                password: ""
            },

        }
    },

    methods: {
        register() {

            if (this.input.username != "" && this.input.password != "" ) {
                // fetch the user from the DB
                // generate the form data
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = `./admin/admin_createuser.php`;

                fetch(url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (typeof data != "object") { // means that we're not getting a user object back
                            console.warn(data);
                            // just for testing
                            alert("authentication failed, please try again");
                        } else {
                            this.$emit("authenticated", true, data);
                            this.$router.replace({ name: "users" });
                        }
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log("A username and password must be present");
            }
        }
    }
}