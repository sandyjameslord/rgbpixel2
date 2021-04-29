<template>
    <main>
        <div>
            <h1>Profile Page</h1>
            <hr>
            <span>Username: {{ $auth.$state.user.name }}</span>
            <br>
            <br>
            <span>Email: {{ $auth.$state.user.email }}</span>
        </div>
        <br>
        <hr>
        <a href="#" @click='onLogout'>Log out</a>
    </main>
</template>

<script>
export default {
    methods: {
        async onLogout() {
            await this.$auth.logout();
        }
    }
}
</script>