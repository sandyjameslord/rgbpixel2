<template>
    <main>
        <div>
            <h1>Login</h1>
            <form>
                <br>
                <label for="">Email</label><br>
                <input type="email" v-model="email" /><br><br>
                <br>
                <label for="">Password</label><br>
                <input type="password" v-model="password" /><br><br>
                <br>
                <button @click="onLogin">Continue</button><br>
                <br>
            </form>
            <br>
            <!-- <span>Don't have an account? <nuxt-link to="signup">Sign up here</nuxt-link></span> -->
        </div>
    </main>
</template>
<script>
export default {
    middleware: "auth",
    auth: "guest",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        async onLogin() {
            try {
                this.$auth.loginWith("local", { data: {
                    email: this.email,
                    password: this.password
                }});
                this.$router.push("/");
            } catch (err) {
                console.log(err)
            }
        },
    },
}
</script>