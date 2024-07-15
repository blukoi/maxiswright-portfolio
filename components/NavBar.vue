<template>
    <nav class="fixed z-50 top-0 w-full h-20 content-center bg-whiteFaded backdrop-filter backdrop-blur-sm font-main font-normal">
      <div class="w-full container mx-auto px-4 sm:px-0">
        <div class="flex flex-row justify-between">
          <nuxt-link to="/" class="w-12 h-12 rounded-full bg-black hover:bg-mint focus:bg-mint active:bg-white hover:drop-shadow-lg text-white active:text-mint stroke-none focus:stroke-white">
            <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" class="fill-current">
              <g id="Layer_1-2">
                <path class="cls-2" d="M39,16.31l1.25-1.2c2.09-2,4.86-3.11,7.75-3.11h0v48h-6l.3-34.88c.01-1.25-1.43-1.95-2.41-1.18h0c-2.29,1.8-5.51,1.8-7.8,0h0c-.98-.77-2.42-.06-2.41,1.18l.3,34.88h-6V12s0,0,0,0c2.89,0,5.66,1.11,7.75,3.11l1.25,1.2c1.68,1.6,4.32,1.6,5.99,0Z"/>
                <path class="cls-2" d="M36,39c-9.51,0-14.8,3.62-17.4,6.27-1.74,1.77-4.12,2.73-6.6,2.73h0v-24s6,0,6,0l-.31,11.89c-.04,1.36,1.47,2.23,2.61,1.49,2.94-1.89,8.23-4.39,15.69-4.39s12.75,2.5,15.69,4.39c1.15.74,2.65-.13,2.61-1.49l-.31-11.89h6v24h0c-2.48,0-4.87-.97-6.6-2.73-2.6-2.65-7.89-6.27-17.4-6.27Z"/>
              </g>
            </svg>
          </nuxt-link>
          <ul class="flex flex-row gap-3 h-fill items-center uppercase text-xs tracking-wider">
            <li>
                <ButtonSmall label="Home" link="/" />
            </li>
            <li>
                <ButtonSmall label="Work" link="/work" />
            </li>
            <li class="hidden sm:block">
                <ButtonSmall label="Experiments" link="/experiments" />
            </li>
            <li>
                <ButtonSmall label="About" link="/about" />
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