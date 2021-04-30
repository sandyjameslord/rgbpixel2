<template>
    <main id='main'>
        <div id='topBurgersContainer'></div>
        <br>
        <div v-for="(burger, index) in burgers" :key="burger._id">
            <div v-if="burger.burgerCreator == $auth.$state.user.email">
                <!-- <span>burgerID: {{ burger._id }}</span><br> -->
                <!-- <span>burgerString: {{ burger.burgerString }}</span><br> -->
                <!-- <span>{{ burger.burgerCreator }} :: {{ burger.burgerTitle }}</span><br> -->


            </div>
            
            
        </div>

        <div id='outer' class='outer'>
             
                <div id='row01col01Small' class="invisibleLine row01 col01 row01col01Small"></div>
                <div id='row01col02Small' class="invisibleLine row01 col02 row01col02Small"></div>
                <div id='row01col03Small' class="invisibleLine row01 col03 row01col03Small"></div>
                <div id='row01col04Small' class="invisibleLine row01 col04 row01col04Small"></div>
                <div id='row01col05Small' class="invisibleLine row01 col05 row01col05Small"></div>
                <div id='row01col06Small' class="invisibleLine row01 col06 row01col06Small"></div>
                <div id='row01col07Small' class="invisibleLine row01 col07 row01col07Small"></div>
                <div id='row01col08Small' class="invisibleLine row01 col08 row01col08Small"></div>
                <div id='row01col09Small' class="invisibleLine row01 col09 row01col09Small"></div>
                <div id='row01col10Small' class="invisibleLine row01 col10 row01col10Small"></div>
                <div id='row01col11Small' class="invisibleLine row01 col11 row01col11Small"></div>
                <div id='row01col12Small' class="invisibleLine row01 col12 row01col12Small"></div>
                <div id='row01col13Small' class="invisibleLine row01 col13 row01col13Small"></div>
                <div id='row01col14Small' class="invisibleLine row01 col14 row01col14Small"></div>
                <div id='row01col15Small' class="invisibleLine row01 col15 row01col15Small"></div>
                <div id='row01col16Small' class="invisibleLine row01 col16 row01col16Small"></div>
                <div id='row02col01Small' class="invisibleLine row02 col01 row02col01Small"></div>
                <div id='row02col02Small' class="invisibleLine row02 col02 row02col02Small"></div>
                <div id='row02col03Small' class="invisibleLine row02 col03 row02col03Small"></div>
                <div id='row02col04Small' class="invisibleLine row02 col04 row02col04Small"></div>
                <div id='row02col05Small' class="invisibleLine row02 col05 row02col05Small"></div>
                <div id='row02col06Small' class="invisibleLine row02 col06 row02col06Small"></div>
                <div id='row02col07Small' class="invisibleLine row02 col07 row02col07Small"></div>
                <div id='row02col08Small' class="invisibleLine row02 col08 row02col08Small"></div>
                <div id='row02col09Small' class="invisibleLine row02 col09 row02col09Small"></div>
                <div id='row02col10Small' class="invisibleLine row02 col10 row02col10Small"></div>
                <div id='row02col11Small' class="invisibleLine row02 col11 row02col11Small"></div>
                <div id='row02col12Small' class="invisibleLine row02 col12 row02col12Small"></div>
                <div id='row02col13Small' class="invisibleLine row02 col13 row02col13Small"></div>
                <div id='row02col14Small' class="invisibleLine row02 col14 row02col14Small"></div>
                <div id='row02col15Small' class="invisibleLine row02 col15 row02col15Small"></div>
                <div id='row02col16Small' class="invisibleLine row02 col16 row02col16Small"></div>
                <div id='row03col01Small' class="invisibleLine row03 col01 row03col01Small"></div>
                <div id='row03col02Small' class="invisibleLine row03 col02 row03col02Small"></div>
                <div id='row03col03Small' class="invisibleLine row03 col03 row03col03Small"></div>
                <div id='row03col04Small' class="invisibleLine row03 col04 row03col04Small"></div>
                <div id='row03col05Small' class="invisibleLine row03 col05 row03col05Small"></div>
                <div id='row03col06Small' class="invisibleLine row03 col06 row03col06Small"></div>
                <div id='row03col07Small' class="invisibleLine row03 col07 row03col07Small"></div>
                <div id='row03col08Small' class="invisibleLine row03 col08 row03col08Small"></div>
                <div id='row03col09Small' class="invisibleLine row03 col09 row03col09Small"></div>
                <div id='row03col10Small' class="invisibleLine row03 col10 row03col10Small"></div>
                <div id='row03col11Small' class="invisibleLine row03 col11 row03col11Small"></div>
                <div id='row03col12Small' class="invisibleLine row03 col12 row03col12Small"></div>
                <div id='row03col13Small' class="invisibleLine row03 col13 row03col13Small"></div>
                <div id='row03col14Small' class="invisibleLine row03 col14 row03col14Small"></div>
                <div id='row03col15Small' class="invisibleLine row03 col15 row03col15Small"></div>
                <div id='row03col16Small' class="invisibleLine row03 col16 row03col16Small"></div>
                <div id='row04col01Small' class="invisibleLine row04 col01 row04col01Small"></div>
                <div id='row04col02Small' class="invisibleLine row04 col02 row04col02Small"></div>
                <div id='row04col03Small' class="invisibleLine row04 col03 row04col03Small"></div>
                <div id='row04col04Small' class="invisibleLine row04 col04 row04col04Small"></div>
                <div id='row04col05Small' class="invisibleLine row04 col05 row04col05Small"></div>
                <div id='row04col06Small' class="invisibleLine row04 col06 row04col06Small"></div>
                <div id='row04col07Small' class="invisibleLine row04 col07 row04col07Small"></div>
                <div id='row04col08Small' class="invisibleLine row04 col08 row04col08Small"></div>
                <div id='row04col09Small' class="invisibleLine row04 col09 row04col09Small"></div>
                <div id='row04col10Small' class="invisibleLine row04 col10 row04col10Small"></div>
                <div id='row04col11Small' class="invisibleLine row04 col11 row04col11Small"></div>
                <div id='row04col12Small' class="invisibleLine row04 col12 row04col12Small"></div>
                <div id='row04col13Small' class="invisibleLine row04 col13 row04col13Small"></div>
                <div id='row04col14Small' class="invisibleLine row04 col14 row04col14Small"></div>
                <div id='row04col15Small' class="invisibleLine row04 col15 row04col15Small"></div>
                <div id='row04col16Small' class="invisibleLine row04 col16 row04col16Small"></div>
                <div id='row05col01Small' class="invisibleLine row05 col01 row05col01Small"></div>
                <div id='row05col02Small' class="invisibleLine row05 col02 row05col02Small"></div>
                <div id='row05col03Small' class="invisibleLine row05 col03 row05col03Small"></div>
                <div id='row05col04Small' class="invisibleLine row05 col04 row05col04Small"></div>
                <div id='row05col05Small' class="invisibleLine row05 col05 row05col05Small"></div>
                <div id='row05col06Small' class="invisibleLine row05 col06 row05col06Small"></div>
                <div id='row05col07Small' class="invisibleLine row05 col07 row05col07Small"></div>
                <div id='row05col08Small' class="invisibleLine row05 col08 row05col08Small"></div>
                <div id='row05col09Small' class="invisibleLine row05 col09 row05col09Small"></div>
                <div id='row05col10Small' class="invisibleLine row05 col10 row05col10Small"></div>
                <div id='row05col11Small' class="invisibleLine row05 col11 row05col11Small"></div>
                <div id='row05col12Small' class="invisibleLine row05 col12 row05col12Small"></div>
                <div id='row05col13Small' class="invisibleLine row05 col13 row05col13Small"></div>
                <div id='row05col14Small' class="invisibleLine row05 col14 row05col14Small"></div>
                <div id='row05col15Small' class="invisibleLine row05 col15 row05col15Small"></div>
                <div id='row05col16Small' class="invisibleLine row05 col16 row05col16Small"></div>
                <div id='row06col01Small' class="invisibleLine row06 col01 row06col01Small"></div>
                <div id='row06col02Small' class="invisibleLine row06 col02 row06col02Small"></div>
                <div id='row06col03Small' class="invisibleLine row06 col03 row06col03Small"></div>
                <div id='row06col04Small' class="invisibleLine row06 col04 row06col04Small"></div>
                <div id='row06col05Small' class="invisibleLine row06 col05 row06col05Small"></div>
                <div id='row06col06Small' class="invisibleLine row06 col06 row06col06Small"></div>
                <div id='row06col07Small' class="invisibleLine row06 col07 row06col07Small"></div>
                <div id='row06col08Small' class="invisibleLine row06 col08 row06col08Small"></div>
                <div id='row06col09Small' class="invisibleLine row06 col09 row06col09Small"></div>
                <div id='row06col10Small' class="invisibleLine row06 col10 row06col10Small"></div>
                <div id='row06col11Small' class="invisibleLine row06 col11 row06col11Small"></div>
                <div id='row06col12Small' class="invisibleLine row06 col12 row06col12Small"></div>
                <div id='row06col13Small' class="invisibleLine row06 col13 row06col13Small"></div>
                <div id='row06col14Small' class="invisibleLine row06 col14 row06col14Small"></div>
                <div id='row06col15Small' class="invisibleLine row06 col15 row06col15Small"></div>
                <div id='row06col16Small' class="invisibleLine row06 col16 row06col16Small"></div>
                <div id='row07col01Small' class="invisibleLine row07 col01 row07col01Small"></div>
                <div id='row07col02Small' class="invisibleLine row07 col02 row07col02Small"></div>
                <div id='row07col03Small' class="invisibleLine row07 col03 row07col03Small"></div>
                <div id='row07col04Small' class="invisibleLine row07 col04 row07col04Small"></div>
                <div id='row07col05Small' class="invisibleLine row07 col05 row07col05Small"></div>
                <div id='row07col06Small' class="invisibleLine row07 col06 row07col06Small"></div>
                <div id='row07col07Small' class="invisibleLine row07 col07 row07col07Small"></div>
                <div id='row07col08Small' class="invisibleLine row07 col08 row07col08Small"></div>
                <div id='row07col09Small' class="invisibleLine row07 col09 row07col09Small"></div>
                <div id='row07col10Small' class="invisibleLine row07 col10 row07col10Small"></div>
                <div id='row07col11Small' class="invisibleLine row07 col11 row07col11Small"></div>
                <div id='row07col12Small' class="invisibleLine row07 col12 row07col12Small"></div>
                <div id='row07col13Small' class="invisibleLine row07 col13 row07col13Small"></div>
                <div id='row07col14Small' class="invisibleLine row07 col14 row07col14Small"></div>
                <div id='row07col15Small' class="invisibleLine row07 col15 row07col15Small"></div>
                <div id='row07col16Small' class="invisibleLine row07 col16 row07col16Small"></div>
                <div id='row08col01Small' class="invisibleLine row08 col01 row08col01Small"></div>
                <div id='row08col02Small' class="invisibleLine row08 col02 row08col02Small"></div>
                <div id='row08col03Small' class="invisibleLine row08 col03 row08col03Small"></div>
                <div id='row08col04Small' class="invisibleLine row08 col04 row08col04Small"></div>
                <div id='row08col05Small' class="invisibleLine row08 col05 row08col05Small"></div>
                <div id='row08col06Small' class="invisibleLine row08 col06 row08col06Small"></div>
                <div id='row08col07Small' class="invisibleLine row08 col07 row08col07Small"></div>
                <div id='row08col08Small' class="invisibleLine row08 col08 row08col08Small"></div>
                <div id='row08col09Small' class="invisibleLine row08 col09 row08col09Small"></div>
                <div id='row08col10Small' class="invisibleLine row08 col10 row08col10Small"></div>
                <div id='row08col11Small' class="invisibleLine row08 col11 row08col11Small"></div>
                <div id='row08col12Small' class="invisibleLine row08 col12 row08col12Small"></div>
                <div id='row08col13Small' class="invisibleLine row08 col13 row08col13Small"></div>
                <div id='row08col14Small' class="invisibleLine row08 col14 row08col14Small"></div>
                <div id='row08col15Small' class="invisibleLine row08 col15 row08col15Small"></div>
                <div id='row08col16Small' class="invisibleLine row08 col16 row08col16Small"></div>
                <div id='row09col01Small' class="invisibleLine row09 col01 row09col01Small"></div>
                <div id='row09col02Small' class="invisibleLine row09 col02 row09col02Small"></div>
                <div id='row09col03Small' class="invisibleLine row09 col03 row09col03Small"></div>
                <div id='row09col04Small' class="invisibleLine row09 col04 row09col04Small"></div>
                <div id='row09col05Small' class="invisibleLine row09 col05 row09col05Small"></div>
                <div id='row09col06Small' class="invisibleLine row09 col06 row09col06Small"></div>
                <div id='row09col07Small' class="invisibleLine row09 col07 row09col07Small"></div>
                <div id='row09col08Small' class="invisibleLine row09 col08 row09col08Small"></div>
                <div id='row09col09Small' class="invisibleLine row09 col09 row09col09Small"></div>
                <div id='row09col10Small' class="invisibleLine row09 col10 row09col10Small"></div>
                <div id='row09col11Small' class="invisibleLine row09 col11 row09col11Small"></div>
                <div id='row09col12Small' class="invisibleLine row09 col12 row09col12Small"></div>
                <div id='row09col13Small' class="invisibleLine row09 col13 row09col13Small"></div>
                <div id='row09col14Small' class="invisibleLine row09 col14 row09col14Small"></div>
                <div id='row09col15Small' class="invisibleLine row09 col15 row09col15Small"></div>
                <div id='row09col16Small' class="invisibleLine row09 col16 row09col16Small"></div>
                <div id='row10col01Small' class="invisibleLine row10 col01 row10col01Small"></div>
                <div id='row10col02Small' class="invisibleLine row10 col02 row10col02Small"></div>
                <div id='row10col03Small' class="invisibleLine row10 col03 row10col03Small"></div>
                <div id='row10col04Small' class="invisibleLine row10 col04 row10col04Small"></div>
                <div id='row10col05Small' class="invisibleLine row10 col05 row10col05Small"></div>
                <div id='row10col06Small' class="invisibleLine row10 col06 row10col06Small"></div>
                <div id='row10col07Small' class="invisibleLine row10 col07 row10col07Small"></div>
                <div id='row10col08Small' class="invisibleLine row10 col08 row10col08Small"></div>
                <div id='row10col09Small' class="invisibleLine row10 col09 row10col09Small"></div>
                <div id='row10col10Small' class="invisibleLine row10 col10 row10col10Small"></div>
                <div id='row10col11Small' class="invisibleLine row10 col11 row10col11Small"></div>
                <div id='row10col12Small' class="invisibleLine row10 col12 row10col12Small"></div>
                <div id='row10col13Small' class="invisibleLine row10 col13 row10col13Small"></div>
                <div id='row10col14Small' class="invisibleLine row10 col14 row10col14Small"></div>
                <div id='row10col15Small' class="invisibleLine row10 col15 row10col15Small"></div>
                <div id='row10col16Small' class="invisibleLine row10 col16 row10col16Small"></div>
                <div id='row11col01Small' class="invisibleLine row11 col01 row11col01Small"></div>
                <div id='row11col02Small' class="invisibleLine row11 col02 row11col02Small"></div>
                <div id='row11col03Small' class="invisibleLine row11 col03 row11col03Small"></div>
                <div id='row11col04Small' class="invisibleLine row11 col04 row11col04Small"></div>
                <div id='row11col05Small' class="invisibleLine row11 col05 row11col05Small"></div>
                <div id='row11col06Small' class="invisibleLine row11 col06 row11col06Small"></div>
                <div id='row11col07Small' class="invisibleLine row11 col07 row11col07Small"></div>
                <div id='row11col08Small' class="invisibleLine row11 col08 row11col08Small"></div>
                <div id='row11col09Small' class="invisibleLine row11 col09 row11col09Small"></div>
                <div id='row11col10Small' class="invisibleLine row11 col10 row11col10Small"></div>
                <div id='row11col11Small' class="invisibleLine row11 col11 row11col11Small"></div>
                <div id='row11col12Small' class="invisibleLine row11 col12 row11col12Small"></div>
                <div id='row11col13Small' class="invisibleLine row11 col13 row11col13Small"></div>
                <div id='row11col14Small' class="invisibleLine row11 col14 row11col14Small"></div>
                <div id='row11col15Small' class="invisibleLine row11 col15 row11col15Small"></div>
                <div id='row11col16Small' class="invisibleLine row11 col16 row11col16Small"></div>
                <div id='row12col01Small' class="invisibleLine row12 col01 row12col01Small"></div>
                <div id='row12col02Small' class="invisibleLine row12 col02 row12col02Small"></div>
                <div id='row12col03Small' class="invisibleLine row12 col03 row12col03Small"></div>
                <div id='row12col04Small' class="invisibleLine row12 col04 row12col04Small"></div>
                <div id='row12col05Small' class="invisibleLine row12 col05 row12col05Small"></div>
                <div id='row12col06Small' class="invisibleLine row12 col06 row12col06Small"></div>
                <div id='row12col07Small' class="invisibleLine row12 col07 row12col07Small"></div>
                <div id='row12col08Small' class="invisibleLine row12 col08 row12col08Small"></div>
                <div id='row12col09Small' class="invisibleLine row12 col09 row12col09Small"></div>
                <div id='row12col10Small' class="invisibleLine row12 col10 row12col10Small"></div>
                <div id='row12col11Small' class="invisibleLine row12 col11 row12col11Small"></div>
                <div id='row12col12Small' class="invisibleLine row12 col12 row12col12Small"></div>
                <div id='row12col13Small' class="invisibleLine row12 col13 row12col13Small"></div>
                <div id='row12col14Small' class="invisibleLine row12 col14 row12col14Small"></div>
                <div id='row12col15Small' class="invisibleLine row12 col15 row12col15Small"></div>
                <div id='row12col16Small' class="invisibleLine row12 col16 row12col16Small"></div>
                <div id='row13col01Small' class="invisibleLine row13 col01 row13col01Small"></div>
                <div id='row13col02Small' class="invisibleLine row13 col02 row13col02Small"></div>
                <div id='row13col03Small' class="invisibleLine row13 col03 row13col03Small"></div>
                <div id='row13col04Small' class="invisibleLine row13 col04 row13col04Small"></div>
                <div id='row13col05Small' class="invisibleLine row13 col05 row13col05Small"></div>
                <div id='row13col06Small' class="invisibleLine row13 col06 row13col06Small"></div>
                <div id='row13col07Small' class="invisibleLine row13 col07 row13col07Small"></div>
                <div id='row13col08Small' class="invisibleLine row13 col08 row13col08Small"></div>
                <div id='row13col09Small' class="invisibleLine row13 col09 row13col09Small"></div>
                <div id='row13col10Small' class="invisibleLine row13 col10 row13col10Small"></div>
                <div id='row13col11Small' class="invisibleLine row13 col11 row13col11Small"></div>
                <div id='row13col12Small' class="invisibleLine row13 col12 row13col12Small"></div>
                <div id='row13col13Small' class="invisibleLine row13 col13 row13col13Small"></div>
                <div id='row13col14Small' class="invisibleLine row13 col14 row13col14Small"></div>
                <div id='row13col15Small' class="invisibleLine row13 col15 row13col15Small"></div>
                <div id='row13col16Small' class="invisibleLine row13 col16 row13col16Small"></div>
                <div id='row14col01Small' class="invisibleLine row14 col01 row14col01Small"></div>
                <div id='row14col02Small' class="invisibleLine row14 col02 row14col02Small"></div>
                <div id='row14col03Small' class="invisibleLine row14 col03 row14col03Small"></div>
                <div id='row14col04Small' class="invisibleLine row14 col04 row14col04Small"></div>
                <div id='row14col05Small' class="invisibleLine row14 col05 row14col05Small"></div>
                <div id='row14col06Small' class="invisibleLine row14 col06 row14col06Small"></div>
                <div id='row14col07Small' class="invisibleLine row14 col07 row14col07Small"></div>
                <div id='row14col08Small' class="invisibleLine row14 col08 row14col08Small"></div>
                <div id='row14col09Small' class="invisibleLine row14 col09 row14col09Small"></div>
                <div id='row14col10Small' class="invisibleLine row14 col10 row14col10Small"></div>
                <div id='row14col11Small' class="invisibleLine row14 col11 row14col11Small"></div>
                <div id='row14col12Small' class="invisibleLine row14 col12 row14col12Small"></div>
                <div id='row14col13Small' class="invisibleLine row14 col13 row14col13Small"></div>
                <div id='row14col14Small' class="invisibleLine row14 col14 row14col14Small"></div>
                <div id='row14col15Small' class="invisibleLine row14 col15 row14col15Small"></div>
                <div id='row14col16Small' class="invisibleLine row14 col16 row14col16Small"></div>
                <div id='row15col01Small' class="invisibleLine row15 col01 row15col01Small"></div>
                <div id='row15col02Small' class="invisibleLine row15 col02 row15col02Small"></div>
                <div id='row15col03Small' class="invisibleLine row15 col03 row15col03Small"></div>
                <div id='row15col04Small' class="invisibleLine row15 col04 row15col04Small"></div>
                <div id='row15col05Small' class="invisibleLine row15 col05 row15col05Small"></div>
                <div id='row15col06Small' class="invisibleLine row15 col06 row15col06Small"></div>
                <div id='row15col07Small' class="invisibleLine row15 col07 row15col07Small"></div>
                <div id='row15col08Small' class="invisibleLine row15 col08 row15col08Small"></div>
                <div id='row15col09Small' class="invisibleLine row15 col09 row15col09Small"></div>
                <div id='row15col10Small' class="invisibleLine row15 col10 row15col10Small"></div>
                <div id='row15col11Small' class="invisibleLine row15 col11 row15col11Small"></div>
                <div id='row15col12Small' class="invisibleLine row15 col12 row15col12Small"></div>
                <div id='row15col13Small' class="invisibleLine row15 col13 row15col13Small"></div>
                <div id='row15col14Small' class="invisibleLine row15 col14 row15col14Small"></div>
                <div id='row15col15Small' class="invisibleLine row15 col15 row15col15Small"></div>
                <div id='row15col16Small' class="invisibleLine row15 col16 row15col16Small"></div>
                <div id='row16col01Small' class="invisibleLine row16 col01 row16col01Small"></div>
                <div id='row16col02Small' class="invisibleLine row16 col02 row16col02Small"></div>
                <div id='row16col03Small' class="invisibleLine row16 col03 row16col03Small"></div>
                <div id='row16col04Small' class="invisibleLine row16 col04 row16col04Small"></div>
                <div id='row16col05Small' class="invisibleLine row16 col05 row16col05Small"></div>
                <div id='row16col06Small' class="invisibleLine row16 col06 row16col06Small"></div>
                <div id='row16col07Small' class="invisibleLine row16 col07 row16col07Small"></div>
                <div id='row16col08Small' class="invisibleLine row16 col08 row16col08Small"></div>
                <div id='row16col09Small' class="invisibleLine row16 col09 row16col09Small"></div>
                <div id='row16col10Small' class="invisibleLine row16 col10 row16col10Small"></div>
                <div id='row16col11Small' class="invisibleLine row16 col11 row16col11Small"></div>
                <div id='row16col12Small' class="invisibleLine row16 col12 row16col12Small"></div>
                <div id='row16col13Small' class="invisibleLine row16 col13 row16col13Small"></div>
                <div id='row16col14Small' class="invisibleLine row16 col14 row16col14Small"></div>
                <div id='row16col15Small' class="invisibleLine row16 col15 row16col15Small"></div>
                <div id='row16col16Small' class="invisibleLine row16 col16 row16col16Small"></div>
        </div>     
        <div id='buttonsContainer'>

        
            <div>
                <span>Edit:</span><button id='editImageBtn'>Edit this image</button>
            </div>
            <div id='flashingOptions'>
                <span>Flash to another animation:</span>
                <button @click="flashAnotherImageAndFlashBack(`check mark`)">Check mark</button>
                <button @click="flashAnotherImageAndFlashBack(`stop sign`)">Stop Sign</button>
                <button @click="flashAnotherImageAndFlashBack(`hour glass`)">Hour glass</button>

                <button @click="flashAnotherImageAndFlashBack(`US Flag`)">US</button>
                <button @click="flashAnotherImageAndFlashBack(`Canada Flag`)">Canada</button>
                <button @click="flashAnotherImageAndFlashBack(`Mexican Flag`)">Mexico</button>
                <button @click="flashAnotherImageAndFlashBack(`Colombia`)">Colombia</button>
                <button @click="flashAnotherImageAndFlashBack(`Brazil`)">Brazil</button>
                <button @click="flashAnotherImageAndFlashBack(`Chile`)">Chile</button>
                <button @click="flashAnotherImageAndFlashBack(`Venezuela`)">Venezuela</button>
                <button @click="flashAnotherImageAndFlashBack(`blm2`)">Black Lives Matter</button>

                
                
                
                
                
                <button @click="flashAnotherImageAndFlashBack(`one`)">1</button>
                <button @click="flashAnotherImageAndFlashBack(`two`)">2</button>
                <button @click="flashAnotherImageAndFlashBack(`three`)">3</button>
                <button @click="flashAnotherImageAndFlashBack(`four`)">4</button>
                <button @click="flashAnotherImageAndFlashBack(`five`)">5</button>
                <button @click="flashAnotherImageAndFlashBack(`six`)">6</button>
                <button @click="flashAnotherImageAndFlashBack(`seven`)">7</button>
                <button @click="flashAnotherImageAndFlashBack(`eight`)">8</button>
                <button @click="flashAnotherImageAndFlashBack(`nine`)">9</button>
                <button @click="flashAnotherImageAndFlashBack(`ten`)">10</button>


                <button @click="flashAnotherImageAndFlashBack(`Sandy`)">Sandy</button>
                <button @click="flashAnotherImageAndFlashBack(`Boohen`)">Baby doll</button>
                <button @click="flashAnotherImageAndFlashBack(`The Scream pastel`)">The Scream</button>

            </div>



            <span>Movement animation:</span>
            <button @click="makeShake()">Shake!</button>
            <button @click='makeBurgerBig()'>Make big burger</button>
            <button @click='waveBurgerCooler()'>Wave!</button>
            <button @click='makeBurgerTakeOverScreen()'>Take over!</button>
            <button @click='makeCircles()'>Make circles</button><br>

            <span>Reset animation:</span>
            <button @click='resetUnitsToSquares()'>Reset to squares</button>
            <button @click='resetAnimationToZero()'>Reset animation</button>

            <!-- <button @click="transposeTwoBurgers()">Transpose burger1 to burger2</button> -->
            <br>
    <!--     <button @click='moveBottomDownwards()'>Move bottom downwards</button> -->
    <!--     <button @click='moveBottomUpwards()'>Move bottom upwards</button> -->
            <span>Move animation around:</span>
            <!-- <button @click="turnPicRightWay()">Turn uploaded image right way</button> -->
            <button @click='moveBottomDownwardsInLoop()'>Move downwards</button>
            <button @click='moveBottomUpwardsInLoop()'>Move upwards</button>
            <button @click='moveBottomLeftwardsInLoop()'>Move leftwards (ok)</button>
            <button @click='moveBottomRightwardsInLoop()'>Move rightwards (X)</button>
            <br>
        </div>
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
    
   
    methods: {
        lengthIsntZero() {
            let box = document.getElementById("outer");
            let number = box.children.length;
            if (number > 0) {return true}
            else {return false}
        },

        editThisImage(burgerID) {
            // this.$router.push(`/n-editImage?burgerID=${this.burgerIDAtHand}`);
            this.$router.push(`/n-editImage?burgerID=${burgerID}`);
        },

        async onLogout() {
            await this.$auth.logout();
        },
        flashAnotherImageAndFlashBack(otherImage){
            this.otherImage = otherImage;
            // setTimeout(function(){ this.resetAnimationToZero(); }, 100);
            // this.resetAnimationToZero();
            let originalColors = [];
            let originalSquares = document.getElementsByClassName("invisibleLine");
            for (let i = 0; i < originalSquares.length; i++) {
                let color = originalSquares[i].style.backgroundColor;
                originalColors.push(color)
            }
            
            // let flashingToThisBurgerString = "";
            let imageID = "";
            for (let i = 0; i < this.burgers.length; i++) {
                if (this.burgers[i].burgerCreator == "burgerfyAdmin@gmail.com") {
                    let burgerTitle = this.burgers[i].burgerTitle;

                    if (burgerTitle == this.otherImage) {
                        imageID = this.burgers[i]._id;
                        this.flashingToThisBurgerString = this.burgers[i].burgerString;
                    }
                }
                
            }
            let colors = this.flashingToThisBurgerString.split("^");
            // let color1 = colors[0];

            // console.log("color1",color1, this.rgbToHex(color1))
            while (document.styleSheets[0].length > 0) {
                document.styleSheets[0].removeRule(0);
            }
            for (let i = 0; i < 256; i++) {
                let square = originalSquares[i];
                let originalColor = originalColors[i];
                let newColor = this.rgbToHex(colors[i]);

                // console.log("originalColor, newColor", originalColor, newColor)

                let kf = `@keyframes transposeColor${i} { 
                    0% { background-color: ${originalColor}; } 
                    20% { background-color: ${newColor}; } 
                    80% {background-color: ${newColor}; }
                    100% { background-color: ${originalColor}; } 
                    }`
                square.style.animation = "";

                document.styleSheets[0].insertRule(kf);
                square.style.animation = `transposeColor${i} 1000ms ${i*1}ms ease-in-out forwards`;
            }
            setTimeout(function() { 
                let url = `http://rgbpixel.herokuapp.com/n-Animate?imageID=${imageID}`
                location.assign(url)
                // location.reload();
            }, 1200);

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
        makeBurgerBig(){
            let square = document.getElementById("outer");
            square.style.transform = "scale(4) translateX(20px)";
        },
        makeBurgerTakeOverScreen(){
            let squares = document.getElementsByClassName("outer");
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

                let sizeChangeX2 = Math.random() * 3 * numberFlipper;
                // let sizeChangeY2 = Math.random() * 10;

                let sizeChangeX3 = Math.random() * 4 * numberFlipper;
                // let sizeChangeY3 = Math.random() * 20;

                let sizeChangeX4 = Math.random() * 6 * numberFlipper;
                // let sizeChangeY4 = Math.random() * 40;

                let sizeChangeX5 = Math.random() * 10 * numberFlipper;
                // let sizeChangeY5 = Math.random() * 60;

                let sizeChangeX6 = Math.random() * 17 * numberFlipper;
                // let sizeChangeY6 = Math.random() * 90;

                let sizeChangeX7 = Math.random() * 13 * numberFlipper;
                // let sizeChangeY7 = Math.random() * 100;

                let sizeChangeX8 = Math.random() * 5 * numberFlipper;
                // let sizeChangeY8 = Math.random() * 90;

                let sizeChangeX9 = Math.random() * 1 * numberFlipper;
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
                        10% {  transform: translateX(-${sizeChangeX1}px) scale(${sizeChangeX1});} 
                        20% {  transform: translateX(-${sizeChangeX2}px) scale(${sizeChangeX2});} 
                        30% {  transform: translateX(-${sizeChangeX3}px) scale(${sizeChangeX3});} 
                        40% {  transform: translateX(-${sizeChangeX4}px) scale(${sizeChangeX4});} 
                        50% {  transform: translateX(-${sizeChangeX5}px) scale(${sizeChangeX5});} 
                        60% {  transform: translateX(-${sizeChangeX6}px) scale(${sizeChangeX6});} 
                        70% {  transform: translateX(-${sizeChangeX7}px) scale(${sizeChangeX7});} 
                        80% {  transform: translateX(-${sizeChangeX8}px) scale(${sizeChangeX8});} 
                        90% {  transform: translateX(-${sizeChangeX9}px) scale(${sizeChangeX9});} 
                        100% { transform: translateX(0px) scale(1);} 
                    `
                } else {
                    kf = `@keyframes takeOverScreen${i} { 
                        0% {   transform: translateX(0px) scale(1);} 
                        10% {  transform: translateX(${sizeChangeX1}px) scale(${sizeChangeX1});} 
                        20% {  transform: translateX(${sizeChangeX2}px) scale(${sizeChangeX2});} 
                        30% {  transform: translateX(${sizeChangeX3}px) scale(${sizeChangeX3});} 
                        40% {  transform: translateX(${sizeChangeX4}px) scale(${sizeChangeX4});} 
                        50% {  transform: translateX(${sizeChangeX5}px) scale(${sizeChangeX5});} 
                        60% {  transform: translateX(${sizeChangeX6}px) scale(${sizeChangeX6});} 
                        70% {  transform: translateX(${sizeChangeX7}px) scale(${sizeChangeX7});} 
                        80% {  transform: translateX(${sizeChangeX8}px) scale(${sizeChangeX8});} 
                        90% {  transform: translateX(${sizeChangeX9}px) scale(${sizeChangeX9});} 
                        100% { transform: translateX(0px) scale(1);} 
                    `
                }
                    
                    
                square.style.animation = "";

            //wave
            
                document.styleSheets[0].insertRule(kf);
                // console.log('square color', square.style.backgroundColor);
                if (square.style.backgroundColor != '#FFFFFF' && square.style.backgroundColor != "white" && square.style.backgroundColor != "rgb(255, 255, 255)") {
                    square.style.animation = `takeOverScreen${i} 3000ms ease-in-out infinite`;
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
            let squares = document.getElementsByClassName("invisibleLine");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.borderRadius = "initial";
            }
        },
        resetAnimationToZero(){
            let burger = document.getElementById("outer");
            burger.style.animation = "";

            let squares = document.getElementsByClassName("invisibleLine");          
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.animation = "";
            }
        },
        parseDataIntoNewBurgers(burgerString, burgerNumber, burgerTitle, burgerID, burgerStatus) {
            if (burgerString == 'nostring') {
                
                let message = document.createElement("div");
                let burgersContainer = document.getElementById("topBurgersContainer");
                message.innerHTML = "Click on Photo or Design above to create your first rgbPixel";
                burgersContainer.style.display = 'flex'
                
                burgersContainer.appendChild(message);
                return
            }
            let data = burgerString;
            let squares = data.split("^");



            let burgerContainer = document.createElement("div");
            burgerContainer.style.display = "flex";
            burgerContainer.style.flexDirection = "column";

            let bTitle = document.createElement("div");
            bTitle.classList = "titleClass";
            
            
            // console.log("burgerTitle??",burgerTitle);

            
            bTitle.innerText = burgerTitle;
            bTitle.style.fontSize = "0.9em";
            // burgerContainer.appendChild(bTitle);

            let burgerNode = document.createElement("div");
            burgerNode.id = `topBurgers${burgerNumber}`;
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let row = square.substring(0, 5);
                let col = square.substring(5, 10);
                let color = square.substring(10);

                let id = row+col;

                let squareNode = document.createElement("div");
                squareNode.id = id;
                squareNode.classList = `topBurgersClass${burgerNumber} topBurger`;
                squareNode.style.backgroundColor = color;
                squareNode.style.height = "0.25em";
                squareNode.style.width = "0.25em";
                
                burgerNode.appendChild(squareNode);
                
            };

            burgerNode.style.display = "flex";
            burgerNode.style.flexDirection = "row";
            // if (burgerStatus == "ndadada") {
            //     burgerNode.style.flexDirection = "column";
            // } else {
            //     burgerNode.style.flexDirection = "row";
            // } 
            burgerNode.style.flexWrap = "wrap";
            burgerNode.style.width = "4em";
            burgerNode.style.height = "4em";
            burgerNode.style.margin = "10px auto";
            burgerNode.style.outline = "1px solid rgb(218, 218, 218)";

            // burgerNode.style.display = "flex";

            burgerNode.addEventListener("click", () => {
                this.selectBurger(burgerString, burgerNumber, burgerTitle, burgerStatus, burgerID);
            })

            // burgerNode.onclick = this.selectBurger(burgerNumber);
            
            burgerContainer.appendChild(burgerNode);
            burgerContainer.appendChild(bTitle);
            let burgersContainer = document.getElementById("topBurgersContainer");
            burgersContainer.appendChild(burgerContainer);
            burgersContainer.style.display = "flex";
            burgersContainer.style.flexWrap = "wrap";
            burgersContainer.style.flexDirection = "row";
            burgersContainer.style.justifyContent = "space-around";


            let editImageBtn = document.getElementById("editImageBtn");
            editImageBtn.addEventListener("click", () => {
                this.editThisImage(burgerID);
            })

            // console.log("BURGER NODE",burgerNode)
            
            // console.log(squares[0]);
        },
        selectBurger(burgerString, burgerNumber, burgerTitle, burgerStatus, burgerID){
            let data = burgerString;
            let squares = data.split("^");
            this.burgerIDAtHand = burgerID;
            let burgerNode = document.createElement("div");
            
            let lowerBurger = document.getElementById("outer");
            // console.log("before deletion",lowerBurger.children)
            
            if (lowerBurger.children.length > 0) {
                for (let i = lowerBurger.children.length-1; i >= 0; i--) {
                    lowerBurger.removeChild(lowerBurger.children[i]);
                }
            }
            
            // console.log("after deletion",lowerBurger.children)
            burgerNode.id = `bottomBurger${burgerNumber}`;
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                let row = square.substring(0, 5);
                let col = square.substring(5, 10);
                let color = square.substring(10);

                let id = row+col;

                let squareNode = document.createElement("div");
                squareNode.id = id;
                squareNode.classList = `invisibleLine bottomBurgerClass${burgerNumber}`;
                squareNode.style.backgroundColor = color;
                squareNode.style.height = "0.25em";
                squareNode.style.width = "0.25em";
                
                burgerNode.appendChild(squareNode);
                
            };
            burgerNode.style.display = "flex";
            burgerNode.style.flexWrap = "wrap";
            burgerNode.style.flexDirection = "row";

            burgerNode.style.width = "4em";
            burgerNode.style.height = "4em";
            burgerNode.style.margin = "10px auto";
            burgerNode.style.outline = "1px solid rgb(218, 218, 218)";

            // let burgersContainer = document.getElementById("outer");
            lowerBurger.appendChild(burgerNode);
            lowerBurger.style.display = "flex";
            lowerBurger.style.flexDirection = "row";

            let buttonsContainer = document.getElementById("buttonsContainer");
            buttonsContainer.style.visibility = 'visible';
        },
        makeShake() {
            let squares = document.getElementsByClassName("invisibleLine");
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
        waveBurgerCooler() {
        let squares = document.getElementsByClassName("invisibleLine");
        while (document.styleSheets[0].length > 0) {
            document.styleSheets[0].removeRule(0);
        }
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            let v = square.id;
            
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
            if (square.style.backgroundColor != "black")
            {
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

            } 
            }
            
        },
        makeBottomCircles() {
            let squares = document.getElementsByClassName("bottomBurgerClass");
            for (let i = 0; i < squares.length; i++) {
                let square = squares[i];
                square.style.borderRadius = "50%";
            }
        },
        moveBottomDownwards() {
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("invisibleLine");
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
        let squares = document.getElementsByClassName("invisibleLine");
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
        let squares = document.getElementsByClassName("invisibleLine");
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
        let squares = document.getElementsByClassName("invisibleLine");
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

        // for (let i = 0; i < 16; i++) {
        //     for (let j = 0; j< 16; j++) {
        //         let square = oldCols[i][j];
        //         let newColor = newCols[i][j].style.backgroundColor;
        //         square.style.backgroundColor = newColor
        //     }

        // }



        for (let i = 1; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                let square = oldCols[i][j];
                let newColor = newCols[i][j].style.backgroundColor;
                // console.log("old color:", square.style.backgroundColor, ":::::::::new color:", newColor)
                square.style.backgroundColor = newColor
            }

        }
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 16; j++) {
                let square = oldCols[i][j];
                let newColor = newCols[i][j].style.backgroundColor;
                // console.log("old color:", square.style.backgroundColor, ":::::::::new color:", newColor)
                square.style.backgroundColor = newColor
            }

        }






        
        },
        moveBottomUpwardsInLoop2_better() {
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("invisibleLine");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];    
            square.style.borderRadius = "50%";
        }
        },
        hexToRgb(hex) {
            var bigint = parseInt(hex, 16);
            var r = (bigint >> 16) & 255;
            var g = (bigint >> 8) & 255;
            var b = bigint & 255;

            return "rgb(" + r + ", " + g + ", " + b + ")";
        },
        componentToHex(c) {
            var hex = c.toString(16);
            return hex.length == 1 ? "0" + hex : hex;
        },
        rgbToHex(colorRGB) {
            
            colorRGB = colorRGB.substring(14);
            
            let colors = colorRGB.split(",");
            let r = parseInt(colors[0].trim());
            let g = parseInt(colors[1].trim());
            let b = parseInt(colors[2].substring(0, colors[2].length-1).trim());
            // console.log(colors,r,g,b);
            return "#" + this.componentToHex(0 + r).toUpperCase() + this.componentToHex(0 + g).toUpperCase() + this.componentToHex(0 + b).toUpperCase()
            // return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
    },
        mounted() {
        let numOfUserImages = 0;
        for (let i = 0; i < this.burgers.length; i++) {
            if (this.burgers[i].burgerCreator == this.$auth.$state.user.email) {
                numOfUserImages++;
            }
        }
        if (numOfUserImages == 0) {
            let bString = "nostring"
            let bNumber = 1;
            let bTitle = 'noBTitle';
            let bID = 'noBID';
            let bStatus = 'noBStatus';
            this.parseDataIntoNewBurgers(bString, bNumber, bTitle, bID, bStatus)
        }
        let firstData = [];    
        for (let i = 0; i < this.burgers.length; i++) {
            let userEmail = this.burgers[i].burgerCreator;
            // if (this.$route.query.burgerID != "") {
            //     if (this.$route.query.burgerID == this.burgers[i]._id) {
            //         let bString = this.burgers[i].burgerString;
            //         let bNumber = i;
            //         let bTitle = this.burgers[i].burgerTitle;
            //         console.log("inside this area with title", bTitle)
            //         let bID = this.burgers[i]._id;
            //         let bStatus = this.burgers[i].burgerStatus;
            //         if (firstData.length == 0) {
            //             firstData.push(bString)
            //             firstData.push(bNumber)
            //             firstData.push(bTitle)
            //             firstData.push(bID)
            //             firstData.push(bStatus)
            //         }
            //     this.parseDataIntoNewBurgers(bString, bNumber, bTitle, bID, bStatus)
            //     return
            //     }
            // }
            // else 
            if (userEmail == this.$auth.$state.user.email) {
                // if (this.$route.query.burgerID == this.burgers[i]._id) {
                    console.log("inside nthis place");
                    let bString = this.burgers[i].burgerString;
                    let bNumber = i;
                    let bTitle = this.burgers[i].burgerTitle;
                    let bID = this.burgers[i]._id;
                    let bStatus = this.burgers[i].burgerStatus;
                    if (firstData.length == 0) {
                        firstData.push(bString)
                        firstData.push(bNumber)
                        firstData.push(bTitle)
                        firstData.push(bID)
                        firstData.push(bStatus)
                    }
                    this.parseDataIntoNewBurgers(bString, bNumber, bTitle, bID, bStatus)
                    // this.parseDataIntoNewBurgers(this.burgers[i].burgerString, i, this.burgers[i].burgerTitle, this.burgers[i]._id, this.burgers[i].burgerStatus)
                }
            // }
            
        }
        if (firstData.length == 0) {
            return
        }
        this.selectBurger(firstData[0], firstData[1], firstData[2], firstData[3], firstData[4])
        
    },
  
}
</script>

<style scoped>

#buttonsContainer {
    visibility: hidden;
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
    min-width: 25px;
    font-size: 0.6em;
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
    /* display: flex;
    flex-wrap: wrap; */
    width: 4em;
    height: 4em;
    margin: 20px auto;
    /* margin-left: 40%; */
    /* margin-bottom: 25px; */
    /* outline: 1px solid rgb(218, 218, 218); */

}

.invisibleLine {
    min-height: 0.25;
    min-width: 0.25em;
    background-color: white;
}

</style>




 