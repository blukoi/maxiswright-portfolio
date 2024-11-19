<template>
  <div>
    <CustomCursor />
    <NavBar />
    <!-- <TestComponent /> -->
    <div class="fixed top-10 w-full content-center h-50vh z-0">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-1 col-start-1 md:col-span-4 md:col-start-5">
          <JumbotronHome class="z-0" />
        </div>
      </div>
    </div>
    <div class="w-full h-50vh bg-transparent inline-block"></div>
    <div class="w-full content-center z-10 bg-grayLighter relative">
      <div class="container px-4 sm:px-0 mx-auto pt-16 pb-16 md:pb-32 bg-grayLighter relative">

        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">

          <div class="z-40 static md:fixed container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 -mt-24 mb-24 pointer-events-none">
            <div class="col-span-1">
              <div class="w-max bg-white text-mint h-16 px-8 items-center rounded-full flex flex-row gap-4">
                <div class="h-8 w-8 flex flex-row justify-center items-center">
                  <FontAwesomeIcon id="WavingHand" :icon="['fas', 'hand']" class="text-3xl" />
                </div>
                <h1 class="font-title text-3xl">
                  Hi, I'm Max!
                </h1>
              </div>
              <div class="pl-8 mt-6 space-y-6">
                <div class="space-y-6">
                  <p class="font-medium font-main text-2xl text-gray-Darker">I craft thoughtful user experiences, scale interfaces, and I'm eager to take on interesting challenges.</p>
                  <p class="font-normal font-main text-base text-gray-Darker">As a versatile product designer, I use my flair for visual communication and product + systems thinking to achieve business goals while driving tangible change.</p>
                </div>
                <div class="flex flex-col space-y-6">
                  <!-- <WorkAvailability /> -->
                  <ButtonDark label="Let's Collaborate" link="/contact" class="content-center pointer-events-auto w-max" />
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-1 md:col-span-2 col-start-1 md:col-start-2">
            <CoverHome />
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
        content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
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
</style>