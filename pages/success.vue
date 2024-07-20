<template>
    <div>
      <CustomCursor />
      <NavBar />
      <div class="w-screen h-20 bg-grayLighter"></div>
      <div class="w-screen h-screen content-center z-10 bg-grayLighter flex items-center">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-16 mb-16 md:mb-32">
            <div class="h-full col-span-1 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-2 bg-grayDarkest rounded-md p-4 flex items-center">
              <div class="w-full bg-grayDarkest flex flex-col items-center gap-8">
                <div class="w-full bg-grayLighter rounded-sm text-grayDarker text-center">
                    <h1 class="font-title text-xl">
                        Success!
                    </h1>
                </div>
                <div class="flex flex-col text-grayLighter font-main">
                    <p class="text-center">Your message was sent successfully. Please consider connecting with me on LinkedIn or Instagram for more rapid communication.</p>
                </div>
                <div class="w-full flex justify-end">
                    <ButtonDark label="Back Home" link="/" class="text-sm"></ButtonDark>
                </div>
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
    name: 'SuccessPage',
    head: {
      title: 'Message Sent',
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