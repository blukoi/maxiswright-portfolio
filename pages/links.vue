<template>
    <div>
      <CustomCursor />
      <NavBar />
      <div class="w-full content-center z-10 bg-grayLighter">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 mb-16 md:mb-32 pt-20">
            <div class="col-span-1 md:col-start-2">
                <div class="space-y-8">
                    <h1 class="font-title text-xl text-grayDarkest">
                        Links and Contact —
                    </h1>
                    <div class="w-full pl-8 space-y-4 font-main text-grayDarker">
                        <p class="text-sm">The best way to reach me is via Email or LinkedIn. But you can also find me on Instagram or Zoom. (Please please please contact me before joining my personal Zoom.)</p>
                        <p class="text-sm">Alternatively, if you have my number please text any time!</p>
                    </div>
                    <ButtonIcon 
                        link="/contact"
                        icon-pack="fas"
                        icon-name="message"
                        label="Contact Form"
                    ></ButtonIcon>
                    <a href="mailto:max.wri@gmail.com" class="h-16 p-4 rounded-md flex flex-row justify-start items-center bg-mint hover:bg-grayDarker text-white gap-4">
                        <div class="h-8 w-8 flex flex-row justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'envelope']" class="text-xl" />
                        </div>
                        <h1 class="font-title text-xl">Email</h1>
                    </a>
                    <ButtonIconExternal 
                        link="https://www.linkedin.com/in/maxiswright/"
                        icon-pack="fab"
                        icon-name="linkedin"
                        label="LinkedIn"
                    ></ButtonIconExternal>
                    <ButtonIconExternal 
                        link="https://www.instagram.com/theblukoi/"
                        icon-pack="fab"
                        icon-name="instagram"
                        label="Instagram"
                    ></ButtonIconExternal>
                    <ButtonIconExternal 
                        link="https://us04web.zoom.us/j/3655627019?pwd=d0xZdXlyZVlGeTUyNUpaVkZIVFkyZz09"
                        icon-pack="fas"
                        icon-name="video"
                        label="Zoom"
                    ></ButtonIconExternal>
                    <ButtonIconExternal 
                        link="https://calendly.com/max-wri/one-on-one-with-me"
                        icon-pack="fas"
                        icon-name="calendar"
                        label="Calendly"
                    ></ButtonIconExternal>
                </div>
            </div>
        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayLighter relative">
        <div class="container px-4 sm:px-0 mx-auto">
            <div class="h-px w-full bg-grayMiddle"></div>
        </div>
      </div>
      <div class="w-full content-center z-10 bg-grayLighter">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 mb-16 md:mb-32 pt-20">
            <div class="col-span-1 md:col-start-2">
                <div class="space-y-8">
                    <h1 class="font-title text-xl text-grayDarkest">
                        Other Links —
                    </h1>
                    <div class="w-full pl-8 space-y-4 font-main text-grayDarker">
                        <p class="text-sm">If you play Destiny feel free to add me on Xbox or Bungie for some raids. I’m also on Untappd from time to time; sometimes I put things on GitHub; you can also check out some of my other projects.</p>
                    </div>
                    <ButtonIconExternal 
                        link="https://www.xbox.com/en-US/play/user/Blu%20Koi"
                        icon-pack="fab"
                        icon-name="xbox"
                        label="Xbox"
                    ></ButtonIconExternal>
                    <a href="https://www.bungie.net/7/en/User/Profile/1/4611686018429882790" class="h-16 p-4 rounded-md flex flex-row justify-start items-center bg-mint hover:bg-grayDarker text-white gap-4">
                        <div class="h-8 w-8 flex justify-center items-center text-white">
                            <svg width="485" height="146" viewBox="0 0 485 146" class="fill-current" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1493_2966)">
                                <path d="M2.28911 143.894C1.02445 143.894 0 142.869 0 141.612V63.4993C0 62.2417 1.02445 61.2102 2.28911 61.2102H27.978L44.4045 61.2031C56.6202 61.2314 71.0402 68.0987 71.0473 83.8752C71.0473 92.6714 64.7805 97.3344 61.7213 100.273C66.4055 102.647 72.7005 109.621 72.7076 119.717C72.7147 127.623 69.6272 133.706 64.5403 137.775C59.4463 141.838 52.3741 143.894 44.4045 143.894H24.5726H2.28911ZM14.7803 108.052C13.5298 108.052 12.4983 109.091 12.4983 110.341V129.099C12.4983 130.357 13.5298 131.396 14.7803 131.396H44.4045C55.3626 131.332 60.1669 127.375 60.1952 119.717C60.1457 112.567 56.6626 108.123 44.4045 108.052H14.7803ZM44.3975 95.5398C52.3458 95.5328 58.5137 90.9475 58.5349 83.8823C58.5137 77.5872 52.6143 73.7579 44.3975 73.7367H14.7803C13.5298 73.7367 12.4983 74.7682 12.4983 76.0188V93.2507C12.4983 94.5083 13.5298 95.5328 14.7803 95.5328L44.3975 95.5398Z"/>
                                <path d="M90.7803 112.617C90.7803 120.417 92.2569 128.676 97.5628 135.014C102.862 141.344 111.976 145.668 127.053 145.654H127.06C142.13 145.654 151.244 141.344 156.543 135.014C161.849 128.683 163.325 120.417 163.325 112.617V63.5C163.325 62.2354 162.301 61.2109 161.036 61.2109H153.109C151.852 61.2109 150.82 62.2424 150.82 63.5V112.617C150.756 124.536 146.037 133.064 127.053 133.127C108.069 133.057 103.356 124.529 103.286 112.617V63.5C103.286 62.2354 102.254 61.2109 100.997 61.2109H93.0694C91.8118 61.2109 90.7803 62.2424 90.7803 63.5V112.617Z"/>
                                <path d="M249.068 120.819C249.068 122.077 248.432 122.289 247.662 121.306L202.113 63.0189C201.343 62.0156 199.676 61.2031 198.418 61.2031H190.668C189.403 61.2031 188.378 62.2346 188.378 63.4922V141.626C188.378 142.883 189.403 143.915 190.668 143.915H198.602C199.859 143.915 200.891 142.883 200.891 141.626V84.3133C200.891 83.0486 201.52 82.8296 202.304 83.8258L247.839 142.106C248.616 143.11 250.276 143.901 251.541 143.901H259.291C260.549 143.901 261.581 142.876 261.581 141.619V63.4993C261.581 62.2346 260.549 61.2102 259.291 61.2102H251.357C250.1 61.2102 249.075 62.2417 249.075 63.4993V120.819H249.068Z"/>
                                <path d="M327.046 71.632C339.29 71.632 345.628 76.7754 349.747 80.7814C350.581 81.5798 350.637 81.6292 350.637 81.6292C351.527 82.5265 352.976 82.5124 353.859 81.6151L359.363 75.9559C360.239 75.0586 360.21 73.5891 359.313 72.7271L358.444 71.9429C352.947 66.8842 342.88 59.1055 325.838 59.1055C312.648 59.1055 301.343 63.9522 293.324 71.7592C285.306 79.5591 280.6 90.3123 280.6 102.104C280.6 116.128 286.351 126.952 294.879 134.243C303.371 141.528 314.619 145.293 325.619 145.293C349.966 145.265 360.027 134.491 362.259 131.651L362.577 131.255C362.676 131.107 362.81 130.916 362.881 130.831C362.945 130.753 363.022 130.669 363.043 130.647C363.072 130.619 363.086 130.478 363.086 130.322V127.765V102.189C363.086 100.938 362.054 99.9068 360.797 99.9068H331.611C330.346 99.9068 329.321 100.938 329.321 102.189V109.805C329.321 111.07 330.353 112.094 331.611 112.094H348.235C349.5 112.094 350.531 113.126 350.531 114.376V123.165C350.531 124.437 350.263 125.68 349.938 125.963L349.485 126.302C349.309 126.444 349.111 126.585 348.92 126.712C345.614 129.1 339.22 132.774 326.185 132.774C305.604 132.767 293.134 118.531 293.127 102.648C293.134 85.6564 305.491 71.6461 327.046 71.632Z"/>
                                <path d="M394.794 91.7529H394.78H386.874C385.61 91.7529 384.578 92.7774 384.578 94.042V141.619C384.578 142.884 385.617 143.915 386.874 143.915H387.228H394.441H394.787C396.059 143.915 397.091 142.884 397.091 141.619V94.042C397.083 92.7703 396.045 91.7529 394.794 91.7529Z"/>
                                <path d="M390.831 60.4473C384.324 60.4473 379.067 65.7179 379.067 72.2178C379.067 78.7178 384.324 83.9813 390.831 83.9813C397.324 83.9813 402.594 78.7178 402.594 72.2178C402.594 65.7179 397.324 60.4473 390.831 60.4473Z"/>
                                <path d="M433.222 131.396C431.957 131.396 430.933 130.365 430.933 129.107V109.367C430.933 108.102 431.964 107.078 433.222 107.078H464.584C465.842 107.078 466.873 106.046 466.873 104.796V96.8405C466.873 95.59 465.842 94.5514 464.584 94.5514H433.222C431.957 94.5514 430.933 93.527 430.933 92.2694V76.0195C430.933 74.769 431.964 73.7375 433.222 73.7375H480.968C482.212 73.7375 483.243 72.706 483.243 71.4484V63.5C483.243 62.2354 482.212 61.2109 480.968 61.2109H420.716C419.452 61.2109 418.427 62.2424 418.427 63.5V141.627C418.427 142.891 419.459 143.923 420.716 143.923H483.038C484.296 143.923 485.327 142.891 485.327 141.627V133.685C485.327 132.421 484.296 131.403 483.038 131.403L433.222 131.396Z"/>
                                <path d="M384.126 52.9651C353.703 20.1474 307.61 -1.37308 257.129 0.0682166C139.148 3.43123 104.677 101.736 105.299 134.094C111.608 70.2253 170.73 9.64151 255.095 10.2632C303.272 10.6306 347.203 33.437 372.497 63.8313C374.439 58.2216 379.505 54.3781 384.126 52.9651Z"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1493_2966">
                                <rect width="485" height="146" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h1 class="font-title text-xl">Bungie ID</h1>
                    </a>
                    <!-- <ButtonIcon 
                        link="https://www.bungie.net/7/en/User/Profile/1/4611686018429882790"
                        icon-pack="fab"
                        icon-name="instagram"
                        label="Bungie ID"
                    ></ButtonIcon> -->
                    <ButtonIconExternal 
                        link="https://untappd.com/user/blukoi"
                        icon-pack="fab"
                        icon-name="untappd"
                        label="Untappd"
                    ></ButtonIconExternal>
                    <ButtonIconExternal 
                        link="https://github.com/blukoi"
                        icon-pack="fab"
                        icon-name="github"
                        label="GitHub"
                    ></ButtonIconExternal>
                    <ButtonIconExternal 
                        link="https://www.fonttouchthis.com/"
                        icon-pack="fas"
                        icon-name="font"
                        label="Font Touch This"
                    ></ButtonIconExternal>
                </div>
            </div>
        </div>
      </div>
      <PreFooter :currentProjectId="'1'" :linksVisibility="[false, true, true, false]" />
      <FooterSection />
    </div>
  </template>
  
  <script>
  export default {
    name: 'LinksPage',
    head: {
      title: 'Max is Wright — Links',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking / eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
        }
      ],
    },
  }
  </script>
  
  <style>
  </style>