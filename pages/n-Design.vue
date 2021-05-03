<template>
    <main id='main'>
        <!-- <template v-if="$auth.$state.loggedIn">
            <span @click="onLogout" style="font-size: 1.2rem; cursor: pointer">Logout</span>
        </template> -->
        <div id='number'>0</div>
        
        <h3>Create an rgbPixel</h3>
        <div>Step 1: Design</div>
        <div id="navbar">  
            <div class='outer'>
             
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
        </div>

        <div id='mainGrid'>
            <div @mousedown="clickToAddColor('row01col01Grid');" @mouseover="setColor('row01col01Grid');  setFavoriteColor();" class="gridItem row01col01Grid"></div>
            <div @mousedown="clickToAddColor('row01col02Grid');" @mouseover="setColor('row01col02Grid');  setFavoriteColor(); " class="gridItem row01col02Grid"></div>
            <div @mousedown="clickToAddColor('row01col03Grid');" @mouseover="setColor('row01col03Grid');  setFavoriteColor(); " class="gridItem row01col03Grid"></div>
            <div @mousedown="clickToAddColor('row01col04Grid');" @mouseover="setColor('row01col04Grid');  setFavoriteColor(); " class="gridItem row01col04Grid"></div>
            <div @mousedown="clickToAddColor('row01col05Grid');" @mouseover="setColor('row01col05Grid');  setFavoriteColor(); " class="gridItem row01col05Grid"></div>
            <div @mousedown="clickToAddColor('row01col06Grid');" @mouseover="setColor('row01col06Grid');  setFavoriteColor(); " class="gridItem row01col06Grid"></div>
            <div @mousedown="clickToAddColor('row01col07Grid');" @mouseover="setColor('row01col07Grid');  setFavoriteColor(); " class="gridItem row01col07Grid"></div>
            <div @mousedown="clickToAddColor('row01col08Grid');" @mouseover="setColor('row01col08Grid');  setFavoriteColor(); " class="gridItem row01col08Grid"></div>
            <div @mousedown="clickToAddColor('row01col09Grid');" @mouseover="setColor('row01col09Grid');  setFavoriteColor(); " class="gridItem row01col09Grid"></div>
            <div @mousedown="clickToAddColor('row01col10Grid');" @mouseover="setColor('row01col10Grid');  setFavoriteColor(); " class="gridItem row01col10Grid"></div>
            <div @mousedown="clickToAddColor('row01col11Grid');" @mouseover="setColor('row01col11Grid');  setFavoriteColor(); " class="gridItem row01col11Grid"></div>
            <div @mousedown="clickToAddColor('row01col12Grid');" @mouseover="setColor('row01col12Grid');  setFavoriteColor(); " class="gridItem row01col12Grid"></div>
            <div @mousedown="clickToAddColor('row01col13Grid');" @mouseover="setColor('row01col13Grid');  setFavoriteColor(); " class="gridItem row01col13Grid"></div>
            <div @mousedown="clickToAddColor('row01col14Grid');" @mouseover="setColor('row01col14Grid');  setFavoriteColor(); " class="gridItem row01col14Grid"></div>
            <div @mousedown="clickToAddColor('row01col15Grid');" @mouseover="setColor('row01col15Grid');  setFavoriteColor(); " class="gridItem row01col15Grid"></div>
            <div @mousedown="clickToAddColor('row01col16Grid');" @mouseover="setColor('row01col16Grid');  setFavoriteColor(); " class="gridItem row01col16Grid"></div>
            <div @mousedown="clickToAddColor('row02col01Grid');" @mouseover="setColor('row02col01Grid');  setFavoriteColor(); " class="gridItem row02col01Grid"></div>
            <div @mousedown="clickToAddColor('row02col02Grid');" @mouseover="setColor('row02col02Grid');  setFavoriteColor(); " class="gridItem row02col02Grid"></div>
            <div @mousedown="clickToAddColor('row02col03Grid');" @mouseover="setColor('row02col03Grid');  setFavoriteColor(); " class="gridItem row02col03Grid"></div>
            <div @mousedown="clickToAddColor('row02col04Grid');" @mouseover="setColor('row02col04Grid');  setFavoriteColor(); " class="gridItem row02col04Grid"></div>
            <div @mousedown="clickToAddColor('row02col05Grid');" @mouseover="setColor('row02col05Grid');  setFavoriteColor(); " class="gridItem row02col05Grid"></div>
            <div @mousedown="clickToAddColor('row02col06Grid');" @mouseover="setColor('row02col06Grid');  setFavoriteColor(); " class="gridItem row02col06Grid"></div>
            <div @mousedown="clickToAddColor('row02col07Grid');" @mouseover="setColor('row02col07Grid');  setFavoriteColor(); " class="gridItem row02col07Grid"></div>
            <div @mousedown="clickToAddColor('row02col08Grid');" @mouseover="setColor('row02col08Grid');  setFavoriteColor(); " class="gridItem row02col08Grid"></div>
            <div @mousedown="clickToAddColor('row02col09Grid');" @mouseover="setColor('row02col09Grid');  setFavoriteColor(); " class="gridItem row02col09Grid"></div>
            <div @mousedown="clickToAddColor('row02col10Grid');" @mouseover="setColor('row02col10Grid');  setFavoriteColor(); " class="gridItem row02col10Grid"></div>
            <div @mousedown="clickToAddColor('row02col11Grid');" @mouseover="setColor('row02col11Grid');  setFavoriteColor(); " class="gridItem row02col11Grid"></div>
            <div @mousedown="clickToAddColor('row02col12Grid');" @mouseover="setColor('row02col12Grid');  setFavoriteColor(); " class="gridItem row02col12Grid"></div>
            <div @mousedown="clickToAddColor('row02col13Grid');" @mouseover="setColor('row02col13Grid');  setFavoriteColor(); " class="gridItem row02col13Grid"></div>
            <div @mousedown="clickToAddColor('row02col14Grid');" @mouseover="setColor('row02col14Grid');  setFavoriteColor(); " class="gridItem row02col14Grid"></div>
            <div @mousedown="clickToAddColor('row02col15Grid');" @mouseover="setColor('row02col15Grid');  setFavoriteColor(); " class="gridItem row02col15Grid"></div>
            <div @mousedown="clickToAddColor('row02col16Grid');" @mouseover="setColor('row02col16Grid');  setFavoriteColor(); " class="gridItem row02col16Grid"></div>
            <div @mousedown="clickToAddColor('row03col01Grid');" @mouseover="setColor('row03col01Grid');  setFavoriteColor(); " class="gridItem row03col01Grid"></div>
            <div @mousedown="clickToAddColor('row03col02Grid');" @mouseover="setColor('row03col02Grid');  setFavoriteColor(); " class="gridItem row03col02Grid"></div>
            <div @mousedown="clickToAddColor('row03col03Grid');" @mouseover="setColor('row03col03Grid');  setFavoriteColor(); " class="gridItem row03col03Grid"></div>
            <div @mousedown="clickToAddColor('row03col04Grid');" @mouseover="setColor('row03col04Grid');  setFavoriteColor(); " class="gridItem row03col04Grid"></div>
            <div @mousedown="clickToAddColor('row03col05Grid');" @mouseover="setColor('row03col05Grid');  setFavoriteColor(); " class="gridItem row03col05Grid"></div>
            <div @mousedown="clickToAddColor('row03col06Grid');" @mouseover="setColor('row03col06Grid');  setFavoriteColor(); " class="gridItem row03col06Grid"></div>
            <div @mousedown="clickToAddColor('row03col07Grid');" @mouseover="setColor('row03col07Grid');  setFavoriteColor(); " class="gridItem row03col07Grid"></div>
            <div @mousedown="clickToAddColor('row03col08Grid');" @mouseover="setColor('row03col08Grid');  setFavoriteColor(); " class="gridItem row03col08Grid"></div>
            <div @mousedown="clickToAddColor('row03col09Grid');" @mouseover="setColor('row03col09Grid');  setFavoriteColor(); " class="gridItem row03col09Grid"></div>
            <div @mousedown="clickToAddColor('row03col10Grid');" @mouseover="setColor('row03col10Grid');  setFavoriteColor(); " class="gridItem row03col10Grid"></div>
            <div @mousedown="clickToAddColor('row03col11Grid');" @mouseover="setColor('row03col11Grid');  setFavoriteColor(); " class="gridItem row03col11Grid"></div>
            <div @mousedown="clickToAddColor('row03col12Grid');" @mouseover="setColor('row03col12Grid');  setFavoriteColor(); " class="gridItem row03col12Grid"></div>
            <div @mousedown="clickToAddColor('row03col13Grid');" @mouseover="setColor('row03col13Grid');  setFavoriteColor(); " class="gridItem row03col13Grid"></div>
            <div @mousedown="clickToAddColor('row03col14Grid');" @mouseover="setColor('row03col14Grid');  setFavoriteColor(); " class="gridItem row03col14Grid"></div>
            <div @mousedown="clickToAddColor('row03col15Grid');" @mouseover="setColor('row03col15Grid');  setFavoriteColor(); " class="gridItem row03col15Grid"></div>
            <div @mousedown="clickToAddColor('row03col16Grid');" @mouseover="setColor('row03col16Grid');  setFavoriteColor(); " class="gridItem row03col16Grid"></div>
            <div @mousedown="clickToAddColor('row04col01Grid');" @mouseover="setColor('row04col01Grid');  setFavoriteColor(); " class="gridItem row04col01Grid"></div>
            <div @mousedown="clickToAddColor('row04col02Grid');" @mouseover="setColor('row04col02Grid');  setFavoriteColor(); " class="gridItem row04col02Grid"></div>
            <div @mousedown="clickToAddColor('row04col03Grid');" @mouseover="setColor('row04col03Grid');  setFavoriteColor(); " class="gridItem row04col03Grid"></div>
            <div @mousedown="clickToAddColor('row04col04Grid');" @mouseover="setColor('row04col04Grid');  setFavoriteColor(); " class="gridItem row04col04Grid"></div>
            <div @mousedown="clickToAddColor('row04col05Grid');" @mouseover="setColor('row04col05Grid');  setFavoriteColor(); " class="gridItem row04col05Grid"></div>
            <div @mousedown="clickToAddColor('row04col06Grid');" @mouseover="setColor('row04col06Grid');  setFavoriteColor(); " class="gridItem row04col06Grid"></div>
            <div @mousedown="clickToAddColor('row04col07Grid');" @mouseover="setColor('row04col07Grid');  setFavoriteColor(); " class="gridItem row04col07Grid"></div>
            <div @mousedown="clickToAddColor('row04col08Grid');" @mouseover="setColor('row04col08Grid');  setFavoriteColor(); " class="gridItem row04col08Grid"></div>
            <div @mousedown="clickToAddColor('row04col09Grid');" @mouseover="setColor('row04col09Grid');  setFavoriteColor(); " class="gridItem row04col09Grid"></div>
            <div @mousedown="clickToAddColor('row04col10Grid');" @mouseover="setColor('row04col10Grid');  setFavoriteColor(); " class="gridItem row04col10Grid"></div>
            <div @mousedown="clickToAddColor('row04col11Grid');" @mouseover="setColor('row04col11Grid');  setFavoriteColor(); " class="gridItem row04col11Grid"></div>
            <div @mousedown="clickToAddColor('row04col12Grid');" @mouseover="setColor('row04col12Grid');  setFavoriteColor(); " class="gridItem row04col12Grid"></div>
            <div @mousedown="clickToAddColor('row04col13Grid');" @mouseover="setColor('row04col13Grid');  setFavoriteColor(); " class="gridItem row04col13Grid"></div>
            <div @mousedown="clickToAddColor('row04col14Grid');" @mouseover="setColor('row04col14Grid');  setFavoriteColor(); " class="gridItem row04col14Grid"></div>
            <div @mousedown="clickToAddColor('row04col15Grid');" @mouseover="setColor('row04col15Grid');  setFavoriteColor(); " class="gridItem row04col15Grid"></div>
            <div @mousedown="clickToAddColor('row04col16Grid');" @mouseover="setColor('row04col16Grid');  setFavoriteColor(); " class="gridItem row04col16Grid"></div>
            <div @mousedown="clickToAddColor('row05col01Grid');" @mouseover="setColor('row05col01Grid');  setFavoriteColor(); " class="gridItem row05col01Grid"></div>
            <div @mousedown="clickToAddColor('row05col02Grid');" @mouseover="setColor('row05col02Grid');  setFavoriteColor(); " class="gridItem row05col02Grid"></div>
            <div @mousedown="clickToAddColor('row05col03Grid');" @mouseover="setColor('row05col03Grid');  setFavoriteColor(); " class="gridItem row05col03Grid"></div>
            <div @mousedown="clickToAddColor('row05col04Grid');" @mouseover="setColor('row05col04Grid');  setFavoriteColor(); " class="gridItem row05col04Grid"></div>
            <div @mousedown="clickToAddColor('row05col05Grid');" @mouseover="setColor('row05col05Grid');  setFavoriteColor(); " class="gridItem row05col05Grid"></div>
            <div @mousedown="clickToAddColor('row05col06Grid');" @mouseover="setColor('row05col06Grid');  setFavoriteColor(); " class="gridItem row05col06Grid"></div>
            <div @mousedown="clickToAddColor('row05col07Grid');" @mouseover="setColor('row05col07Grid');  setFavoriteColor(); " class="gridItem row05col07Grid"></div>
            <div @mousedown="clickToAddColor('row05col08Grid');" @mouseover="setColor('row05col08Grid');  setFavoriteColor(); " class="gridItem row05col08Grid"></div>
            <div @mousedown="clickToAddColor('row05col09Grid');" @mouseover="setColor('row05col09Grid');  setFavoriteColor(); " class="gridItem row05col09Grid"></div>
            <div @mousedown="clickToAddColor('row05col10Grid');" @mouseover="setColor('row05col10Grid');  setFavoriteColor(); " class="gridItem row05col10Grid"></div>
            <div @mousedown="clickToAddColor('row05col11Grid');" @mouseover="setColor('row05col11Grid');  setFavoriteColor(); " class="gridItem row05col11Grid"></div>
            <div @mousedown="clickToAddColor('row05col12Grid');" @mouseover="setColor('row05col12Grid');  setFavoriteColor(); " class="gridItem row05col12Grid"></div>
            <div @mousedown="clickToAddColor('row05col13Grid');" @mouseover="setColor('row05col13Grid');  setFavoriteColor(); " class="gridItem row05col13Grid"></div>
            <div @mousedown="clickToAddColor('row05col14Grid');" @mouseover="setColor('row05col14Grid');  setFavoriteColor(); " class="gridItem row05col14Grid"></div>
            <div @mousedown="clickToAddColor('row05col15Grid');" @mouseover="setColor('row05col15Grid');  setFavoriteColor(); " class="gridItem row05col15Grid"></div>
            <div @mousedown="clickToAddColor('row05col16Grid');" @mouseover="setColor('row05col16Grid');  setFavoriteColor(); " class="gridItem row05col16Grid"></div>
            <div @mousedown="clickToAddColor('row06col01Grid');" @mouseover="setColor('row06col01Grid');  setFavoriteColor(); " class="gridItem row06col01Grid"></div>
            <div @mousedown="clickToAddColor('row06col02Grid');" @mouseover="setColor('row06col02Grid');  setFavoriteColor(); " class="gridItem row06col02Grid"></div>
            <div @mousedown="clickToAddColor('row06col03Grid');" @mouseover="setColor('row06col03Grid');  setFavoriteColor(); " class="gridItem row06col03Grid"></div>
            <div @mousedown="clickToAddColor('row06col04Grid');" @mouseover="setColor('row06col04Grid');  setFavoriteColor(); " class="gridItem row06col04Grid"></div>
            <div @mousedown="clickToAddColor('row06col05Grid');" @mouseover="setColor('row06col05Grid');  setFavoriteColor(); " class="gridItem row06col05Grid"></div>
            <div @mousedown="clickToAddColor('row06col06Grid');" @mouseover="setColor('row06col06Grid');  setFavoriteColor(); " class="gridItem row06col06Grid"></div>
            <div @mousedown="clickToAddColor('row06col07Grid');" @mouseover="setColor('row06col07Grid');  setFavoriteColor(); " class="gridItem row06col07Grid"></div>
            <div @mousedown="clickToAddColor('row06col08Grid');" @mouseover="setColor('row06col08Grid');  setFavoriteColor(); " class="gridItem row06col08Grid"></div>
            <div @mousedown="clickToAddColor('row06col09Grid');" @mouseover="setColor('row06col09Grid');  setFavoriteColor(); " class="gridItem row06col09Grid"></div>
            <div @mousedown="clickToAddColor('row06col10Grid');" @mouseover="setColor('row06col10Grid');  setFavoriteColor(); " class="gridItem row06col10Grid"></div>
            <div @mousedown="clickToAddColor('row06col11Grid');" @mouseover="setColor('row06col11Grid');  setFavoriteColor(); " class="gridItem row06col11Grid"></div>
            <div @mousedown="clickToAddColor('row06col12Grid');" @mouseover="setColor('row06col12Grid');  setFavoriteColor(); " class="gridItem row06col12Grid"></div>
            <div @mousedown="clickToAddColor('row06col13Grid');" @mouseover="setColor('row06col13Grid');  setFavoriteColor(); " class="gridItem row06col13Grid"></div>
            <div @mousedown="clickToAddColor('row06col14Grid');" @mouseover="setColor('row06col14Grid');  setFavoriteColor(); " class="gridItem row06col14Grid"></div>
            <div @mousedown="clickToAddColor('row06col15Grid');" @mouseover="setColor('row06col15Grid');  setFavoriteColor(); " class="gridItem row06col15Grid"></div>
            <div @mousedown="clickToAddColor('row06col16Grid');" @mouseover="setColor('row06col16Grid');  setFavoriteColor(); " class="gridItem row06col16Grid"></div>
            <div @mousedown="clickToAddColor('row07col01Grid');" @mouseover="setColor('row07col01Grid');  setFavoriteColor(); " class="gridItem row07col01Grid"></div>
            <div @mousedown="clickToAddColor('row07col02Grid');" @mouseover="setColor('row07col02Grid');  setFavoriteColor(); " class="gridItem row07col02Grid"></div>
            <div @mousedown="clickToAddColor('row07col03Grid');" @mouseover="setColor('row07col03Grid');  setFavoriteColor(); " class="gridItem row07col03Grid"></div>
            <div @mousedown="clickToAddColor('row07col04Grid');" @mouseover="setColor('row07col04Grid');  setFavoriteColor(); " class="gridItem row07col04Grid"></div>
            <div @mousedown="clickToAddColor('row07col05Grid');" @mouseover="setColor('row07col05Grid');  setFavoriteColor(); " class="gridItem row07col05Grid"></div>
            <div @mousedown="clickToAddColor('row07col06Grid');" @mouseover="setColor('row07col06Grid');  setFavoriteColor(); " class="gridItem row07col06Grid"></div>
            <div @mousedown="clickToAddColor('row07col07Grid');" @mouseover="setColor('row07col07Grid');  setFavoriteColor(); " class="gridItem row07col07Grid"></div>
            <div @mousedown="clickToAddColor('row07col08Grid');" @mouseover="setColor('row07col08Grid');  setFavoriteColor(); " class="gridItem row07col08Grid"></div>
            <div @mousedown="clickToAddColor('row07col09Grid');" @mouseover="setColor('row07col09Grid');  setFavoriteColor(); " class="gridItem row07col09Grid"></div>
            <div @mousedown="clickToAddColor('row07col10Grid');" @mouseover="setColor('row07col10Grid');  setFavoriteColor(); " class="gridItem row07col10Grid"></div>
            <div @mousedown="clickToAddColor('row07col11Grid');" @mouseover="setColor('row07col11Grid');  setFavoriteColor(); " class="gridItem row07col11Grid"></div>
            <div @mousedown="clickToAddColor('row07col12Grid');" @mouseover="setColor('row07col12Grid');  setFavoriteColor(); " class="gridItem row07col12Grid"></div>
            <div @mousedown="clickToAddColor('row07col13Grid');" @mouseover="setColor('row07col13Grid');  setFavoriteColor(); " class="gridItem row07col13Grid"></div>
            <div @mousedown="clickToAddColor('row07col14Grid');" @mouseover="setColor('row07col14Grid');  setFavoriteColor(); " class="gridItem row07col14Grid"></div>
            <div @mousedown="clickToAddColor('row07col15Grid');" @mouseover="setColor('row07col15Grid');  setFavoriteColor(); " class="gridItem row07col15Grid"></div>
            <div @mousedown="clickToAddColor('row07col16Grid');" @mouseover="setColor('row07col16Grid');  setFavoriteColor(); " class="gridItem row07col16Grid"></div>
            <div @mousedown="clickToAddColor('row08col01Grid');" @mouseover="setColor('row08col01Grid');  setFavoriteColor(); " class="gridItem row08col01Grid"></div>
            <div @mousedown="clickToAddColor('row08col02Grid');" @mouseover="setColor('row08col02Grid');  setFavoriteColor(); " class="gridItem row08col02Grid"></div>
            <div @mousedown="clickToAddColor('row08col03Grid');" @mouseover="setColor('row08col03Grid');  setFavoriteColor(); " class="gridItem row08col03Grid"></div>
            <div @mousedown="clickToAddColor('row08col04Grid');" @mouseover="setColor('row08col04Grid');  setFavoriteColor(); " class="gridItem row08col04Grid"></div>
            <div @mousedown="clickToAddColor('row08col05Grid');" @mouseover="setColor('row08col05Grid');  setFavoriteColor(); " class="gridItem row08col05Grid"></div>
            <div @mousedown="clickToAddColor('row08col06Grid');" @mouseover="setColor('row08col06Grid');  setFavoriteColor(); " class="gridItem row08col06Grid"></div>
            <div @mousedown="clickToAddColor('row08col07Grid');" @mouseover="setColor('row08col07Grid');  setFavoriteColor(); " class="gridItem row08col07Grid"></div>
            <div @mousedown="clickToAddColor('row08col08Grid');" @mouseover="setColor('row08col08Grid');  setFavoriteColor(); " class="gridItem row08col08Grid"></div>
            <div @mousedown="clickToAddColor('row08col09Grid');" @mouseover="setColor('row08col09Grid');  setFavoriteColor(); " class="gridItem row08col09Grid"></div>
            <div @mousedown="clickToAddColor('row08col10Grid');" @mouseover="setColor('row08col10Grid');  setFavoriteColor(); " class="gridItem row08col10Grid"></div>
            <div @mousedown="clickToAddColor('row08col11Grid');" @mouseover="setColor('row08col11Grid');  setFavoriteColor(); " class="gridItem row08col11Grid"></div>
            <div @mousedown="clickToAddColor('row08col12Grid');" @mouseover="setColor('row08col12Grid');  setFavoriteColor(); " class="gridItem row08col12Grid"></div>
            <div @mousedown="clickToAddColor('row08col13Grid');" @mouseover="setColor('row08col13Grid');  setFavoriteColor(); " class="gridItem row08col13Grid"></div>
            <div @mousedown="clickToAddColor('row08col14Grid');" @mouseover="setColor('row08col14Grid');  setFavoriteColor(); " class="gridItem row08col14Grid"></div>
            <div @mousedown="clickToAddColor('row08col15Grid');" @mouseover="setColor('row08col15Grid');  setFavoriteColor(); " class="gridItem row08col15Grid"></div>
            <div @mousedown="clickToAddColor('row08col16Grid');" @mouseover="setColor('row08col16Grid');  setFavoriteColor(); " class="gridItem row08col16Grid"></div>
            <div @mousedown="clickToAddColor('row09col01Grid');" @mouseover="setColor('row09col01Grid');  setFavoriteColor(); " class="gridItem row09col01Grid"></div>
            <div @mousedown="clickToAddColor('row09col02Grid');" @mouseover="setColor('row09col02Grid');  setFavoriteColor(); " class="gridItem row09col02Grid"></div>
            <div @mousedown="clickToAddColor('row09col03Grid');" @mouseover="setColor('row09col03Grid');  setFavoriteColor(); " class="gridItem row09col03Grid"></div>
            <div @mousedown="clickToAddColor('row09col04Grid');" @mouseover="setColor('row09col04Grid');  setFavoriteColor(); " class="gridItem row09col04Grid"></div>
            <div @mousedown="clickToAddColor('row09col05Grid');" @mouseover="setColor('row09col05Grid');  setFavoriteColor(); " class="gridItem row09col05Grid"></div>
            <div @mousedown="clickToAddColor('row09col06Grid');" @mouseover="setColor('row09col06Grid');  setFavoriteColor(); " class="gridItem row09col06Grid"></div>
            <div @mousedown="clickToAddColor('row09col07Grid');" @mouseover="setColor('row09col07Grid');  setFavoriteColor(); " class="gridItem row09col07Grid"></div>
            <div @mousedown="clickToAddColor('row09col08Grid');" @mouseover="setColor('row09col08Grid');  setFavoriteColor(); " class="gridItem row09col08Grid"></div>
            <div @mousedown="clickToAddColor('row09col09Grid');" @mouseover="setColor('row09col09Grid');  setFavoriteColor(); " class="gridItem row09col09Grid"></div>
            <div @mousedown="clickToAddColor('row09col10Grid');" @mouseover="setColor('row09col10Grid');  setFavoriteColor(); " class="gridItem row09col10Grid"></div>
            <div @mousedown="clickToAddColor('row09col11Grid');" @mouseover="setColor('row09col11Grid');  setFavoriteColor(); " class="gridItem row09col11Grid"></div>
            <div @mousedown="clickToAddColor('row09col12Grid');" @mouseover="setColor('row09col12Grid');  setFavoriteColor(); " class="gridItem row09col12Grid"></div>
            <div @mousedown="clickToAddColor('row09col13Grid');" @mouseover="setColor('row09col13Grid');  setFavoriteColor(); " class="gridItem row09col13Grid"></div>
            <div @mousedown="clickToAddColor('row09col14Grid');" @mouseover="setColor('row09col14Grid');  setFavoriteColor(); " class="gridItem row09col14Grid"></div>
            <div @mousedown="clickToAddColor('row09col15Grid');" @mouseover="setColor('row09col15Grid');  setFavoriteColor(); " class="gridItem row09col15Grid"></div>
            <div @mousedown="clickToAddColor('row09col16Grid');" @mouseover="setColor('row09col16Grid');  setFavoriteColor(); " class="gridItem row09col16Grid"></div>
            <div @mousedown="clickToAddColor('row10col01Grid');" @mouseover="setColor('row10col01Grid');  setFavoriteColor(); " class="gridItem row10col01Grid"></div>
            <div @mousedown="clickToAddColor('row10col02Grid');" @mouseover="setColor('row10col02Grid');  setFavoriteColor(); " class="gridItem row10col02Grid"></div>
            <div @mousedown="clickToAddColor('row10col03Grid');" @mouseover="setColor('row10col03Grid');  setFavoriteColor(); " class="gridItem row10col03Grid"></div>
            <div @mousedown="clickToAddColor('row10col04Grid');" @mouseover="setColor('row10col04Grid');  setFavoriteColor(); " class="gridItem row10col04Grid"></div>
            <div @mousedown="clickToAddColor('row10col05Grid');" @mouseover="setColor('row10col05Grid');  setFavoriteColor(); " class="gridItem row10col05Grid"></div>
            <div @mousedown="clickToAddColor('row10col06Grid');" @mouseover="setColor('row10col06Grid');  setFavoriteColor(); " class="gridItem row10col06Grid"></div>
            <div @mousedown="clickToAddColor('row10col07Grid');" @mouseover="setColor('row10col07Grid');  setFavoriteColor(); " class="gridItem row10col07Grid"></div>
            <div @mousedown="clickToAddColor('row10col08Grid');" @mouseover="setColor('row10col08Grid');  setFavoriteColor(); " class="gridItem row10col08Grid"></div>
            <div @mousedown="clickToAddColor('row10col09Grid');" @mouseover="setColor('row10col09Grid');  setFavoriteColor(); " class="gridItem row10col09Grid"></div>
            <div @mousedown="clickToAddColor('row10col10Grid');" @mouseover="setColor('row10col10Grid');  setFavoriteColor(); " class="gridItem row10col10Grid"></div>
            <div @mousedown="clickToAddColor('row10col11Grid');" @mouseover="setColor('row10col11Grid');  setFavoriteColor(); " class="gridItem row10col11Grid"></div>
            <div @mousedown="clickToAddColor('row10col12Grid');" @mouseover="setColor('row10col12Grid');  setFavoriteColor(); " class="gridItem row10col12Grid"></div>
            <div @mousedown="clickToAddColor('row10col13Grid');" @mouseover="setColor('row10col13Grid');  setFavoriteColor(); " class="gridItem row10col13Grid"></div>
            <div @mousedown="clickToAddColor('row10col14Grid');" @mouseover="setColor('row10col14Grid');  setFavoriteColor(); " class="gridItem row10col14Grid"></div>
            <div @mousedown="clickToAddColor('row10col15Grid');" @mouseover="setColor('row10col15Grid');  setFavoriteColor(); " class="gridItem row10col15Grid"></div>
            <div @mousedown="clickToAddColor('row10col16Grid');" @mouseover="setColor('row10col16Grid');  setFavoriteColor(); " class="gridItem row10col16Grid"></div>
            <div @mousedown="clickToAddColor('row11col01Grid');" @mouseover="setColor('row11col01Grid');  setFavoriteColor(); " class="gridItem row11col01Grid"></div>
            <div @mousedown="clickToAddColor('row11col02Grid');" @mouseover="setColor('row11col02Grid');  setFavoriteColor(); " class="gridItem row11col02Grid"></div>
            <div @mousedown="clickToAddColor('row11col03Grid');" @mouseover="setColor('row11col03Grid');  setFavoriteColor(); " class="gridItem row11col03Grid"></div>
            <div @mousedown="clickToAddColor('row11col04Grid');" @mouseover="setColor('row11col04Grid');  setFavoriteColor(); " class="gridItem row11col04Grid"></div>
            <div @mousedown="clickToAddColor('row11col05Grid');" @mouseover="setColor('row11col05Grid');  setFavoriteColor(); " class="gridItem row11col05Grid"></div>
            <div @mousedown="clickToAddColor('row11col06Grid');" @mouseover="setColor('row11col06Grid');  setFavoriteColor(); " class="gridItem row11col06Grid"></div>
            <div @mousedown="clickToAddColor('row11col07Grid');" @mouseover="setColor('row11col07Grid');  setFavoriteColor(); " class="gridItem row11col07Grid"></div>
            <div @mousedown="clickToAddColor('row11col08Grid');" @mouseover="setColor('row11col08Grid');  setFavoriteColor(); " class="gridItem row11col08Grid"></div>
            <div @mousedown="clickToAddColor('row11col09Grid');" @mouseover="setColor('row11col09Grid');  setFavoriteColor(); " class="gridItem row11col09Grid"></div>
            <div @mousedown="clickToAddColor('row11col10Grid');" @mouseover="setColor('row11col10Grid');  setFavoriteColor(); " class="gridItem row11col10Grid"></div>
            <div @mousedown="clickToAddColor('row11col11Grid');" @mouseover="setColor('row11col11Grid');  setFavoriteColor(); " class="gridItem row11col11Grid"></div>
            <div @mousedown="clickToAddColor('row11col12Grid');" @mouseover="setColor('row11col12Grid');  setFavoriteColor(); " class="gridItem row11col12Grid"></div>
            <div @mousedown="clickToAddColor('row11col13Grid');" @mouseover="setColor('row11col13Grid');  setFavoriteColor(); " class="gridItem row11col13Grid"></div>
            <div @mousedown="clickToAddColor('row11col14Grid');" @mouseover="setColor('row11col14Grid');  setFavoriteColor(); " class="gridItem row11col14Grid"></div>
            <div @mousedown="clickToAddColor('row11col15Grid');" @mouseover="setColor('row11col15Grid');  setFavoriteColor(); " class="gridItem row11col15Grid"></div>
            <div @mousedown="clickToAddColor('row11col16Grid');" @mouseover="setColor('row11col16Grid');  setFavoriteColor(); " class="gridItem row11col16Grid"></div>
            <div @mousedown="clickToAddColor('row12col01Grid');" @mouseover="setColor('row12col01Grid');  setFavoriteColor(); " class="gridItem row12col01Grid"></div>
            <div @mousedown="clickToAddColor('row12col02Grid');" @mouseover="setColor('row12col02Grid');  setFavoriteColor(); " class="gridItem row12col02Grid"></div>
            <div @mousedown="clickToAddColor('row12col03Grid');" @mouseover="setColor('row12col03Grid');  setFavoriteColor(); " class="gridItem row12col03Grid"></div>
            <div @mousedown="clickToAddColor('row12col04Grid');" @mouseover="setColor('row12col04Grid');  setFavoriteColor(); " class="gridItem row12col04Grid"></div>
            <div @mousedown="clickToAddColor('row12col05Grid');" @mouseover="setColor('row12col05Grid');  setFavoriteColor(); " class="gridItem row12col05Grid"></div>
            <div @mousedown="clickToAddColor('row12col06Grid');" @mouseover="setColor('row12col06Grid');  setFavoriteColor(); " class="gridItem row12col06Grid"></div>
            <div @mousedown="clickToAddColor('row12col07Grid');" @mouseover="setColor('row12col07Grid');  setFavoriteColor(); " class="gridItem row12col07Grid"></div>
            <div @mousedown="clickToAddColor('row12col08Grid');" @mouseover="setColor('row12col08Grid');  setFavoriteColor(); " class="gridItem row12col08Grid"></div>
            <div @mousedown="clickToAddColor('row12col09Grid');" @mouseover="setColor('row12col09Grid');  setFavoriteColor(); " class="gridItem row12col09Grid"></div>
            <div @mousedown="clickToAddColor('row12col10Grid');" @mouseover="setColor('row12col10Grid');  setFavoriteColor(); " class="gridItem row12col10Grid"></div>
            <div @mousedown="clickToAddColor('row12col11Grid');" @mouseover="setColor('row12col11Grid');  setFavoriteColor(); " class="gridItem row12col11Grid"></div>
            <div @mousedown="clickToAddColor('row12col12Grid');" @mouseover="setColor('row12col12Grid');  setFavoriteColor(); " class="gridItem row12col12Grid"></div>
            <div @mousedown="clickToAddColor('row12col13Grid');" @mouseover="setColor('row12col13Grid');  setFavoriteColor(); " class="gridItem row12col13Grid"></div>
            <div @mousedown="clickToAddColor('row12col14Grid');" @mouseover="setColor('row12col14Grid');  setFavoriteColor(); " class="gridItem row12col14Grid"></div>
            <div @mousedown="clickToAddColor('row12col15Grid');" @mouseover="setColor('row12col15Grid');  setFavoriteColor(); " class="gridItem row12col15Grid"></div>
            <div @mousedown="clickToAddColor('row12col16Grid');" @mouseover="setColor('row12col16Grid');  setFavoriteColor(); " class="gridItem row12col16Grid"></div>
            <div @mousedown="clickToAddColor('row13col01Grid');" @mouseover="setColor('row13col01Grid');  setFavoriteColor(); " class="gridItem row13col01Grid"></div>
            <div @mousedown="clickToAddColor('row13col02Grid');" @mouseover="setColor('row13col02Grid');  setFavoriteColor(); " class="gridItem row13col02Grid"></div>
            <div @mousedown="clickToAddColor('row13col03Grid');" @mouseover="setColor('row13col03Grid');  setFavoriteColor(); " class="gridItem row13col03Grid"></div>
            <div @mousedown="clickToAddColor('row13col04Grid');" @mouseover="setColor('row13col04Grid');  setFavoriteColor(); " class="gridItem row13col04Grid"></div>
            <div @mousedown="clickToAddColor('row13col05Grid');" @mouseover="setColor('row13col05Grid');  setFavoriteColor(); " class="gridItem row13col05Grid"></div>
            <div @mousedown="clickToAddColor('row13col06Grid');" @mouseover="setColor('row13col06Grid');  setFavoriteColor(); " class="gridItem row13col06Grid"></div>
            <div @mousedown="clickToAddColor('row13col07Grid');" @mouseover="setColor('row13col07Grid');  setFavoriteColor(); " class="gridItem row13col07Grid"></div>
            <div @mousedown="clickToAddColor('row13col08Grid');" @mouseover="setColor('row13col08Grid');  setFavoriteColor(); " class="gridItem row13col08Grid"></div>
            <div @mousedown="clickToAddColor('row13col09Grid');" @mouseover="setColor('row13col09Grid');  setFavoriteColor(); " class="gridItem row13col09Grid"></div>
            <div @mousedown="clickToAddColor('row13col10Grid');" @mouseover="setColor('row13col10Grid');  setFavoriteColor(); " class="gridItem row13col10Grid"></div>
            <div @mousedown="clickToAddColor('row13col11Grid');" @mouseover="setColor('row13col11Grid');  setFavoriteColor(); " class="gridItem row13col11Grid"></div>
            <div @mousedown="clickToAddColor('row13col12Grid');" @mouseover="setColor('row13col12Grid');  setFavoriteColor(); " class="gridItem row13col12Grid"></div>
            <div @mousedown="clickToAddColor('row13col13Grid');" @mouseover="setColor('row13col13Grid');  setFavoriteColor(); " class="gridItem row13col13Grid"></div>
            <div @mousedown="clickToAddColor('row13col14Grid');" @mouseover="setColor('row13col14Grid');  setFavoriteColor(); " class="gridItem row13col14Grid"></div>
            <div @mousedown="clickToAddColor('row13col15Grid');" @mouseover="setColor('row13col15Grid');  setFavoriteColor(); " class="gridItem row13col15Grid"></div>
            <div @mousedown="clickToAddColor('row13col16Grid');" @mouseover="setColor('row13col16Grid');  setFavoriteColor(); " class="gridItem row13col16Grid"></div>
            <div @mousedown="clickToAddColor('row14col01Grid');" @mouseover="setColor('row14col01Grid');  setFavoriteColor(); " class="gridItem row14col01Grid"></div>
            <div @mousedown="clickToAddColor('row14col02Grid');" @mouseover="setColor('row14col02Grid');  setFavoriteColor(); " class="gridItem row14col02Grid"></div>
            <div @mousedown="clickToAddColor('row14col03Grid');" @mouseover="setColor('row14col03Grid');  setFavoriteColor(); " class="gridItem row14col03Grid"></div>
            <div @mousedown="clickToAddColor('row14col04Grid');" @mouseover="setColor('row14col04Grid');  setFavoriteColor(); " class="gridItem row14col04Grid"></div>
            <div @mousedown="clickToAddColor('row14col05Grid');" @mouseover="setColor('row14col05Grid');  setFavoriteColor(); " class="gridItem row14col05Grid"></div>
            <div @mousedown="clickToAddColor('row14col06Grid');" @mouseover="setColor('row14col06Grid');  setFavoriteColor(); " class="gridItem row14col06Grid"></div>
            <div @mousedown="clickToAddColor('row14col07Grid');" @mouseover="setColor('row14col07Grid');  setFavoriteColor(); " class="gridItem row14col07Grid"></div>
            <div @mousedown="clickToAddColor('row14col08Grid');" @mouseover="setColor('row14col08Grid');  setFavoriteColor(); " class="gridItem row14col08Grid"></div>
            <div @mousedown="clickToAddColor('row14col09Grid');" @mouseover="setColor('row14col09Grid');  setFavoriteColor(); " class="gridItem row14col09Grid"></div>
            <div @mousedown="clickToAddColor('row14col10Grid');" @mouseover="setColor('row14col10Grid');  setFavoriteColor(); " class="gridItem row14col10Grid"></div>
            <div @mousedown="clickToAddColor('row14col11Grid');" @mouseover="setColor('row14col11Grid');  setFavoriteColor(); " class="gridItem row14col11Grid"></div>
            <div @mousedown="clickToAddColor('row14col12Grid');" @mouseover="setColor('row14col12Grid');  setFavoriteColor(); " class="gridItem row14col12Grid"></div>
            <div @mousedown="clickToAddColor('row14col13Grid');" @mouseover="setColor('row14col13Grid');  setFavoriteColor(); " class="gridItem row14col13Grid"></div>
            <div @mousedown="clickToAddColor('row14col14Grid');" @mouseover="setColor('row14col14Grid');  setFavoriteColor(); " class="gridItem row14col14Grid"></div>
            <div @mousedown="clickToAddColor('row14col15Grid');" @mouseover="setColor('row14col15Grid');  setFavoriteColor(); " class="gridItem row14col15Grid"></div>
            <div @mousedown="clickToAddColor('row14col16Grid');" @mouseover="setColor('row14col16Grid');  setFavoriteColor(); " class="gridItem row14col16Grid"></div>
            <div @mousedown="clickToAddColor('row15col01Grid');" @mouseover="setColor('row15col01Grid');  setFavoriteColor(); " class="gridItem row15col01Grid"></div>
            <div @mousedown="clickToAddColor('row15col02Grid');" @mouseover="setColor('row15col02Grid');  setFavoriteColor(); " class="gridItem row15col02Grid"></div>
            <div @mousedown="clickToAddColor('row15col03Grid');" @mouseover="setColor('row15col03Grid');  setFavoriteColor(); " class="gridItem row15col03Grid"></div>
            <div @mousedown="clickToAddColor('row15col04Grid');" @mouseover="setColor('row15col04Grid');  setFavoriteColor(); " class="gridItem row15col04Grid"></div>
            <div @mousedown="clickToAddColor('row15col05Grid');" @mouseover="setColor('row15col05Grid');  setFavoriteColor(); " class="gridItem row15col05Grid"></div>
            <div @mousedown="clickToAddColor('row15col06Grid');" @mouseover="setColor('row15col06Grid');  setFavoriteColor(); " class="gridItem row15col06Grid"></div>
            <div @mousedown="clickToAddColor('row15col07Grid');" @mouseover="setColor('row15col07Grid');  setFavoriteColor(); " class="gridItem row15col07Grid"></div>
            <div @mousedown="clickToAddColor('row15col08Grid');" @mouseover="setColor('row15col08Grid');  setFavoriteColor(); " class="gridItem row15col08Grid"></div>
            <div @mousedown="clickToAddColor('row15col09Grid');" @mouseover="setColor('row15col09Grid');  setFavoriteColor(); " class="gridItem row15col09Grid"></div>
            <div @mousedown="clickToAddColor('row15col10Grid');" @mouseover="setColor('row15col10Grid');  setFavoriteColor(); " class="gridItem row15col10Grid"></div>
            <div @mousedown="clickToAddColor('row15col11Grid');" @mouseover="setColor('row15col11Grid');  setFavoriteColor(); " class="gridItem row15col11Grid"></div>
            <div @mousedown="clickToAddColor('row15col12Grid');" @mouseover="setColor('row15col12Grid');  setFavoriteColor(); " class="gridItem row15col12Grid"></div>
            <div @mousedown="clickToAddColor('row15col13Grid');" @mouseover="setColor('row15col13Grid');  setFavoriteColor(); " class="gridItem row15col13Grid"></div>
            <div @mousedown="clickToAddColor('row15col14Grid');" @mouseover="setColor('row15col14Grid');  setFavoriteColor(); " class="gridItem row15col14Grid"></div>
            <div @mousedown="clickToAddColor('row15col15Grid');" @mouseover="setColor('row15col15Grid');  setFavoriteColor(); " class="gridItem row15col15Grid"></div>
            <div @mousedown="clickToAddColor('row15col16Grid');" @mouseover="setColor('row15col16Grid');  setFavoriteColor(); " class="gridItem row15col16Grid"></div>
            <div @mousedown="clickToAddColor('row16col01Grid');" @mouseover="setColor('row16col01Grid');  setFavoriteColor(); " class="gridItem row16col01Grid"></div>
            <div @mousedown="clickToAddColor('row16col02Grid');" @mouseover="setColor('row16col02Grid');  setFavoriteColor(); " class="gridItem row16col02Grid"></div>
            <div @mousedown="clickToAddColor('row16col03Grid');" @mouseover="setColor('row16col03Grid');  setFavoriteColor(); " class="gridItem row16col03Grid"></div>
            <div @mousedown="clickToAddColor('row16col04Grid');" @mouseover="setColor('row16col04Grid');  setFavoriteColor(); " class="gridItem row16col04Grid"></div>
            <div @mousedown="clickToAddColor('row16col05Grid');" @mouseover="setColor('row16col05Grid');  setFavoriteColor(); " class="gridItem row16col05Grid"></div>
            <div @mousedown="clickToAddColor('row16col06Grid');" @mouseover="setColor('row16col06Grid');  setFavoriteColor(); " class="gridItem row16col06Grid"></div>
            <div @mousedown="clickToAddColor('row16col07Grid');" @mouseover="setColor('row16col07Grid');  setFavoriteColor(); " class="gridItem row16col07Grid"></div>
            <div @mousedown="clickToAddColor('row16col08Grid');" @mouseover="setColor('row16col08Grid');  setFavoriteColor(); " class="gridItem row16col08Grid"></div>
            <div @mousedown="clickToAddColor('row16col09Grid');" @mouseover="setColor('row16col09Grid');  setFavoriteColor(); " class="gridItem row16col09Grid"></div>
            <div @mousedown="clickToAddColor('row16col10Grid');" @mouseover="setColor('row16col10Grid');  setFavoriteColor(); " class="gridItem row16col10Grid"></div>
            <div @mousedown="clickToAddColor('row16col11Grid');" @mouseover="setColor('row16col11Grid');  setFavoriteColor(); " class="gridItem row16col11Grid"></div>
            <div @mousedown="clickToAddColor('row16col12Grid');" @mouseover="setColor('row16col12Grid');  setFavoriteColor(); " class="gridItem row16col12Grid"></div>
            <div @mousedown="clickToAddColor('row16col13Grid');" @mouseover="setColor('row16col13Grid');  setFavoriteColor(); " class="gridItem row16col13Grid"></div>
            <div @mousedown="clickToAddColor('row16col14Grid');" @mouseover="setColor('row16col14Grid');  setFavoriteColor(); " class="gridItem row16col14Grid"></div>
            <div @mousedown="clickToAddColor('row16col15Grid');" @mouseover="setColor('row16col15Grid');  setFavoriteColor(); " class="gridItem row16col15Grid"></div>
            <div @mousedown="clickToAddColor('row16col16Grid');" @mouseover="setColor('row16col16Grid');  setFavoriteColor(); " class="gridItem row16col16Grid"></div>
        </div>
        <br>
        <div id='colorContainer'>
            <span><span>Choose a Color</span><input type="color" name="" id="colorMachine" v-model="colorChoice"></span>
            
            <div id='myColors'>
            
                <div id='color1' class='aColor' @click="useFavoriteColor(1)"></div>
                <div id='color2' class='aColor' @click="useFavoriteColor(2)"></div>
                <div id='color3' class='aColor' @click="useFavoriteColor(3)"></div>
                <div id='color4' class='aColor' @click="useFavoriteColor(4)"></div>
                <div id='color5' class='aColor' @click="useFavoriteColor(5)"></div>
                <div id='color6' class='aColor' @click="useFavoriteColor(6)"></div>
            </div>
        </div>
        <br>
        <div id='hiddenData'></div>
        <!-- <div> -->
        <div id='clickOrPaintArea'>
            <!-- <span>Paint mode or Click mode?</span><br> -->
            <span>Mode:<span id='paintOrClick'>Paint mode</span></span><br>

            <button @click="enablePaintToColor()">Enable paint to color</button>
            <button @click="enableClickToColor()">Enable click to color</button>
        </div>
        <div>Step 2: Provide a title</div>
        <input id='userBurgerTitle' type="text" class="text" placeholder="Title..." v-model="burgerTitle"><br>
        <div>Step 3: Ready? Upload below</div>
        <button @click='parseHHDataIntoNewBurger1()'>Upload</button>

        
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
        isTouchscreen(){
            let boolThing = (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
            
            let area = document.getElementById("clickOrPaintArea");
            let pOC = document.getElementById("paintOrClick");
            if (boolThing) {
                area.style.visibility = 'hidden';
                pOC.innerHTML = "Click mode"
            }
            
            console.log(boolThing)
            return boolThing
            // return (typeof this.window.orientation !== "undefined") || (this.navigator.userAgent.indexOf('IEMobile') !== -1);
        },
        async onLogout() {
            await this.$auth.logout();
        },
        async onUploadBurger() {
            try {
                let data = {
                    burgerString: this.burgerString,
                    burgerTitle: this.burgerTitle,
                    burgerCreator: this.$auth.user.email,
                    burgerStatus: "userDesign"
                };
                let response = await this.$axios.$post("/api/burger/burgerPost", data);
                // if (response.success) {
                //     this.$auth.loginWith("local", {
                //         data: {
                //             email: this.email,
                //             password: this.password
                //         }
                //     });
                    this.$router.push("/n-Animate");
                // }
            } catch (err) {
                console.log(err)
            }
        },
        

        enablePaintToColor(){
            let paint = document.getElementById("paintOrClick");
            paint.innerHTML = "Paint mode";
        },
        enableClickToColor(){
            let click = document.getElementById("paintOrClick");
            click.innerHTML = "Click mode";
        },

        exportCurrentBurger() {
            let squares = document.getElementsByClassName("invisibleLine");


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

        useFavoriteColor(blockNumber){
            let color = document.getElementById("color" + blockNumber).style.backgroundColor;
            // console.log("this is how the style.backgroundcolor is saved:",color);
            // console.log("this.rgbToHex(color)",this.rgbToHex(color));
            
            // let colorMachine = document.getElementById("colorMachine");
            // colorMachine.value = color;
            this.colorChoice = this.rgbToHex(color);
            // this.colorChoice = document.getElementById("color" + blockNumber).style.backgroundColor;
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
            colorRGB = colorRGB.substring(4);
            let colors = colorRGB.split(",");
            let r = parseInt(colors[0].trim());
            let g = parseInt(colors[1].trim());
            let b = parseInt(colors[2].substring(0, colors[2].length-1).trim());
            // console.log(colors,r,g,b);
            return "#" + this.componentToHex(0 + r).toUpperCase() + this.componentToHex(0 + g).toUpperCase() + this.componentToHex(0 + b).toUpperCase()
            // return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        },
        setFavoriteColor() {

            
            
            let favColorSquares = document.getElementsByClassName("aColor");
            // console.log(favColorSquares.length);

            let number = document.getElementById("number").innerHTML;
            // console.log(number);

            // console.log("fcs111",favColorSquares[0].style.backgroundColor, this.hexToRgb(this.colorChoice.substring(1)))

            if (favColorSquares[0].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1)) ||
                favColorSquares[1].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1)) ||
                favColorSquares[2].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1)) ||
                favColorSquares[3].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1)) ||
                favColorSquares[4].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1)) ||
                favColorSquares[5].style.backgroundColor == this.hexToRgb(this.colorChoice.substring(1))
            ) {
                return
            } else {
                for (let i = 0; i < favColorSquares.length; i++) {
                    if (i == number) {
                        let fcs = favColorSquares[i];
                        fcs.style.backgroundColor = this.colorChoice;
                    }
                }

                if (number != 5) {
                    number++;
                } else {
                    number = 0;
                }
                document.getElementById("number").innerHTML = number;
            }
        },
        clickToAddColor(sq) {
            let paintOrClick = document.getElementById("paintOrClick");

            if (paintOrClick.innerHTML.startsWith("C")) {
                let color = this.colorChoice;
            
                let littleSquares = document.getElementsByClassName("invisibleLine");
            
                let squares = document.getElementsByClassName("gridItem");
            
                for (let i = 0; i < squares.length; i++) {
                    let littleSquare = littleSquares[i];
                    let square = squares[i];
 
                    if (square.classList.value.includes(sq)) {
                        littleSquare.style.backgroundColor = color;
                        square.style.backgroundColor = color;

                    }
                }
            } 
        },  
        setColor(sq) {
            let paintOrClick = document.getElementById("paintOrClick");

            if (paintOrClick.innerHTML.startsWith("P")) {
                let color = this.colorChoice;
            
                let littleSquares = document.getElementsByClassName("invisibleLine");
            
                let squares = document.getElementsByClassName("gridItem");
            
                for (let i = 0; i < squares.length; i++) {
                    let littleSquare = littleSquares[i];
                    let square = squares[i];
 
                    if (square.classList.value.includes(sq)) {
                        littleSquare.style.backgroundColor = color;
                        square.style.backgroundColor = color;

                    }
                }
            } 
            
            
            
            
            
            
            
            
            // let color = this.colorChoice;
            
            // let littleSquares = document.getElementsByClassName("invisibleLine");
            
            // let squares = document.getElementsByClassName("gridItem");
            
            // for (let i = 0; i < squares.length; i++) {
            //     let littleSquare = littleSquares[i];
            //     let square = squares[i];
 
            //     if (square.classList.value.includes(sq)) {
            //         littleSquare.style.backgroundColor = color;
            //         square.style.backgroundColor = color;

            //     }
            // }
        },
        makeShake() {
            let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("bottomBurgerClass");
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



                // console.log("background is not black")
                // square.style.animation = "waveAround 1000ms ease-in-out infinite";
            } 









            }
            
        },
        makeBottomCircles() {
        
        
        let squares = document.getElementsByClassName("bottomBurgerClass");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            // square.style.backgroundColor = "black";

            
           
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
                square.style.backgroundColor = newData[240+j];
            } else {
                square.style.backgroundColor = newData[j-16];
            }
        }
        },
        moveBottomUpwardsInLoop(){
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
        let squares = document.getElementsByClassName("bottomBurgerClass");
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
      
    
    },
    mounted() {
        let squares = document.getElementsByClassName("aColor");
        for (let i = 0; i < squares.length; i++) {
            let square = squares[i];
            square.style.backgroundColor = "#000000";
        }
        this.isTouchscreen();
    },
  
}
</script>

<style scoped>

h3 {
    margin-left: 10px;
    margin-top: 10px;
}
#userBurgerTitle {
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.3em;
    width: 250px;

}

/* input {
    margin-top: 20px;
    margin-bottom: 20px;
} */

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

/* #colorMachine::after {
    content: "Colors";
    position: relative;
    top: -44px;
    color: blue;
    font-size: 2em;
    z-index: top;
    transform: translateX(25px);
} */



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
