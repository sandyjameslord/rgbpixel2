<template>
    <main id='main'>
        <div id='hiddenData'></div>
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
        <br>
        <button @click="getAverageImageColor()">Average Image Color</button>
        <button @click='parseHHDataIntoNewBurger1()'>Upload!</button>

        <div id='averageColorContainer'></div>
        <!-- <button @click="onUploadBurger">Upload this!</button> -->
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
                    burgerTitle: "your title",
                    burgerCreator: this.$auth.user.email,
                    burgerStatus: "photo",
                };
                let response = await this.$axios.$post("/api/burger/burgerPost", data);
                //     this.$router.push("/");

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
            cont.appendChild(image2);

        },

        getAverageImageColor() {
            let images = document.getElementsByClassName("newBurger");

            let output = [];
            let nameAndColorOutput = [];
            for (let i = 0; i < images.length; i++) {
                let img = images[i];

                console.log("indiv square name(img).id", img.id);



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
            burgerNode.style.flexDirection = "column";
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
            console.log(this.nameAndColorReturnString)
            // nameAndColorOutput = nameAndColorOutput;







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

                    // console.log("square.style.backgroundColor", square.style.backgroundColor);



                    container.appendChild(newImage);



                    // imageDataPieces.push(canvas.toDataURL())
                }
            }
            // this.getAverageImageColor;
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
}

#hiddenData {
    position: absolute;
    top: 0;
    left: 0;
    height: 0;
    width: 0;
    color: transparent;
}
</style>
