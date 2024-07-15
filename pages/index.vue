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
      <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 mb-48">

        <div class="z-40 static md:fixed container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 -mt-24 mb-24 md:mb-0">
          <div class="col-span-1">
            <div class="w-max bg-white text-mint px-8 py-4 rounded">
              <h1 class="font-title text-3xl">
                Hi, I'm Max!
              </h1>
            </div>
            <div class="pl-8 mt-6 space-y-6">
              <div>
                <p class="font-normal font-main text-sm text-gray-Darker">A versatile product designer with a talent for visual design and product + systems thinking. I'm eager to tackle complex challenges and craft user-focused digital experiences.</p>
              </div>
              <div class="px-4 py-2.5 w-max rounded-full border border-grayDarker bg-grayLighter flex flex-row items-center space-x-3">
                <div id="AvailableLight" class="h-3 w-3 rounded-full bg-mint"></div>
                <p class="font-sm">Available for work</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-1 md:col-span-2 col-start-1 md:col-start-2">
          <div class="rounded-md bg-white p-4 space-y-8">
            <div class="flex flex-col -space-y-5">
              <div class="rounded-sm overflow-hidden">
                <img src="/Work/EV/0_Cockpit.png" alt="">
              </div>
              <div class="ml-4 md:ml-8 w-max h-10 pl-4 pr-6 flex flex-row items-center bg-mint text-white border border-white rounded-full space-x-4">
                <font-awesome-icon :icon="['fas', 'car-side']" class="text-xl" />
                <p class="font-main uppercase tracking-widest text-sm">Category</p>
              </div>
            </div>
            <div class="space-y-8">
              <h1 class="ml-4 md:ml-0 font-title text-2xl text-grayDarkest">Title</h1>
              <div class="ml-4 md:ml-8 font-main text-grayDarker font-sm">
                <p>
                  Industry research and branding to create a concept exploring evolved experiences for next-gen electric vehicles
                </p>
              </div>
              <div class="ml-4 md:ml-8 py-2">
                <ButtonDark label="Read More" link="/applecar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full content-center z-10 bg-grayDarker relative">
      <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1">
        <div class="col-span-1">
          <FooterSection />
        </div>
      </div>
    </div>
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
        content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking / eager to tackle complex challenges and craft user-focused digital experiences."
      }
    ],
  },
}
</script>