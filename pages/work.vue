<template>
    <div>
        <CustomCursor />
        <NavBar />

        <div class="w-full content-center z-10 bg-grayLighter">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 mb-16 md:mb-32 mt-40">
                <div class="col-span-1">
                    <CopyTitle>
                        <template #title>
                            <span>Work —</span>
                        </template>
                        <template #content>
                            These case studies constitute work to which I was able to devote or approximate a project cycle. For smaller scale projects which allowed me to explore or try new things, check out my 
                            <nuxt-link to="/experiments" class="font-bold hover:text-mint hover:bg-white rounded-sm">Experiments</nuxt-link> page.
                        </template>
                    </CopyTitle>
                </div>
            </div>
        </div>

        <CoverMain />

        <div class="w-full content-center z-10 bg-grayLighter">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16 mt-16 mb-16 md:mb-32 mt-40">
                <div class="col-span-1 md:col-span-4 md:col-start-2">
                    <MessageMore />
                </div>
            </div>
        </div>

        <PreFooter :currentProjectId="'1'" :linksVisibility="[false, false, true, true]" />
        <FooterSection />
    </div>
</template>
  
<script>
export default {
name: 'WorkPage',
head: {
    title: 'Max is Wright - Work',
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
