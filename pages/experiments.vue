<template>
    <div>
        <CustomCursor />
        <NavBar />

        <div class="w-full content-center z-10 bg-grayLighter">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mt-16 mb-16 md:mb-32 mt-40">
                <div class="col-span-1">
                    <CopyTitle>
                        <template #title>
                            <span>Experiments —</span>
                        </template>
                        <template #content>
                            These projects are primarily experimental in nature, and constitute new topic exploration or just playing with areas I like. For my more substantial projects with more research, prep, and dedication check out my 
                            <nuxt-link to="/work" class="font-bold hover:text-mint hover:bg-white rounded-sm">Work</nuxt-link> page.
                        </template>
                    </CopyTitle>
                </div>
            </div>
        </div>

        <CoverMain type="Experiment" />

        <div class="w-full content-center z-10 bg-grayLighter">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16 my-32">
                <div class="col-span-1 md:col-span-4 md:col-start-2">
                    <MessageMore />
                </div>
            </div>
        </div>

        <PreFooter :currentProjectId="'1'" :linksVisibility="[false, true, false, true]" />
        <FooterSection />
    </div>
</template>
  
<script>
export default {
name: 'ExperimentsPage',
head: {
    title: 'Max is Wright - Experiments',
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
