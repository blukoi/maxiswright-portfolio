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
                        srcsetLarge="/Experiments/CarControls/0_Background_Full.png"
                        srcsetMedium="/Experiments/CarControls/0_Background_Med.png"
                        srcsetSmall="/Experiments/CarControls/0_Background_Small.png"
                        altText="A mockup of a modern car dashboard with a singular large touchscreen in the center; below the screen are 2 knobs but the center of each knob is also a touchscreen."
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
                    :items="['Automotive UX', 'Role: UX Designer', '2 Weeks', 'October 2023', 'Solo Project']">
                </PillsAlone>
            </template>
            <template #tools>
                <PillsAlone 
                    :items="['ProCreate', 'Figma']">
                </PillsAlone>
            </template>
        </IntroTitle>

        <!-- CASE STUDY INTRO -->
        <IntroStructure :showDisclaimer="false">
            <template #overview>
                <p class="mb-4">A brief project exploring how to improve the relationship that drivers have with their car through a combination of both touchscreen and physical controls, rather than the preferred method of replacing physical controls as much as possible by housing everything in a touchscreen.</p>
            </template>
            <template #problem>
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
            </template>
        </IntroStructure>

        <!-- INTRO HIGHLIGHTS -->

        <!-- HOW MIGHT WE & HERO IMAGE -->
        <IntroHowMightWe
            how="Core focus"
            direction="Goal: explore ways that physical controls can be combined with touchscreens to consolidate and centralize interactions"
            title="The problem with touchscreens"
            :bgColor="bgColor"
        >
            <template #caption>
                <p class="pl-0 font-main text-sm">A growing number of vehicles have looked for ways to reduce costs, understandably. One such ethos reduces the complexity of a typical dashboard as much as possible by removing all of the physical controls; some manufacturers have even gone as far as removing the entire gauge cluster from behind the steering wheel. All of those controls and displays are then housed in one or more touchscreens.</p>
                <p class="pl-0 pt-4 font-main text-sm">Not only can this be dangerous, its also slower to navigate through layers of controls, even more so while driving, and introduces other problems. Some touchscreens have issues with multi-touch interactions, and designing singular screens to be interactive for 2 people at once (like a driver and passenger) introduces even more room for mistakes.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Experiments/CarControls/0_Problem.jpg"
                    srcset-medium="/Experiments/CarControls/0_Problem.jpg"
                    srcset-large="/Experiments/CarControls/0_Problem.jpg"
                    alt-text="A mockup of a 2017 Tesla Model 3 interior, showing the entire dashboard. To the left is the steering wheel, in the center is a large touchscreen, but there's no other controls or displays, not even a speedometer gauge."
                />
                <p class="pl-4 md:pl-8 font-main text-xs text-grayMiddle">©Reuters 2017</p>
            </template>
        </IntroHowMightWe>

        <!-- PROCESS CONTENT -->
        <!-- 1. Concept & Feedback -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Concept & Feedback"
            iconPack="fas"
            iconName="lightbulb"
            totalProcess="2"
            headerRef="1"
        >
            <!-- <ContentBlurb>
                <p>When learning about automotive UX, one of my first inclinations was to try to figure out a better solution than a singular touch screen to house the myriad of controls normally arrayed on the dashboard. Since the driving force behind this shift is the cost savings from not having to manufacturer all of the controls, knobs, sliders, and the extensive electric systems to connect them all, the solution should be as minimal as possible while still allowing for multiple types of control and interactions.</p>
            </ContentBlurb> -->

            <!-- INITIAL SKETCH -->
            <ContentMediaWithCaption
                title="Initial Sketch"
            >
                <template #caption>
                    <p>The first sketch that seemed interesting was to use 1-2 multi-use dials next to the screen, the idea being that you would select a parameter, such as temperature or seat inclination, from the main touch screen and then use the dial to adjust the setting.</p>
                </template>
                <template #media>
                    <ImagePrimary
                        srcset-small="/Experiments/CarControls/1_Sketch_Small.png"
                        srcset-medium="/Experiments/CarControls/1_Sketch_Med.png"
                        srcset-large="/Experiments/CarControls/1_Sketch.png"
                        alt-text="A rough sketch of the dashboard and center console of a car, showing the center touch screen and two knobs underneath it"
                        additionalStyles="md:px-16 lg:px-32 xl:px-40"
                    />
                </template>
            </ContentMediaWithCaption>

            <!-- ROUGH WIREFRAMES -->
            <ContentCaptionWithCustom
                title="Wireframing Feedback"
            >
                <template #caption>
                    <!-- <p>I showed this series of low-fidelity sketches and flows to some of my associates and, among other conversations (about Google’s Nest thermostat, for instance) got this feedback.</p> -->
                </template>
                <template #custom>
                    <ContentMediaWithThumbs>
                        <template #thumbs>
                            <ThumbNotation 
                                :colorOptions="['text-white', bgColor]" 
                                iconPack="fas" 
                                iconName="1" 
                                textStyles="italic"
                            >
                                “Are these touch screen or will they be controlled only by rotating and clicking the dial?”
                            </ThumbNotation>
                            <ThumbNotation 
                                :colorOptions="['text-white', bgColor]" 
                                iconPack="fas" 
                                iconName="2" 
                                textStyles="italic"
                            >
                                “The dials should have a preview of all of the available options, instead of focusing on one at a time, so its easier for users to get to the one they want to change.”
                            </ThumbNotation>
                        </template>
                        <template #media>
                            <div class="bg-grayDarker">
                                <ImagePrimary 
                                    srcsetLarge="/Experiments/CarControls/1_LowFidelity.png"
                                    srcsetMedium="/Experiments/CarControls/1_LowFidelity_Med.png"
                                    srcsetSmall="/Experiments/CarControls/1_LowFidelity_Small.png"
                                    altText="2 frames from a sketched prototype showing the touchscreens and knobs being used in succession"
                                />
                            </div>
                        </template>
                    </ContentMediaWithThumbs>
                </template>
            </ContentCaptionWithCustom>

        </ProcessPrimary>

        <!-- 2. Prototyping -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Prototyping"
            iconPack="fas"
            iconName="pen-to-square"
            totalProcess="2"
            headerRef="2"
        >
            <!-- <ContentBlurb>
                <p>I moved to a connected prototype in about a week, incorporating the feedback I’d received from my sketches.</p>
            </ContentBlurb> -->

            <!-- TESTING FLOWS -->
            <ContentCaptionWithCustom
                title="Testing Feedback"
            >
                <template #caption>
                    <!-- <p>Staying in low fidelity, I was able to quickly flesh out a prototype with some basic user flows to test whether or not the concept can be useful. These are the main pieces of feedback I received.</p> -->
                </template>
                <template #custom>
                    <ContentMediaWithThumbs>
                        <template #thumbs>
                            <ThumbNotation 
                                :colorOptions="['text-white', bgColor]" 
                                iconPack="fas" 
                                iconName="1" 
                                textStyles="italic"
                            >
                                “Does the selected category have to apply to both dials? If one person selects “Seating” then the other person can’t adjust their A/C. Would it be better to have individual controls?”
                            </ThumbNotation>
                            <ThumbNotation 
                                :colorOptions="['text-white', bgColor]" 
                                iconPack="fas" 
                                iconName="2" 
                                textStyles="italic"
                            >
                                “Is this the default screen, with multiple options? It might be better to have one default setting, like temperature, so you don’t have to always go through multiple steps to change it when you get in the car.”
                            </ThumbNotation>
                        </template>
                        <template #media>
                            <div class="bg-grayDarker">
                                <ImagePrimary 
                                    srcsetLarge="/Experiments/CarControls/2_Iteration_Full.png"
                                    srcsetMedium="/Experiments/CarControls/2_Iteration_Med.png"
                                    srcsetSmall="/Experiments/CarControls/2_Iteration_Small.png"
                                    altText="A text-based storyboard breaking down the story into four individual scenes with each important `beat` listed"
                                />
                            </div>
                        </template>
                    </ContentMediaWithThumbs>
                </template>
            </ContentCaptionWithCustom>

            <!-- REFINED -->
            <ContentMediaWithCaption
                title="Refined"
            >
                <template #caption>
                    <p class="mb-4">I created a default screen with the idea that your preferred default would be selectable in Settings. There’s also individual controls for each seat so that each knob can be in different categories, unlike the previous prototype.</p>
                    <p>Since the turning ring of the knob can be pressed inward to make selections, I realized it shouldn’t be too difficult (hardware-wise) to pull it outward for another control. This provides more navigation opportunities to go forward and backward through layers.</p>
                </template>
                <template #media>
                    <div class="bg-grayDarker">
                        <ImagePrimary 
                            srcsetLarge="/Experiments/CarControls/2_Refined_Full.png"
                            srcsetMedium="/Experiments/CarControls/2_Refined_Med.png"
                            srcsetSmall="/Experiments/CarControls/2_Refined_Small.png"
                            altText="A higher fidelity prototype with some refined visuals, showing default screens for the knobs and separated controls to make interaction easier for multiple passengers"
                        />
                    </div>
                </template>
            </ContentMediaWithCaption>
        </ProcessPrimary>

        <!-- OUTRO BEGINNING -->
        <OutroHighlightsExperiment :bgColor="bgColor">
            <template #central>
                <VideoPlayer
                :videoSources="[
                    { src: '/Experiments/CarControls/0_Animated_Full.mp4', type: 'video/mp4' },
                    { src: '/Experiments/CarControls/0_Animated_720.mp4', type: 'video/mp4' },
                    { src: '/Experiments/CarControls/0_Animated_480.mp4', type: 'video/mp4' }
                    ]">
                </VideoPlayer>
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
        </OutroHighlightsExperiment>

        <!-- END OF THE PAGE -->
        <PreFooter :currentProjectId="'3'" :linksVisibility="[true, true, true, false]" class="relative"/>
        <FooterSection />
    </div>
</template>
  
<script>
    import projects from '~/Assets/projects.json';

    export default {
        name: 'CaseStudyCarControls',
        data() {
            // console.log("Imported animation data:", animationData);
            return {
                projects: require('~/Assets/projects.json'),
                bgColor: "bg-highlightCarControls",
                isConcise: true,
            };
        },
        head: {
        title: 'Max is Wright — Rethinking Physical Car Controls',
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
                const id = '2'
                // Find the project that matches the ID
                return projects.find(p => p.id === id) || {};
            }
        },
    }
</script>

<style>
</style>