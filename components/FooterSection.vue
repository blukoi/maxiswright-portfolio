<template>
    <div class="w-full content-center z-10 bg-black relative">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 md:gap-16 my-16 md:my-64">
                <div class="col-span-1 col-start-1">
                    <ul class="font-main font text-xs tracking-widest space-y-6">
                        <li>
                            <ButtonSecondary label="Home" link="/" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Work" link="/work" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Side Projects" link="/sideprojects" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <ButtonSecondary label="About" link="/about" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Links" link="/links" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Contact" link="/contact" class="notch-small px-2 py-1 text-white"/>
                        </li>
                        <li>
                            <a href="/WrightMax_Resume.pdf" class="notch-small px-2 py-1 focus:text-white active:text-white hover:font-semibold sweep-hover" target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 col-start-1 md:col-start-2 flex flex-col justify-between space-y-6 mt-6 md:mt-0">
                    <div class="flex flex-row items-center justify-start md:justify-end md:items-center space-x-4">
                        <div class="h-16 w-16 rounded-full bg-white text-black">
                            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" class="fill-current">
                            <g id="Layer_1-2">
                                <path class="cls-2" d="M39,16.31l1.25-1.2c2.09-2,4.86-3.11,7.75-3.11h0v48h-6l.3-34.88c.01-1.25-1.43-1.95-2.41-1.18h0c-2.29,1.8-5.51,1.8-7.8,0h0c-.98-.77-2.42-.06-2.41,1.18l.3,34.88h-6V12s0,0,0,0c2.89,0,5.66,1.11,7.75,3.11l1.25,1.2c1.68,1.6,4.32,1.6,5.99,0Z"/>
                                <path class="cls-2" d="M36,39c-9.51,0-14.8,3.62-17.4,6.27-1.74,1.77-4.12,2.73-6.6,2.73h0v-24s6,0,6,0l-.31,11.89c-.04,1.36,1.47,2.23,2.61,1.49,2.94-1.89,8.23-4.39,15.69-4.39s12.75,2.5,15.69,4.39c1.15.74,2.65-.13,2.61-1.49l-.31-11.89h6v24h0c-2.48,0-4.87-.97-6.6-2.73-2.6-2.65-7.89-6.27-17.4-6.27Z"/>
                            </g>
                            </svg>
                        </div>
                        <!-- <h1 class="font-title title-bold pt-1 text-white text-2xl">Max Wright</h1> -->
                    </div>
                    <!-- <div class="font-main text-grayMiddle text-left md:text-right text-sm">
                        <p>Copyright © 2016-2024 <span class="text-white">「</span> Designed in Figma & Coded in Vue.js by Max Wright <span class="text-white">」</span></p>
                    </div> -->
                </div>

                <div class="col-span-1 col-start-1 md:col-span-2 flex flex-col justify-between space-y-6 mt-6 md:mt-0">
                    <div class="bracketing bracket-tl bracket-br bracket-white p-4 font-main text-grayDarker text-left md:text-center text-sm">
                        <p>Copyright © 2016-2025</p>
                        <p>Designed in Figma & Built with Vue.js by Max Wright</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #FFFFFF;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #000000;
}
</style>