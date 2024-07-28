<template>
    <ContentScroller
        title="New Brand Strategy"
    >

        <!-- NEW BUT FAMILIAR -->
        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/3_Conceptualization/Tagline.png',
                medium: '/Work/EV/3_Conceptualization/Tagline.png',
                large: '/Work/EV/3_Conceptualization/Tagline.png',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="New but Familiar"
            alt-text="A simple graphic of a conceptual slogan reading, `Live Different`"
            imageParent="h-64 md:h-120 w-64 md:w-120"
        >
            <template #caption>
                <p>With a new goal of moving into mobility and becoming a more all-encompassing lifestyle company, a more fitting tagline would be, more than thinking, to “Live Different”.</p>
            </template>
        </ScrollerImage>

        <!-- VISION -->
        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/3_Conceptualization/Vision.png',
                medium: '/Work/EV/3_Conceptualization/Vision.png',
                large: '/Work/EV/3_Conceptualization/Vision.png',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="Vision"
            alt-text="An array of 3 circles featuring; on the left is `Accessibility`; in the middle is `Connectedness & Compatibility`; on the right is`Ease of Use`"
            imageParent="h-64 md:h-120 w-64 md:w-120"
        >
            <template #caption>
            </template>
        </ScrollerImage>

        <!-- MISSION -->
        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/3_Conceptualization/Mission.png',
                medium: '/Work/EV/3_Conceptualization/Mission.png',
                large: '/Work/EV/3_Conceptualization/Mission.png',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="Mission"
            alt-text="An array of 4 circles connected by lines between them; on the top left is `Hardware Integration`; on the top right is `Smart Connectivity`; on the bottom left is `Personalized Services`; on the bottom right is `Experience`"
            imageParent="h-64 md:h-120 w-64 md:w-120"
        >
            <template #caption>
            </template>
        </ScrollerImage>

        <!-- POSITIONING -->
        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/3_Conceptualization/Positioning.png',
                medium: '/Work/EV/3_Conceptualization/Positioning.png',
                large: '/Work/EV/3_Conceptualization/Positioning.png',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="Positioning"
            alt-text="A graph showing the positioning of various car brands along 2 axes; the x-axis (horizontal) shows `stagnant` with `exploring` on the right; the y-axis (vertical) shows `luxury` on top and `basic` on the bottom; Apple's positioned in the top right as a luxury brand that explores technology"
            imageParent="h-64 md:h-120 w-64 md:w-120"
        >
            <template #caption>
            </template>
        </ScrollerImage>

    </ContentScroller>
</template>