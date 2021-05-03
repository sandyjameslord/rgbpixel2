<template>
    <main id='main'>
        <div id='hiddenData'></div>
        <div id='title'>Choose any image and rgbPixelfy it!</div>
        <span>Step 1:</span><input type="file" name="photo" @change="onFileSelected" ><br>

        <!-- <div>BELOW is userFileDisplay</div> -->
        <div id='disp1'></div>

        <!-- <div>BELOW is sliceImageButton</div><br> -->
        <br><span>Step 2:</span><button id='sliceImageButton' @click='sliceUpImage()'>Slice image</button><br>

        <!-- <div>in the div BELOW are the 256 pieces</div> -->
        <div id='pieces64Container'></div>
        <br>
        <!-- <button @click="makeBottomCircles()">Circles</button><button @click="resetUnitsToSquares()">Squares</button> -->
        <!-- <button @click="makeShake()">Shake on</button><button @click="resetAnimationToZero()">Animations off</button> -->
        <br>
        <span>Step 3:</span><button @click="getAverageImageColor()">Create rgbPixelImage</button>

        <input id='nameOfImage' type="text" v-model="burgerTitle" placeholder="Title...">
        <button @click='parseHHDataIntoNewBurger1()'>Upload rgbPixelImage</button>

        <div id='averageColorContainer'></div>
        <!-- <button @click="onUploadBurger">Upload this!</button> -->
    </main>
</template>

<script>
export default {
  
    data() {
        return { 
            selectedFile: null,
            burgerString: "",
            burgerTitle: ""
        }
    },
   
    methods: {
        exportCurrentBurger() {

            let squares = document.getElementsByClassName("newBurger");
 
            let hhdata = document.getElementById("hiddenData");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];

                hhdata.innerHTML += square.classList[0].substring(0, 10);
                hhdata.innerHTML += square.style.backgroundColor;
                hhdata.innerHTML += "^";

            }

            this.burgerString = hhdata.innerHTML;
            return hhdata.innerHTML;
        },
        parseHHDataIntoNewBurger1() {
            // this.getAverageImageColor();
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

            let main = document.getElementById("main");
            main.appendChild(burgerNode);


            this.onUploadBurger();

        },
        async onUploadBurger() {
            try {
                let data = {
                    burgerString: this.nameAndColorReturnString,
                    burgerTitle: this.burgerTitle,
                    burgerCreator: this.$auth.user.email,
                    burgerStatus: "photo",
                };
                let response = await this.$axios.$post("/api/burger/burgerPost", data);
                    this.$router.push("/n-Animate");

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
            // image.style.width = 256;
            // image.style.height = 256;
            

            let image2 = new Image(256, 256);
            image2.src = URL.createObjectURL(this.selectedFile);

            let cont = document.getElementById("disp1");
            // cont.style.margin = "auto";
            cont.appendChild(image2);

            // this.sliceUpImage();

        },

        getAverageImageColor() {
            // let images = document.getElementsByClassName("newBurger");

            console.log("this.allImgs", this.allImgs )

            let images = [];
            for (let i = 0; i < 16; i++) {
                for (let j = 0; j < 16; j++) {
                    images.push(this.allImgs[i][j])
                }
            }


            let output = [];
            let nameAndColorOutput = [];
            for (let i = 0; i < images.length; i++) {
                let img = images[i];

                // console.log("indiv square name(img).id", img.id);



                // let img = document.getElementById("col1row1");
            // console.log("col1row1 img",img);
            
                let canvas = document.createElement('canvas');
                let context = canvas.getContext('2d');

                context.drawImage(img, 0, 0);

                let red = 0;
                let green = 0;
                let blue = 0;

                for (let x = 0; x < 2; x++) {
                    for (let y = 0; y < 2; y++) {
                        let imgData = context.getImageData(x, y, 1, 1).data;
                        red += imgData[0];
                        green += imgData[1];
                        blue += imgData[2];
                    }
                }

                red = red / 4;
                green = green / 4;
                blue = blue / 4;

                let rgbString = `rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})`;
                let nameAndColorString = `${img.classList[0]}rgb(${Math.floor(red)}, ${Math.floor(green)}, ${Math.floor(blue)})^`
                output.push(rgbString)
                nameAndColorOutput.push(nameAndColorString);

            }
            
            let burgerNode = document.createElement("div");
            burgerNode.id = 'bottomBurger1';
            for (let i = 0; i < output.length; i++) {
                let color = output[i];

                let squareNode = document.createElement("div");
                squareNode.id = `square${i+1}`;

                let hexColor = this.rgbToHex(color);


                squareNode.style.backgroundColor = this.rgbToHex(color);
                squareNode.style.height = "0.25em";
                squareNode.style.width = "0.25em";
                
                burgerNode.appendChild(squareNode);
                
            };

            burgerNode.style.display = "flex";
            // burgerNode.style.flexDirection = "column";
            burgerNode.style.flexWrap = "wrap";
            burgerNode.style.width = "4em";
            burgerNode.style.height = "4em";
            // burgerNode.style.transform = "rotateY(180deg) rotate(90deg)";

            let main = document.getElementById("averageColorContainer");
            main.appendChild(burgerNode);






            let nameAndColorReturnString = "";
            for (let i = 0; i < nameAndColorOutput.length; i++) {
                let info = nameAndColorOutput[i];
                nameAndColorReturnString += info;
                // console.log(info)
            }
            
            this.nameAndColorReturnString = nameAndColorReturnString;


        },
        componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        },
        rgbToHex(colorRGB) {
            colorRGB = colorRGB.substring(4);
            let colors = colorRGB.split(",");
            let r = parseInt(colors[0].trim());
            let g = parseInt(colors[1].trim());
            let b = parseInt(colors[2].substring(0, colors[2].length-1).trim());
            // console.log(colors,r,g,b);
            return "#" + this.componentToHex(0 + r).toUpperCase() + this.componentToHex(0 + g).toUpperCase() + this.componentToHex(0 + b).toUpperCase()
            // return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },

        sliceUpImage(){
            let image = this.image;

            let container = document.getElementById("pieces64Container");

            let newContainer = document.createElement("div");
            newContainer.style.width = '4em';
            newContainer.style.height = '4em';
            newContainer.style.display = 'flex';
            newContainer.style.flexWrap = 'wrap';
            newContainer.style.transform = "translateY(-150px) rotateY(180deg) rotate(90deg)"
            // newContainer.style.margin = "20px auto";

            let r01 = [];
            let r02 = [];
            let r03 = [];
            let r04 = [];
            let r05 = [];
            let r06 = [];
            let r07 = [];
            let r08 = [];
            let r09 = [];
            let r10 = [];
            let r11 = [];
            let r12 = [];
            let r13 = [];
            let r14 = [];
            let r15 = [];
            let r16 = [];


            // let imageDataPieces = [];
            for (let x = 0; x < 16; x++) {
                for (let y = 0; y < 16; y++) {
                    let canvas = document.createElement('canvas');

                    let originalImageWidth = image.width;
                    let originalImageHeight = image.height;

                    let widthOfOneOldSquare = originalImageWidth / 16;
                    let heightOfOneOldSquare = originalImageHeight / 16;

                    let sx = widthOfOneOldSquare * x;
                    let sy = heightOfOneOldSquare * y;

                    let context = canvas.getContext('2d');
                    context.drawImage(image, sx, sy,      originalImageWidth,        originalImageHeight, 0,  0,      originalImageWidth,      originalImageHeight);

                    let newImage = new Image(4, 4);
                    newImage.src = canvas.toDataURL();

                    let newX;
                    let newY;

                    if ((x+1) < 10) { newX = "" + "0" + `${x+1}`}
                    else {newX = "" + `${x+1}`}

                    if ((y+1) < 10) { newY = "" + "0" + `${y+1}`}
                    else {newY = "" + `${y+1}`}

                    let squareInfo = `col${x+1}row${y+1}`
                    let info2 = `row${newY}col${newX}`
                    newImage.id = squareInfo;
                    // newImage.classList = `${squareInfo} newBurger`
                    newImage.classList = `${info2} ${squareInfo} newBurger`

                    newContainer.appendChild(newImage);


                    if (y==0) {r01.push(newImage)}
                    else if (y==1) {r02.push(newImage)}
                    else if (y==2) {r03.push(newImage)}
                    else if (y==3) {r04.push(newImage)}
                    else if (y==4) {r05.push(newImage)}
                    else if (y==5) {r06.push(newImage)}
                    else if (y==6) {r07.push(newImage)}
                    else if (y==7) {r08.push(newImage)}
                    else if (y==8) {r09.push(newImage)}
                    else if (y==9) {r10.push(newImage)}
                    else if (y==10) {r11.push(newImage)}
                    else if (y==11) {r12.push(newImage)}
                    else if (y==12) {r13.push(newImage)}
                    else if (y==13) {r14.push(newImage)}
                    else if (y==14) {r15.push(newImage)}
                    else if (y==15) {r16.push(newImage)}
                }
                
            }
            let main = document.getElementById("main")
            main.appendChild(newContainer)

            let finString = "";
            console.log("r01",r01)
            let allImgs = [r01, r02, r03, r04, r05, r06, r07, r08, r09, r10, r11, r12, r13, r14, r15, r16];
            for (let i = 0; i < allImgs.length; i++) {
                for (let j = 0; j < 16; j++) {
                    finString += allImgs[i][j].style.backgroundColor + "^"
                }
            }

            console.log(finString)
            this.allImgs = allImgs;

            // this.getAverageImageColor();

        },
        
        

    },
    mounted() {
        
    },
  
}
</script>

<style scoped>
#title {
    font-size: 1.3em;
}


img {
    max-height: 300px;
    max-width: 300px;
}

#userSelectedImage {
    height: 300px;
    width: 300px;
    object-fit: cover;
}

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
    height: 1.5em;
}

#hiddenData {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    color: transparent;
}

button {
    padding: 5px 10px;
}

</style>
