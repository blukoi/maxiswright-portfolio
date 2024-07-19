<template>
    <div>
      <CustomCursor />
      <NavBar />
      <!-- <TestComponent /> -->
      <div class="fixed w-full h-51vh z-0 flex justify-center items-center overflow-visible">
        <img src="/Brand/About_Background.jpg" alt="Max having a discussion with his team about a visual storyboard." class="w-full h-full object-cover overflow-visible">
      </div>
      <div class="w-full h-50vh bg-transparent inline-block"></div>
      <div class="w-full content-center z-10 bg-grayLighter relative">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-32 md:gap-y-0 gap-x-16 mt-16 mb-32 md:mb-64">
            <div class="z-40 static md:fixed container grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 pointer-events-none -mt-48 lg:-mt-40">
                <div class="col-span-1">
                <div class="w-max lg:w-full bg-white text-mint h-64 lg:h-48 items-start lg:items-center rounded-md flex flex-col-reverse lg:flex-row justify-end lg:justify-between overflow-hidden">
                    <h1 class="ml-8 h-full font-title text-2xl justify-self-center lg:justify-self-start content-center">
                    About Me —
                    </h1>
                    <div class="lg:w-32 lg:h-48 flex justify-center">
                        <img src="/Brand/WrightMax_Portrait.png" alt="Portrait of Max. Look at that forehead!" class="h-48 object-cover overflow-hidden">
                    </div>
                </div>
                <div class="pl-8 mt-6 space-y-6">
                    <div>
                    <p class="font-normal font-main text-sm text-grayDarker">I’m an LA-based designer using my expertise in visual communication and graphic design to enhance digital experiences with a focus on accessibility, empathy, and thoughtful research.</p>
                    </div>
                    <WorkAvailability />
                </div>
                </div>
            </div>
    
            <div class="col-span-1 col-start-1 md:col-start-2 md:col-span-2 lg:col-span-1 lg:col-start-2 md:-mt-72 lg:-mt-72">
                <div class="w-full flex flex-col bg-mint rounded-md md:rounded-bl-none md:rounded-r-xl md:rounded-tl-xl px-8 py-4">
                    <div class="w-full grid justify-items-start text-white opacity-50">
                        <div class="h-10 w-10 flex flex-row justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'quote-left']" class="text-4xl" />
                        </div>
                    </div>
                    <div class="w-full text-center">
                        <p class="font-main font-bold text-lg italic text-white">Good UX is like CG in movies: when applied well, no one will notice it.</p>
                    </div>
                    <div class="w-full grid justify-items-end text-white opacity-50">
                        <div class="h-10 w-10 flex flex-row justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', 'quote-right']" class="text-4xl" />
                        </div>
                    </div>
                </div>
            </div>
  
            <div class="col-span-1 col-start-1 md:col-start-2 md:col-span-2 lg:col-span-1 lg:col-start-3 md:-mt-128 lg:-mt-40 font-main">
                <div class="w-full bg-white text-grayDarker rounded-md p-4 text-sm space-y-4">
                    <h1 class="font-title text-xl">Digging a little deeper</h1>
                    <div class="p-4 bg-grayLightPrimary font-grayMiddle rounded-sm space-y-4">
                        <div :class="{'space-y-4 expandable-content': true, 'space-y-4 is-expanded': isExpanded}">
                            <p>While I was completing my Associate of Science in Graphic Design I took a UX class. Taking that UX class changed everything. It gave me an avenue to do all of the things I was good at: ask questions, explore a new topic or problem, synthesize and analyze data, create a visual design system, and apply that design to create a well-informed and thoughtful digital experience. It also helped me realize that my work can have a tangible impact on real people.</p>
                            <p>After completing my AS in Graphic Design in my free time, I decided to knuckle down and make a transition to UX. I stopped taking freelance clients, quit my job, and went to ArtCenter College of Design to study Interaction Design. I worked harder and studied more than I ever had before.</p>
                            <ul class="list-disc pl-4">
                                <li>In 2010 I was a college dropout with a 1.5 GPA</li>
                                <li>In 2023 I completed a 4-year degree in 2 years with a 3.9 GPA</li>
                            </ul>
                        </div>
                        <div class="w-full flex flex-row justify-end mt-4">
                            <!-- <button v-if="!isExpanded" id="ReadMore" class="flex flex-row gap-4 pl-1 text-grayMiddle items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white button" tabindex="0" type="button" @click="isExpanded = true">
                                <p class="uppercase text-xs tracking-widest">Read More</p>
                                <div class="h-6 w-6 flex flex-row justify-center items-center">
                                    <FontAwesomeIcon :icon="['fas', 'caret-down']" class="text-base" />
                                </div>
                            </button>
                            <button v-if="isExpanded" id="HideMore" class="flex flex-row gap-4 pl-1 text-grayMiddle items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white button" tabindex="0" type="button" @click="isExpanded = false">
                                <p class="uppercase text-xs tracking-widest">Hide</p>
                                <div class="h-6 w-6 flex flex-row justify-center items-center">
                                    <FontAwesomeIcon :icon="['fas', 'caret-up']" class="text-base" />
                                </div>
                            </button> -->
                            <button class="button flex flex-row gap-4 pl-1 text-grayDarker items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white font-main" @click="toggleOne">
                                <p class="uppercase text-xs tracking-widest">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                                <div class="h-6 w-6 flex justify-center items-center">
                                    <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <p class="ml-4">What I’ve learned and strive to embody in my work is that <span class="font-bold">with thoughtful research, empathetically balancing user needs, and regular testing of new iterations we can create products that enhance the way we live and interact.</span> We don’t have to rely on dark patterns that can alienate people who feel like they’re being preyed upon, or create experiences that are visually appealing but fail to help people understand the information.</p>
                </div>
            </div>
        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayDarkest relative">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 my-32">
            <div class="col-span-1 md:col-span-3 h-14 bg-transparent md:h-20 md:bg-mint pl-0 md:pl-8 rounded-md flex flex-row text-white items-center space-x-6">
                <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                    <FontAwesomeIcon :icon="['fas', 'address-card']" class="text-3xl" />
                </div>
                <h1 class="text-2xl font-title">Core Competencies</h1>
            </div>
            <div class="col-span-1 bg-white rounded-md p-4 space-y-8">
                <div class="w-full flex justify-center bg-transparent rounded-sm">
                    <img src="/Brand/Core_DesignResearch.svg" alt="Example Illustration Depicting Research via White Boarding and Post-Its" class="md:w-full">
                </div>
                <div class="w-full pl-4">
                    <div class="w-full">
                        <h1 class="font-title text-xl text-grayDarker">Design Research</h1>
                    </div>
                    <div>
                        <ul class="list-none flex flex-row flex-wrap gap-1">
                            <PillsPrimary :tags="designResearch"></PillsPrimary>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-white rounded-md p-4 space-y-8">
                <div class="w-full flex justify-center bg-transparent rounded-sm">
                    <img src="/Brand/Core_VisualDesign.svg" alt="Example Illustration Depicting the Visual Design and Alteration of a Design System" class="md:w-full">
                </div>
                <div class="w-full pl-4">
                    <div class="w-full">
                        <h1 class="font-title text-xl text-grayDarker">Visual Design</h1>
                    </div>
                    <div>
                        <PillsPrimary :tags="visualDesign"></PillsPrimary>
                    </div>
                </div>
            </div>
            <div class="col-span-1 bg-white rounded-md p-4 space-y-8">
                <div class="w-full flex justify-center bg-transparent rounded-sm">
                    <img src="/Brand/Core_Prototyping.svg" alt="Example Illustration Depicting the Connections Between Prototyped Wireframes" class="md:w-full">
                </div>
                <div class="w-full pl-4">
                    <div class="w-full">
                        <h1 class="font-title text-xl text-grayDarker">High Fidelity Prototyping</h1>
                    </div>
                    <div>
                        <PillsPrimary :tags="highFidelityPrototyping"></PillsPrimary>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayDarkest relative">
        <div class="container px-4 sm:px-0 mx-auto">
            <div class="h-px w-full bg-grayMiddle"></div>
        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayDarkest relative">
        <div class="container px-4 sm:px-0 pb-4 mx-auto my-32 bg-transparent md:bg-mint rounded-md space-y-6">
            <div class="w-full h-14 md:h-20 pl-0 md:pl-8 flex flex-row text-white items-center space-x-6">
                <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                    <FontAwesomeIcon :icon="['fas', 'shapes']" class="text-3xl" />
                </div>
                <h1 class="text-2xl font-title">A Bit of This, A Bit of That</h1>
            </div>
            <div class="pl-8">
                <p class="font-main text-sm text-grayLightPrimary md:text-whiteFaded">I love to learn, but wouldn’t call myself an expert on these technologies or processes just yet. I’m always eager to explore and add to my toolkit.</p>
            </div>
            <div class="ml-8 mr-4 p-4 bg-white md:bg-whiteFaded rounded-md md:rounded-sm">
                <div :class="['flex', 'gap-4', 'md:gap-8', 'justify-between', 'md:justify-start', anySectionExpanded ? 'flex-col' : 'flex-row']">
                    <div :class="['flex', 'flex-col', 'justify-start', 'gap-1', 'text-grayDarkest', anySectionExpanded ? 'w-full' : 'w-fit']">
                        <div class="flex flex-row self-start items-center space-x-2 mr-4">
                            <div class="h-9 w-9 flex flex-row justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', 'cubes']" class="text-xl" />
                            </div>
                            <h1 class="text-xl font-title">3-D</h1>
                        </div>
                        <PillsSecondary v-show="isExpanded2['3d']" :tags="tagList1"></PillsSecondary>
                    </div>
                    <div :class="['flex', 'flex-col', 'justify-start', 'gap-1', 'text-grayDarkest', anySectionExpanded ? 'w-full' : 'w-fit']">
                        <div class="flex flex-row self-start items-center space-x-2 mr-4">
                            <div class="h-9 w-9 flex flex-row justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', 'code']" class="text-xl" />
                            </div>
                            <h1 class="text-xl font-title">Code</h1>
                        </div>
                        <PillsSecondary v-show="isExpanded2['code']" :tags="tagList2"></PillsSecondary>
                    </div>
                    <div :class="['flex', 'flex-col', 'justify-start', 'gap-1', 'text-grayDarkest', anySectionExpanded ? 'w-full' : 'w-fit']">
                        <div class="flex flex-row self-start items-center space-x-2 mr-4">
                            <div class="h-9 w-9 flex flex-row justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', 'thumbs-up']" class="text-xl" />
                            </div>
                            <h1 class="text-xl font-title">Misc.</h1>
                        </div>
                        <PillsSecondary v-show="isExpanded2['misc']" :tags="tagList3"></PillsSecondary>
                    </div>
                </div>
                <div class="w-full flex flex-row justify-end mt-4">
                    <button class="button flex flex-row gap-4 pl-1 text-grayDarker items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white font-main" @click="toggleAll">
                        <p class="uppercase text-xs tracking-widest">{{ isAllExpanded ? 'Hide' : 'Read More' }}</p>
                        <div class="h-6 w-6 flex justify-center items-center">
                            <FontAwesomeIcon :icon="['fas', isAllExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayLightPrimary relative">
        <div class="container px-4 sm:px-0 pb-4 mx-auto my-32 bg-transparent grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="col-span-1">
                <div class="space-y-8">
                    <h1 class="font-title text-xl text-grayDarkest">
                        Work Philosophy
                    </h1>
                    <div class="w-full pl-8 space-y-4 font-main">
                        <p class="text-sm">Some of the things I try to focus on while working with any team include:</p>
                        <PillsPrimary :tags="workPhilosophy"></PillsPrimary>
                    </div>
                </div>
            </div>
            <div class="col-span-3 flex flex-row justify-between lg:justify-center lg:gap-8 text-grayMiddle">
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'beer-mug-empty']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'person-skating']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'gamepad']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'film']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'cat']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'hotdog']" class="text-2xl" />
                </div>
                <div class="h-10 w-10 flex flex-row justify-center items-center">
                    <FontAwesomeIcon :icon="['fas', 'burger']" class="text-2xl" />
                </div>
            </div>
            <div class="col-span-1 md:col-start-2 lg:col-start-3">
                <div class="space-y-8">
                    <h1 class="font-title text-xl text-grayDarkest">
                        In my Free Time
                    </h1>
                    <div class="w-full pl-8 space-y-4 font-main">
                        <p class="text-sm">Even if we’re not lucky enough to work together, if any of my other interests resonate with you, please reach out! I’m always open to hit a tennis court, relax at a brewery, or sit down for some gaming.</p>
                        <PillsPrimary :tags="freeTime"></PillsPrimary>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <PreFooter :currentProjectId="'1'" :linksVisibility="[false, true, true, false]" />
      <FooterSection />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage',
    data() {
        return {
        isExpanded: false,
        isExpanded2: {
            '3d': false,
            'code': false,
            'misc': false
        },
        designResearch: ['User Interviews', 'Contextual Analysis', 'Affinity Mapping', 'Surveys', 'Insights'],
        visualDesign: ['Design Systems', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe AfterEffects'],
        highFidelityPrototyping: ['Figma', 'Wireframing', 'Interface Design', 'Microinteractions', 'Animations', 'Front-end Development', 'Visual Studio Code', 'GitHub'],
        tagList1: [
            { label: 'Cinema4D', level: 'Intermediate' },
            { label: 'Unity', level: 'Beginner' },
            { label: 'SolidWorks', level: 'Intermediate' },
            { label: 'KeyShot', level: 'Beginner' }
        ],
        tagList2: [
            { label: 'Vue.js', level: 'Beginner' },
            { label: 'Nuxt.js', level: 'Beginner' },
            { label: 'Python', level: 'Beginner' }
        ],
        tagList3: [
            { label: 'ProtoPie', level: 'Beginner' },
            { label: 'Origami Studio', level: 'Heard of it' }
        ],
        workPhilosophy: ['Remember the user (it’s not always you)', 'Stay curious and ask a lot of questions', 'Test early, test often', 'Always be open to learn', 'Deliver work you can be proud of'],
        freeTime: ['Playing tennis', 'Craft beer', 'Watching hockey', 'Playing Destiny', 'Watching movies', 'Eating new foods','Taking pics of my cats', 'Arguing about sandwiches', 'Eating burgers']
        };
    },
    head: {
      title: 'About Max',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking / eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
        }
      ],
    },
    computed: {
        isAllExpanded() {
            // Check if all sections are expanded
            return Object.values(this.isExpanded2).every(state => state);
        },
        anySectionExpanded() {
            return Object.values(this.isExpanded2).some(status => status);
        }
    },
    methods: {
        toggleOne() {
            this.isExpanded = !this.isExpanded
        },
        toggleAll() {
            const newState = !this.isAllExpanded;
            // Toggle all sections at once
            this.isExpanded2 = {
                '3d': newState,
                'code': newState,
                'misc': newState
        };
        }
    },
  }
  </script>
  
  <style>
    /* Target the div that has conditional classes for expand/collapse */
    .expandable-content {
        max-height: 1rem; /* Initial max-height for collapsed state */
        overflow: hidden;
        transition: max-height 0.5s ease-in-out; /* Animate max-height changes */
    }

    /* When expanded, increase max-height to a value that can contain all the content */
    .is-expanded {
        max-height: 50rem; /* Adjust based on the maximum content size you expect */
    }
  </style>