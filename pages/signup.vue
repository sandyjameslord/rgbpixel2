<template>
    <main>
        <h1>Sign Up</h1><br><br>
        <form>
            <label>Your name</label><br>
            <input type="text" v-model="name"><br><br>

            <label>Your email</label><br>
            <input type="email" v-model="email"><br><br>

            <label>Your password</label><br>
            <input type="password" v-model="password"><br><br>

            <button @click="onSignup">Create your account</button>
        </form><br>
        <p>Already have an account? <nuxt-link to="/login">Sign in here</nuxt-link></p>
    </main>
</template>

<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async onSignup() {
            try {
                let data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    userType: "burgerUser"
                };
                let response = await this.$axios.$post("/api/auth/signup", data);
                if (response.success) {
                    this.$auth.loginWith("local", {
                        data: {
                            email: this.email,
                            password: this.password
                        }
                    });
                    this.$router.push("/");
                }
            } catch (err) {
                console.log(err)
            }
        }
    }    
}
</script>

<style scoped>

</style>