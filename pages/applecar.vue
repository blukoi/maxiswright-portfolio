<template>
    <div>
      <CustomCursor />
      <NavBar />

      <!-- TITLE AND VISUAL -->
      <div class="fixed top-0 w-full h-50vh z-0">
        <div class="w-full h-20 bg-grayLightPrimary relative z-10"></div>
        <div class="w-full bg-grayLightPrimary">
            <div class="w-full bg-grayLightPrimary relative z-10">
                <div class="container mx-auto px-4 md:px-0 pt-20 pb-4">
                    <h1 class="font-title text-3xl gradient-applecar gradient-text">{{ project.title }} —</h1>
                </div>
            </div>
            <div class="w-full h-112 bg-grayDarkest flex z-0 relative">
                <VideoCover
                :videoSources="[
                    { src: '/Work/EV/0_MeterAutonomous_Full.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_1080.mp4', type: 'video/mp4' },
                    { src: '/Work/EV/0_MeterAutonomous_480.mp4', type: 'video/mp4' },
                    ]">
                </VideoCover>
            </div>
        </div>
      </div>
      <div class="w-full h-160 bg-transparent inline-block"></div>

      <!-- CASE STUDY INTRO -->
      <div class="w-full bg-grayLightPrimary relative z-20">
        <div class="container mx-auto px-4 md:px-0 pt-16 md:pt-32 pb-32">
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
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
            </div>
        </div>
      </div>

      <!-- HIGHLIGHTS -->

      <div class="w-full bg-white py-32 md:py-64 space-y-32 relative z-20">
        <div class="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-6 gap-x-16 gap-y-32">
            <div class="col-span-1 md:col-span-4 md:col-start-2 gradient-applecar rounded-md font-title text-2xl p-4 text-white space-y-8 mb-16 md:mb-32">
                <h1 class="w-full rounded-sm bg-white text-grayDarkest text-center">How might we...</h1>
                <p class="w-full pb-4 text-center">...design seamless automotive experiences which support Apple’s existing ecosystem?</p>
            </div>
            <div class="col-span-1 md:col-span-6 rounded-md md:rounded-none p-4 md:p-0 bg-grayLightPrimary md:bg-transparent grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
                <div class="col-span-1 order-2 md:order-1 pl-4 md:pl-0 space-y-8">
                    <h3 class="font-main font-bold text-sm uppercase">Extend Apple’s Current Design Philosophy</h3>
                    <p class="pl-0 md:pl-8 font-main text-sm">We tried to reflect Apple’s penchant for a seamless, thoughtful user experience. The dashboard utilizes MagSafe ports to enable owners to use whatever-sized screen they prefer, under the assumption that iPads would get MagSafe features at some point soon. We also worked hard to utilize Apple’s current visual design system as it’s in the process of evolving with their extension into wearable and VR spaces.</p>
                </div>
                <div class="col-span-1 md:col-span-2 col-start-1 md:col-start-2 order-1 md:order-2 rounded-sm md:rounded-md">
                    <ImagePrimary
                        srcset-small="/Work/EV/0_Cockpit_Full.png"
                        srcset-medium="/Work/EV/0_Cockpit_Med.png"
                        srcset-large="/Work/EV/0_Cockpit_Small.png"
                        alt-text="A mockup of the interior of an electric car, showing the dashboard with a prototype of newly designed screens."
                    />
                </div>
            </div>
        </div>
        <div class="w-full space-y-4">
            <div class="container mx-auto px-4 md:px-0">
                <div class="flex flex-row justify-between text-grayDarkest">
                    <h1 class="font-title text-xl">Highlights</h1>
                    <div class="h-6 w-6 flex justify-center items-center rounded-full">
                        <FontAwesomeIcon :icon="['fas', 'arrows-left-right']" class="text-sm" />
                    </div>
                </div>
            </div>
            <div class="container mx-auto px-4 md:px-0 relative">
                <div class="w-full overflow-x-auto relative pl-8">
                    <div class="relative bg-black rounded-md p-8 flex flex-nowrap justify-start space-x-64 block w-max mr-8 font-main text-sm text-grayLightPrimary">
                        <div class="space-y-16">
                            <div class="h-160 w-120 flex flex-col justify-center">
                                <VideoPlayer
                                :videoSources="[
                                    { src: '/Work/EV/0_SeamlessTransitionFull.mp4', type: 'video/mp4' },
                                    { src: '/Work/EV/0_SeamlessTransition1080.mp4', type: 'video/mp4' },
                                    { src: '/Work/EV/0_SeamlessTransition480.mp4', type: 'video/mp4' }
                                    ]">
                                </VideoPlayer>
                            </div>
                            <div class="w-96 shrink-0 inline-block space-y-4">
                                <h3 class="text-white font-bold uppercase">Seamless Transitions Between Devices</h3>
                                <p>We wanted to continue Apple’s penchant for supporting an interconnected ecosystem within their product line so that your Apple Car would connect with the rest of your Apple products. Your music, phone calls, GPS, and more would seamlessly transition to your Apple Car media screens (and vice versa) so you can keep moving.</p>
                            </div>
                        </div>


                        <div class="space-y-16">
                            <div class="h-160 w-64 flex flex-col justify-center">
                                <VideoSmall
                                :videoSources="[
                                    { src: '/Work/EV/0_PassengerID.mp4', type: 'video/mp4' }
                                    ]">
                                </VideoSmall>
                            </div>
                            <div class="w-96 shrink-0 inline-block space-y-4">
                                <h3 class="text-white font-bold uppercase">Passenger ID</h3>
                                <p>To extend the Apple Wallet and Apple ID, you can now make a Passenger ID which remembers your preferred climate and seat position. When entering a new Apple Car or other participating vehicle you can connect your Passenger ID and the car will accommodate your preferences.</p>
                                <p>You can also create different presets to easily adjust for different situations, such as when you need a nap or if it’s colder than usual.</p>
                            </div>
                        </div>


                        <div class="space-y-16">
                            <div class="h-160 w-120 flex flex-col justify-center">
                                <ImageSmall
                                    srcset-small="/Work/EV/0_ARVR_Full.png"
                                    srcset-medium="/Work/EV/0_ARVR_Med.png"
                                    srcset-large="/Work/EV/0_ARVR_Small.png"
                                    alt-text="A mockup of the interior of a car while sitting in the driver's seat; the driver is using AR glasses and using an AR menu hovering in the air in front of them."
                                />
                            </div>
                            <div class="w-96 shrink-0 inline-block space-y-4">
                                <h3 class="text-white font-bold uppercase">Spatial Computing</h3>
                                <p>More than simply adding AR/VR to the driving experience, we wanted to integrate spatial computing so that AR information appears seamlessly within your surroundings in the cockpit. Some menus adhere to physical surfaces for tactile feedback, and other elements intelligently move so they don’t cover necessities like the meter or streetview.</p>
                            </div>
                        </div>


                        <div class="space-y-16">
                            <div class="h-160 w-120 flex flex-col justify-center">
                                <ImageSmall
                                    srcset-small="/Work/EV/0_ThirdSpace_Full.png"
                                    srcset-medium="/Work/EV/0_ThirdSpace_Med.png"
                                    srcset-large="/Work/EV/0_ThirdSpace_Small.png"
                                    alt-text="A prototype of a dashboard center screen using an app to order a delivery with the car as the delivery option."
                                />
                            </div>
                            <div class="w-96 shrink-0 inline-block space-y-4">
                                <h3 class="text-white font-bold uppercase">Enforcing the “Third Space”</h3>
                                <p>Your home and workspace are very often personalized to your needs and self expression. Even though people spend a lot of time in their car, effectively their “third space”, they don’t often personalize these spaces. To enforce that your car is a personal space, some apps will be integrated into the onboard apps for things like using your car as a delivery option when you’re not at home.</p>
                            </div>
                        </div>


                        <div class="space-y-16">
                            <div class="h-160 w-120 flex flex-col justify-center">
                                <VideoPlayer
                                :videoSources="[
                                    { src: '/Work/EV/0_MeterAutonomousFull.mp4', type: 'video/mp4' },
                                    { src: '/Work/EV/0_MeterAutonomous1080.mp4', type: 'video/mp4' },
                                    { src: '/Work/EV/0_MeterAutonomous480.mp4', type: 'video/mp4' }
                                    ]">
                                </VideoPlayer>
                            </div>
                            <div class="w-96 shrink-0 inline-block space-y-4">
                                <h3 class="text-white font-bold uppercase">Using Color to Highlight Autonomous Driving Features</h3>
                                <p>Apple, like many large technology companies (but not many car companies), uses highlight colors for important information. We continued that trend by using an Autonomous Violet as the indicator of autonomous driving mode and related features.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-full absolute top-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                <div class="h-full absolute top-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            </div>
        </div>
      </div>
      <div class="bg-grayMiddle h-10 relative"></div>

      <PreFooter :currentProjectId="'2'" :linksVisibility="[true, true, true, false]" class="relative"/>
      <FooterSection />
    </div>
  </template>
  
  <script>
    import projects from '~/Assets/projects.json';

    export default {
    name: 'CaseStudyAppleCar',
    data() {
        return {
        projects: require('~/Assets/projects.json'),
        isConcise: true
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
        // Get the ID from the URL
        const id = '1'
        // Find the project that matches the ID
        return projects.find(p => p.id === id) || {};
        }
    },
  }
  </script>
  
  <style>
  </style>