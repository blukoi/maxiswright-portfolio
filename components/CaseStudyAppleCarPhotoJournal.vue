<template>
    <ContentScroller
        title="Apple Customer Photo Journal"
    >

        <ScrollerImageMulti
            :srcset = "[
                {
                    small: '/Work/EV/2_Research/Retail_1.jpg',
                    medium: '/Work/EV/2_Research/Retail_1.jpg',
                    large: '/Work/EV/2_Research/Retail_1.jpg',
                    altText: 'The outside of Apple`s physical store in Santa Monica, California, which has an entire glass front',
                },
                {
                    small: '/Work/EV/2_Research/Retail_2.jpg',
                    medium: '/Work/EV/2_Research/Retail_2.jpg',
                    large: '/Work/EV/2_Research/Retail_2.jpg',
                    altText: 'The interior of Apple`s physical store in the Upper East Side in New York which inhabits a space which was previously a bank and has kept many of the architectural hallmarks of the original space',
                },
            ]" 
            title="Retail Stores" 
            imageParent="h-112 md:h-160 w-80 md:w-120" 
        >
            <template #caption>
                <!-- <p>Apple’s physical retail spaces have gone through a variety of design philosophies over the years. Once they were sleek, ultra-modern, and almost sterile. Nowadays they try to incorporate architectural elements of the building or area to evoke a kind of harmony between the technology and the world around us, along with utilizing more plants and always a lot of windows and sunlight. Apple’s large catalog of physical stores also creates a remarkable advantage to enter the car market using sales strategies similar to Tesla, where the cars themselves don’t need to be immediately available like they would at a traditional car dealership.</p> -->
            </template>
        </ScrollerImageMulti>

        <ScrollerVideo
        :videoSources="[
                { src: '/Work/EV/2_Research/Website_480.mp4', type: 'video/mp4' },
                { src: '/Work/EV/2_Research/Website_720.mp4', type: 'video/mp4' },
            ]"
            title="Website"
            videoParent="h-112 md:h-160 w-80 md:w-120"
        >
            <template #caption>
                <!-- <p>Apple’s website and online store are a masterclass in visual hierarchy and UX writing. The layouts themselves are typically pretty plain, with a strong separation between sections, expert use of progressive disclosure, and well-orchestrated interactions that can both capture a visitor’s attention and also dispense information.</p> -->
            </template>
        </ScrollerVideo>

        <ScrollerImageMulti
            :srcset = "[
                {
                    small: '/Work/EV/2_Research/Ads_1.jpg',
                    medium: '/Work/EV/2_Research/Ads_1.jpg',
                    large: '/Work/EV/2_Research/Ads_1.jpg',
                    altText: 'An online photo ad for Apple`s iPhone, highlighting the privacy features by covering the owner`s face',
                },
                {
                    small: '/Work/EV/2_Research/Ads_2.jpg',
                    medium: '/Work/EV/2_Research/Ads_2.jpg',
                    large: '/Work/EV/2_Research/Ads_2.jpg',
                    altText: 'A billboard for Apple`s iPad mini showing the iPad taking up a small piece of the billboard with the rest of the space a stark white',
                },
            ]" 
            title="Advertising" 
            imageParent="h-112 md:h-160 w-80 md:w-120" 
        >
            <template #caption>
                <!-- <p>Apple’s ads are usually deceptively simple, and often pick a singular aspect or feature to highlight. However, even though one feature may be highlighted, the ads always carry subtle implications about how that feature will actually improve your life or experience using the product.</p> -->
            </template>
        </ScrollerImageMulti>

        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/2_Research/ThirdParty.jpg',
                medium: '/Work/EV/2_Research/ThirdParty.jpg',
                large: '/Work/EV/2_Research/ThirdParty.jpg',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="Third Party Retail"
            alt-text="A photo of an Apple product display inside of a Best Buy"
            imageParent="h-112 md:h-160 w-96 md:w-128"
        >
            <template #caption>
                <!-- <p>Apple also has dedicated product spaces at third party retailers and department stores. Apple makes efforts to bring some of their own retail spaces to these to create an extreme visual distinction compared to the many other brands also in these stores. There’s a not-so-subtle implication that Apple’s devices stand apart from the rest.</p> -->
            </template>
        </ScrollerImage>
    
        <ScrollerImageMulti
            :srcset = "[
                {
                    small: '/Work/EV/2_Research/Hardware_1_Small.png',
                    medium: '/Work/EV/2_Research/Hardware_1_Small.png',
                    large: '/Work/EV/2_Research/Hardware_1.png',
                    altText: 'An lineup of the Apple`s different products showing the variety of colors and materials being used',
                },
                {
                    small: '/Work/EV/2_Research/Hardware_3_Small.jpg',
                    medium: '/Work/EV/2_Research/Hardware_3_Med.jpg',
                    large: '/Work/EV/2_Research/Hardware_3.jpg',
                    altText: 'A photo of someone opening the packaging of an iPhone',
                },
            ]" 
            title="Hardware" 
            imageParent="h-112 md:h-160 w-80 md:w-120" 
        >
            <template #caption>
                <!-- <p>The philosophy of Apple’s hardware is almost obsessive, from the materials being used all the way down to the opening experience. Apple has always been sympathetic to the way every product feels in our hand, as well as the fact that opening an expensive product should feel like an event in and of itself.</p> -->
            </template>
        </ScrollerImageMulti>

        <ScrollerImage
            :srcset = "{
                small: '/Work/EV/2_Research/Services_1.png',
                medium: '/Work/EV/2_Research/Services_1.png',
                large: '/Work/EV/2_Research/Services_1.png',
            }"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            title="Services"
            alt-text="A photo of an Apple product display inside of a Best Buy"
            imageParent="h-112 md:h-160 w-96 md:w-128"
        >
            <template #caption>
                <!-- <p>One of the most common complaints that I hear about Apple products is, “Wow your [Apple product] can’t do [this thing]? My [competitor] has been able to do that for years!” It’s a valid complaint in a fast-paced technological world, but Apple has never hidden the fact that they won’t release an app or service unless the work has been put into it to ensure that it’s a fully realized vision that can bring real impact, rather than simply a new app or service for the sake of having the new thing.</p> -->
            </template>
        </ScrollerImage>

    </ContentScroller>
</template>