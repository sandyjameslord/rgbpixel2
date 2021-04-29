<template>
    <main id='main'>
        
    </main>
</template>

<script>
export default {
  
    mounted() {
        if (this.$auth.$state.user == null) {
            // let main = document.getElementById("main");
            // main.innerHTML = "Sign up today"
        }
        else {
            this.$router.push("/n-Animate");
        }
    },
  
}
</script>

<style scoped>


</style>
