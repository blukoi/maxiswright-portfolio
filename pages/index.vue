<template>
  <div>
    <CustomCursor />
    <NavBar />
    <!-- <TestComponent /> -->
    <div class="w-full content-center z-10">
      <div class="container px-4 sm:px-0 mx-auto pt-32">

        <div class="w-full grid grid-cols-1 lg:grid-cols-3 gap-8">

          <!-- <div class="z-40 lg:pt-24 lg:pb-24 static col-span-1 lg:col-span-2 col-start-1 lg:col-start-2 flex flex-row justify-center mx-0 lg:mx-24 xl:mx-32 2xl:mx-56">
            <JumbotronHome class="z-0 w-full md:w-1/2 lg:w-full" />
          </div> -->

          <!-- <div class="col-span-1 lg:col-span-3 w-max bg-mint text-white h-16 px-8 items-center rounded-full flex flex-row gap-4">
            <div class="h-8 w-8 flex flex-row justify-center items-center">
              <FontAwesomeIcon id="WavingHand" :icon="['fas', 'hand']" class="text-3xl" />
            </div>
            <h1 class="font-title title-bold text-3xl pt-1">
              Hi!
            </h1>
          </div> -->

          <div class="col-span-1 col-start-1 lg:col-span-2 justify-center pl-8">
            <div class="space-y-6">
              <p class="font-normal font-main text-xl lg:text-2xl text-grayMiddle">
                <span class="bg-mint text-white font-title title-bold rounded-full px-4 pt-2 pb-1"><FontAwesomeIcon id="WavingHand" :icon="['fas', 'hand']" class="fa-1x" /><span class="pl-4">Hi!</span></span> I'm a mission-driven, code-minded product designer who excels at exhaustive iteration to apply insights to interfaces & create thoughtful design systems.
              </p>
              <!-- <p class="font-light font-main text-lg lg:text-xl text-grayMiddle">
                My experience with graphic design, front-end code, and working alongside engineers & stakeholders helps me quickly impact projects and multi-disciplinary teams as a strong, pro-active collaborator.
              </p> -->
            </div>
          </div>

          <div class="col-span-1 col-start-1 justify-start flex flex-row items-center space-x-2">
            <!-- <WorkAvailability /> -->
            <div class="w-6 text-mint text-2xl">
              <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
            </div>
            <ButtonLight label="Let's Talk" link="/contact" class="content-center pointer-events-auto w-max" />
          </div>

          <div class="col-span-1 col-start-1 lg:col-span-3 w-full sm:px-0 mx-auto mb-8 lg:mb-16 flex justify-end">
            <h1 class="font-title title-bold text-grayLightPrimary text-6xl">Highlights —</h1>
          </div>
      
        </div>

      </div>

      <div class="w-full m-auto">
        <CoverHome />
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

.fa, .fas, .far, .fal, .fad, .fab {
    min-width: 1em; /* Ensures icons have a default width */
    min-height: 1em; /* Ensures icons have a default height */
}
</style>