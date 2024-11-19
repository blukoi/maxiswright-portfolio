<template>
    <div class="bg-white">
      <CustomCursor />
      <NavBar />

      <!-- <div class="fixed w-screen sm:w-full h-100vh z-0 flex justify-center items-center text-center font-main italic font-bold px-4 sm:px-0">
        <span id="GoodUX">
            <span id="AboutQuote">Good UX is like CG in movies: <br>when applied well, <br>no one will notice it.</span>
        </span>
        <img src="/Brand/About_Background.jpg" alt="Max having a discussion with his team about a visual storyboard." class="flex-1 w-full h-full object-cover overflow-hidden">
      </div> -->
        <svg id="Blur" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" style="width:100vw; height:100vh;" class="fixed">
            <defs>
                <pattern id="backgroundImage" patternUnits="userSpaceOnUse" width="800" height="600">
                    <image href="/Brand/About_Background.jpg" width="800" height="600"/>
                </pattern>
                <mask id="textMask">
                    <text text-anchor="middle" x="400" y="300" font-size="40" class="font-main" font-weight="bold" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" fill="#FFFFFF">
                        <tspan x="400" dy="-0.6em">Good UX is like CG in movies:</tspan>
                        <tspan x="400" dy="1.2em">when applied well,</tspan>
                        <tspan x="400" dy="1.2em">no one will notice it.</tspan>
                    </text>
                </mask>
            </defs>
            <rect width="800" height="600" fill="url(#backgroundImage)" mask="url(#textMask)" filter="url(#blurFilter)"/>
            <text text-anchor="middle" x="400" y="300" font-size="40" class="font-main" font-weight="bold" fill="#000000" fill-opacity="0">
                <tspan x="400" dy="-0.6em">Good UX is like CG in movies:</tspan>
                <tspan x="400" dy="1.2em">when applied well,</tspan>
                <tspan x="400" dy="1.2em">no one will notice it.</tspan>
            </text>
        </svg>
        <div class="fixed bg-transparent bottom-16 h-12 w-screen flex justify-center">
            <div id="mouseScroll"></div>
        </div>
      <div class="w-full h-100vh bg-transparent inline-block mb-12">
      </div>
      <div class="w-full content-center z-10 bg-grayLighter relative">
        <div class="container px-4 sm:px-0 mx-auto pt-16 pb-32 relative">

            <div class="static w-full grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-y-32 lg:gap-y-0 gap-x-0 lg:gap-x-16">
                <div class="z-40 static container col-span-1 sm:col-span-2 lg:col-span-1 col-start-1 sm:col-start-2 lg:col-start-1 lg:grid lg:grid-cols-3 pointer-events-none gap-x-0 lg:gap-x-16 -mt-24 overflow-visible h-48">
                    <div class="lg:col-span-3 lg:col-start-1 pl-8">
                        <div 
                        class="bg-white text-mint rounded-full 
                        w-full 
                        h-16 
                        items-center 
                        flex flex-row-reverse 
                        justify-end">
                            <div class="h-full flex items-center">
                                <h1 class="ml-2 font-title text-2xl justify-self-start self-center">
                                About Me —
                                </h1>
                            </div>
                            <div class="w-28 h-28 -ml-8 flex justify-center rounded-full overflow-hidden border-white border-4">
                                <img src="/Brand/WrightMax_Portrait.png" alt="Portrait of Max. Look at that forehead!" class="h-28 object-cover overflow-hidden">
                            </div>
                        </div>
                        <div class="mt-12 space-y-6">
                            <div>
                                <p class="font-normal font-main text-sm text-grayDarker">I’m a UX designer applying my expertise in visual communication and systems thinking to enhance digital experiences with a focus on accessibility, empathy, and thoughtful research.</p>
                            </div>
                            <div class="flex flex-col space-y-6">
                                <!-- <WorkAvailability /> -->
                                <ButtonDark label="Let's Collaborate" link="/contact" class="content-center pointer-events-auto w-max" />
                            </div>
                        </div>
                    </div>
                </div>
        
                <!-- <div class="col-span-1 col-start-1 sm:col-span-4 lg:col-span-2 lg:col-start-2">
                    <div class="w-full flex flex-col bg-mint rounded-md md:rounded-bl-none md:rounded-r-xl md:rounded-tl-xl px-8 py-4">
                        <div class="w-full grid justify-items-start text-white opacity-50">
                            <div class="h-10 w-10 flex flex-row justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', 'quote-left']" class="text-4xl" />
                            </div>
                        </div>
                        <div class="w-full text-center">
                            <p class="font-main text-lg italic text-white">Good UX is like CG in movies: when applied well, no one will notice it.</p>
                        </div>
                        <div class="w-full grid justify-items-end text-white opacity-50">
                            <div class="h-10 w-10 flex flex-row justify-center items-center">
                                <FontAwesomeIcon :icon="['fas', 'quote-right']" class="text-4xl" />
                            </div>
                        </div>
                    </div>
                </div> -->
    
                <div class="col-span-1 col-start-1 sm:col-span-2 lg:col-span-2 lg:col-start-2 font-main">
                    <div class="w-full bg-white text-grayDarker rounded-md p-4 text-sm space-y-4">
                        <h1 class="font-title text-xl">What drives me</h1>
                        <div class="p-4 bg-grayLightPrimary font-grayMiddle rounded-sm space-y-4">
                            <div :class="{'space-y-4 expandable-content': true, 'space-y-4 is-expanded': isExpanded}">
                                <p>After dropping out of my first college I ended up working retail for many years. I worked my way up to a management position and worked as a buyer, pushing store sales to ~10% increases year over year by applying performance data to purchase orders. For a while, I hadn't known what to do with myself but having a supportive management team which saw fit to trust, train, and promote me instilled a particular confidence that I was capable of doing more.</p>
                                <p>On my days off I started taking classes to finish an Associate of Science degree in Graphic Design, whereupon I took a UX class. Taking that UX class changed everything. It gave me an avenue to do all of the things I was good at: ask questions, explore new topics and areas, collect and analyze data, create a visual design system, and combine all of these aspects to create a well-informed and thoughtful digital experience. It also helped me realize that my work can have a tangible impact on real people.</p>
                                <p>I felt like I'd found my calling and decided to knuckle down and make a transition to UX. I stopped taking freelance clients, quit my job, and went to ArtCenter College of Design to study Interaction Design. I worked harder and studied more than I ever had before.</p>
                                <ul class="list-disc pl-4">
                                    <li>In 2010 I was a college dropout with a 1.5 GPA</li>
                                    <li>In 2023 I completed a 4-year degree in 2 years with a 3.9 GPA</li>
                                </ul>
                                <p>Now I pursue interesting challenges across a variety of touchpoints to create human-focused solutions.</p>
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
                        <p class="ml-4"><span class="font-bold">I've resolved to always try my best to contribute to meaningful work</span> and what I’ve learned and strive to embody is that by empathetically balancing user needs and regularly testing new iterations we can create products that enhance the way we live and interact. We don’t have to rely on dark patterns that can alienate people or create experiences that are visually appealing but slow down or confuse interactions.</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
      <div class="w-full content-center z-20 bg-grayDarkest relative">
        <div class="container px-4 sm:px-0 mx-auto py-32">

            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
                <div class="col-span-1 md:col-span-3 h-14 bg-transparent md:h-20 md:bg-mint pl-0 md:pl-8 rounded-md flex flex-row text-white items-center space-x-6">
                    <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                        <FontAwesomeIcon :icon="['fas', 'address-card']" class="text-3xl" />
                    </div>
                    <h1 class="text-2xl font-title">Core Competencies</h1>
                </div>
                <div class="col-span-1 bg-white rounded-md p-4 space-y-8 self-start">
                    <div class="w-full flex justify-center bg-transparent rounded-sm">
                        <img src="/Brand/Core_DesignResearch.svg" alt="Example Illustration Depicting Research via White Boarding and Post-Its" class="md:w-full">
                    </div>
                    <div class="w-full">
                        <div class="w-full">
                            <h1 class="font-title text-xl text-grayDarker">Design Research</h1>
                        </div>
                        <div class="pl-4 pt-4">
                            <ul class="list-none flex flex-row flex-wrap gap-1">
                                <PillsPrimary :tags="designResearch"></PillsPrimary>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 bg-white rounded-md p-4 space-y-8 self-start">
                    <div class="w-full flex justify-center bg-transparent rounded-sm">
                        <img src="/Brand/Core_VisualDesign.svg" alt="Example Illustration Depicting the Visual Design and Alteration of a Design System" class="md:w-full">
                    </div>
                    <div class="w-full">
                        <div class="w-full">
                            <h1 class="font-title text-xl text-grayDarker">Visual Design</h1>
                        </div>
                        <div class="pl-4 pt-4">
                            <PillsPrimary :tags="visualDesign"></PillsPrimary>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 bg-white rounded-md p-4 space-y-8 self-start">
                    <div class="w-full flex justify-center bg-transparent rounded-sm">
                        <img src="/Brand/Core_Prototyping.svg" alt="Example Illustration Depicting the Connections Between Prototyped Wireframes" class="md:w-full">
                    </div>
                    <div class="w-full">
                        <div class="w-full">
                            <h1 class="font-title text-xl text-grayDarker">High Fidelity Prototyping</h1>
                        </div>
                        <div class="pl-4 pt-4">
                            <PillsPrimary :tags="highFidelityPrototyping"></PillsPrimary>
                        </div>
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
        <div class="container px-4 sm:px-0 mx-auto py-32">
            <div class="w-full pb-4 bg-transparent md:bg-mint rounded-md space-y-6">
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
      </div>
      <div class="w-full content-center z-20 bg-grayLightPrimary relative">
        <div class="container px-4 sm:px-0 mx-auto py-32 bg-transparent space-y-16 md:space-y-32">

            <div class="w-full grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

            <div class="w-full grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div class="col-span-1 flex justify-center">
                    <img src="/Brand/About_Charlie.jpg" alt="Charlie is a short-haired, mostly dark gray cat, with a little white moustache." class="flex-initial w-full h-full object-cover rounded-full overflow-hidden">
                </div>
                <div class="col-span-1 flex justify-center">
                    <img src="/Brand/About_Burger.jpg" alt="A fig-and-bacon cheeseburger with arugula and a side of fries from Firestone Walker." class="flex-initial w-full h-full object-cover rounded-full overflow-hidden">
                </div>
                <div class="col-span-1 flex justify-center">
                    <img src="/Brand/About_Zeus.jpg" alt="Zeus is a long-haired, fluffy white cat with a large gray splotch on his back that comes over the top of his head like a mask." class="flex-initial w-full h-full object-cover rounded-full overflow-hidden">
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
        designResearch: ['User Interviews', 'Contextual Analysis', 'Affinity Mapping', 'Competitive Research', 'Surveys', 'Insights', 'Usability Testing'],
        visualDesign: ['Design Systems', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe AfterEffects', 'Sketching', 'Storyboarding'],
        highFidelityPrototyping: ['Figma', 'Wireframing', 'Interface Design', 'Microinteractions', 'Animations', 'Front-end Development', 'Visual Studio Code', 'GitHub'],
        tagList1: [
            { label: 'Cinema4D', level: 'Intermediate' },
            { label: 'Unity', level: 'Beginner' },
            { label: 'SolidWorks', level: 'Intermediate' },
            { label: 'KeyShot', level: 'Beginner' }
        ],
        tagList2: [
            { label: 'Vue.js', level: 'Intermediate' },
            { label: 'Nuxt.js', level: 'Intermediate' },
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
    mounted() {
        this.updateSVGProperties(); // Initial update in case the page is not starting at the top
        window.addEventListener('scroll', this.updateSVGProperties);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateSVGProperties);
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
        },
        updateSVGProperties() {
        const strokeMax = 550;  // Maximum stroke width
        const scrollRange = 2000;  // Range of scroll in pixels to reach full effect

        const scrollAmount = Math.min(window.scrollY, scrollRange); // Current scroll, capped at range
        const strokeAmount = (scrollAmount / scrollRange) * strokeMax;

        const textMask = document.querySelector('#textMask text');

        if (textMask) {
            textMask.setAttribute('stroke-width', strokeAmount);
        }
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

    #GoodUX {
        color: transparent;
        background-image: url("/Brand/About_Background.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100vw auto;
        background-clip: text;
        -webkit-background-clip: text;
        font-size: 2rem;
    }

    #AboutQuote {
        transform-origin: center;
        transform: scale(2.0, 1.0);
    }

    #mouseScroll, #mouseScroll:before {
        position: absolute;
        left: 50%;
    }

    #mouseScroll {
        width: 24px;
        height: 36px;
        margin-left: -12px;
        top: 75%;
        margin-top: -16px;
        box-shadow: inset 0 0 0 .5px #000000;
        border-radius: 8px 8px 12px 12px;
    }

    #mouseScroll:before {
        content: '';
        width: 4px;
        height: 4px;
        background-color: #000000;
        margin-left: -2px;
        top: 12px;
        border-radius: 2px;
        animation-duration: 1.5s;
        animation-iteration-count: infinite;
        animation-name: mouseScrollAnim;
    }

    @keyframes mouseScrollAnim {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: translateY(-12px);
        }
    }
    </style>