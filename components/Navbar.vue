<template>
    <main>
        <header>
            <div id='container'>
                <div id='titleContainer'>
                    <span id='title' class='hovering left'>rgbPixel</span>
                    <div id='questionSwitchContainer'>
                        <nuxt-link id='questionMark' to='/whatIsRGBPixel' class='hovering right'>?</nuxt-link>
                        <span id='switchButton' @click="switchToPhoto()" class='hovering right'>Switch <br> bkgrnd</span>
                    </div>
                    
                </div>
                

                <template id="loggedInContainer" v-if="$auth.$state.loggedIn">
                    <div id='userOptionsTop'>
                        <span id='greeting' class='hovering left'>Id: <span id='userID'> {{ $auth.$state.user.email.length > 10 ? $auth.$state.user.email.substring(0, 10) + "..." : $auth.$state.user.email }} </span></span>
                        <span id='logout' @click='onLogout' class='hovering right'>Logout</span>
                    </div>
                    <div id='userOptionsBottom'>
                        <nuxt-link id='burgerfyLink' to='n-Photo' class='middle hovering'>Photo</nuxt-link>
                        <nuxt-link id='designLink' to='n-Design' class='middle hovering'>Design</nuxt-link>
                        <nuxt-link id='animateLink' to='n-Animate' class='middle hovering'>My rgbPixel</nuxt-link>
                    </div>
                </template>

                <template v-else id="loggedOutContainer">
                    <nuxt-link to="/login" class='hovering'>Click to login</nuxt-link>
                    <nuxt-link to="/signup" class='hovering'>Click to create an account</nuxt-link>
                </template>

                <!-- <button @click="switchToPhoto()">Switch :)</button> -->
            </div>

        </header>
    </main>
</template>

<script>
export default {
    methods: {
         async onLogout() {
            await this.$auth.logout();
        },
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

@keyframes rightSideHighlight {
    0% { transform: translateX(0) scale(1)}
    20% {transform: translateX(-5px) scale(1.1)}
    80% {transform: translateX(-5px) scale(1.1)}
    100% {transform: translateX(0) scale(1)}
}

@keyframes middleHighlight {
    0% { transform: translateX(0) scale(1)}
    20% {transform: translateX(0) scale(1.1)}
    80% {transform: translateX(0) scale(1.1)}
    100% {transform: translateX(0) scale(1)}
}

/* .hovering:hover {
    transform: scale(1.3);
    transition-duration: 275ms;
} */

.right:hover {
    animation: rightSideHighlight 1275ms forwards;
    transform: translateX(20px);
    cursor: pointer;
}

.middle:hover {
    animation: middleHighlight 1275ms forwards;
}

#container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 150px;
    background-color: rgba(199,199,199,0.7);
    justify-content: space-around;
    border-bottom: 4px solid black;
    
    /* background-color: green; */
    /* justify-content: flex-end; */
}
a {
    color: black;
}

#titleContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* background-color: rgba(119,119,119,0.7); */
    height: 70px;
    
}

#title {
    font-size: 2em;
    padding-top: 20px;
    padding-left: 10px;
}

#questionMark {
    font-size: 1.5em;
    background-color: transparent;
    margin: 5px;
    text-align: center;
    /* border-bottom: 1px solid black; */
    text-decoration: none;
    color: black;
}

#questionSwitchContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: rgba(119,119,119,0.5); */
    /* border-left: 1px solid black; */
    cursor: pointer;
}

#loggedInContainer {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
}

#greeting {
    font-size: 1.2em;
}

#userID {
    font-size: 0.9em;
}

#userOptionsTop {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

#userOptionsBottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

#switchButton {
    font-size: 0.9em;
    text-align: center;
    padding-bottom: 4px;
}

#loggedOutContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

</style>