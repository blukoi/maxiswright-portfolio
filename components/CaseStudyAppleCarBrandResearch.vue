<template>
    <div>
        <ContentCaptionWithNotes title="Design Priorities">
            <template #caption>
                <p>After taking the time to look at their customer experience, physical and online presence, advertising, design philosophy, and product decisions, these are the priorities we agreed to focus on.</p>
            </template>
            <template #notes>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/2_Research/Card_AppleEcosystem_Small.png"
                            srcset-medium="/Work/EV/2_Research/Card_AppleEcosystem_Med.png"
                            srcset-large="/Work/EV/2_Research/Card_AppleEcosystem.png"
                            alt-text="A graphic of the 3 circles of Apple's ecosystem, showing how the products, hardware, software, and services relate to each other"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Apple Ecosystem</h3>
                        <p>Because of the amount of work that Apple puts into their connected product line, any concept we come up with would have to support Apple’s other products and services with clear connections between them.</p>
                    </template>
                </ContentSmallCardWithMedia>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/2_Research/Card_SpatialComputing_Small.png"
                            srcset-medium="/Work/EV/2_Research/Card_SpatialComputing_Med.png"
                            srcset-large="/Work/EV/2_Research/Card_SpatialComputing.png"
                            alt-text="An example diagram showing the different levels of spatial awareness when it comes to designing for VR, starting with 2D interfaces, then 3D volumes, and then combined to fill an entire spaces"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Spatial Computing</h3>
                        <p>Apple is cognizant of the future of technology going beyond a 2-dimensional screen. While developing a car, Apple would assuredly take advantage of the totality of space within to explore new interactions.</p>
                    </template>
                </ContentSmallCardWithMedia>
                <ContentSmallCardWithMedia class="flex-1">
                    <template #media>
                        <ImageSmall
                            srcset-small="/Work/EV/2_Research/Card_AppleProducts_Small.png"
                            srcset-medium="/Work/EV/2_Research/Card_AppleProducts_Med.png"
                            srcset-large="/Work/EV/2_Research/Card_AppleProducts.png"
                            alt-text="A variety of Apple products with related app systems on the screen"
                        />
                    </template>
                    <template #caption>
                        <h3 class="font-bold">Integration</h3>
                        <p>We also noted the need for any concepts to not only work alongside the other products but for the experience, apps, and services to be fully integrated and seamless. The goal, therefore, should be frictionless integration.</p>
                    </template>
                </ContentSmallCardWithMedia>
            </template>
        </ContentCaptionWithNotes>
    </div>
</template>