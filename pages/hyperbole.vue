<template>
    <div>
        <CustomCursor />
        <NavBar />

        <!-- TITLE AND VISUAL -->
        <IntroTitle :bgColor="bgColor" mediaBackground="bg-grayDarkest">
            <template #title>{{ project.title }} —</template>
            <template #media>
                <div class="w-full h-full flex justify-center">
                    <ImagePrimary 
                        srcsetLarge="/Experiments/Hyperbole/0_hyperbolecover_Full.jpg"
                        srcsetMedium="/Experiments/Hyperbole/0_hyperbolecover_Med.jpg"
                        srcsetSmall="/Experiments/Hyperbole/0_hyperbolecover_Small.jpg"
                        altText="A mockup showing someone's hand holding a 16-ounce beer can with a colorful label and a digital illustration of a sandwich."
                        additionalStyles="min-w-full min-h-full object-cover"
                    />
                </div>
                <!-- <VideoCover
                :videoSources="[
                    { src: '/Experiments/CarControls/0_Animated_Full.mp4', type: 'video/mp4' },
                    { src: '/Experiments/CarControls/0_Animated_720.mp4', type: 'video/mp4' },
                    { src: '/Experiments/CarControls/0_Animated_480.mp4', type: 'video/mp4' },
                    ]">
                </VideoCover> -->
            </template>
            <template #info>
                <PillsAlone 
                    :items="['Product Packaging', 'Role: Graphic Designer', 'Ongoing', 'Solo Project']">
                </PillsAlone>
            </template>
            <template #tools>
                <PillsAlone 
                    :items="['Google Forms', 'Adobe Illustrator']">
                </PillsAlone>
            </template>
        </IntroTitle>

        <!-- CASE STUDY INTRO -->
        <IntroStructure :showDisclaimer="false">
            <template #overview>
                <p class="mb-4">I needed something to do in my free time and I tend to watch a lot of movies. I created a fictional brewery, called Hyperbole, then tested some packaging design so I could make digital illustrations based on the movies I was watching, and keep my Adobe Illustrator skills nice and polished.</p>
            </template>
            <!-- <template #problem>
                <p class="text-sm text-grayMiddle ml-8">
                    Many car owners are frustrated by the lack of physical controls, like knobs and buttons, that have been replaced by touchscreens which can be slow, inconvenient, unresponsive, and even unsafe to use.
                </p>
            </template>
            <template #goals>
                <p class="text-sm text-grayMiddle ml-8">
                    Maintain cost-savings while reintroducing a physical control system of some kind.
                </p>
            </template>
            <template #solution>
                <p class="text-sm text-grayMiddle ml-8">
                    Combine touchscreen and physical controls into some kind of cheap but multifunctional interaction.
                </p>
            </template> -->
        </IntroStructure>

        <!-- INTRO HIGHLIGHTS -->

        <!-- HOW MIGHT WE & HERO IMAGE -->
        <IntroHowMightWe
            how="Core focus"
            direction="Goal: explore consumer-friendly packaging as a way to practice digital illustration skills"
            title="Craft Beer Today"
            :bgColor="bgColor"
        >
            <template #caption>
                <p class="pl-0 font-main text-sm">We have somewhere around 10,000 breweries in the United States [in 2024], up exponentially from ~3,500 in 2014. (Even at the time I started planning this project in 2021 there were ~9,300 compared to ~2,000 in 2011.) With such an explosion of breweries it means that the available options for consumers have likewise grown. To stand out on the shelf, you need more than just bright colors or great graphics.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Experiments/Hyperbole/0_problem.webp"
                    srcset-medium="/Experiments/Hyperbole/0_problem.webp"
                    srcset-large="/Experiments/Hyperbole/0_problem.webp"
                    alt-text="A photo of several cooler doors in a store, showing many shelves of colorful craft beer."
                />
                <p class="pl-4 md:pl-8 font-main text-xs text-grayMiddle">©Trong Nguyen * Brewers Association 2017, via EGC Group 2023</p>
            </template>
        </IntroHowMightWe>

        <!-- PROCESS CONTENT -->
        <!-- 1. Research & Observations -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Research & Observations"
            iconPack="fas"
            iconName="magnifying-glass"
            totalProcess="3"
            headerRef="1"
        >
            <!-- <ContentBlurb>
                <p>When learning about automotive UX, one of my first inclinations was to try to figure out a better solution than a singular touch screen to house the myriad of controls normally arrayed on the dashboard. Since the driving force behind this shift is the cost savings from not having to manufacturer all of the controls, knobs, sliders, and the extensive electric systems to connect them all, the solution should be as minimal as possible while still allowing for multiple types of control and interactions.</p>
            </ContentBlurb> -->

            <!-- INITIAL OBSERVATION -->
            <ContentMediaWithCaption
                title="Observations"
            >
                <template #caption>
                    <p><span class="font-bold">Good designs (above):</span> The bestselling beers are either well-known or well-designed. And, from working in liquor sales for 6 years, I can verify that the the most well-designed beers have the brand name/logo and beer style on the same side of the packaging, and all other details are incredibly easy to find. The very best-selling put the logo, style, name, and ABV all in one place.</p>
                    <p class="py-4"><span class="font-bold">Bad design (below):</span> Many beers that you'd expect to sell well, because they come from a known brewery or trending style, are so poorly designed that they hardly sell at all.</p>
                    <ContentTakeaway
                        title="Takeaway"
                        highlightColor="#89CBFB"
                    >
                        <template #copy>
                            <p>Make your information <span class="font-bold">easy to find.</span></p>
                        </template>
                    </ContentTakeaway>
                </template>
                <template #media>
                    <div class="flex flex-col justify-center items-center space-y-4 bg-white h-full p-4">
                        <div>
                            <img src="/Experiments/Hyperbole/Research/Good.jpg" alt="A series of photos of well-designed beer cans showing how easy to read the labels are, with information organized well.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/Bad.jpg" alt="A series of photos of poorly designed beer cans showing that the labels are disorganized and difficult to read, with text jumbled around and information being hard to find.">
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption>

            <!-- PUBLIC SURVEY -->
            <ContentMediaWithCaption
                title="Public Survey"
            >
                <template #caption>
                    <p>I posted a survey on Reddit and asked some questions about beer packaging to see if there was any kind of consensus about the info that people need when they're buying beer.</p>
                </template>
                <template #media>
                    <div class="grid grid-cols-2 2xl:grid-cols-3">
                        <div>
                            <img src="/Experiments/Hyperbole/Research/001.png" alt="A chart showing survey results. This pie chart shows that 86% of people think that they sometimes know what beer they're going to buy when they arrive to the store.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/002.png" alt="A chart showing survey results. This bar chart shows that the most important aspects when buying beer are the right style of beer, a reputable brewery, and word of mouth.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/003.png" alt="A chart showing survey results. This pie chart shows that 74% of people think that the packaging makes a significant impact on which beer they buy.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/004.png" alt="A chart showing survey results. This part of a bar chart shows that the name of a brewery, the name of the beer, and the style of the beer are basically necessary information to consumers.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/005.png" alt="A chart showing survey results. This part of a bar chart shows that, as far as consumers are concerned, nutrition facts, malts/yeasts used, and tasting notes are almost useless.">
                        </div>
                        <div>
                            <img src="/Experiments/Hyperbole/Research/006.png" alt="A chart showing survey results. This part of a bar chart shows that details like the story of the brewery, serving tips, and food pairings are unneeded while the beer's ABV is necessary.">
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption>

            <ContentCaptionWithPostits 
                title="What Customers Need to See" 
                gridCols="md:grid-cols-2 lg:grid-cols-4" 
            >
                <template #caption>
                    <!-- <p></p> -->
                </template>
                <template #postits>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p><span class="font-bold">Brewery Name/Logo</span></p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p><span class="font-bold">Style of Beer</span></p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p><span class="font-bold">ABV</span></p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p><span class="font-bold">Beer Name</span></p>
                        </template>
                    </ContentPostit>
                </template>
            </ContentCaptionWithPostits>

        </ProcessPrimary>

        <!-- 2. TESTING -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Testing"
            iconPack="fas"
            iconName="pen-to-square"
            totalProcess="3"
            headerRef="2"
        >
            <!-- <ContentBlurb>
                <p>I moved to a connected prototype in about a week, incorporating the feedback I’d received from my sketches.</p>
            </ContentBlurb> -->

            <ContentCaptionWithNotes title="Version 1 of a Layout">
                <template #caption>
                    <p>I wanted to ensure that my fictitious designs would work in the real world so I created a rough layout to print and test.</p>
                </template>
                <template #notes>
                    <ContentSmallCardWithMedia class="flex-1">
                        <template #media>
                            <ImageSmall
                                srcset-small="/Experiments/Hyperbole/Testing/Test1.png"
                                srcset-medium="/Experiments/Hyperbole/Testing/Test1.png"
                                srcset-large="/Experiments/Hyperbole/Testing/Test1.png"
                                alt-text="A beer label layout with rulers to show even spacing."
                            />
                        </template>
                        <template #caption>
                            <h3 class="font-bold">First Layout</h3>
                            <p>I tried to apply my knowledge in my first layout: brewery name/logo, beer style, beer name, and ABV on on vertical face of the label. <span class="italic">(Alcohol layouts also require a surgeon general's warning, origin, size, and notation of recycling refund.)</span></p>
                        </template>
                    </ContentSmallCardWithMedia>
                    <ContentSmallCardWithMedia class="flex-1">
                        <template #media>
                            <ImageSmall
                                srcset-small="/Experiments/Hyperbole/Testing/Juice_Digital.png"
                                srcset-medium="/Experiments/Hyperbole/Testing/Juice_Digital.png"
                                srcset-large="/Experiments/Hyperbole/Testing/Juice_Digital.png"
                                alt-text="A test label to figure out the kinks. There's a brewery logo at the top, an illustration of an orange peel above orange juice spelling out the word 'Juice', a notation of the style of beer, and at the bottom is the abv of the beer."
                            />
                        </template>
                        <template #caption>
                            <h3 class="font-bold">Digital Test</h3>
                            <p>I created a quick digital illustration and filled out the text fields to get a sense for how well the layout could be used.</p>
                        </template>
                    </ContentSmallCardWithMedia>
                    <ContentSmallCardWithMedia class="flex-1">
                        <template #media>
                            <ImageSmall
                                srcset-small="/Experiments/Hyperbole/Testing/Juice_Test.png"
                                srcset-medium="/Experiments/Hyperbole/Testing/Juice_Test.png"
                                srcset-large="/Experiments/Hyperbole/Testing/Juice_Test.png"
                                alt-text="A physical test of the label. Its been printed out, at actual size, and put onto a 16-ounce beer can."
                            />
                        </template>
                        <template #caption>
                            <h3 class="font-bold">Physical Test</h3>
                            <p>Of course if we're talking about reality I had to test the label on a real can. What good would a test be, otherwise? You can see that that the text needs a little more breathing room at the top and bottom of the label.</p>
                        </template>
                    </ContentSmallCardWithMedia>
                </template>
            </ContentCaptionWithNotes>

            <!-- REFINED LAYOUT -->
            <ContentMediaWithCaption
                title="Refined Layout"
            >
                <template #caption>
                    <p>From that quick test I refined the layout a bit and gave some of the text more breathing room, also adjusting the styles a little.</p>
                </template>
                <template #media>
                    <div class="flex flex-col justify-center items-center space-y-4 bg-white h-full p-4 px-8 md:px-24 lg:px-32 2xl:px-48">
                        <div>
                            <img src="/Experiments/Hyperbole/Testing/Test2.png" alt="Another label layout showing filler text with the spacing noted.">
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption>
        </ProcessPrimary>

        <!-- 3. Finished Labels -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Finished Labels"
            iconPack="fas"
            iconName="tag"
            totalProcess="3"
            headerRef="3"
        >
            <!-- <ContentBlurb>
                <p>I moved to a connected prototype in about a week, incorporating the feedback I’d received from my sketches.</p>
            </ContentBlurb> -->

            
            <div class="px-4 sm:px-12 md:px-24 lg:px-48 xl:px-80 2xl:px-112 space-y-24">
                <img src="/Experiments/Hyperbole/x0001.png" alt="A beer label for 2020's Birds of Prey, with a digital illustration of a sandwich in front of a vibrant background of various colors.">
                <img src="/Experiments/Hyperbole/x0002.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                <img src="/Experiments/Hyperbole/x0003.png" alt="A beer label for 2010's Tron: Legacy, with a digital illustration of an identity disc floating above a pair of outstretched hands.">
                <img src="/Experiments/Hyperbole/x0004.png" alt="A beer label for 2019's Knives Out, with a digital illustration of a knife.">
                <img src="/Experiments/Hyperbole/x0005.png" alt="A beer label for 2015's Mad Max: Fury Road, with a digital illustration of a person, in silhouette, dragging a bag through smoke with an explosion far in the background.">
                <img src="/Experiments/Hyperbole/x0006.png" alt="A beer label for 2020's Soul, with a digital illustration of a hand, index finger outstretched, reaching to press a key on a piano.">
            </div>
        </ProcessPrimary>

        <!-- OUTRO BEGINNING -->
        <!-- <OutroHighlightsExperiment :bgColor="bgColor">
            <template #central>
                <div class="px-4 sm:px-0 lg:px-24 xl:px-32 2xl:px-48 space-y-4">
                    <img src="/Experiments/Hyperbole/x0002.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                    <img src="/Experiments/Hyperbole/x0003.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                    <img src="/Experiments/Hyperbole/x0004.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                    <img src="/Experiments/Hyperbole/x0005.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                    <img src="/Experiments/Hyperbole/x0006.png" alt="A beer label for 2019's Parasite, with a digital illustration of a peach and a razor blade on a counter top.">
                </div>
            </template>
            <template #full>
                <ContentMediaWithCaption
                    title="Final Thoughts & Next Steps"
                >
                    <template #caption>
                        <p class="mb-4">There needs to be a medium between the two extremes of <span class="italic">all touchscreen</span> and <span class="italic">all physical</span>. Ford, for instance, introduced this IVI system in the Mach E. It has a physical knob embedded near the bottom edge of the screen, which is similar to the solution I explored but with the added expenses of a massive, complex, custom-shaped screen with integrated knob and additional, small screen.</p>
                        <p>This entire project got me extremely intrigued by HMI and the complexities of working within massive organizations and I would be very happy to continue exploring HMI solutions.</p>
                    </template>
                    <template #media>
                        <ImagePrimary
                            srcset-small="/Experiments/CarControls/3_Ford_MachE_Small.jpg"
                            srcset-medium="/Experiments/CarControls/3_Ford_MachE_Med.jpg"
                            srcset-large="/Experiments/CarControls/3_Ford_MachE_Crop.jpg"
                            alt-text="A photo of the dashboard of Ford's Mach-e SUV, showing the center touch screen which is punctuated with a knob control inset at the bottom of the screen."
                        />
                    </template>
                </ContentMediaWithCaption>
            </template>
        </OutroHighlightsExperiment> -->

        <!-- END OF THE PAGE -->
        <PreFooter :currentProjectId="'3'" :linksVisibility="[true, true, true, false]" class="relative"/>
        <FooterSection />
    </div>
</template>
  
<script>
    import projects from '~/Assets/projects.json';

    export default {
        name: 'CaseStudyProductPackaging',
        data() {
            // console.log("Imported animation data:", animationData);
            return {
                projects: require('~/Assets/projects.json'),
                bgColor: "bg-hyperbolePink",
                isConcise: true,
            };
        },
        head: {
        title: 'Max is Wright — User Research for Product Packaging',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: "Max's case study on an experiment to explore new avenues for car controls, combining attributes of physical (analogue) and touchscreen controls. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
            }
        ],
        },
        computed: {
            project() {
                const id = '0'
                // Find the project that matches the ID
                return projects.find(p => p.id === id) || {};
            }
        },
    }
</script>

<style>
</style>