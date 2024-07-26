<template>
    <div>
        <ContentCaptionWithNotes title="Key Trends">
            <template #caption>
                <p>Although we didn’t have a specific goal with our analysis, these are some of the trends we identified throughout our inspections which we want to highlight because of how they impacted our direction. These were prominently in mind as we moved forward with our conceptualization.</p>
            </template>
            <template #notes>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/1_Cars/z_Highlight_1_Small.jpg"
                            srcset-medium="/Work/EV/1_Cars/z_Highlight_1_Med.jpg"
                            srcset-large="/Work/EV/1_Cars/z_Highlight_1.jpg"
                            alt-text="A photo from the driver's seat of a Tesla sedan, showing the steering wheel and dashboard, which features an astonishing lack of any screens or gauges except for the one touch screen in the center"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Poor feature implementation</h3>
                        <p>Some new features are surprisingly poorly integrated and, beyond simply impacting safety, can create an awful experience for drivers. For instance, drivers have been growing frustrated by the increasing use of touch screens but you simply can’t argue against the massive cost savings for manufacturers. However, Tesla takes it to an extreme where they’ve moved almost every single aspect of the dashboard, from the speedometer to the music to the climate controls, into a single touch screen in the center of the dashboard.</p>
                    </template>
                </ContentSmallCardWithMedia>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/1_Cars/z_Highlight_2_Small.jpg"
                            srcset-medium="/Work/EV/1_Cars/z_Highlight_2_Med.jpg"
                            srcset-large="/Work/EV/1_Cars/z_Highlight_2.jpg"
                            alt-text="The center screen of Ford's Mach-e, showing multiple visual languages clashing with a mix of different colors, spacing, and icon sizes"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Inconsistent Visual Design & App Integration</h3>
                        <p>None of the vehicles we reviewed had complete ownership over their digital design. They all collaborated with Apple and Google for services like CarPlay and Android Auto. Since each service has their own design guidelines and requirements, the result is a clash of multiple visual design languages. In general, the user interfaces are poorly designed and try to cram too much information in too small of a space.</p>
                    </template>
                </ContentSmallCardWithMedia>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/1_Cars/z_Highlight_3_Small.jpg"
                            srcset-medium="/Work/EV/1_Cars/z_Highlight_3_Med.jpg"
                            srcset-large="/Work/EV/1_Cars/z_Highlight_3.jpg"
                            alt-text="A photo from the driver's seat of VW's ID4, showing a thin LED light strip along the bottom of the windshield"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Willing to Explore but with Mixed Results</h3>
                        <p>Many manufacturers are fully willing to explore new ways of displaying information or integrating new technologies. Some features are more easily adapted, like improvements to windshield HUDs, but many don’t have enough R&D to really be a benefit. For instance, this thin, interior strip of lights mounted under the windshield of VW’s ID.4 is supposed to provide feedback to the driver but only has 2 colors, basic patterns, and doesn’t coordinate with the rest of the dashboard to provide meaningful assistance.</p>
                    </template>
                </ContentSmallCardWithMedia>
            </template>
        </ContentCaptionWithNotes>
    </div>
</template>