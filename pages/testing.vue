<template>
    <div>
      <CustomCursor />
      <NavBar />
      <div class="w-full content-center z-10">
        <div class="container px-4 sm:px-0 mx-auto pt-32">
  
          <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-x-8 md:gap-x-16 gap-y-16 md:gap-y-32">
  
            <div class="col-span-1 col-start-1 lg:col-span-2 justify-center">
                <div class="space-y-6 lg:space-y-12 pl-8">
                    <div class="w-max bracketing bracket-tl bracket-br bracket-tl-thick bracket-br-thick bg-transparent text-black font-title text-xl title-bold px-4 pt-2 pb-1">
                    <FontAwesomeIcon id="WavingHand" :icon="['fas', 'hand']" class="text-xl text-mint" /><span class="pl-4">Hello!</span>
                    </div>
                    <p class="py-6 font-normal font-main text-xl text-grayMiddle introduction">
                    As a mission-driven product designer & exhaustive explorer, I excel at applying insights to interfaces to craft scalable design systems & intuitive microinteractions.
                    </p>
                    <!-- <p class="font-normal font-main text-grayMiddle">
                    My experience with visual communication, front-end development, and working as a freelancer alongside engineers & stakeholders helps me quickly impact projects as a pro-active collaborator.
                    </p> -->
                    <!-- <p class="font-normal font-main text-grayMiddle">
                    Currently contributing to user research, design systems, and UI design at Keyworded.
                    </p> -->
                </div>
  
                <div class="justify-start flex flex-row items-center space-x-2 mt-6 lg:mt-12">
                <!-- <WorkAvailability /> -->
                    <div class="w-6 text-mint text-2xl">
                        <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                    </div>
                    <ButtonLight label="Let's Talk" link="/contact" class="content-center pointer-events-auto w-max" />
                </div>
            </div>

            <div class="col-span-1 col-start-1">
                <div class="w-full text-right">
                    <h1 class="font-title title-normal text-grayLighter text-2xl">Highlights —</h1>
                </div>
            </div>
  
            <div class="col-span-1 col-start-1 lg:col-span-2 lg:col-start-2 space-y-10">
                <CoverTesting />   
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
    name: 'HomePage',
    head: {
      title: 'Max is Wright',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Vue.JS and Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
        }
      ],
    },
  }
  </script>
  
  <style>
  @keyframes wave-animation {
      0%, 20%, 80%, 100% {
          transform: scaleX(-1) rotate(0deg);
      }
      40% {
          transform: scaleX(-1) rotate(-20deg);
      }
      60% {
          transform: scaleX(-1) rotate(20deg);
      }
  }
  
  #WavingHand {
      display: inline-block;
      animation: wave-animation 3s ease-in-out infinite;
      transform-origin: bottom;
  }
  
  #jobTitle {
    text-decoration: underline solid #00AB8F;
    text-decoration-thickness: 4px;
    text-underline-offset: 2px;
    text-decoration-skip-ink: none;
  }
  
  /* .fa, .fas, .far, .fal, .fad, .fab {
      min-width: 1em;
      min-height: 1em;
  } */

  .introduction {
    max-width: 70ch;
    overflow-wrap: break-word;
  }
  </style>