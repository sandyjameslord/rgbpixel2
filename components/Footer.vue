<template>
    <main>
        <!-- <button @click="switchToPhoto()">Switch :)</button> -->
    </main>
</template>

<script>
export default {
    methods: {
        switchToPhoto(){
            let backgroundImage = document.getElementById("backgroundIMG");
            let body = document.body;
            console.log("body",body)

            console.log("backgroundImage.src",backgroundImage.src)
            if (backgroundImage.alt == "burgered") {
              backgroundImage.src = "/img/forsythia2.png";
              backgroundImage.alt = "unburgered";
            //   body.style.fontFamily = 'Gothic A1';
            }
            else {
              backgroundImage.src = "/img/forsythBurgered.png";
              backgroundImage.alt = "burgered";
            //   body.style.fontFamily = 'Press Start 2P';
            }
        
      },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap');
    * {
        font-family: 'Press Start 2P', cursive;
    }
button {
    position: relative;
    bottom: 2px;
    right: 2px;
}
</style>