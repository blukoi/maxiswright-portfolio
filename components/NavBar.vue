<template>
  <div>
    <nav class="fixed z-50 top-0 w-full h-max bg-transparent font-main">
      <div class="w-full h-full container mx-auto px-4 sm:px-0 py-4 flex flex-row space-between content-center">
        <div class="notch notch-border w-full h-10 h-max border border-black bg-whiteFaded backdrop-filter backdrop-blur-sm overflow-hidden flex flex-row justify-between">
          <nuxt-link to="/" class="notch self-center px-8 py-2 rounded-none h-fit border-r border-black focus:bg-mint active:bg-white active:text-mint stroke-none focus:stroke-white flex flex-row gap-2 sweep-hover">
            <div class="w-6 h-6 self-center rounded-full">
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
            <h1 class="font-title title-normal self-center hidden sm:block pt-0.5">Max Wright</h1>
          </nuxt-link>
          <ul class="flex flex-row h-full items-center uppercase text-xs tracking-widest">
            <li class="hidden">
                <NavButton label="Home" link="/" />
            </li>
            <li>
                <NavButton label="Work" link="/work" />
            </li>
            <li class="hidden md:block">
                <NavButton label="Side Projects" link="/sideprojects" />
            </li>
            <li class="hidden sm:block">
                <NavButton label="About" link="/about" />
            </li>
            <li>
                <NavButton label="Contact" link="/contact" />
            </li>
            <li class="hidden lg:block">
              <a href="/WrightMax_Resume.pdf" class="border-l border-black px-4 py-5 h-full font-main focus:bg-mint active:border-b-2 active:border-black focus:border-white focus:text-white active:text-white sweep-hover" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="decoration-window hidden md:block z-40 font-mono mix-blend-difference">
      <div class="decoration">
        <div id="topLeft"></div>
        <div id="topRight">
          <p class="top-right-text"><span></span></p>
        </div>
        <div id="bottomLeft">
          <p class="bottom-left-text"><span></span></p>
        </div>
        <div id="bottomRight"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style>
.decoration-window {
  position: fixed;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.decoration {
  width: 100%;
  height: 100%;
  background: transparent;
  position: relative;
}

#topLeft, #topRight, #bottomLeft, #bottomRight {
  position: absolute;
  width: 16px;
  height:16px;
  border: solid #000000;
  filter: invert(1);
}

#topLeft {
  top: 16px;
  left: 16px;
  border-width: 1px 0 0 1px;
}

#topRight {
  top: 16px;
  right: 16px;
  border-width: 1px 1px 0 0;
}

#bottomLeft {
  left: 16px;
  bottom: 16px;
  border-width: 0 0 1px 1px;
}

#bottomRight {
  right: 16px;
  bottom: 16px;
  border-width: 0 1px 1px 0;
}

.top-right-text {
  position: relative;
  top: 8px;
  right: -8px;
  transform: rotate(90deg);
}

.bottom-left-text {
  position: relative;
  bottom: 16px;
  left: -8px;
  transform: rotate(-90deg);
}

.top-right-text span::before {
  white-space: no-wrap;
  content: "01000001.00100000.01110100.01100001.01100011.01101111";
  animation: top-right-text infinite 6s;
  padding-left: 10px;
  font-size: 10px;
}

.bottom-left-text span::before {
  white-space: no-wrap;
  content: "01001001.01100110.00100000.01111001.01101111.01110101.00100111.01110010.01100101";
  animation: bottom-left-text infinite 5s;
  padding-left: 10px;
  font-size: 10px;
}

@keyframes top-right-text {
  
  0% {
    content: "01000001.00100000.01110100.01100001.01100011.01101111";
  }

  33.33% {
    content: "01101001.01110011.00100000.01100001";
  }

  66.66% {
    content: "01110011.01100001.01101110.01100100.01110111.01101001.01100011.01101000.00101110";
  }
  
}

@keyframes bottom-left-text {

  0% {
    content: "01001001.01100110.00100000.01111001.01101111.01110101.00100111.01110010.01100101";
  }

  20% {
    content: "01110010.01100101.01100001.01100100.01101001.01101110.01100111";
  }

  40% {
    content: "01110100.01101000.01101001.01110011";
  }

  60% {
    content: "01110000.01101100.01100101.01100001.01110011.01100101";
  }

  80% {
    content: "01101000.01101001.01110010.01100101.00100000.01101101.01100101.00101110";
  }
  
}

.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #000000;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #FFFFFF;
}
</style>