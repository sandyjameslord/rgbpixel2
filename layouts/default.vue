<template>
  <div>
    <img id="backgroundIMG" src="/img/forsythBurgered.png" alt="burgered">
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
    components: {
      Navbar,
      Footer
    },
    methods: {
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');

* {
  font-family: 'Press Start 2P';
  /* font-family: 'Press Start 2P', cursive; */
  padding: 0;
  margin: 0;
}

h1 {
  /* font-family: 'Press Start 2P', cursive; */
}

body {
    overflow-x: hidden;
    overflow-y: visible;
    
}
#backgroundIMG {
    position: absolute;
    top: 0;
    height: 175%;
    width: 150%;
    object-fit: cover;
    z-index: -99;
    opacity: 0.2;
  }

</style>
