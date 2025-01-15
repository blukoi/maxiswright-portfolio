<template>
    <div>
        <CustomCursor />
        <NavBar />

        <div class="w-full pt-48 z-0 overflow-hidden">
            <div id="perspectiveContainer" class="container mx-auto grid grid-cols-8 -space-y-16 md:-space-y-32 lg:-space-y-48">
                <div id="perspectiveQuote" class="col-span-8 lg:col-span-5 z-10 px-4 sm:px-0">
                    <FontAwesomeIcon :icon="['fas', 'quote-left']" class="text-6xl text-grayLightPrimary fa-sharp" />
                    <h1 class="font-title title-bold text-2xl md:text-3xl lg:text-4xl">Good UX is like CG in movies: when applied well, no one will notice it.</h1>
                    <FontAwesomeIcon :icon="['fas', 'quote-right']" class="text-6xl text-grayLightPrimary float-right" />
                </div>
                <div id="perspectiveSlow" class="col-span-8 lg:col-span-4 lg:col-start-5">
                    <img ref="parallaxImage" src="/Brand/About_Background.jpg" alt="Max having a discussion with his team about a visual storyboard." class="w-full h-full">
                </div>
            </div>
        </div>
        
        <div class="w-full content-center z-10 bg-white border-t border-black">
            <div class="container px-4 sm:px-0 mx-auto pt-16 pb-32">

                <div class="static w-full grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-y-32 lg:gap-y-0 gap-x-0 lg:gap-x-16">
                    <div class="z-40 static container col-span-1 sm:col-span-2 lg:col-span-1 col-start-1 sm:col-start-2 lg:col-start-1 lg:grid lg:grid-cols-3 pointer-events-none gap-x-0 lg:gap-x-16 -mt-24 overflow-visible">
                        <div class="lg:col-span-3 lg:col-start-1">
                            <div 
                            class="bg-white text-mint notch-bottom notch-bottom-border border border-t-4 border-black 
                            w-full 
                            h-max 
                            items-center 
                            flex flex-row justify-between">
                                <div class="h-full flex items-center">
                                    <h1 class="ml-8 font-title title-bold text-xl justify-self-start self-center pt-1">
                                    About Max
                                    </h1>
                                </div>
                                <div class="w-28 h-28 flex justify-center overflow-hidden border-l border-black">
                                    <img src="/Brand/WrightMax_Portrait.png" alt="Portrait of Max. Look at that forehead!" class="h-28 object-cover overflow-hidden">
                                </div>
                            </div>
                            <div class="mt-8 space-y-8 pl-8">
                                <div class="font-normal font-main text-sm text-grayMiddle space-y-4">
                                    <p>I’m a UX and product designer applying my expertise in visual communication and systems thinking to enhance digital experiences with a focus on accessibility, empathy, and thoughtful research.</p>
                                    <p>I like working across diverse touchpoints and product ecosystems. Although I don't have to always explore the newest technologies, I like to experiment with new interactions and multimodal digital experiences. My MVP is always research-driven and I'm constantly revisiting and iterating.</p>
                                </div>
                                <div class="flex flex-row items-center space-x-2 -ml-8">
                                    <!-- <WorkAvailability /> -->
                                    <div class="w-6 text-mint text-2xl">
                                        <font-awesome-icon :icon="['fas', 'arrow-right-long']" />
                                    </div>
                                    <ButtonLight label="Let's Talk" link="/contact" class="content-center pointer-events-auto w-max" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1 col-start-1 md:col-span-2 md:col-start-2 space-x-16 flex flex-row justify-center align-center h-full py-16">
                        <FontAwesomeIcon :icon="['fas', 'desktop']" class="text-3xl text-grayLightPrimary" />
                        <FontAwesomeIcon :icon="['fas', 'mobile-screen']" class="text-3xl text-grayLightPrimary" />
                        <FontAwesomeIcon :icon="['fas', 'swatchbook']" class="text-3xl text-grayLightPrimary" />
                        <FontAwesomeIcon :icon="['fas', 'car-side']" class="text-3xl text-grayLightPrimary" />
                    </div>
        
                    <div class="col-span-1 col-start-1 md:col-span-2 md:col-start-2 font-main">
                        <div class="w-full bg-white text-grayDarker p-4 text-sm space-y-8">
                            <h1 class="top-hash-mark-lightgray font-title title-bold text-xl">What drives me</h1>
                            <div class="notch notch-border border border-black p-4 bg-white text-black space-y-4">
                                <div :class="{'space-y-4 expandable-content': true, 'space-y-4 is-expanded': isExpanded}">
                                    <p>I started my career in retail and worked my way up to a management position, where I pushed store sales to ~10% increases year over year by applying data analysis to purchase orders. Having a supportive management team which saw fit to trust & train me, whereupon I would earn successive promotions, instilled a particular confidence that I was capable of doing more.</p>
                                    <p>On my days off, I started taking classes to finish an Associate of Science degree in Graphic Design, one of which was an introductory UX class. It changed everything, giving me an avenue to do all of the things I was good at: ask questions, explore new topics, collect and synthesize data, create a visual design system & rules, and combine all of these aspects to create a  thoughtful digital experience. It also helped me realize that my work can have a tangible impact on real people.</p>
                                    <p>I decided to knuckle down and make a transition to UX. I stopped taking freelance clients, quit my job, and went to ArtCenter College of Design to study Interaction Design. I worked harder and studied more than I ever had before.</p>
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
                                    <button class="notch-small button flex flex-row gap-1 pl-2 items-center font-main sweep-hover" @click="toggleOne">
                                        <p class="uppercase text-xs tracking-widest">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                                        <div class="h-6 w-6 flex justify-center items-center">
                                            <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <p class="ml-4"><span class="font-bold">I've resolved to always try my best to contribute to meaningful work</span> and what I strive to embody is that by empathetically balancing user needs and regularly testing iterations we can create products that enhance the way we live and interact.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-full content-center z-20 bg-black relative">
            <div class="container px-4 sm:px-0 mx-auto py-32">

                <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16">
                    <div class="sticky top-14 z-30 col-span-1 md:col-span-3 h-12 bg-blackFaded backdrop-filter backdrop-blur-sm md:h-20 pl-0 md:pl-8 border-white border border-t-4 flex flex-row text-white items-center space-x-6">
                        <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                            <FontAwesomeIcon :icon="['fas', 'address-card']" class="text-3xl" />
                        </div>
                        <h1 class="text-xl font-title title-bold">Core Competencies</h1>
                    </div>
                    <div class="col-span-1 bg-white p-4 space-y-8 self-start">
                        <div class="w-full flex justify-center bg-transparent">
                            <img src="/Brand/Core_DesignResearch.svg" alt="Example Illustration Depicting Research via White Boarding and Post-Its" class="md:w-full">
                        </div>
                        <div class="w-full">
                            <div class="w-full">
                                <h1 class="top-hash-mark-lightgray font-title title-bold text-xl text-grayDarker">Design Research</h1>
                            </div>
                            <div class="pt-4">
                                <PillsPrimary :tags="designResearch"></PillsPrimary>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 bg-white p-4 space-y-8 self-start">
                        <div class="w-full flex justify-center bg-transparent">
                            <img src="/Brand/Core_VisualDesign.svg" alt="Example Illustration Depicting the Visual Design and Alteration of a Design System" class="md:w-full">
                        </div>
                        <div class="w-full">
                            <div class="w-full">
                                <h1 class="top-hash-mark-lightgray font-title title-bold text-xl text-grayDarker">Visual Design</h1>
                            </div>
                            <div class="pt-4">
                                <PillsPrimary :tags="visualDesign"></PillsPrimary>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1 bg-white p-4 space-y-8 self-start">
                        <div class="w-full flex justify-center bg-transparent">
                            <img src="/Brand/Core_Prototyping.svg" alt="Example Illustration Depicting the Connections Between Prototyped Wireframes" class="md:w-full">
                        </div>
                        <div class="w-full">
                            <div class="w-full">
                                <h1 class="top-hash-mark-lightgray font-title title-bold text-xl text-grayDarker">High Fidelity Prototyping</h1>
                            </div>
                            <div class="pt-4">
                                <PillsPrimary :tags="highFidelityPrototyping"></PillsPrimary>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="w-full content-center z-20 bg-black relative">
            <div class="container px-4 sm:px-0 mx-auto py-32">

                <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-16">
                    <div class="sticky top-14 z-30 col-span-1 md:col-span-3 h-12 bg-blackFaded backdrop-filter backdrop-blur-sm md:h-20 pl-0 md:pl-8 border-white border border-t-4 flex flex-row text-white items-center space-x-6">
                        <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                            <FontAwesomeIcon :icon="['fas', 'shapes']" class="text-3xl" />
                        </div>
                        <h1 class="text-xl font-title title-bold">A Bit of This, a Bit of That</h1>
                    </div>
                    <div class="col-span-1 md:col-span-3 bg-transparent pl-0 md:pl-8 flex flex-row text-white items-center space-x-6">
                        <p class="font-main text-sm text-grayLightPrimary md:text-whiteFaded">I love to learn, but wouldn’t call myself an expert on these technologies or processes just yet. I’m always eager to explore and add to my toolkit.</p>
                    </div>
                    <div class="col-span-1 md:col-span-3 grid grid-cols1 md:grid-cols-3 bg-mint p-4 lg:p-16 gap-4 lg:gap-16">
                        <div class="col-span-1 bg-blackFaded p-4 space-y-8 self-start">
                            <div class="w-full">
                                <div class="w-full flex flex-row justify-start items-center space-x-4">
                                    <div class="w-8 h-8 flex justify-center items-center">
                                        <FontAwesomeIcon :icon="['fas', 'cubes']" class="text-xl text-white" />
                                    </div>
                                    <div class="w-full">
                                        <h1 class="font-title title-bold text-xl text-white pt-1">3D</h1>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <ul class="list-none flex flex-row flex-wrap gap-1">
                                        <PillsSecondary :tags="tagList1"></PillsSecondary>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 bg-blackFaded p-4 space-y-8 self-start">
                            <div class="w-full">
                                <div class="w-full flex flex-row justify-start items-center space-x-4">
                                    <div class="w-8 h-8 flex justify-center items-center">
                                        <FontAwesomeIcon :icon="['fas', 'code']" class="text-xl text-white" />
                                    </div>
                                    <div class="w-full">
                                        <h1 class="font-title title-bold text-xl text-white pt-1">Code</h1>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <PillsSecondary :tags="tagList2"></PillsSecondary>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-1 bg-blackFaded p-4 space-y-8 self-start">
                            <div class="w-full">
                                <div class="w-full flex flex-row justify-start items-center space-x-4">
                                    <div class="w-8 h-8 flex justify-center items-center">
                                        <FontAwesomeIcon :icon="['fas', 'thumbs-up']" class="text-xl text-white" />
                                    </div>
                                    <div class="w-full">
                                        <h1 class="font-title title-bold text-xl text-white pt-1">Misc.</h1>
                                    </div>
                                </div>
                                <div class="pt-4">
                                    <PillsSecondary :tags="tagList3"></PillsSecondary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <!-- <div class="w-full content-center z-20 bg-black relative">
            <div class="container px-4 sm:px-0 mx-auto py-32">
                <div class="notch-large w-full pb-4 bg-transparent md:bg-mint space-y-6">
                    <div class="w-full h-14 md:h-20 pl-0 md:pl-8 flex flex-row text-white items-center space-x-6">
                        <div class="h-12 w-12 flex flex-row justify-items-center items-center hidden md:grid">
                            <FontAwesomeIcon :icon="['fas', 'shapes']" class="text-3xl" />
                        </div>
                        <h1 class="text-2xl font-title title-black">A Bit of This, A Bit of That</h1>
                    </div>
                    <div class="pl-8">
                        <p class="font-main text-sm text-grayLightPrimary md:text-whiteFaded">I love to learn, but wouldn’t call myself an expert on these technologies or processes just yet. I’m always eager to explore and add to my toolkit.</p>
                    </div>
                    <div class="ml-8 mr-4 p-4 bg-white md:bg-whiteFaded notch">
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
        </div> -->
        <div class="w-full content-center z-20 bg-white relative">
            <div class="container px-4 sm:px-0 mx-auto py-32 bg-transparent space-y-16 md:space-y-32">

                <div class="w-full grid gap-16 md:gap-32 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="col-span-1">
                        <div class="space-y-8">
                            <h1 class="top-hash-mark-lightgray font-title title-bold text-xl text-grayDarkest">
                                Work Philosophy
                            </h1>
                            <div class="w-full space-y-4 font-main">
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
                            <h1 class="top-hash-mark-lightgray font-title title-bold text-xl text-grayDarkest">
                                In my Free Time
                            </h1>
                            <div class="w-full space-y-4 font-main">
                                <p class="text-sm">Even if we’re not lucky enough to work together, if any of my other interests resonate with you, please reach out! I’m always open to hit a tennis court, relax at a brewery, or sit down for some gaming.</p>
                                <PillsPrimary :tags="freeTime"></PillsPrimary>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full flex flex-col justify-center space-y-px">
                    <div class="w-full flex justify-center space-x-px">
                        <ImageTiny imgSrc="/Brand/About_Charlie.jpg" imgAlt="Charlie is a short-haired, mostly dark gray cat, with a little white moustache." />
                        <ImageTiny imgSrc="/Brand/About_Burger.jpg" imgAlt="A fig-and-bacon cheeseburger with arugula and a side of fries from Firestone Walker." />
                        <ImageTiny imgSrc="/Brand/About_Zeus.jpg" imgAlt="Zeus is a long-haired, fluffy white cat with a large gray splotch on his back that comes over the top of his head like a mask." />
                    </div>
                    <div class="w-full flex justify-center space-x-px">
                        <ImageTiny imgSrc="/Brand/About_Beer.jpg" imgAlt="I used to work as a beer buyer, right when hard seltzers were exploding in popularity. This is a beer from Monkish, one of my favorite breweries." />
                        <ImageTiny imgSrc="/Brand/About_Travel.jpg" imgAlt="I don't actually get to travel a lot, anymore." />
                        <ImageTiny imgSrc="/Brand/About_Tacos.jpg" imgAlt="I don't usually take pictures of my tacos, since we get pretty standard street tacos from a local stand. These are special, though. They're Villa's Tacos; 3 different tacos, each with a different meat and different toppings." />
                    </div>
                    <div class="w-full flex justify-center space-x-px">
                        <ImageTiny imgSrc="/Brand/About_Dodgers.jpg" imgAlt="Couldn't really explain why but somehow I became obsessed with the Dodgers and baseball in 2024. Never been interested in the sport before then." />
                        <ImageTiny imgSrc="/Brand/About_Pizza.jpg" imgAlt="This is just a pizza. You could put almost any pizza in front of me and I'd probably like it." />
                        <ImageTiny imgSrc="/Brand/About_Music.jpg" imgAlt="My partner surprised me with tickets to see Odesza for my birthday. It was pretty great. (That's an understatement.)" />
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
        // isExpanded2: {
        //     '3d': false,
        //     'code': false,
        //     'misc': false
        // },
        designResearch: ['User Interviews', 'Contextual Analysis', 'Affinity Mapping', 'Competitive Research', 'Surveys', 'Insights', 'Usability Testing'],
        visualDesign: ['Design Systems', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'Adobe AfterEffects', 'Sketching', 'Storyboarding', 'Color Theory', 'Visual Communication', 'Visual Hierarchy', 'Progressive Disclosure', 'Iconography'],
        highFidelityPrototyping: ['Figma', 'Wireframing', 'Interface Design', 'Microinteractions', 'Animations', 'Front-end Development', 'Visual Studio Code', 'GitHub'],
        tagList1: [
            { label: 'Cinema4D', level: 'Intermediate' },
            { label: 'Unity', level: 'Beginner' },
            { label: 'SolidWorks', level: 'Intermediate' },
            { label: 'KeyShot', level: 'Beginner' }
        ],
        tagList2: [
            { label: 'HTML', level: 'Advanced'},
            { label: 'CSS', level: 'Advanced'},
            { label: 'JavaScript', level: 'Intermediate'},
            { label: 'Vue.js', level: 'Intermediate' },
            { label: 'Nuxt.js', level: 'Intermediate' },
            { label: 'Python', level: 'Beginner' }
        ],
        tagList3: [
            { label: 'ProtoPie', level: 'Beginner' },
            { label: 'Origami Studio', level: 'Heard of it' },
            { label: 'Motion Design', level: 'Intermediate' }
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
        // },
        // anySectionExpanded() {
        //     return Object.values(this.isExpanded2).some(status => status);
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        toggleOne() {
            this.isExpanded = !this.isExpanded
        },
        // toggleAll() {
        //     const newState = !this.isAllExpanded;
        //     // Toggle all sections at once
        //     this.isExpanded2 = {
        //         '3d': newState,
        //         'code': newState,
        //         'misc': newState
        //     };
        // },
        handleScroll() {
            const scrolled = window.scrollY;
            const offset = scrolled * 0.5;
            if (this.$refs.parallaxImage) {
                this.$refs.parallaxImage.style.transform = `translateY(${offset}px)`;
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

#perspectiveSlow {
    transition: transform 0.2s ease-out;
}

.fa, .fas, .far, .fal, .fad, .fab {
    min-width: 1em; /* Ensures icons have a default width */
    min-height: 1em; /* Ensures icons have a default height */
}
</style>

<style scoped>
.sweep-hover {
  background: linear-gradient(#505050 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #505050;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #FFFFFF;
}
</style>