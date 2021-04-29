<template>
    <main id='main'>

        <div id='number'>0</div>
        
        <!-- <button id='primaryImage' @click='sliceUpImage()'>Slice image</button> -->
        <button @click="resetAnimationToZero()">resetAnimationToZero</button>
        <button @click="resetUnitsToSquares()">resetUnitsToSquares</button>
        <button @click="makeBurgerTakeOverScreen()">makeBurgerTakeOverScreen</button>
        <button @click="makeBottomCircles()">makeBottomCircles</button>
        <button @click="makeShake()">Shake it!</button>
        <!-- <button @click="waveFlagCooler()">waveFlagCooler</button> -->
        
        <!-- <button @click="moveBottomDownwardsInLoop()">moveBottomDownwardsInLoop</button> -->
        <!-- <button @click="moveBottomUpwardsInLoop()">moveBottomUpwardsInLoop</button> -->
        <!-- <button @click="makeCircles()">makecircles</button> -->
        <div id='initialCont'></div>
    
        <div id='imgContainer'></div>    

    </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
      try {
          let response = await $axios.$get("/api/burgers");
        //   console.log(response);

          return {
            burgers: response.burgers
          }
      } catch (err) {
          console.log(err.message)
      }
    },
    data() {
        return {
            colorChoice: "#000001",
            burgerString: "",
            burgerTitle: "",
        }
    },
   
    methods: {
        sliceUpImage(){
            let container = document.getElementById("imgContainer");

            for (let x = 0; x < 16; x++) {
                for (let y = 0; y < 16; y++) {
                    let canvas = document.createElement('canvas');
                    canvas.width = 4;
                    canvas.height = 4;
                    let context = canvas.getContext('2d');

                    context.drawImage(this.image, x * 4, y * 4,      4,        4, 0,  0,      4,       4);

                    let newImagePart = document.createElement('img');
                    newImagePart.height = 4;
                    newImagePart.width = 4;
                    // let row = "";
                    // let col = "";
                    // if ((x+1) <= 10) {row = "" + "0" + `${x+1}`}
                    // else {row = "" + `${x+1}`}

                    // if ((y+1) <= 10) {col = "" + "0" + `${y+1}`}
                    // else {col = "" + `${y}`}
                    // console.log("x, y, row, col", x, y, row, col);

                    newImagePart.classList = `imagePart`
                    // newImagePart.classList = `imagePart newImagePartrow${row}col${col}`;
                    newImagePart.src = canvas.toDataURL();

                    container.appendChild(newImagePart);
                }
            }
            container.style.margin = "auto";
            let imageParts = document.getElementsByClassName("imagePart");
            for (let i = 0; i < imageParts.length; i++) {
                let imagePart = imageParts[i];
                imagePart.style.height = '4px';
                imagePart.style.width = '4px';
            }

        },
        async onLogout() {
            await this.$auth.logout();
        },
        async onUploadBurger() {
            try {
                let data = {
                    burgerString: this.burgerString,
                    burgerTitle: this.burgerTitle
                };
                let response = await this.$axios.$post("/api/burger/burgerPost", data);
            } catch (err) {
                console.log(err)
            }
        },
        transposeTwoBurgers(){
            let squares1 = document.getElementsByClassName("bottomBurgerClass1");
            let squares2 = document.getElementsByClassName("bottomBurgerClass2");
            while (document.styleSheets[0].length > 0) {
                document.styleSheets[0].removeRule(0);
            }
            for (let i = 0; i < squares1.length; i++) {
                let square1 = squares1[i];
                let square2 = squares2[i];
                let v = square1.id;

                // let kf = "@keyframes waveAround { 0% { opacity: 0.6; transform: skew(0deg, 0deg); } 50% { opacity: 0.8; transform: skew(30deg, 20deg);; } 100% { opacity: 0.7; transform: skew(-30deg, -20deg);; } }"
                let kf = `@keyframes transposeColor${i} { 
                    0% { background-color: ${square1.style.backgroundColor}; } 
                   
                    100% { background-color: ${square2.style.backgroundColor}; } }`
                square1.style.animation = "";

                //wave

                document.styleSheets[0].insertRule(kf);
                square1.style.animation = `transposeColor${i} 2250ms ease-in-out forwards`;
                // console.log("sq bg color",square.style.backgroundColor);

                let randomTiming = Math.random() * 1000 + 100;
                square1.style.animation = `transposeColor${i} ${randomTiming}ms ease-in-out forwards`;
                
            }
        },
        makeBurgerTakeOverScreen(){
            let squares = document.getElementsByClassName("imagePart");
            while (document.styleSheets[0].length > 0) {
                document.styleSheets[0].removeRule(0);
            }
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let v = square.id;
                let row = square.id.substring(3,5)
                let col = square.id.substring(8, 10);
                // console.log("row, col", row, col);


            // let kf = "@keyframes waveAround { 0% { opacity: 0.6; transform: skew(0deg, 0deg); } 50% { opacity: 0.8; transform: skew(30deg, 20deg);; } 100% { opacity: 0.7; transform: skew(-30deg, -20deg);; } }"
                let posOrNeg = Math.random() -0.5;
                
                // if (posOrNeg > 0) {console.log("positive value")}
                let numberFlipper = 1;
                // if (posOrNeg < 0) {numberFlipper = -1}
                // else {numberFlipper = 1}
                let sizeChangeX1 = 0.25;
                // let sizeChangeY1 = 0;

                let sizeChangeX2 = Math.random() * 10 * numberFlipper;
                // let sizeChangeY2 = Math.random() * 10;

                let sizeChangeX3 = Math.random() * 20 * numberFlipper;
                // let sizeChangeY3 = Math.random() * 20;

                let sizeChangeX4 = Math.random() * 30 * numberFlipper;
                // let sizeChangeY4 = Math.random() * 40;

                let sizeChangeX5 = Math.random() * 40 * numberFlipper;
                // let sizeChangeY5 = Math.random() * 60;

                let sizeChangeX6 = Math.random() * 50 * numberFlipper;
                // let sizeChangeY6 = Math.random() * 90;

                let sizeChangeX7 = Math.random() * 40 * numberFlipper;
                // let sizeChangeY7 = Math.random() * 100;

                let sizeChangeX8 = Math.random() * 30 * numberFlipper;
                // let sizeChangeY8 = Math.random() * 90;

                let sizeChangeX9 = Math.random() * 20 * numberFlipper;
                // let sizeChangeY9 = Math.random() * 30;

                // let sizeChangeX10 = 0.25;
                // let sizeChangeY10 = 0;

                // let kf1 = `@keyframes takeOverScreen${i} { 
                //     0% {   height: 0.25em; width: 0.25em; transform: translateX(0px) translateY(0px);} 
                //     10% {  height: ${sizeChangeX1}px; width: ${sizeChangeX1}px; transform: translateX(${sizeChangeX1}px) translateY(${sizeChangeX1}px);} 
                //     20% {  height: ${sizeChangeX2}px; width: ${sizeChangeX2}px; transform: translateX(${sizeChangeX2}px) translateY(${sizeChangeX2}px);} 
                //     30% {  height: ${sizeChangeX3}px; width: ${sizeChangeX3}px; transform: translateX(${sizeChangeX3}px) translateY(${sizeChangeX3}px);} 
                //     40% {  height: ${sizeChangeX4}px; width: ${sizeChangeX4}px; transform: translateX(${sizeChangeX4}px) translateY(${sizeChangeX4}px);} 
                //     50% {  height: ${sizeChangeX5}px; width: ${sizeChangeX5}px; transform: translateX(${sizeChangeX5}px) translateY(${sizeChangeX5}px);} 
                //     60% {  height: ${sizeChangeX6}px; width: ${sizeChangeX6}px; transform: translateX(${sizeChangeX6}px) translateY(${sizeChangeX6}px);} 
                //     70% {  height: ${sizeChangeX7}px; width: ${sizeChangeX7}px; transform: translateX(${sizeChangeX7}px) translateY(${sizeChangeX7}px);} 
                //     80% {  height: ${sizeChangeX8}px; width: ${sizeChangeX8}px; transform: translateX(${sizeChangeX8}px) translateY(${sizeChangeX8}px);} 
                //     90% {  height: ${sizeChangeX9}px; width: ${sizeChangeX9}px; transform: translateX(${sizeChangeX9}px) translateY(${sizeChangeX9}px);} 
                //     100% { height: 0.25em; width: 0.25em; transform: translateX(0px) translateY(0px);} 
                // `
                // let kf2 = `@keyframes takeOverScreen${i} { 
                //     0% {   transform: translateX(0px) translateY(0px) scale(0);} 
                //     10% {  transform: translateX(${sizeChangeX1}px) translateY(${sizeChangeX1}px) scale(${sizeChangeX1});} 
                //     20% {  transform: translateX(${sizeChangeX2}px) translateY(${sizeChangeX2}px) scale(${sizeChangeX2});} 
                //     30% {  transform: translateX(${sizeChangeX3}px) translateY(${sizeChangeX3}px) scale(${sizeChangeX3});} 
                //     40% {  transform: translateX(${sizeChangeX4}px) translateY(${sizeChangeX4}px) scale(${sizeChangeX4});} 
                //     50% {  transform: translateX(${sizeChangeX5}px) translateY(${sizeChangeX5}px) scale(${sizeChangeX5});} 
                //     60% {  transform: translateX(${sizeChangeX6}px) translateY(${sizeChangeX6}px) scale(${sizeChangeX6});} 
                //     70% {  transform: translateX(${sizeChangeX7}px) translateY(${sizeChangeX7}px) scale(${sizeChangeX7});} 
                //     80% {  transform: translateX(${sizeChangeX8}px) translateY(${sizeChangeX8}px) scale(${sizeChangeX8});} 
                //     90% {  transform: translateX(${sizeChangeX9}px) translateY(${sizeChangeX9}px) scale(${sizeChangeX9});} 
                //     100% { transform: translateX(0px) translateY(0px); scale(0);} 
                // `
                let kf = "";
                if (col < 8){
                    kf = `@keyframes takeOverScreen${i} { 
                        0% {   transform: translateX(0px) scale(1);} 
                        10% {  transform: translateX(-${sizeChangeX1*5}px) scale(${sizeChangeX1});} 
                        20% {  transform: translateX(-${sizeChangeX2*5}px) scale(${sizeChangeX2});} 
                        30% {  transform: translateX(-${sizeChangeX3*5}px) scale(${sizeChangeX3});} 
                        40% {  transform: translateX(-${sizeChangeX4*5}px) scale(${sizeChangeX4});} 
                        50% {  transform: translateX(-${sizeChangeX5*5}px) scale(${sizeChangeX5});} 
                        60% {  transform: translateX(-${sizeChangeX6*5}px) scale(${sizeChangeX6});} 
                        70% {  transform: translateX(-${sizeChangeX7*5}px) scale(${sizeChangeX7});} 
                        80% {  transform: translateX(-${sizeChangeX8*5}px) scale(${sizeChangeX8});} 
                        90% {  transform: translateX(-${sizeChangeX9*5}px) scale(${sizeChangeX9});} 
                        100% { transform: translateX(0px) scale(1);} 
                    `
                } else {
                    kf = `@keyframes takeOverScreen${i} { 
                        0% {   transform: translateX(0px) scale(1);} 
                        10% {  transform: translateX(${sizeChangeX1*5}px) scale(${sizeChangeX1});} 
                        20% {  transform: translateX(${sizeChangeX2*5}px) scale(${sizeChangeX2});} 
                        30% {  transform: translateX(${sizeChangeX3*5}px) scale(${sizeChangeX3});} 
                        40% {  transform: translateX(${sizeChangeX4*5}px) scale(${sizeChangeX4});} 
                        50% {  transform: translateX(${sizeChangeX5*5}px) scale(${sizeChangeX5});} 
                        60% {  transform: translateX(${sizeChangeX6*5}px) scale(${sizeChangeX6});} 
                        70% {  transform: translateX(${sizeChangeX7*5}px) scale(${sizeChangeX7});} 
                        80% {  transform: translateX(${sizeChangeX8*5}px) scale(${sizeChangeX8});} 
                        90% {  transform: translateX(${sizeChangeX9*5}px) scale(${sizeChangeX9});} 
                        100% { transform: translateX(0px) scale(1);} 
                    `
                }
                    
                    
                square.style.animation = "";

            //wave
            
                document.styleSheets[0].insertRule(kf);
                console.log('square color', square.style.backgroundColor);
                if (square.style.backgroundColor != '#FFFFFF' && square.style.backgroundColor != "white" && square.style.backgroundColor != "rgb(255, 255, 255)") {
                    square.style.animation = `takeOverScreen${i} 1000ms ease-in-out infinite`;
                }
            // console.log("sq bg color",square.style.backgroundColor);
                
            
                // if (v.includes("col01")) {
                //     square.style.animation = "takeOverScreen 1000ms ease-in-out infinite";
                // } 
                // else if (v.includes("col02")) {
                //     square.style.animation = "waveAround 1000ms 50ms ease-in-out infinite";
                // }
                // else if (v.includes("col03")) {
                //     square.style.animation = "waveAround 1000ms 100ms ease-in-out infinite";
                // }
                // else if (v.includes("col04")) {
                //     square.style.animation = "waveAround 1000ms 150ms ease-in-out infinite";
                // }
                // else if (v.includes("col05")) {
                //     square.style.animation = "waveAround 1000ms 200ms ease-in-out infinite";
                // }
                // else if (v.includes("col06")) {
                //     square.style.animation = "waveAround 1000ms 275ms ease-in-out infinite";
                // }
                // else if (v.includes("col07")) {
                //     square.style.animation = "waveAround 1000ms 325ms ease-in-out infinite";
                // }
                // else if (v.includes("col08")) {
                //     square.style.animation = "waveAround 1000ms 375ms ease-in-out infinite";
                // }
                // else if (v.includes("col09")) {
                //     square.style.animation = "waveAround 1000ms 425ms ease-in-out infinite";
                // }
                // else if (v.includes("col10")) {
                //     square.style.animation = "waveAround 1000ms 450ms ease-in-out infinite";
                // }
                // else if (v.includes("col11")) {
                //     square.style.animation = "waveAround 1000ms 500ms ease-in-out infinite";
                // }
                // else if (v.includes("col12")) {
                //     square.style.animation = "waveAround 1000ms 550ms ease-in-out infinite";
                // }
                // else if (v.includes("col13")) {
                //     square.style.animation = "waveAround 1000ms 575ms ease-in-out infinite";
                // }
                // else if (v.includes("col14")) {
                //     square.style.animation = "waveAround 1000ms 625ms ease-in-out infinite";
                // }
                // else if (v.includes("col15")) {
                //     square.style.animation = "waveAround 1000ms 650ms ease-in-out infinite";
                // }
                // else if (v.includes("col16")) {
                //     square.style.animation = "waveAround 1000ms 675ms ease-in-out infinite";
                // }



                // console.log("background is not black")
                // square.style.animation = "waveAround 1000ms ease-in-out infinite";
             









            }
        },
        resetUnitsToSquares(){
            let squares = document.getElementsByClassName("imagePart");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
            // square.style.backgroundColor = "black";

            
           
                square.style.borderRadius = "initial";
           
            }
        },
        resetAnimationToZero(){
            let squares = document.getElementsByClassName("imagePart");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
            // square.style.backgroundColor = "black";

            
           
                square.style.animation = "";
           
            }
        },
        exportCurrentBurger() {
            let squares = document.getElementsByClassName("invisibleLine");
            // console.log(squares);
            // return littleSquares
            // let data = [];

            // const datum = {
            //     "row": "",
            //     "col": "",
            //     "backgroundColor": ""
            // };

            let datumCopy = {
                "row": "",
                "col": "",
                "backgroundColor": ""
            };
            let hhdata = document.getElementById("hiddenData");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                // console.log(square.classList[1])
                // console.log(square.classList[2])
                
                hhdata.innerHTML += square.classList[1];

                hhdata.innerHTML += square.classList[2];
                if (square.style.backgroundColor == "") {
                    hhdata.innerHTML += "rgb(255, 255, 255)";

                } else {
                    hhdata.innerHTML += square.style.backgroundColor;
                }
                
                hhdata.innerHTML += "^";
                
                // console.log("datum copy",datumCopy);
                // console.log("data before push",data)
                
                // data.push(datumCopy)
                
                
                
                // console.log("data after push",data)
                // datumCopy['row'] = "";
                // datumCopy['col'] = "";
                // datumCopy['backgroundColor'] = "";
                // datumCopy = datum;

            }
            // console.log(hhdata.innerHTML);
            this.burgerString = hhdata.innerHTML;
            return hhdata.innerHTML;
            // console.log(hhdata.innerHTML);
            // console.log("data from each squre, row#, col#, bgColor",data);
        },
        parseHHDataIntoNewBurger1() {
            let data = this.exportCurrentBurger();
            let squares = data.split("^");
            let burgerNode = document.createElement("div");
            burgerNode.id = 'bottomBurger1';
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let row = square.substring(0, 5);
                let col = square.substring(5, 10);
                let color = square.substring(10);
                
                



                let id = row+col;

                let squareNode = document.createElement("div");
                squareNode.id = id;
                squareNode.classList = "bottomBurgerClass1";
                squareNode.style.backgroundColor = color;
                squareNode.style.height = "0.25em";
                squareNode.style.width = "0.25em";

                
                
                
                
                
                burgerNode.appendChild(squareNode);
                
            };

            burgerNode.style.display = "flex";
            burgerNode.style.flexWrap = "wrap";
            burgerNode.style.width = "4em";
            burgerNode.style.height = "4em";
            burgerNode.style.margin = "10px auto";
            burgerNode.style.outline = "1px solid rgb(218, 218, 218)";
            // burgerNode.style.display = "flex";


            let main = document.getElementById("main");
            main.appendChild(burgerNode);

            // console.log("BURGER NODE",burgerNode)
            
            // console.log(squares[0]);
        },
        parseHHDataIntoNewBurger2() {
            let hhdata = document.getElementById("hiddenData");
            hhdata.innerHTML = "";
            let data = this.exportCurrentBurger();
            let squares = data.split("^");
            let burgerNode = document.createElement("div");
            burgerNode.id = 'bottomBurger2';
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let row = square.substring(0, 5);
                let col = square.substring(5, 10);
                let color = square.substring(10);
                
                



                let id = row+col;

                let squareNode = document.createElement("div");
                squareNode.id = id;
                squareNode.classList = "bottomBurgerClass2";
                squareNode.style.backgroundColor = color;
                squareNode.style.height = "0.25em";
                squareNode.style.width = "0.25em";

                
                
                
                
                
                burgerNode.appendChild(squareNode);
                
            };

            burgerNode.style.display = "flex";
            burgerNode.style.flexWrap = "wrap";
            burgerNode.style.width = "4em";
            burgerNode.style.height = "4em";
            burgerNode.style.margin = "10px auto";
            burgerNode.style.outline = "1px solid rgb(218, 218, 218)";
            // burgerNode.style.display = "flex";


            let main = document.getElementById("main");
            main.appendChild(burgerNode);

            // console.log("BURGER NODE",burgerNode)
            
            // console.log(squares[0]);
        },
        

        makeShake() {
            let squares = document.getElementsByClassName("imagePart");
            while (document.styleSheets[0].length > 0) {
                document.styleSheets[0].removeRule(0);
            }
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let v = square.id;
                // console.log("classlist",v)
                console.log("square.id",square.id)
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
        waveFlagCooler() {
        let squares = document.getElementsByClassName("imagePart");
        while (document.styleSheets[0].length > 0) {
            document.styleSheets[0].removeRule(0);
        }
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            // let v = square.id;
            let v = square.classList[0];
            // console.log("v",v)
            // let kf = "@keyframes waveAround { 0% { opacity: 0.6; transform: skew(0deg, 0deg); } 50% { opacity: 0.8; transform: skew(30deg, 20deg);; } 100% { opacity: 0.7; transform: skew(-30deg, -20deg);; } }"
            let kf = `@keyframes waveAround { 
                0% { opacity: 0.7; transform: translateX(0em) translateY(0em); } 
                25% {opacity: 0.8; transform: translateX(0.25em) translateY(0em);} 
                50% { opacity: 0.9; transform: translateX(0.25em) translateY(0.25em);; } 
                100% { opacity: 0.7; transform: translateX(-0.25em) translateY(-0.25em); } }`
            square.style.animation = "";

            //wave
            
            document.styleSheets[0].insertRule(kf);
            // console.log("sq bg color",square.style.backgroundColor);
            // if (square.style.backgroundColor != "black")
            // {
                if (v.includes("col01")) {
                    square.style.animation = "waveAround 1000ms ease-in-out infinite";
                } 
                else if (v.includes("col02")) {
                    square.style.animation = "waveAround 1000ms 50ms ease-in-out infinite";
                }
                else if (v.includes("col03")) {
                    square.style.animation = "waveAround 1000ms 100ms ease-in-out infinite";
                }
                else if (v.includes("col04")) {
                    square.style.animation = "waveAround 1000ms 150ms ease-in-out infinite";
                }
                else if (v.includes("col05")) {
                    square.style.animation = "waveAround 1000ms 200ms ease-in-out infinite";
                }
                else if (v.includes("col06")) {
                    square.style.animation = "waveAround 1000ms 275ms ease-in-out infinite";
                }
                else if (v.includes("col07")) {
                    square.style.animation = "waveAround 1000ms 325ms ease-in-out infinite";
                }
                else if (v.includes("col08")) {
                    square.style.animation = "waveAround 1000ms 375ms ease-in-out infinite";
                }
                else if (v.includes("col09")) {
                    square.style.animation = "waveAround 1000ms 425ms ease-in-out infinite";
                }
                else if (v.includes("col10")) {
                    square.style.animation = "waveAround 1000ms 450ms ease-in-out infinite";
                }
                else if (v.includes("col11")) {
                    square.style.animation = "waveAround 1000ms 500ms ease-in-out infinite";
                }
                else if (v.includes("col12")) {
                    square.style.animation = "waveAround 1000ms 550ms ease-in-out infinite";
                }
                else if (v.includes("col13")) {
                    square.style.animation = "waveAround 1000ms 575ms ease-in-out infinite";
                }
                else if (v.includes("col14")) {
                    square.style.animation = "waveAround 1000ms 625ms ease-in-out infinite";
                }
                else if (v.includes("col15")) {
                    square.style.animation = "waveAround 1000ms 650ms ease-in-out infinite";
                }
                else if (v.includes("col16")) {
                    square.style.animation = "waveAround 1000ms 675ms ease-in-out infinite";
                }



                // console.log("background is not black")
                // square.style.animation = "waveAround 1000ms ease-in-out infinite";
            // } 









            }
            
        },
        makeBottomCircles() {
        
        
        let squares = document.getElementsByClassName("imagePart");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            // square.style.backgroundColor = "black";

            
           
            square.style.borderRadius = "50%";
           
        }
        },
        moveBottomDownwards() {
        let squares = document.getElementsByClassName("imagePart");
        let newData = [];
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let color = square.style.backgroundColor;
            newData.push(color);
            // console.log("color", color);
        }

        for (let j = 0; j < squares.length; j++) {
            let square = squares[j];
            if (j < 16) {
                square.style.backgroundColor = "rgb(255, 255, 255)";
            } else {
                square.style.backgroundColor = newData[j-16];
            }
        }
        },
        moveBottomUpwards() {
        let squares = document.getElementsByClassName("imagePart");
        let newData = [];
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let color = square.style.backgroundColor;
            newData.push(color);
            // console.log("color", color);
        }
        // console.log(newData);
        for (let j = squares.length-1; j >= 0; j--) {
            let square = squares[j];
            if (j > 240) {
                square.style.backgroundColor = "rgb(255, 255, 255)";
            } else {
                square.style.backgroundColor = newData[j+16];
            }
        }
        },
        moveBottomDownwardsInLoop(){
        let squares = document.getElementsByClassName("imagePart");
        let newData = [];
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let color = square.style.backgroundColor;
            newData.push(color);
            // console.log("color", color);
        }

        for (let j = 0; j < squares.length; j++) {
            let square = squares[j];
            if (j < 16) {
                square.style.backgroundColor = newData[240+j];
            } else {
                square.style.backgroundColor = newData[j-16];
            }
        }
        },
        moveBottomUpwardsInLoop(){
        let squares = document.getElementsByClassName("imagePart");
        let newData = [];
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let color = square.style.backgroundColor;
            newData.push(color);
            // console.log("color", color);
        }

        for (let j = squares.length-1; j >= 0; j--) {
            let square = squares[j];
            if (j >= 240) {
                // let num = (Math.abs(j-256));
                let num = (Math.abs(j-240));
                // console.log("j, num::",j, num);
                square.style.backgroundColor = newData[  num];
                // square.style.backgroundColor = newData[  256-j];
            } else {
                square.style.backgroundColor = newData[j+16];
            }
        }
        },
        moveBottomLeftwardsInLoop(){
        let squares = document.getElementsByClassName("imagePart");
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        let col7 = [];
        let col8 = [];
        let col9 = [];
        let col10 = [];
        let col11 = [];
        let col12 = [];
        let col13 = [];
        let col14 = [];
        let col15 = [];
        let col16 = [];
        for (let i = 0; i < 256; i++) {
            if (i%16 == 0) {
                col1.push(squares[i])
            } 
            else if (i%16 == 1) {
                col2.push(squares[i])
            }
            else if (i%16 == 2) {
                col3.push(squares[i])
            }
            else if (i%16 == 3) {
                col4.push(squares[i])
            }
            else if (i%16 == 4) {
                col5.push(squares[i])
            }
            else if (i%16 == 5) {
                col6.push(squares[i])
            }
            else if (i%16 == 6) {
                col7.push(squares[i])
            }
            else if (i%16 == 7) {
                col8.push(squares[i])
            }
            else if (i%16 == 8) {
                col9.push(squares[i])
            }
            else if (i%16 == 9) {
                col10.push(squares[i])
            }
            else if (i%16 == 10) {
                col11.push(squares[i])
            }
            else if (i%16 == 11) {
                col12.push(squares[i])
            }
            else if (i%16 == 12) {
                col13.push(squares[i])
            }
            else if (i%16 == 13) {
                col14.push(squares[i])
            }
            else if (i%16 == 14) {
                col15.push(squares[i])
            }
            else if (i%16 == 15) {
                col16.push(squares[i])
            }
        
        }
        let oldCols = [];
        oldCols.push(col1);
        oldCols.push(col2);
        oldCols.push(col3);
        oldCols.push(col4);
        oldCols.push(col5);
        oldCols.push(col6);
        oldCols.push(col7);
        oldCols.push(col8);
        oldCols.push(col9);
        oldCols.push(col10);
        oldCols.push(col11);
        oldCols.push(col12);
        oldCols.push(col13);
        oldCols.push(col14);
        oldCols.push(col15);
        oldCols.push(col16);

        let newCols = [];
        newCols.push(col2);
        newCols.push(col3);
        newCols.push(col4);
        newCols.push(col5);
        newCols.push(col6);
        newCols.push(col7);
        newCols.push(col8);
        newCols.push(col9);
        newCols.push(col10);
        newCols.push(col11);
        newCols.push(col12);
        newCols.push(col13);
        newCols.push(col14);
        newCols.push(col15);
        newCols.push(col16);
        newCols.push(col1);

        for (let i = 0; i < 15; i++) {
            for (let j = 0; j < 16; j++) {
                let square = oldCols[i][j];
                let newColor = newCols[i][j].style.backgroundColor;
                // console.log("old color:", square.style.backgroundColor, ":::::::::new color:", newColor)
                square.style.backgroundColor = newColor
            }

        }
        for (let i = 15; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                let square = oldCols[i][j];
                let newColor = newCols[i][j].style.backgroundColor;
                // console.log("old color:", square.style.backgroundColor, ":::::::::new color:", newColor)
                square.style.backgroundColor = newColor
            }

        }

        
        },
        moveBottomRightwardsInLoop(){
        let squares = document.getElementsByClassName("imagePart");
        let col1 = [];
        let col2 = [];
        let col3 = [];
        let col4 = [];
        let col5 = [];
        let col6 = [];
        let col7 = [];
        let col8 = [];
        let col9 = [];
        let col10 = [];
        let col11 = [];
        let col12 = [];
        let col13 = [];
        let col14 = [];
        let col15 = [];
        let col16 = [];
        for (let i = 0; i < 256; i++) {
            if (i%16 == 0) {
                col1.push(squares[i])
            } 
            else if (i%16 == 1) {
                col2.push(squares[i])
            }
            else if (i%16 == 2) {
                col3.push(squares[i])
            }
            else if (i%16 == 3) {
                col4.push(squares[i])
            }
            else if (i%16 == 4) {
                col5.push(squares[i])
            }
            else if (i%16 == 5) {
                col6.push(squares[i])
            }
            else if (i%16 == 6) {
                col7.push(squares[i])
            }
            else if (i%16 == 7) {
                col8.push(squares[i])
            }
            else if (i%16 == 8) {
                col9.push(squares[i])
            }
            else if (i%16 == 9) {
                col10.push(squares[i])
            }
            else if (i%16 == 10) {
                col11.push(squares[i])
            }
            else if (i%16 == 11) {
                col12.push(squares[i])
            }
            else if (i%16 == 12) {
                col13.push(squares[i])
            }
            else if (i%16 == 13) {
                col14.push(squares[i])
            }
            else if (i%16 == 14) {
                col15.push(squares[i])
            }
            else if (i%16 == 15) {
                col16.push(squares[i])
            }
        
        }
        let oldCols = [];
        oldCols.push(col1);
        oldCols.push(col2);
        oldCols.push(col3);
        oldCols.push(col4);
        oldCols.push(col5);
        oldCols.push(col6);
        oldCols.push(col7);
        oldCols.push(col8);
        oldCols.push(col9);
        oldCols.push(col10);
        oldCols.push(col11);
        oldCols.push(col12);
        oldCols.push(col13);
        oldCols.push(col14);
        oldCols.push(col15);
        oldCols.push(col16);

        let newCols = [];
        newCols.push(col16);
        newCols.push(col1);
        newCols.push(col2);
        newCols.push(col3);
        newCols.push(col4);
        newCols.push(col5);
        newCols.push(col6);
        newCols.push(col7);
        newCols.push(col8);
        newCols.push(col9);
        newCols.push(col10);
        newCols.push(col11);
        newCols.push(col12);
        newCols.push(col13);
        newCols.push(col14);
        newCols.push(col15);
        
        
        
        
        
        // [col1] + [col2] + [col3] + [col4] + [col5] + [col6] + [col7] + [col8] + [col9] + [col10] + [col11] + [col12] + [col13] + [col14] + [col15] + [col16];
        // let newCols = col2 + col3 + col4 + col5 + col6 + col7 + col8 + col9 + col10 + col11 + col12 + col13 + col14 + col15 + col16 + col1;

        for (let i = 0; i < 16; i++) {
            for (let j = 0; j< 16; j++) {
                let square = oldCols[i][j];
                let newColor = newCols[i][j].style.backgroundColor;
                square.style.backgroundColor = newColor
            }

        }

        
        },
        moveBottomUpwardsInLoop2_better() {
        let squares = document.getElementsByClassName("imagePart");
        // let newSquares = [];
        
        // for (let i = 16; i < 256; i++) {
        //     let square = squares[i];
        //     // let color = square.style.backgroundColor;
        //     newSquares.push(square);
        //     // console.log("color", color);
        // }

        // for (let i = 0; i < 16; i++) {
        //     let square = squares[i];
        //     // let color = square.style.backgroundColor;
        //     newSquares.push(square);
        //     // console.log("color", color);
        // }

        // for (let i = 0; i < 256; i++) {
        //     let square = squares[i];
        //     square.style.backgroundColor = newSquares[i].style.backgroundColor;
        // }


        // let squares = document.getElementsByClassName("bottomBurgerClass");
        // let newData = [];
        
        // for (let i = 0; i < 256; i++) {
        //     let square = squares[i];
        //     let color = square.style.backgroundColor;
        //     newData.push(color);
        //     // console.log("color", color);
        // }
        // console.log(newData);
        // const zeroPad = (num, places) => String(num).padStart(places, '0')
        
        // for (let row = 0; row < 16; row++) {
        //     for (let col = 0; col < 16; col++) {
        //         let number = row * 16 + col;
                
        //         let rowText = `${row+1}`;
                
        //         if (rowText < 10) {
                    
        //             rowText = zeroPad(rowText, 2)
        //             // rowText == `0` + rowText;
        //             // console.log("inside:??",rowText)
        //         }
        //         let colText = `${col+1}`;
        //         if (colText < 10) {
                    
        //             colText = zeroPad(colText, 2)
        //             // rowText == `0` + rowText;
        //             // console.log("inside:??",rowText)
        //         }
        //         console.log(row, rowText, col, colText)



        //         let square = squares[number];
                


        //         if (number % 16 == 0) {                    
        //             // console.log(square.id, square.style.backgroundColor);
        //             // let randomColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
        //             // // console.log(randomColor);
        //             // console.log("bg color before reset",square.style.backgroundColor);
        //             // square.style.backgroundColor = randomColor;
        //             // console.log("bg color after reset",square.style.backgroundColor);
        //         // if (number % 256 % 16 == 0) {                    
        //             // square.style.backgroundColor = "blue";
        //             // square.style.backgroundColor = newData[((number+1)%16)];

        //         } 
        //         else if (number % 16 == 14){
        //             // square.style.backgroundColor = "purple";
        //             // square.style.backgroundColor = newData[number%16];
        //         }
        //         // console.log(squares[number]);
            
        //     }}
        
        },

        makeCircles(){
        let squares = document.getElementsByClassName("imagePart");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];    
            square.style.borderRadius = "50%";
        }
        },
      
    
    },
    mounted() {
        var image = new Image();

        image.src = 'img/callahanSmaller.png';

        let initialCont = document.getElementById("initialCont");
        initialCont.appendChild(image);
        this.image = image;
        image.onload = this.sliceUpImage;


        let squares = document.getElementsByClassName("aColor");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            square.style.backgroundColor = "#000000";
        }
    },
  
}
</script>

<style scoped>

#imgContainer {
    display: flex;
    height: 64px;
    width: 64px;
    flex-direction: column;
    flex-wrap: wrap;

}


#primaryImage {
    height: 50px;
    width: 50px;
    object-fit: cover;
}

input {
    margin-top: 20px;
    margin-bottom: 20px;
}

#colorContainer {
    display: flex;
    flex-direction: column;
}

#colorChoiceContainer {
    /* display: flex;
    flex-direction: row; */
}


#colorMachine {
    height: 60px;
    width: 40%;
    margin-left: 30%;
}

#colorMachine::after {
    content: "Colors";
    /* position: relative; */
    /* top: -44px; */
    color: blue;
    font-size: 2em;
    z-index: top;
    /* transform: translateX(25px); */
}



button {
    height: 40px;
    /* width: 120px; */
}

#hiddenData {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    color: transparent;
}

#paintOrClickBool {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    color: transparent;
}

#number {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    color: transparent;
}

.aColor {
    height: 50px;
    width: 13vw;
    /* background-color: black; */
    margin: auto;
}

#myColors {
    display: flex;
    justify-content: space-around;
    height: 100px;
    width: 90%;
    margin-left: 5%;
    background-color: bisque;
    
}

#mainGrid {
    /* margin-left: 10%;
    margin-right: 10%; */
    /* margin: auto; */
    /* max-width: 400px; */
    /* height: 50vw; */
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    height: 90vw;
    max-width: 400px;
    max-height: 400px;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    

}

#mainGrid > div {
    /* height: 30px;
    width: 30px; */
    height: 100%;
    width: 100%;
    max-height: 23px;
    max-width: 23px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    margin: 1px;
}


#number {
    position: absolute;
    top: 0;
    visibility: hidden;
    opacity: 0;
}

* {
    padding: 0;
    margin: 0;  
}

.outer {
    display: flex;
    flex-wrap: wrap;
    width: 4em;
    height: 4em;
    margin: 10px auto;
    outline: 1px solid rgb(218, 218, 218);

}

.invisibleLine {
    min-height: 0.25;
    min-width: 0.25em;
    background-color: white;
}

</style>
