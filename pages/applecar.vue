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
        <!-- 1. Vehicle Analysis -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Vehicle Analysis"
            iconPack="fas"
            iconName="car"
            :visibilityMode="1"
            headerRef="1"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>As a team we analyzed 12 different vehicles, including a second, closer inspection of one of them. We took our time investigating each car, inside and out, documenting positives, negatives, and taking notes without a particular goal in mind.</p>
                <p>We really just wanted to see the different perspectives of each manufacturer and how they approach problems, their priorities (and what that means for customer experiences), the use of materials, etc.</p>
            </ContentBlurb>

            <ContentScroller
                title="All 13 Analyses"
            >
                <!-- 1 Acura -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_01_Acura_MDX_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_01_Acura_MDX_Med.jpg',
                        large: '/Work/EV/1_Cars/0_01_Acura_MDX.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="1. Acura MDX" 
                    alt-text="A journal space with notes and observations about an Acura SUV" 
                    imageParent="h-64 md:h-96 w-96 md:w-120" 
                >
                    <template #caption>
                        <p>A nice, somewhat plain SUV that’s trying to play with newer technologies and digital experiences but still a few years behind trends, like still including a track-pad in the center console to interact with the infotainment screen. This could indicate a slightly older audience who’s more wary of things like a touch screen in their car.</p>
                    </template>
                </ScrollerImage>
                <!-- 2 Tesla -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_02_Tesla_Model3_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_02_Tesla_Model3_Med.jpg',
                        large: '/Work/EV/1_Cars/0_02_Tesla_Model3.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="2. Tesla Model 3" 
                    alt-text="A journal space with notes and observations about a Tesla sedan" 
                    imageParent="h-64 md:h-96 w-96 md:w-120" 
                >
                    <template #caption>
                        <p>A barebones sedan that tries very hard to nix as many physical controls as possible, putting almost everything into a singular touch screen in the center of the dashboard. That includes the driver’s gauge cluster. The result is almost like a preoccupation with new technology.</p>
                    </template>
                </ScrollerImage>
                <!-- 3 BMW -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_03_BMW_X7_xDrive_40i_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_03_BMW_X7_xDrive_40i_Med.jpg',
                        large: '/Work/EV/1_Cars/0_03_BMW_X7_xDrive_40i.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="3. BMW X7 Xdrive 40i" 
                    alt-text="A journal space with notes and observations about a BMW SUV" 
                    imageParent="h-64 md:h-96 w-112 md:w-160" 
                >
                    <template #caption>
                        <p>A luxury SUV that’s trying to do everything but overdoes some ideas and undercooks others, like the surprisingly small center screen. BMW tries to maintain it’s classic car-building perspective by prioritizing physical controls with a plethora of buttons, toggles, and switches throughout the entire vehicle. It can be a little overwhelming.</p>
                    </template>
                </ScrollerImage>
                <!-- 4 Polestar -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_04_Polestar_2_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_04_Polestar_2_Med.jpg',
                        large: '/Work/EV/1_Cars/0_04_Polestar_2.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="4. Polestar 2" 
                    alt-text="A journal space with notes and observations about a Polestar crossover" 
                    imageParent="h-64 md:h-96 w-112 md:w-160" 
                >
                    <template #caption>
                        <p>A very sleek crossover that’s trying to be advanced. However, some of the features which, at first glance, seem very thoughtful and new actually force considerations to accommodate them. For instance, the entire roof is actually a singular moonroof and, to accommodate that, the B-pillars are extremely thick, making visibility difficult.</p>
                    </template>
                </ScrollerImage>
                <!-- 5 Ford -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_05_Ford_Mach_E_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_05_Ford_Mach_E_Med.jpg',
                        large: '/Work/EV/1_Cars/0_05_Ford_Mach_E.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="5. Ford Mach-e" 
                    alt-text="A journal space with notes and observations about a Ford SUV" 
                    imageParent="h-64 md:h-96 w-80 md:w-120" 
                >
                    <template #caption>
                        <p>An updated SUV that’s, surprisingly, trying to do a lot of new, considerate things but isn’t exploring any new territory. Like the foot sensor to open the trunk, Ford is mostly recycling current trends while still making some blunders, like not having handles for the rear doors.</p>
                    </template>
                </ScrollerImage>
                <!-- 6 Mercedes -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_06_Mercedes_EQS_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_06_Mercedes_EQS_Med.jpg',
                        large: '/Work/EV/1_Cars/0_06_Mercedes_EQS.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="6. Mercedes-Benz EQS" 
                    alt-text="A journal space with notes and observations about a Mercedes sedan" 
                    imageParent="h-64 md:h-96 w-96 md:w-128" 
                >
                    <template #caption>
                        <p>Marketed as a “fully electric, luxury sedan” but perhaps the least considerate and most poorly designed car that we looked at. An interior with glossy plastic throughout, LED lighting everywhere they could think of, and a general disconnect between the designers and the audience.</p>
                    </template>
                </ScrollerImage>
                <!-- 7 Porsche -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_07_Porsche_Taycan_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_07_Porsche_Taycan_Med.jpg',
                        large: '/Work/EV/1_Cars/0_07_Porsche_Taycan.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="7. Porsche Taycan" 
                    alt-text="A journal space with notes and observations about a Porsche sports sedan" 
                    imageParent="h-64 md:h-96 w-96 md:w-128" 
                >
                    <template #caption>
                        <p>A beautifully styled, sport sedan with a lot of advanced features. Overall, the design of the car masterfully incorporates new experiences, from the fully digital dashboard to the electronically controlled air vents, without losing sight of the brand’s classic design cues or their audience’s tastes and preferences.</p>
                    </template>
                </ScrollerImage>
                <!-- 8 VW -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_08_Volkswagen_ID4_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_08_Volkswagen_ID4_Med.jpg',
                        large: '/Work/EV/1_Cars/0_08_Volkswagen_ID4.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="8. Volkswagen ID4" 
                    alt-text="A journal space with notes and observations about a small Volkswagen SUV" 
                    imageParent="h-64 md:h-96 w-80 md:w-112" 
                >
                    <template #caption>
                        <p>A spacious, budget-friendly SUV that’s a little more on the basic side. It experiments with some new features, like a strip of lights running along the entire lower edge of the interior of the windshield to provide different kinds of feedback to the driver. There are also some clear miscues, like door lights to illuminate the ground but angled so they can’t be seen from inside and don’t turn on until the door opens.</p>
                    </template>
                </ScrollerImage>
                <!-- 9 Rivian -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_09_Rivian_R1T_1_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_09_Rivian_R1T_1_Med.jpg',
                        large: '/Work/EV/1_Cars/0_09_Rivian_R1T_1.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="9. Rivian R1T" 
                    alt-text="A journal space with notes and observations about a Rivian pick-up" 
                    imageParent="h-64 md:h-96 w-96 md:w-128" 
                >
                    <template #caption>
                        <p>A very well constructed, sturdy pickup with some nice ideas and consideration but also some clear examples of form over function. For instance, there’s absolutely a lot of plastic, as expected, but they pushed it a little by using heavily textured plastic in some places, like a woodgrain texture on the doors, so it doesn’t feel as cheap; however, the rear, interior door handles are positioned so low that they can’t be seen when sitting.</p>
                    </template>
                </ScrollerImage>
                <!-- 10 Hyundai -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_10_Hyundai_Ioniq5_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_10_Hyundai_Ioniq5_Med.jpg',
                        large: '/Work/EV/1_Cars/0_10_Hyundai_Ioniq5.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="10. Hyundai Ioniq 5" 
                    alt-text="A journal space with notes and observations about a Hyundai SUV" 
                    imageParent="h-64 md:h-96 w-80 md:w-112" 
                >
                    <template #caption>
                        <p>A modern-looking, deceptively simple SUV that’s a good balance between uncomplicated functionality and sleek design. The dashboard screens are well-positioned and easy to use, the interior layout affords a lot of storage and leg room, and there’s even a projected HUD on the windshield. However, because of the overall basic design, some considerations (or expectations) aren’t as well-thought out.</p>
                    </template>
                </ScrollerImage>
                <!-- 11 Lucid -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_11_Lucid_Air_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_11_Lucid_Air_Med.jpg',
                        large: '/Work/EV/1_Cars/0_11_Lucid_Air.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="11. Lucid Air" 
                    alt-text="A journal space with notes and observations about a Lucid luxury sedan" 
                    imageParent="h-64 md:h-96 w-120 md:w-160" 
                >
                    <template #caption>
                        <p>For a company I’d never heard of, it was surprising to find that this was such a well-designed and thoughtful sedan. It’s very clearly a luxury vehicle, so there are some design considerations that are fantastic but, unlike other advancements (like touchscreen or capacitive controls), won’t be found on cheaper cars for a long time to come.</p>
                    </template>
                </ScrollerImage>
                <!-- 12 Cadillac -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_12_Cadillac_Lyriq_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_12_Cadillac_Lyriq_Med.jpg',
                        large: '/Work/EV/1_Cars/0_12_Cadillac_Lyriq.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="12. Cadillac Lyriq" 
                    alt-text="A journal space with notes and observations about a Cadillac SUV" 
                    imageParent="h-64 md:h-96 w-120 md:w-160" 
                >
                    <template #caption>
                        <p>A surprisingly thoughtful SUV from a manufacturer which I’d mostly written off as being old-fashioned. For the most part, Cadillac is still recycling trends and trying to stay relevant, like replacing the meter with a touch screen, but some of their design choices are surprisingly nice to see, like custom-shaped screens instead of working around rectangular ones like many manufacturers still default to.</p>
                    </template>
                </ScrollerImage>
                <!-- 13 Rivian Again -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/1_Cars/0_13_Rivian_R1T_2_Small.jpg',
                        medium: '/Work/EV/1_Cars/0_13_Rivian_R1T_2_Med.jpg',
                        large: '/Work/EV/1_Cars/0_13_Rivian_R1T_2.jpg',
                    }" 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                    title="13. Rivian R1T (Deep dive)" 
                    alt-text="A journal space with more in-depth, thorough notes and observations about Rivian's pick-up" 
                    imageParent="h-64 md:h-96 w-120 md:w-160" 
                >
                    <template #caption>
                        <p>We wanted to take a closer look at a car which primarily uses touch screens as controls, since that seems where the industry is heading. We chose to do a deeper dive on the screens of the Rivian since there’s one for the meter and one for the console.</p>
                    </template>
                </ScrollerImage>

            </ContentScroller>

            <CaseStudyAppleCarVehicleAnalysis />

        </ProcessPrimary>

        <!-- 2. Brand Research -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Brand Research"
            iconPack="fab"
            iconName="apple"
            :visibilityMode="1"
            headerRef="2"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>Apple is a world-renowned brand and, as a team, we each have our own history and experiences with the company and its products. We wanted to take some time to get on the same page. To do that, we started by researching the brand and the brand identity but also by journaling different user experiences, from the customer experience to the ecosystem and also the design system.</p>
                <p>The goal was to figure out the hallmarks of the brand, what drives it, and where we could push that brand identity for a brand strategy and user experiences for a vehicle in 2035.</p>
            </ContentBlurb>

            <!-- MISSION STATEMENTS -->
            <ContentCaptionWithPostits 
                title="Mission Statements" 
                gridCols="lg:grid-cols-4" 
            >
                <template #caption>
                    <p>Apple doesn’t appear to have a specific, current mission statement, so we looked at some of the various mission, purpose, and vision statements released by the company over the years.</p>
                    <p>These come from the company in the form of press releases, investor calls, the website, etc.</p>
                </template>
                <template #postits>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #title>Original Vision Statement:</template>
                        <template #copy>
                            <p>Apple is dedicated to the empowerment of man—to making personal computing accessible to each and every individual so as to help change the way we think, work, learn, and communicate.</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #title>Tim Cook in 2009:</template>
                        <template #copy>
                            <p>We believe that we are on the face of the earth to make great products and that's not changing. We are constantly focusing on innovating. We believe in the simple not the complex. We believe that we need to own and control the primary technologies behind the products that we make, and participate only in markets where we can make a significant contribution. We believe in saying no to thousands of projects, so that we can really focus on the few that are truly important and meaningful to us.</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #title>2016 SEC Form 10-K (Annual Financial Report):</template>
                        <template #copy>
                            <p>The Company is committed to bringing the best user experience to its customers through its innovative hardware, software and services. The Company’s business strategy leverages its unique ability to design and develop its own operating systems, hardware, application software and services to provide its customers products and solutions with innovative design, superior ease-of-use and seamless integration.</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #title>2022 Fourth Quarter Report:</template>
                        <template #copy>
                            <p>Apple’s more than 100,000 employees are dedicated to making the best products on earth, and to leaving the world better than we found it.</p>
                        </template>
                    </ContentPostit>
                </template>
            </ContentCaptionWithPostits>

            <!-- PHOTO JOURNAL -->
            <ContentScroller
                title="Customer Photo Journal"
            >

                <!-- RETAIL STORES -->
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
                        <p>Apple’s physical retail spaces have gone through a variety of design philosophies over the years. Once they were sleek, ultra-modern, and almost sterile. Nowadays they try to incorporate architectural elements of the building or area to evoke a kind of harmony between the technology and the world around us, along with utilizing more plants and always a lot of windows and sunlight. Apple’s large catalog of physical stores also creates a remarkable advantage to enter the car market using sales strategies similar to Tesla, where the cars themselves don’t need to be immediately available like they would at a traditional car dealership.</p>
                    </template>
                </ScrollerImageMulti>

                <!-- WEBSITE -->
                <ScrollerVideo
                :videoSources="[
                        { src: '/Work/EV/2_Research/Website_480.mp4', type: 'video/mp4' },
                        { src: '/Work/EV/2_Research/Website_720.mp4', type: 'video/mp4' },
                    ]"
                    title="Website"
                    videoParent="h-112 md:h-160 w-80 md:w-120"
                >
                    <template #caption>
                        <p>Apple’s website and online store are a masterclass in visual hierarchy and UX writing. The layouts themselves are typically pretty plain, with a strong separation between sections, expert use of progressive disclosure, and well-orchestrated interactions that can both capture a visitor’s attention and also dispense information.</p>
                    </template>
                </ScrollerVideo>
            
                <!-- ADVERTISING -->
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
                        <p>Apple’s ads are usually deceptively simple, and often pick a singular aspect or feature to highlight. However, even though one feature may be highlighted, the ads always carry subtle implications about how that feature will actually improve your life or experience using the product.</p>
                    </template>
                </ScrollerImageMulti>

                <!-- THIRD PARTY RETAIL -->
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
                        <p>Apple also has dedicated product spaces at third party retailers and department stores. Apple makes efforts to bring some of their own retail spaces to these to create an extreme visual distinction compared to the many other brands also in these stores. There’s a not-so-subtle implication that Apple’s devices stand apart from the rest.</p>
                    </template>
                </ScrollerImage>
            
                <!-- HARDWARE -->
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
                        <p>The philosophy of Apple’s hardware is almost obsessive, from the materials being used all the way down to the opening experience. Apple has always been sympathetic to the way every product feels in our hand, as well as the fact that opening an expensive product should feel like an event in and of itself.</p>
                    </template>
                </ScrollerImageMulti>

                <!-- SERVICES -->
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
                        <p>One of the most common complaints that I hear about Apple products is, “Wow your [Apple product] can’t do [this thing]? My [competitor] has been able to do that for years!” It’s a valid complaint in a fast-paced technological world, but Apple has never hidden the fact that they won’t release an app or service unless the work has been put into it to ensure that it’s a fully realized vision that can bring real impact, rather than simply a new app or service for the sake of having the new thing.</p>
                    </template>
                </ScrollerImage>

            </ContentScroller>

            <!-- APPLE ECOSYSTEM -->
            <ContentMediaWithCaption
                title="Apple Ecosystem"
            >
                <template #caption>
                    <p>One of Apple’s crowning achievements, and one of the driving forces of Apple’s development pipeline, is the product ecosystem they’ve created. The seamless integration of all their devices and the ease with which users can navigate between them is unmatched among their competitors. The Apple ecosystem scratches that, almost primal, desire for things to just work.</p>
                </template>
                <template #media>
                    <ImagePrimary
                        srcset-small="/Work/EV/2_Research/Ecosystem_1_Small.png"
                        srcset-medium="/Work/EV/2_Research/Ecosystem_1_Med.png"
                        srcset-large="/Work/EV/2_Research/Ecosystem_1.png"
                        alt-text="A rendering of different Apple products, including a phone, laptop, and iPad, with the same app working across them"
                    />
                </template>
            </ContentMediaWithCaption>

            <!-- APPLE CONTINUITY -->
            <ContentMediaWithCaption
                title="Apple Continuity"
            >
                <template #caption>
                    <p class="mb-4">In the pursuit of connected devices, we looked at how Apple currently handles transitioning between devices with a series of features under the umbrella of <span class="font-bold">Continuity</span>. It includes things like Messages and FaceTime being accessible on any of your devices.</p>
                    <p>This particular feature, called Handoff, allows eligible apps to be moved, mid-process, to another associated device (e.g. from your iPad to MacBook) and became one of the large inspirations for one of our concepts to transition from your devices to your Apple Car.</p>
                </template>
                <template #media>
                    <ImagePrimary
                        srcset-small="/Work/EV/2_Research/Handoff_Small.png"
                        srcset-medium="/Work/EV/2_Research/Handoff_Med.png"
                        srcset-large="/Work/EV/2_Research/Handoff.png"
                        alt-text="A photo of an Apple iPhone next to an Apple iMac computer, with the same website open on both, under a headline reading, `Use Handoff to continue tasks on your other devices: With Handoff, you can start work on one device, then switch to another nearby device and pick up where you left off.`"
                    />
                </template>
            </ContentMediaWithCaption>

            <!-- EVOLVING DESIGN SYSTEM -->
            <ContentScroller
                title="Evolving Design System"
            >

                <!-- IOS DESIGN -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/2_Research/DesignSystem_1_Small.jpg',
                        medium: '/Work/EV/2_Research/DesignSystem_1_Med.jpg',
                        large: '/Work/EV/2_Research/DesignSystem_1.jpg',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="iOS Visual Design"
                    alt-text="A graphic showing the variety of design elements being used for Apple's iOS design system"
                    imageParent="h-96 md:h-128 w-120 md:w-180"
                >
                    <template #caption>
                        <p>Every couple years Apple makes advancements and modifications to their macOS and iOS design systems. It’s an incredibly detailed design system that’s been defined and refined over decades, with a purpose-built font system, colors for every single context, and templates built for any situation. It’s built to be ultimately readable and clear and, since Apple (like Google) have an expansive library of their own Apps and Services, they’ve had to build this system to be flexible and open to modification in a way which is approachable for existing users without causing confusion.</p>
                    </template>
                </ScrollerImage>

                <!-- SERVICES -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/EV/2_Research/DesignSystem_2_Small.png',
                        medium: '/Work/EV/2_Research/DesignSystem_2_Med.png',
                        large: '/Work/EV/2_Research/DesignSystem_2.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Evolved for Apple Vision"
                    alt-text="A graphic showing the variety of design elements being used for Apple's Vision Pro design system"
                    imageParent="h-96 md:h-128 w-120 md:w-180"
                >
                    <template #caption>
                        <p>A huge source of inspiration for us, moving forward, became the way that Apple has approached redesigning their visual design system for future technologies like Apple Vision, their VR technology. This new system takes the existing one and makes it a little more spacious to account for AR/VR spaces and interactions, while also adding much more roundness for a little bit more of a friendly, easy to approach nature.</p>
                    </template>
                </ScrollerImage>

            </ContentScroller>

            <!-- SPATIAL COMPUTING -->
            <ContentMediaWithCaption
                title="Spatial Computing"
            >
                <template #caption>
                    <p>Another huge source of inspiration for us became the R&D that Apple’s done into spatial computing to prepare to move into the VR space. Apple wants the VR space to be more than simply a screen attached to your face that can show you your surroundings, they want it to be it’s own, in a way, tangible space that can augment and empower both real-world and digital interactions. They’ve evolved their design system to work better in 3-dimensional spaces and have also researched real-world interactions, like how to utilize the series of outward-facing cameras for better perception and recognition of tiny hand gestures and motions.</p>
                </template>
                <template #media>
                    <ImagePrimary
                        srcset-small="/Work/EV/2_Research/SpatialComputing_Small.png"
                        srcset-medium="/Work/EV/2_Research/SpatialComputing_Med.png"
                        srcset-large="/Work/EV/2_Research/SpatialComputing.png"
                        alt-text="An array of still frames taken from a promotional video about Apple's Vision Pro VR headset and how the company envisioned the 3D and spatial aspects of computing for virtual space"
                    />
                </template>
            </ContentMediaWithCaption>

            <!-- SUMMARY -->
            <CaseStudyAppleCarBrandResearch />
        </ProcessPrimary>

        <!-- 3. Conceptualization -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Conceptualization"
            iconPack="fas"
            iconName="pencil"
            :visibilityMode="1"
            headerRef="3"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>Taking our research, we started with a persona and then moved step by step through mapping exercises and brainstorming. The important thing is to brainstorm without restriction (as long as there's some relation to the persona and problems) so that nothing potentially great gets left unsaid.</p>
            </ContentBlurb>

            <!-- PERSONA -->
            <CaseStudyAppleCarPersona />

            <!-- NEW BRAND STRATEGY -->
             <CaseStudyAppleCarBrandStrategy />

            <!-- PICKING DIRECTIONS -->
            <ContentMediaWithCaption
                title="Picking Directions"
            >
                <template #caption>
                    <p>We went through a series of brainstorming exercises ranging from journey maps to lotus blossoms, and ended up writing out a variety of text-based scenarios. After several discussions, and refining some of these scenarios, these are the directions that we agreed were both the most exciting but also the most plausible.</p>
                </template>
                <template #media>
                    <div class="rounded-sm md:rounded-md flex flex-col items-center justify-center space-y-4 md:space-y-8 p-4 px-16 md:px-32 lg:px-48 xl:px-64 bg-applecarBlue">
                        <ImageSmall
                            srcset-small="/Work/EV/3_Conceptualization/Concept1.jpg"
                            srcset-medium="/Work/EV/3_Conceptualization/Concept1.jpg"
                            srcset-large="/Work/EV/3_Conceptualization/Concept1.jpg"
                            alt-text="A descriptive alternative text for the image"
                            :image-style="{ width: '100%', height: 'auto' }"
                        />
                        <ImageSmall
                            srcset-small="/Work/EV/3_Conceptualization/Concept2.jpg"
                            srcset-medium="/Work/EV/3_Conceptualization/Concept2.jpg"
                            srcset-large="/Work/EV/3_Conceptualization/Concept2.jpg"
                            alt-text="A descriptive alternative text for the image"
                            :image-style="{ width: '100%', height: 'auto' }"
                        />
                        <ImageSmall
                            srcset-small="/Work/EV/3_Conceptualization/Concept3.jpg"
                            srcset-medium="/Work/EV/3_Conceptualization/Concept3.jpg"
                            srcset-large="/Work/EV/3_Conceptualization/Concept3.jpg"
                            alt-text="A descriptive alternative text for the image"
                            :image-style="{ width: '100%', height: 'auto' }"
                        />
                        <ImageSmall
                            srcset-small="/Work/EV/3_Conceptualization/Concept4.jpg"
                            srcset-medium="/Work/EV/3_Conceptualization/Concept4.jpg"
                            srcset-large="/Work/EV/3_Conceptualization/Concept4.jpg"
                            alt-text="A descriptive alternative text for the image"
                            :image-style="{ width: '100%', height: 'auto' }"
                        />
                        <ImageSmall
                            srcset-small="/Work/EV/3_Conceptualization/Concept5.jpg"
                            srcset-medium="/Work/EV/3_Conceptualization/Concept5.jpg"
                            srcset-large="/Work/EV/3_Conceptualization/Concept5.jpg"
                            alt-text="A descriptive alternative text for the image"
                            :image-style="{ width: '100%', height: 'auto' }"
                        />
                    </div>
                </template>
            </ContentMediaWithCaption>
        </ProcessPrimary>

        <!-- 4. Research & Prep -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Research & Prep"
            iconPack="fas"
            iconName="arrows-to-circle"
            :visibilityMode="1"
            headerRef="4"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>Over several weeks, our team thoroughly analyzed 12 electric vehicles, inside and out, as well as an additional, deeper inspection of the digital experience in one of them. We didn’t necessarily have a goal in mind, but wanted to better understand design trends and postulate the reasons behind them. Then we did brand research about Apple, the customer experience, their product line, new features, and their design system in order to plan a brand strategy to support an electric vehicle.</p>
            </ContentBlurb>

            <CaseStudyAppleCarVehicleAnalysis />

            <CaseStudyAppleCarBrandResearch />

            <CaseStudyAppleCarPersona />

            <CaseStudyAppleCarBrandStrategy />
        </ProcessPrimary>

        <!-- 5. Prototyping -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Prototyping"
            iconPack="fas"
            iconName="pen-to-square"
            :visibilityMode="1"
            headerRef="5"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>For conciseness and specificity, this section will only be detailing the work that I personally did on a singular concept: <span>seamless transition into the car</span>. Each concept was worked on by one person on the team so, if you’d like additional information on another of our concepts, please view the credits at the bottom of the page and you can visit my teammates’ websites.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- 6. Visual Storytelling -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Visual Storytelling"
            iconPack="fas"
            iconName="video"
            :visibilityMode="1"
            headerRef="6"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>Creating a storyboard and animatic occurred alongside our other work, starting with our initial persona and accompanying journey map. With several concepts being developed we wanted a way to show, more than how the concepts work, how the value of our concepts could improve user’s experiences and lives.</p>
            </ContentBlurb>
        </ProcessPrimary>

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