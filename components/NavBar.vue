<template>
    <nav class="fixed z-50 top-0 w-full h-20 bg-whiteFaded backdrop-filter backdrop-blur-sm lg:bg-transparent lg:backdrop-filter-none font-main">
      <div class="w-full h-full container mx-auto px-4 sm:px-0 lg:py-2 flex flex-row space-between content-center">
        <div class="w-full h-full lg:h-max lg:bg-whiteFaded lg:backdrop-filter lg:backdrop-blur-sm lg:overflow-hidden lg:rounded-md lg:pr-4 flex flex-row justify-between">
          <nuxt-link to="/" class="self-center px-2 sm:px-8 py-2 rounded-sm lg:rounded-none h-fit hover:bg-mint focus:bg-mint active:bg-white hover:drop-shadow-lg text-black hover:text-white active:text-mint stroke-none focus:stroke-white flex flex-row gap-4">
            <div class="w-12 h-12 self-center rounded-full">
              <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" class="rounded-full fill-current">
                <defs>
                  <mask id="cutout-mask" x="0" y="0" width="72" height="72">
                    <rect x="0" y="0" width="72" height="72" fill="white"/>
                    <path class="cls-2" d="M39,16.31l1.25-1.2c2.09-2,4.86-3.11,7.75-3.11h0v48h-6l.3-34.88c.01-1.25-1.43-1.95-2.41-1.18h0c-2.29,1.8-5.51,1.8-7.8,0h0c-.98-.77-2.42-.06-2.41,1.18l.3,34.88h-6V12s0,0,0,0c2.89,0,5.66,1.11,7.75,3.11l1.25,1.2c1.68,1.6,4.32,1.6,5.99,0Z" fill="black"/>
                    <path class="cls-2" d="M36,39c-9.51,0-14.8,3.62-17.4,6.27-1.74,1.77-4.12,2.73-6.6,2.73h0v-24s6,0,6,0l-.31,11.89c-.04,1.36,1.47,2.23,2.61,1.49,2.94-1.89,8.23-4.39,15.69-4.39s12.75,2.5,15.69,4.39c1.15.74,2.65-.13,2.61-1.49l-.31-11.89h6v24h0c-2.48,0-4.87-.97-6.6-2.73-2.6-2.65-7.89-6.27-17.4-6.27Z" fill="black"/>
                  </mask>
                </defs>
                <rect x="0" y="0" width="72" height="72" mask="url(#cutout-mask)"/>
              </svg>
            </div>
            <h1 class="font-title text-2xl self-center hidden sm:block">Max Wright</h1>
          </nuxt-link>
          <ul class="flex flex-row gap-3 h-fill items-center uppercase text-xs font-bold tracking-wider">
            <li class="hidden">
                <ButtonSmall label="Home" link="/" />
            </li>
            <li>
                <ButtonSmall label="Work" link="/work" />
            </li>
            <li class="hidden md:block">
                <ButtonSmall label="Side Projects" link="/sideprojects" />
            </li>
            <li class="hidden sm:block">
                <ButtonSmall label="About" link="/about" />
            </li>
            <li>
                <ButtonSmall label="Contact" link="/contact" />
            </li>
            <li class="hidden lg:block">
              <a href="/WrightMax_Resume.pdf" class="px-3 py-2 font-main bg-transparent hover:bg-black focus:bg-black active:bg-mint focus:border-white text-black hover:text-white focus:text-white active:text-white rounded-sm" target="_blank" rel="noopener noreferrer">
                  Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>