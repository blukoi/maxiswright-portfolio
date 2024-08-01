<template>
    <ContentMediaWithCaption
        title="Existing Typeface Design Platforms"
    >
        <template #caption>
            <p>I looked at the interfaces of existing typeface design platforms, and design apps in general, to get a better sense of what designers are used to designing with. This would enable my design to be easily adopted.</p>
        </template>
        <template #media>
            <div class="flex flex-col space-y-1">
                <div class="bg-white rounded-sm md:rounded-md">
                    <ImagePrimary 
                        srcsetLarge="/Work/Fontfacing/4_Designing/FontLab.png"
                        srcsetMedium="/Work/Fontfacing/4_Designing/FontLab.png"
                        srcsetSmall="/Work/Fontfacing/4_Designing/FontLab.png"
                        altText="A screenshot of FontLab showing a lowercase `a` being edited; along with the toolbar and sidebar, as well as the vector in the act of being edited, the screenshot also shows FontLab's ability to edit various font weights in the same frame by layering the different outlines on top of each other."
                    />
                </div>
                <div class="pl-4 md:pl-8">
                    <p class="font-main text-grayDarker italic text-xs">Making fine adjustments between font styles of a typeface using FontLab.</p>
                </div>
            </div>
        </template>
    </ContentMediaWithCaption>
</template>