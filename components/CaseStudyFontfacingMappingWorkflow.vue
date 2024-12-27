<template>
    <div class="w-full space-y-32 md:space-y-64">
        <!-- Workflow Map -->
        <ContentMediaWithCaption
            title="The Visual Design Aspects are not Linear"
        >
            <template #caption>
                <p>The sketching and digitizing stages of typeface design are extensive and may require multiple passes. Depending on the designer, the entire set of characters (lowercase, uppercase, numbers... 26-70ish characters at minimum or in the hundreds depending on the needs of the typeface) may need to be sketched multiple times.</p>
            </template>
            <template #media>
                <div class="bg-white rounded-sm md:rounded-md">
                    <ImagePrimary 
                        srcsetLarge="/Work/Fontfacing/3_Mapping/Workflow.png"
                        srcsetMedium="/Work/Fontfacing/3_Mapping/Workflow.png"
                        srcsetSmall="/Work/Fontfacing/3_Mapping/Workflow.png"
                        altText="An array of the workflow of typeface design, mapping out between stages, from Sketching to Digitizing to Finishing, as well as the multiple phases within each stage and arrows back and forth to show the non-linear nature."
                    />
                </div>
            </template>
        </ContentMediaWithCaption>

        <!-- Repeating Elements -->
        <ContentMediaWithCaption
            title="Repeating Visual Design Elements"
        >
            <template #caption>
                <p class="mb-4">Many typeface designers will start the sketching phase by working on control characters, the design of which will help define other characters.</p>
                <p>For instance, you can take the pieces of the lowercase ‘n’ to then work out the i, l, h, m, u, r, t, and you’d also have the x-height for other lowercase letters. After working on the lowercase ‘o’ you’d then have the building blocks for b, p, d, q, c, and e. You’d have to work on some of the finer details, but just from those two, the lowercase ‘n’ and ‘o’, you’d have a lot of the major work done for 15 characters, with the pieces necessary to work on many others.</p>
            </template>
            <template #media>
                <div class="bg-fontfacingBlue h-full flex justify-center items-center px-0 md:px-32">
                    <LottieParent bgColor="bg-fontfacingBlue" :animation-data="secondAnimationData" alt="An animation showing a series of letters (n, i, h, l, and m) as a highlight moves from letter to letter to show a visual element which is almost exactly the same in each letter."></LottieParent>
                </div>
            </template>
        </ContentMediaWithCaption>

        <!-- In the Context of AI -->
        <ContentMediaWithCaption
            title="Typefaces in the Context of AI"
        >
            <template #caption>
                <p class="mb-4"><span class="font-bold">A typeface is a visual pattern</span> which repeats to make up all of the characters of that typeface. The consistency with which that pattern is applied to the characters is what defines the visual style (and the feelings it imparts on the reader) of a font.</p>
                <p>A training model should be able to figure out the repeating visual cues from a relatively small sample size. Done correctly, an AI system should therefore be able to speed up the workflow of typeface design.</p>
            </template>
            <template #media>
                <div class="w-full text-fontfacingPurple bg-white px-8 py-8 flex flex-col items-center text-center space-y-8">
                    <div class="font-title title-bold text-2xl flex flex-col justify-center space-y-1 items-center">
                        <h1>With the process in mind</h1>
                        <h1 class="px-4 pt-1 bg-fontfacingPurple text-white w-max">what is a typeface?</h1>
                    </div>
                    <div class="text-grayMiddle">
                        <svg width="212" height="213" viewBox="0 0 212 213" fill="none" xmlns="http://www.w3.org/2000/svg" class="stroke-current">
                            <path d="M106 6.91113V206.911" stroke-width="4" stroke-linecap="round"/>
                            <path d="M89 190.882L105.971 207.852L122.941 190.882" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <p class="font-main text-xl text-center">A consistent collection of design elements that repeat and, as they combine, form the characters/letters that make up written language.</p>
                </div>
            </template>
        </ContentMediaWithCaption>
    </div>
</template>

<script scoped>
    import secondAnimationData from '~/Assets/animations/FontFacing_DesignElements.json';

export default {
    data() {
        return {
            bgColor: "gradient-fontfacing",
            secondAnimationData,
        };
    },
}
</script>