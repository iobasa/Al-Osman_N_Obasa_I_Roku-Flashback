export default {
    template: `
    <section class="login-form">
    
    <form id="my-form">
        <label for="name">Enter your username:</label>
        <input v-model="input.username" type="text" name="username" required placeholder="username">

        <label for="password">Enter your password:</label>
        <input v-model="input.password" type="password" name="password" required placeholder="password">



        <input @click.prevent="submitUserData" id="sign" type="submit" value="Login">
    </form>
    </section>
    
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
        login() {
            //console.log(this.$parent.mockAccount.username);
            // debugger;
            if (this.input.username != "" && this.input.password != "") {
                // use the FormData object to collect and send our params
                let formData = new FormData();

                formData.append("username", this.input.username);
                formData.append("password", this.input.password);

                let url = "./includes/index.php?user=true";

                fetch(url, {
                    method: "POST",
                    body: formData
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    // tell the app that we have a successful login
                    // and store the user object that we retrieved

                    // true below means that authentication worked
                    // data is the user we retrieved from the DB
                    this.$emit("authenticated", true, data[0]);

                    // push the user to the users page
                    this.$router.replace({name: "users"});                    
                })
                .catch((err) => console.log(err));

            } else {
                console.error("inputs can't be blank!");
            }
        }
    }
        
}