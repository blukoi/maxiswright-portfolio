<template>
    <div>
        <ContentCaptionWithNotes title="Vehicle Analysis Insights">
            <template #caption>
                <p>We analyzed, in-depth, 12 vehicles (plus 1 more deeper analysis) to get a sense for the ways car manufacturers are solving problems and crafting experiences.</p>
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
                        <p>Some new features are surprisingly poorly integrated and, beyond simply impacting safety, can create an awful experience for drivers. For instance, drivers have been growing frustrated by the increasing use of touch screens, but Tesla takes it to an extreme where they’ve moved almost every single aspect of the dashboard into a single touch screen in the center of the dashboard.</p>
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
                        <p>None of the vehicles we reviewed had complete ownership over their digital design, instead contracting with Apple and Google for services like CarPlay and Android Auto. Since each service has their own design guidelines and requirements, the result is a clash of multiple visual design languages.</p>
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
                        <p>Many manufacturers are fully willing to explore new ways of displaying information or integrating new technologies. Some features are more easily adapted while others are too new to really be a benefit. For instance, this thin, interior strip of lights mounted under the windshield of VW’s ID.4 is supposed to provide feedback to but is too limited to provide meaningful assistance.</p>
                    </template>
                </ContentSmallCardWithMedia>
            </template>
        </ContentCaptionWithNotes>
    </div>
</template>