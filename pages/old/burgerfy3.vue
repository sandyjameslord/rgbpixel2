<template>
    <main id='main'>

        <input type="file" name="photo" @change="onFileSelected"><br>

        <div>BELOW is userFileDisplay</div>
        <div id='disp1'></div>

        <div>BELOW is sliceImageButton</div><br>
        <button id='sliceImageButton' @click='sliceUpImage()'>Slice image</button><br>

        <div>in the div BELOW are the 256 pieces</div>
        <div id='pieces64Container'></div>
        <br>
        <button @click="makeBottomCircles()">Circles</button><button @click="resetUnitsToSquares()">Squares</button>
        <button @click="makeShake()">Shake on</button><button @click="resetAnimationToZero()">Animations off</button>
        <button @click="onUploadBurger">Upload this!</button>
    </main>
</template>

<script>
export default {
  
    data() {
        return { 
            selectedFile: null,
            burgerString: ""
        }
    },
   
    methods: {
        async onUploadBurger() {
            try {
                let data = {
                    burgerString: this.burgerString,
                    burgerTitle: 'notitleyet'
                };
                let response = await this.$axios.$post("/api/burger/burgerPost", data);
                // if (response.success) {
                //     this.$auth.loginWith("local", {
                //         data: {
                //             email: this.email,
                //             password: this.password
                //         }
                //     });
                //     this.$router.push("/");
                // }
            } catch (err) {
                console.log(err)
            }
        },
        onFileSelected(event) {
            this.selectedFile = event.target.files[0];
            this.fileName = event.target.files[0].name;

            let image = new Image();
            image.src = URL.createObjectURL(this.selectedFile);
            image.id = "userSelectedImage";

            this.image = image;
            
            let cont = document.getElementById("disp1");
            cont.appendChild(this.image);

        },

        sliceUpImage(){
            let image = this.image;

            let container = document.getElementById("pieces64Container");
            // let imageDataPieces = [];
            for (let x = 0; x < 16; x++) {
                for (let y = 0; y < 16; y++) {
                    let canvas = document.createElement('canvas');

                    let originalImageWidth = image.width;
                    let originalImageHeight = image.height;
                   
                    // let widthOfOneOldSquare = Math.floor(originalImageWidth / 16);
                    // let heightOfOneOldSquare = Math.floor(originalImageHeight / 16);

                    let widthOfOneOldSquare = originalImageWidth / 16;
                    let heightOfOneOldSquare = originalImageHeight / 16;

                    let sx = widthOfOneOldSquare * x;
                    let sy = heightOfOneOldSquare * y;

                    let context = canvas.getContext('2d');
                    context.drawImage(image, sx, sy,      originalImageWidth,        originalImageHeight, 0,  0,      originalImageWidth,      originalImageHeight);

                    let newImage = new Image(4, 4);
                    newImage.src = canvas.toDataURL();

                    newImage.id = `col${x+1}row${y+1}`;
                    newImage.classList = "newBurger"

                    container.appendChild(newImage);



                    // imageDataPieces.push(canvas.toDataURL())
                }
            }
            // let dataString = "";
            // for (let i = 0; i < imageDataPieces.length; i++) {
            //     let imageName = `img${i+1}`;
            //     let dataURL = imageDataPieces[i];
            //     let keyString = "^^--^^--^^";
            //     dataString += keyString + imageName + "aa--" + dataURL;
            // }
            // console.log("this.burgerString.length", this.burgerString.length)
            // this.burgerString = dataString;
            // console.log("this.burgerString.length", this.burgerString.length)
        },
        makeBottomCircles() {
            let squares = document.getElementsByClassName("newBurger");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.borderRadius = "50%";
            }
        },
        resetUnitsToSquares(){
            let squares = document.getElementsByClassName("newBurger");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.borderRadius = "initial";
            }
        },
        // makeBurgerTakeOverScreen(){
        //     let squares = document.getElementsByClassName("newBurger");
        //     while (document.styleSheets[0].length > 0) {
        //         document.styleSheets[0].removeRule(0);
        //     }
        //     for (let i = 0; i < squares.length; i++) {
        //         let square = squares[i];
        //         let v = square.id;
        //         let row = square.id.substring(3,5)
        //         let col = square.id.substring(8, 10);
        //         // console.log("row, col", row, col);


        //     // let kf = "@keyframes waveAround { 0% { opacity: 0.6; transform: skew(0deg, 0deg); } 50% { opacity: 0.8; transform: skew(30deg, 20deg);; } 100% { opacity: 0.7; transform: skew(-30deg, -20deg);; } }"
        //         let posOrNeg = Math.random() -0.5;
                
        //         // if (posOrNeg > 0) {console.log("positive value")}
        //         let numberFlipper = 1;
        //         // if (posOrNeg < 0) {numberFlipper = -1}
        //         // else {numberFlipper = 1}
        //         let sizeChangeX1 = 0.25;
        //         // let sizeChangeY1 = 0;

        //         let sizeChangeX2 = Math.random() * 3 * numberFlipper;
        //         // let sizeChangeY2 = Math.random() * 10;

        //         let sizeChangeX3 = Math.random() * 4 * numberFlipper;
        //         // let sizeChangeY3 = Math.random() * 20;

        //         let sizeChangeX4 = Math.random() * 6 * numberFlipper;
        //         // let sizeChangeY4 = Math.random() * 40;

        //         let sizeChangeX5 = Math.random() * 10 * numberFlipper;
        //         // let sizeChangeY5 = Math.random() * 60;

        //         let sizeChangeX6 = Math.random() * 17 * numberFlipper;
        //         // let sizeChangeY6 = Math.random() * 90;

        //         let sizeChangeX7 = Math.random() * 13 * numberFlipper;
        //         // let sizeChangeY7 = Math.random() * 100;

        //         let sizeChangeX8 = Math.random() * 5 * numberFlipper;
        //         // let sizeChangeY8 = Math.random() * 90;

        //         let sizeChangeX9 = Math.random() * 1 * numberFlipper;
        //         // let sizeChangeY9 = Math.random() * 30;

        //         // let sizeChangeX10 = 0.25;
        //         // let sizeChangeY10 = 0;

        //         // let kf1 = `@keyframes takeOverScreen${i} { 
        //         //     0% {   height: 0.25em; width: 0.25em; transform: translateX(0px) translateY(0px);} 
        //         //     10% {  height: ${sizeChangeX1}px; width: ${sizeChangeX1}px; transform: translateX(${sizeChangeX1}px) translateY(${sizeChangeX1}px);} 
        //         //     20% {  height: ${sizeChangeX2}px; width: ${sizeChangeX2}px; transform: translateX(${sizeChangeX2}px) translateY(${sizeChangeX2}px);} 
        //         //     30% {  height: ${sizeChangeX3}px; width: ${sizeChangeX3}px; transform: translateX(${sizeChangeX3}px) translateY(${sizeChangeX3}px);} 
        //         //     40% {  height: ${sizeChangeX4}px; width: ${sizeChangeX4}px; transform: translateX(${sizeChangeX4}px) translateY(${sizeChangeX4}px);} 
        //         //     50% {  height: ${sizeChangeX5}px; width: ${sizeChangeX5}px; transform: translateX(${sizeChangeX5}px) translateY(${sizeChangeX5}px);} 
        //         //     60% {  height: ${sizeChangeX6}px; width: ${sizeChangeX6}px; transform: translateX(${sizeChangeX6}px) translateY(${sizeChangeX6}px);} 
        //         //     70% {  height: ${sizeChangeX7}px; width: ${sizeChangeX7}px; transform: translateX(${sizeChangeX7}px) translateY(${sizeChangeX7}px);} 
        //         //     80% {  height: ${sizeChangeX8}px; width: ${sizeChangeX8}px; transform: translateX(${sizeChangeX8}px) translateY(${sizeChangeX8}px);} 
        //         //     90% {  height: ${sizeChangeX9}px; width: ${sizeChangeX9}px; transform: translateX(${sizeChangeX9}px) translateY(${sizeChangeX9}px);} 
        //         //     100% { height: 0.25em; width: 0.25em; transform: translateX(0px) translateY(0px);} 
        //         // `
        //         // let kf2 = `@keyframes takeOverScreen${i} { 
        //         //     0% {   transform: translateX(0px) translateY(0px) scale(0);} 
        //         //     10% {  transform: translateX(${sizeChangeX1}px) translateY(${sizeChangeX1}px) scale(${sizeChangeX1});} 
        //         //     20% {  transform: translateX(${sizeChangeX2}px) translateY(${sizeChangeX2}px) scale(${sizeChangeX2});} 
        //         //     30% {  transform: translateX(${sizeChangeX3}px) translateY(${sizeChangeX3}px) scale(${sizeChangeX3});} 
        //         //     40% {  transform: translateX(${sizeChangeX4}px) translateY(${sizeChangeX4}px) scale(${sizeChangeX4});} 
        //         //     50% {  transform: translateX(${sizeChangeX5}px) translateY(${sizeChangeX5}px) scale(${sizeChangeX5});} 
        //         //     60% {  transform: translateX(${sizeChangeX6}px) translateY(${sizeChangeX6}px) scale(${sizeChangeX6});} 
        //         //     70% {  transform: translateX(${sizeChangeX7}px) translateY(${sizeChangeX7}px) scale(${sizeChangeX7});} 
        //         //     80% {  transform: translateX(${sizeChangeX8}px) translateY(${sizeChangeX8}px) scale(${sizeChangeX8});} 
        //         //     90% {  transform: translateX(${sizeChangeX9}px) translateY(${sizeChangeX9}px) scale(${sizeChangeX9});} 
        //         //     100% { transform: translateX(0px) translateY(0px); scale(0);} 
        //         // `
        //         let kf = "";
        //         if (col < 8){
        //             kf = `@keyframes takeOverScreen${i} { 
        //                 0% {   transform: translateX(0px) scale(1);} 
        //                 10% {  transform: translateX(-${sizeChangeX1}px) scale(${sizeChangeX1});} 
        //                 20% {  transform: translateX(-${sizeChangeX2}px) scale(${sizeChangeX2});} 
        //                 30% {  transform: translateX(-${sizeChangeX3}px) scale(${sizeChangeX3});} 
        //                 40% {  transform: translateX(-${sizeChangeX4}px) scale(${sizeChangeX4});} 
        //                 50% {  transform: translateX(-${sizeChangeX5}px) scale(${sizeChangeX5});} 
        //                 60% {  transform: translateX(-${sizeChangeX6}px) scale(${sizeChangeX6});} 
        //                 70% {  transform: translateX(-${sizeChangeX7}px) scale(${sizeChangeX7});} 
        //                 80% {  transform: translateX(-${sizeChangeX8}px) scale(${sizeChangeX8});} 
        //                 90% {  transform: translateX(-${sizeChangeX9}px) scale(${sizeChangeX9});} 
        //                 100% { transform: translateX(0px) scale(1);} 
        //             `
        //         } else {
        //             kf = `@keyframes takeOverScreen${i} { 
        //                 0% {   transform: translateX(0px) scale(1);} 
        //                 10% {  transform: translateX(${sizeChangeX1}px) scale(${sizeChangeX1});} 
        //                 20% {  transform: translateX(${sizeChangeX2}px) scale(${sizeChangeX2});} 
        //                 30% {  transform: translateX(${sizeChangeX3}px) scale(${sizeChangeX3});} 
        //                 40% {  transform: translateX(${sizeChangeX4}px) scale(${sizeChangeX4});} 
        //                 50% {  transform: translateX(${sizeChangeX5}px) scale(${sizeChangeX5});} 
        //                 60% {  transform: translateX(${sizeChangeX6}px) scale(${sizeChangeX6});} 
        //                 70% {  transform: translateX(${sizeChangeX7}px) scale(${sizeChangeX7});} 
        //                 80% {  transform: translateX(${sizeChangeX8}px) scale(${sizeChangeX8});} 
        //                 90% {  transform: translateX(${sizeChangeX9}px) scale(${sizeChangeX9});} 
        //                 100% { transform: translateX(0px) scale(1);} 
        //             `
        //         }
                    
                    
        //         square.style.animation = "";

        //     //wave
            
        //         document.styleSheets[0].insertRule(kf);
        //         // console.log('square color', square.style.backgroundColor);
        //         if (square.style.backgroundColor != '#FFFFFF' && square.style.backgroundColor != "white" && square.style.backgroundColor != "rgb(255, 255, 255)") {
        //             square.style.animation = `takeOverScreen${i} 3000ms ease-in-out infinite`;
        //         }
        //     // console.log("sq bg color",square.style.backgroundColor);
                
            
        //         // if (v.includes("col01")) {
        //         //     square.style.animation = "takeOverScreen 1000ms ease-in-out infinite";
        //         // } 
        //         // else if (v.includes("col02")) {
        //         //     square.style.animation = "waveAround 1000ms 50ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col03")) {
        //         //     square.style.animation = "waveAround 1000ms 100ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col04")) {
        //         //     square.style.animation = "waveAround 1000ms 150ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col05")) {
        //         //     square.style.animation = "waveAround 1000ms 200ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col06")) {
        //         //     square.style.animation = "waveAround 1000ms 275ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col07")) {
        //         //     square.style.animation = "waveAround 1000ms 325ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col08")) {
        //         //     square.style.animation = "waveAround 1000ms 375ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col09")) {
        //         //     square.style.animation = "waveAround 1000ms 425ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col10")) {
        //         //     square.style.animation = "waveAround 1000ms 450ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col11")) {
        //         //     square.style.animation = "waveAround 1000ms 500ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col12")) {
        //         //     square.style.animation = "waveAround 1000ms 550ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col13")) {
        //         //     square.style.animation = "waveAround 1000ms 575ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col14")) {
        //         //     square.style.animation = "waveAround 1000ms 625ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col15")) {
        //         //     square.style.animation = "waveAround 1000ms 650ms ease-in-out infinite";
        //         // }
        //         // else if (v.includes("col16")) {
        //         //     square.style.animation = "waveAround 1000ms 675ms ease-in-out infinite";
        //         // }



        //         // console.log("background is not black")
        //         // square.style.animation = "waveAround 1000ms ease-in-out infinite";
             









        //     }
        // },
        makeShake() {
            let squares = document.getElementsByClassName("newBurger");
            while (document.styleSheets[0].length > 0) {
                document.styleSheets[0].removeRule(0);
            }
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let v = square.id;
                // console.log("classlist",v)
                // console.log("square.id",square.id)
                // let kf = "@keyframes waveAround { 0% { opacity: 0.6; transform: skew(0deg, 0deg); } 50% { opacity: 0.8; transform: skew(30deg, 20deg);; } 100% { opacity: 0.7; transform: skew(-30deg, -20deg);; } }"
                let randomDistance1 = Math.random() * 0.1 - 0.05;
                let randomDistance2 = Math.random() * 0.1 - 0.05;
                let randomDistance3 = Math.random() * 0.1 - 0.05;
                let randomDistance4 = Math.random() * 0.1 - 0.05;
                let randomDistance5 = Math.random() * 0.1 - 0.05;
                let randomDistance6 = Math.random() * 0.1 - 0.05;
                let randomDistance7 = Math.random() * 0.1 - 0.05;
                let randomDistance8 = Math.random() * 0.1 - 0.05;

                let kf = `@keyframes waveAround${i+1} { 
                    0% { transform: translateX(${randomDistance1}em) translateY(${randomDistance2}em); } 
                    25% { transform: translateX(${randomDistance3}em) translateY(${randomDistance4}em);} 
                    50% { transform: translateX(${randomDistance5}em) translateY(${randomDistance6}em);; } 
                    100% { transform: translateX(${randomDistance7}em) translateY(${randomDistance8}em); } }`
                square.style.animation = "";

                //wave

                document.styleSheets[0].insertRule(kf);
                square.style.animation = `waveAround${i+1} 1000ms ${(i+1)*5}ms ease-in-out infinite`;
                // console.log("sq bg color",square.style.backgroundColor);
                // if (square.style.backgroundColor != "black")
                // {
                //     if (v.includes("col01")) {
                //         square.style.animation = "waveAround 1000ms ease-in-out infinite";
                //     } 
                //     else if (v.includes("col02")) {
                //         square.style.animation = "waveAround 1000ms 50ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col03")) {
                //         square.style.animation = "waveAround 1000ms 100ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col04")) {
                //         square.style.animation = "waveAround 1000ms 150ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col05")) {
                //         square.style.animation = "waveAround 1000ms 200ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col06")) {
                //         square.style.animation = "waveAround 1000ms 275ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col07")) {
                //         square.style.animation = "waveAround 1000ms 325ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col08")) {
                //         square.style.animation = "waveAround 1000ms 375ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col09")) {
                //         square.style.animation = "waveAround 1000ms 425ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col10")) {
                //         square.style.animation = "waveAround 1000ms 450ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col11")) {
                //         square.style.animation = "waveAround 1000ms 500ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col12")) {
                //         square.style.animation = "waveAround 1000ms 550ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col13")) {
                //         square.style.animation = "waveAround 1000ms 575ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col14")) {
                //         square.style.animation = "waveAround 1000ms 625ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col15")) {
                //         square.style.animation = "waveAround 1000ms 650ms ease-in-out infinite";
                //     }
                //     else if (v.includes("col16")) {
                //         square.style.animation = "waveAround 1000ms 675ms ease-in-out infinite";
                //     }

                // } 

            }
        
        },
        resetAnimationToZero(){
            // let burger = document.getElementById("outer");
            // burger.style.animation = "";

            let squares = document.getElementsByClassName("newBurger");          
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.animation = "";
            }
        },

    },
    mounted() {
        
    },
  
}
</script>

<style scoped>

img {
    max-height: 300px;
    max-width: 300px;
}

/* #userSelectedImage {
    height: 300px;
    width: 300px;
    object-fit: cover;
} */

#pieces64Container {
    display: flex;
    height: 64px;
    width: 64px;
    flex-direction: column;
    flex-wrap: wrap;
}

input {
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
