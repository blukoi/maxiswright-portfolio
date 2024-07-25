<template>
    <div>
        <CustomCursor />
        <NavBar />

        <!-- TITLE AND VISUAL -->
        <IntroTitle :bgColor="bgColor">
            <template #title>{{ project.title }} —</template>
            <template #media>
                <VideoCover
                :videoSources="[
                    { src: '/Work/EV/0_MeterAutonomous_Full.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_1080.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_480.mp4', type: 'video/mp4' },
                    ]">
                </VideoCover>
            </template>
        </IntroTitle>

        <!-- CASE STUDY INTRO -->
        <IntroStructure>
            <IntroWork :showDisclaimer="true">
                <template #project>
                    The 2035 Apple Car: imagining evolved experiences for next-gen electric vehicles
                </template>
                <template #direction>
                    How might we design seamless automotive experiences which support Apple’s existing ecosystem?
                </template>
                <template #disclaimer>
                    <span class="italic">This project is a conceptual design exercise and is not officially affiliated with or endorsed by Apple Inc. In addition, myself and my team are not employed by, or affiliated with, Apple Inc. All trademarks and copyrights are the property of their respective owners. Any images used are displayed for illustrative and/or research purposes.</span>
                </template>
                <template #info>
                    <CopyPills 
                        section-name="Info"
                        :items="['Automotive UX', '9 Weeks', 'October - December 2023', '5 Team Members']">
                    </CopyPills>
                </template>
                <template #tools>
                    <CopyPills 
                        section-name="Tools"
                        :items="['Miro', 'Figma', 'SolidWorks', 'KeyShot', 'Adobe Premiere', 'Adobe Audition', 'ElevenLabs']">
                    </CopyPills>
                </template>
                <template #concise>
                    <ConciseSwitch v-model="isConcise"></ConciseSwitch>
                </template>
            </IntroWork>

            <IntroOverview v-if="!isConcise">
                <template #challenges>
                    <ul class="list-disc list-outside pl-4 space-y-4">
                        <li>Because Apple is a technology company, rather than a car company, there was not a lot of existing design language in the context of a vehicle (other than CarPlay) in the same way that companies like Ford or BMW would have existing design & UI patterns. We had to look at how Apple approaches new technologies, like VR, to create updated brand-appropriate UI and prototypes.</li>
                        <li>We faced significant pressure to imagine experiences for future technologies which was a little difficult for us. Given Apple's reputation for innovation, rather than creating entirely new technologies, we focused on enhancing seamless user experiences with a strong emphasis on human factors.</li>
                    </ul>
                </template>
                <template #concept>
                    <p>Our concept for the Apple Car involves multiple explorations. Among them are seamless transitions between your devices and your vehicle, exploring visual design language and UX for meter design involving autonomous driving, integrating apps in media screens to help enforce your personal vehicle as a “third space”, and exploring practical uses of integrated AR/VR within your personal vehicle. To bolster all of these concepts, we also created a rough interior model for the dashboard, windshield, center console, and steering wheel to give us a better spatial understanding of the cockpit. All together, this created a unified concept of our vision for a 2035 Apple Car, nicknamed Apple Vulcan.</p>
                </template>
                <template #role>
                    <p>We did all of our preparatory work, including research, concept development, and storyboarding, as a team. As we refined our concepts we had more defined individual roles.</p>
                    <p>I was responsible for iterating and creating the high fidelity prototype for one of our concepts (seamlessly transitioning devices when entering or exiting an EV), writing the script for the animatic video, recording and editing all of the dialogue, and some smaller duties.</p>
                    <p class="italic">Any overview will detail the entire concept as created by the team. For in-depth prototype information, I will only be detailing the work I personally did on a singular concept (seamless transition into the car). You can see the full credits at the end and visit my teammates’ websites if you’d like more information about the other concepts we worked on.</p>
                </template>
                <template #process>
                    <p>We started by personally analyzing vehicles to better understand current trends in automotive UX design. Next, we dived into brand research, exploring Apple’s current vision and customer experience, creating a mind map for future expansion, then came up with a new brand strategy and persona. We used a lotus blossom exercise to come up with a variety of concept iterations quickly, then made multiple scenarios and storyboards to contextualize our concepts. Finally, we created high fidelity prototypes and an animated video to act simultaneously as a promotional video and explainer.</p>
                    <PillsAlone :items="['Primary Research', 'Product Analysis', 'Heuristic Analysis', 'Brand Research', 'Comparative Analysis', 'Mind Map', 'Brand Strategy', 'Conceptualization', 'Iteration', 'Beat Board', 'Storyboard', 'Prototyping', 'Animatic']"></PillsAlone>
                </template>
            </IntroOverview>
        </IntroStructure>

        <!-- INTRO HIGHLIGHTS -->

        <!-- HOW MIGHT WE & HERO IMAGE -->
        <IntroHowMightWe
            how="How might we..."
            direction="...design seamless automotive experiences which support Apple’s existing ecosystem?"
            title="Extend Apple’s Current Design Philosophy"
            :bgColor="bgColor"
        >
            <template #caption>
                <p class="pl-0 md:pl-8 font-main text-sm">We tried to reflect Apple’s penchant for a seamless, thoughtful user experience. The dashboard utilizes MagSafe ports to enable owners to use whatever-sized screen they prefer, under the assumption that iPads would get MagSafe features at some point soon. We also worked hard to utilize Apple’s current visual design system as it’s in the process of evolving with their extension into wearable and VR spaces.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Work/EV/0_Cockpit_Small.png"
                    srcset-medium="/Work/EV/0_Cockpit_Med.png"
                    srcset-large="/Work/EV/0_Cockpit_Full.png"
                    alt-text="A mockup of the interior of an electric car, showing the dashboard with a prototype of newly designed screens."
                />
            </template>
        </IntroHowMightWe>

        <!-- SIDE SCROLLER WITH FEATURE CALL-OUTS -->
        <IntroHighlights 
            title="Highlights"
        >

            <!-- SCROLLER CONTENT START -->

            <ScrollerVideo
                :videoSources="[
                    { src: '/Work/EV/0_SeamlessTransitionFull.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_SeamlessTransition1080.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_SeamlessTransition480.mp4', type: 'video/mp4' },
                ]"
                title="Seamless Transitions Between Devices"
                videoParent="h-80 w-60 md:h-128 md:w-120"
            >
                <template #caption>
                    <p>We wanted to continue Apple’s penchant for supporting an interconnected ecosystem within their product line so that your Apple Car would connect with the rest of your Apple products. Your music, phone calls, GPS, and more would seamlessly transition to your Apple Car media screens (and vice versa) so you can keep moving.</p>
                </template>
            </ScrollerVideo>


            <ScrollerVideo
                :videoSources="[
                    { src: '/Work/EV/0_PassengerID.mp4', type: 'video/mp4' }
                ]"
                title="Passenger ID"
                videoParent="h-80 w-32 md:h-128 md:w-64"
            >
                <template #caption>
                    <p>To extend the Apple Wallet and Apple ID, you can now make a Passenger ID which remembers your preferred climate and seat position. When entering a new Apple Car or other participating vehicle you can connect your Passenger ID and the car will accommodate your preferences.</p>
                    <p>You can also create different presets to easily adjust for different situations, such as when you need a nap or if it’s colder than usual.</p>
                </template>
            </ScrollerVideo>


            <ScrollerImage
                :srcset = "{
                    small: '/Work/EV/0_ARVR_Small.png',
                    medium: '/Work/EV/0_ARVR_Med.png',
                    large: '/Work/EV/0_ARVR_Full.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="Spatial Computing" 
                alt-text="A mockup of the interior of a car while sitting in the driver's seat; the driver is using AR glasses and using an AR menu hovering in the air in front of them." 
                imageParent="h-80 md:h-128 w-60 md:w-120" 
            >
                <template #caption>
                    <p>More than simply adding AR/VR to the driving experience, we wanted to integrate spatial computing so that AR information appears seamlessly within your surroundings in the cockpit. Some menus adhere to physical surfaces for tactile feedback, and other elements intelligently move so they don’t cover necessities like the meter or streetview.</p>
                </template>
            </ScrollerImage>


            <ScrollerImage
                :srcset = "{
                    small: '/Work/EV/0_ThirdSpace_Small.png',
                    medium: '/Work/EV/0_ThirdSpace_Med.png',
                    large: '/Work/EV/0_ThirdSpace_Full.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="Enforcing the “Third Space”" 
                alt-text="A prototype of a dashboard center screen using an app to order a delivery with the car as the delivery option." 
                imageParent="h-80 md:h-128 w-60 md:w-120" 
            >
                <template #caption>
                    <p>Your home and workspace are very often personalized to your needs and self expression. Even though people spend a lot of time in their car, effectively their “third space”, they don’t often personalize these spaces. To enforce that your car is a personal space, some apps will be integrated into the onboard apps for things like using your car as a delivery option when you’re not at home.</p>
                </template>
            </ScrollerImage>


            <ScrollerVideo
            :videoSources="[
                    { src: '/Work/EV/0_MeterAutonomous_Full.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_1080.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_480.mp4', type: 'video/mp4' }
                ]"
                title="Using Color to Highlight Autonomous Driving Features"
                videoParent="h-80 w-60 md:h-128 md:w-120"
            >
                <template #caption>
                    <p>Apple, like many large technology companies (but not many car companies), uses highlight colors for important information. We continued that trend by using an Autonomous Violet as the indicator of autonomous driving mode and related features.</p>
                </template>
            </ScrollerVideo>


            <!-- SCROLLER CONTENT END -->


        </IntroHighlights>

        <!-- PROCESS CONTENT -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Vehicle Analysis"
            iconPack="fas"
            iconName="car"
            :visibilityMode="1"
            headerRef="1"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <ProcessPrimary
            :bgColor="bgColor"
            title="Brand Research"
            iconPack="fab"
            iconName="apple"
            :visibilityMode="1"
            headerRef="2"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <ProcessPrimary
            :bgColor="bgColor"
            title="Conceptualization"
            iconPack="fas"
            iconName="pencil"
            :visibilityMode="1"
            headerRef="3"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <ProcessPrimary
            :bgColor="bgColor"
            title="Research & Prep"
            iconPack="fas"
            iconName="arrows-to-circle"
            :visibilityMode="1"
            headerRef="4"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <ProcessPrimary
            :bgColor="bgColor"
            title="Prototyping"
            iconPack="fas"
            iconName="pen-to-square"
            :visibilityMode="1"
            headerRef="5"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <ProcessPrimary
            :bgColor="bgColor"
            title="Visual Storytelling"
            iconPack="fas"
            iconName="video"
            :visibilityMode="1"
            headerRef="6"
            :isConcise="isConcise"
        ></ProcessPrimary>

        <!-- OUTRO BEGINNING -->
        <OutroHighlightsWork :bgColor="bgColor">
            <template #central>
                <div class="w-full space-y-64">
                    <LottieParent bgColor="bg-applecarBlue" :animation-data="animationData"></LottieParent>
                    <VideoPlayerControlled 
                        :autoplay=false 
                        :loop=false 
                        :muted=false 
                        :controls=true
                        roundedLvl="rounded-md" 
                        :videoSources="[
                            { src: '/Work/EV/x_AppleVulcan_1080.mp4', type: 'video/mp4' },
                            { src: '/Work/EV/x_AppleVulcan_720.mp4', type: 'video/mp4' },
                            { src: '/Work/EV/x_AppleVulcan_480.mp4', type: 'video/mp4' }
                        ]">
                    </VideoPlayerControlled>
                </div>
            </template>
            <template #full>
                <ContentMediaWithCaption
                    title="Final Thoughts & Next Steps"
                >
                    <template #caption>
                        <p class="mb-4">Our original brief was to design for 2035. To be perfectly honest, we found it incredibly difficult to design for a release 10 years from now. Although we understand that the development timeline for cars is around 5 years, has so many moving parts, and can constantly change considerations, it’s completely atypical for most product/UX/UI design timelines. To be honest, it’s something that I would be really eager to explore more, simply because of the differences to other development pipelines.</p>
                        <p>Regarding the design, we kept it a little closer to current design trends and features than will probably be in use in 2035. There are also a lot of aspects we wanted to keep iterating on, like more versions of the center screen’s Tab Bar, adding an information bar for things like battery info and range, utilizing secondary screens (e.g. a docked phone) as a controller for quick app access, and more. Some of my teammates decided to continue working on the project afterwards and you can see that on their respective websites.</p>
                    </template>
                    <template #media>
                        <ImagePrimary
                            srcset-small="/Work/EV/0_Cockpit_Small.png"
                            srcset-medium="/Work/EV/0_Cockpit_Med.png"
                            srcset-large="/Work/EV/0_Cockpit_Full.png"
                            alt-text="A mockup of the interior of an electric car, showing the dashboard with a prototype of newly designed screens."
                        />
                    </template>
                </ContentMediaWithCaption>
            </template>
        </OutroHighlightsWork>

        <!-- TEAM CREDITS -->
        <OutroCredits 
            title="Team (alphabetically)"
        >
            <ScrollerSmallCard title="Together:">
                <template #content>
                    <PillsPrimary :tags="['Persona', 'Empathy Map', 'Ideation', 'Journey Map', ' Concept Development', 'Rough Storyboard', 'Story Refinement', 'Design System (Rough)', 'Concept Refinement']"></PillsPrimary>
                </template>
            </ScrollerSmallCard>
            <ScrollerSmallCard title="Yifan Ding:">
                <template #content>
                    <PillsPrimary :tags="['Animatic Scene 1', '3D Modeling', '3D Rendering', 'Figma Prototype', 'Concept: Autonomous Driving Mode']"></PillsPrimary>
                    <ButtonDarkExternal 
                        link="https://www.yifanding.me/"
                        label="Visit Website"
                    ></ButtonDarkExternal>
                </template>
            </ScrollerSmallCard>
            <ScrollerSmallCard title="Mario Santanilla:">
                <template #content>
                    <PillsPrimary :tags="['Visual Storyboarding', 'Animatic Scene 3', 'Video Editing', 'Sound Effects', 'Third Space App Integration', 'Music']"></PillsPrimary>
                    <ButtonDarkExternal 
                        link="https://www.mariosantanilla.com/"
                        label="Visit Website"
                    ></ButtonDarkExternal>
                </template>
            </ScrollerSmallCard>
            <ScrollerSmallCard title="Max Wright (Me):">
                <template #content>
                    <PillsPrimary :tags="['Animatic Script', 'Dialogue', 'Sound Effects', 'Concept: Transitioning into the car', 'Slide Deck']"></PillsPrimary>
                </template>
            </ScrollerSmallCard>
            <ScrollerSmallCard title="Shiya Wu:">
                <template #content>
                    <PillsPrimary :tags="['Animatic Scene 4', 'Design System (Refinement)', 'Design System Consistency', 'Concept: Passenger ID', 'Music', 'Slide Deck']"></PillsPrimary>
                    <ButtonDarkExternal 
                        link="https://shiyawu.space/"
                        label="Visit Website"
                    ></ButtonDarkExternal>
                </template>
            </ScrollerSmallCard>
            <ScrollerSmallCard title="Yue Xi:">
                <template #content>
                    <PillsPrimary :tags="['Animatic Scene 2', 'Sound Effects', 'Figma Prototype', 'Concept: AR/MR Experience', 'Integrating Prototypes Together']"></PillsPrimary>
                    <ButtonDarkExternal 
                        link="https://www.yuexi.space/"
                        label="Visit Website"
                    ></ButtonDarkExternal>
                </template>
            </ScrollerSmallCard>
        </OutroCredits>

        <!-- END OF THE PAGE -->
        <PreFooter :currentProjectId="'2'" :linksVisibility="[true, true, true, false]" class="relative"/>
        <FooterSection />
    </div>
</template>
  
<script>
    import projects from '~/Assets/projects.json';
    import animationData from '~/Assets/animations/AppleEV_SampleLogo.json';

    export default {
        name: 'CaseStudyAppleCar',
        data() {
            // console.log("Imported animation data:", animationData);
            return {
                projects: require('~/Assets/projects.json'),
                isConcise: true,
                bgColor: "gradient-applecar",
                animationData
            };
        },
        head: {
        title: 'Max is Wright — Apple Car Case Study',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: "Max's case study on a concept for the Apple Car. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
            }
        ],
        },
        computed: {
            project() {
                const id = '1'
                // Find the project that matches the ID
                return projects.find(p => p.id === id) || {};
            }
        },
    }
</script>

<style>
</style>