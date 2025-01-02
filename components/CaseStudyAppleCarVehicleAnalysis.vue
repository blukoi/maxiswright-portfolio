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
                        <h3 class="font-bold">Poor Feature Implementation</h3>
                        <p>Trendy features can be integrated in a way that impacts safety and the driving experience. For instance, drivers have been growing frustrated by the prevalence of touch screens but Tesla have condensed almost every single aspect of the dashboard into a single touch screen.</p>
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
                        <p>None of the vehicles we reviewed had complete ownership over their digital UX, instead contracting services like CarPlay and Android Auto. Since each service has their own guidelines and requirements, the result is a clash of multiple visual design languages.</p>
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
                        <h3 class="font-bold">New Tech Overshadowing the Core Experience</h3>
                        <p>Manufacturers exploring new technologies will rush to bring them to market without working to incorporate them into the driving experience. For instance, this interior strip of lights is supposed to provide feedback but is too limited for any meaningful assistance.</p>
                    </template>
                </ContentSmallCardWithMedia>
            </template>
        </ContentCaptionWithNotes>
    </div>
</template>