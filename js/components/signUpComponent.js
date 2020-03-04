export default {
    template: `
    <section class="login-form">
    
    <form id="my-form">
        <label for="name">Enter your username:</label>
        <input v-model="user" type="text" name="username" required placeholder="username">

        <label for="password">Enter your password:</label>
        <input v-model="password" type="password" name="password" required placeholder="password">

        <label for="email">Enter your email:</label>
        <input v-model="email" type="email" name="email" required placeholder="email">

        <input @click.prevent="submitUserData" id="sign" type="submit" value="Sign Up">
    </form>
    </section>
    
    `,

    data: function() {
        return {
            user: "",
            password: ""
        }
   },

   methods: {
       submitUserData() {
           //do a fetch here using the POST method
           // refer to the Node mailer example from last sememster to
           // know how to get datafro a form into a fetch dall using POST
           console.log('hit the API Pan is asking for, which could be in the root Vue instance');

           //reset the form on the page
           document.querySelector('form').reset();

           // reset the username and password data in our app
           this.user = "";
           this.password = "";
       }
   },

    created: function() {
        console.log('our splash component rendered');
    }
        
}