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
                <div class="col-span-1 space-y-8">


                    <CopyIntro section-name="Project">
                        <template #copy>
                            The 2035 Apple Car: imagining evolved experiences for next-gen electric vehicles
                        </template>
                    </CopyIntro>
                    <CopyIntro section-name="Direction">
                        <template #copy>
                            How might we design seamless automotive experiences which support Apple’s existing ecosystem?
                        </template>
                    </CopyIntro>
                    <CopyIntro section-name="Disclaimer">
                        <template #copy>
                            <span class="italic">This project is a conceptual design exercise and is not officially affiliated with or endorsed by Apple Inc. In addition, myself and my team are not employed by, or affiliated with, Apple Inc. All trademarks and copyrights are the property of their respective owners. Any images used are displayed for illustrative and/or research purposes.</span>
                        </template>
                    </CopyIntro>


                </div>
                <div class="col-span-1 space-y-8">


                    <CopyPills 
                        section-name="Info"
                        :items="['Automotive UX', '9 Weeks', 'October - December 2023', '5 Team Members']">
                    </CopyPills>
                    <CopyPills 
                        section-name="Tools"
                        :items="['Miro', 'Figma', 'SolidWorks', 'KeyShot', 'Adobe Premiere', 'Adobe Audition', 'ElevenLabs']">
                    </CopyPills>
                    <ConciseSwitch></ConciseSwitch>


                </div>
                <div id="overviewSection" class="col-span-1 md:col-span-2 border border-white rounded-md grid grid-cols-1 md:grid-cols-2 font-main text-grayDarker text-sm">
                    <div class="col-span-1 md:col-span-2 flex flex-row justify-between items-center px-4 md:px-8 h-20">
                        <h1 class="font-title text-2xl text-grayDarkest">Overview</h1>
                        <!-- <button class="button flex flex-row gap-4 pl-1 text-grayDarker items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white font-main" @click="toggle">
                            <p class="uppercase text-xs tracking-widest hidden md:inline-block">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                            <div class="h-6 w-6 flex justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                            </div>
                        </button> -->
                    </div>


                    <div class="col-span-1 md:col-span-2 h-px mx-4 md:mx-8 bg-white"></div>


                    <div class="col-span-1 flex flex-col p-4 md:p-8 space-y-8">
                        <div class="space-y-4">
                            <h3 class="font-bold uppercase">Challenges & Solutions</h3>
                            <ul class="list-disc list-outside pl-12">
                                <li>Because Apple is a technology company, rather than a car company, there was not a lot of existing design language in the context of a vehicle (other than CarPlay) in the same way that companies like Ford or BMW would have existing design & UI patterns. We had to look at how Apple approaches new technologies, like VR, to create updated brand-appropriate UI and prototypes.</li>
                                <li>We faced significant pressure to imagine experiences for future technologies which was a little difficult for us. Given Apple's reputation for innovation, rather than creating entirely new technologies, we focused on enhancing seamless user experiences with a strong emphasis on human factors.</li>
                            </ul>
                        </div>
                        <div class="space-y-4">
                            <h3 class="font-bold uppercase">Concept Summary</h3>
                            <p class="pl-8">Our concept for the Apple Car involves multiple explorations. Among them are seamless transitions between your devices and your vehicle, exploring visual design language and UX for meter design involving autonomous driving, integrating apps in media screens to help enforce your personal vehicle as a “third space”, and exploring practical uses of integrated AR/VR within your personal vehicle. To bolster all of these concepts, we also created a rough interior model for the dashboard, windshield, center console, and steering wheel to give us a better spatial understanding of the cockpit. All together, this created a unified concept of our vision for a 2035 Apple Car, nicknamed Apple Vulcan.</p>
                        </div>
                    </div>


                    <div class="col-span-1 flex flex-col p-4 md:p-8 space-y-8">
                        <div class="space-y-4">
                            <h3 class="font-bold uppercase">Role</h3>
                            <div class="pl-0 md:pl-8 space-y-4">
                                <p>We did all of our preparatory work, including research, concept development, and storyboarding, as a team. As we refined our concepts we had more defined individual roles.</p>
                                <p>I was responsible for iterating and creating the high fidelity prototype for one of our concepts (seamlessly transitioning devices when entering or exiting an EV), writing the script for the animatic video, recording and editing all of the dialogue, and some smaller duties.</p>
                                <p class="italic">Any overview will detail the entire concept as created by the team. For in-depth prototype information, I will only be detailing the work I personally did on a singular concept (seamless transition into the car). You can see the full credits at the end and visit my teammates’ websites if you’d like more information about the other concepts we worked on.</p>
                            </div>
                        </div>
                        <div class="space-y-4">
                            <h3 class="font-bold uppercase">Process</h3>
                            <p class="pl-8">We started by personally analyzing vehicles to better understand current trends in automotive UX design. Next, we dived into brand research, exploring Apple’s current vision and customer experience, creating a mind map for future expansion, then came up with a new brand strategy and persona. We used a lotus blossom exercise to come up with a variety of concept iterations quickly, then made multiple scenarios and storyboards to contextualize our concepts. Finally, we created high fidelity prototypes and an animated video to act simultaneously as a promotional video and explainer.</p>
                            <PillsAlone :items="['Primary Research', 'Product Analysis', 'Heuristic Analysis', 'Brand Research', 'Comparative Analysis', 'Mind Map', 'Brand Strategy', 'Conceptualization', 'Iteration', 'Beat Board', 'Storyboard', 'Prototyping', 'Animatic']" class="pl-8"></PillsAlone>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <PreFooter :currentProjectId="'2'" :linksVisibility="[true, true, true, false]" />
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