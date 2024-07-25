<template>
    <div class="w-full content-center z-10 bg-grayDarker relative">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 md:gap-16 my-16 md:my-64">
                <div class="col-span-1 col-start-1">
                    <ul class="font-main font uppercase text-xs tracking-widest space-y-6">
                        <li>
                            <ButtonSecondary label="Home" link="/" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Work" link="/work" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Experiments" link="/experiments" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                        <li>
                            <ButtonSecondary label="About" link="/about" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Links" link="/links" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                        <li>
                            <ButtonSecondary label="Contact" link="/contact" class="px-2 py-1 hover:bg-white text-white hover:text-mint rounded-sm"/>
                        </li>
                    </ul>
                </div>

                <div class="col-span-1 col-start-1 md:col-start-2 flex flex-col justify-between space-y-6 mt-6 md:mt-0">
                    <div class="flex flex-row items-center justify-start md:justify-end space-x-4">
                        <div class="h-12 w-12 rounded-full bg-grayDarkest text-white">
                            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" class="fill-current">
                            <g id="Layer_1-2">
                                <path class="cls-2" d="M39,16.31l1.25-1.2c2.09-2,4.86-3.11,7.75-3.11h0v48h-6l.3-34.88c.01-1.25-1.43-1.95-2.41-1.18h0c-2.29,1.8-5.51,1.8-7.8,0h0c-.98-.77-2.42-.06-2.41,1.18l.3,34.88h-6V12s0,0,0,0c2.89,0,5.66,1.11,7.75,3.11l1.25,1.2c1.68,1.6,4.32,1.6,5.99,0Z"/>
                                <path class="cls-2" d="M36,39c-9.51,0-14.8,3.62-17.4,6.27-1.74,1.77-4.12,2.73-6.6,2.73h0v-24s6,0,6,0l-.31,11.89c-.04,1.36,1.47,2.23,2.61,1.49,2.94-1.89,8.23-4.39,15.69-4.39s12.75,2.5,15.69,4.39c1.15.74,2.65-.13,2.61-1.49l-.31-11.89h6v24h0c-2.48,0-4.87-.97-6.6-2.73-2.6-2.65-7.89-6.27-17.4-6.27Z"/>
                            </g>
                            </svg>
                        </div>
                        <h1 class="font-title text-white text-2xl">Max Wright</h1>
                    </div>
                    <div class="font-main text-grayDarkest text-left md:text-right text-sm">
                        <p>Copyright © 2016 — 2024 Max Wright</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>