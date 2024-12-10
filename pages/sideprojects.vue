<template>
    <div>
        <CustomCursor />
        <NavBar />

        <div class="w-full content-center z-10 bg-white">
            <div class="container px-4 sm:px-0 mx-auto pt-40 pb-16 md:pb-32">
                <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                    <div class="col-span-1">
                        <CopyTitle>
                            <template #title>
                                <span>Side Projects —</span>
                            </template>
                            <template #content>
                                These projects are usually passion projects but some constitute new topic exploration (not really experimental as much as just trying to learn). For my more substantial projects with more research, prep, and dedication check out my 
                                <nuxt-link to="/work" class="font-bold hover:text-mint border-transparent border-solid border-b-2 hover:border-mint">Work</nuxt-link> page.
                            </template>
                        </CopyTitle>
                    </div>
                </div>
            </div>
        </div>

        <CoverMain type="Experiment" />

        <div class="w-full content-center z-10 bg-grayLighter">
            <div class="py-32">
                <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-16">
                    <div class="col-span-1 md:col-span-4 md:col-start-2">
                        <MessageMore />
                    </div>
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
    title: 'Max is Wright - Side Projects',
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
