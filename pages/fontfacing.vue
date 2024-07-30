<template>
    <div>
        <CustomCursor />
        <NavBar />

        <!-- TITLE AND VISUAL -->
        <IntroTitle :bgColor="bgColor" mediaBackground="bg-fontfacingGreen">
            <template #title>{{ project.title }} —</template>
            <template #media>
                <div class="w-full flex justify-center">
                    <LottieParent bgColor="bg-fontfacingGreen" :animation-data="animationData"></LottieParent>
                </div>
            </template>
        </IntroTitle>

        <!-- CASE STUDY INTRO -->
        <IntroStructure>
            <IntroWork :showDisclaimer="false">
                <template #project>
                    <span class="font-bold">FontFacing</span>: an AI-Driven Typography Design Application
                </template>
                <template #direction>
                    How might we visually integrate AI features into the experience of a design platform?
                </template>
                <template #disclaimer>
                </template>
                <template #info>
                    <CopyPills 
                        section-name="Info"
                        :items="['Desktop App', '14 Weeks', 'May - August 2023', 'Solo Project']">
                    </CopyPills>
                </template>
                <template #tools>
                    <CopyPills 
                        section-name="Tools"
                        :items="['Figma', 'RunwayML']">
                    </CopyPills>
                </template>
                <template #concise>
                    <ConciseSwitch v-model="isConcise"></ConciseSwitch>
                </template>
            </IntroWork>

            <IntroOverview v-if="!isConcise">
                <template #challenges>
                    <ul class="list-disc list-outside pl-4 space-y-4">
                        <li>Current practice seems to incorporate AI features using simplistic inputs, as if they’re an add-on to the experience, an expression of feature creep. The biggest challenge, therefore, was thinking of a way to take the interface beyond the typical design software with a text prompt box tacked onto it.</li>
                        <li>I solved this by making AI the driving force of the app, rather than an additional feature. This includes interface elements like an analysis window, which shows how the training model is analyzing the designer’s drawn shapes, as well as color highlights to indicate where/how to interact with the AI-specific features.</li>
                    </ul>
                </template>
                <template #concept>
                    <p>The concept is based on the idea that FontFacing (and the underlying AI) will analyze your digital design/inputs and create a training model as you work. When you make changes to one character, FontFacing would be able to analyze them and make the same changes, if necessary, to the rest of the typeface. This is reflected in the visual design of the interface, making it easier for designers to understand when, where, why, and how the AI features are operating within their workflow.</p>
                </template>
                <template #role>
                    <p>As a solo project, I was responsible for all aspects of the project, ranging from research to conceptualization, as well as wireframing, designing, and prototyping.</p>
                </template>
                <template #process>
                    <p>I did some firsthand research on AI by creating training models (to test AI pattern recognition and the resulting output) then did rounds of ideation. I iterated my designs, tested the interface with some designers, and created a visual design system and prototype in Figma.</p>
                    <PillsAlone :items="['Primary Research', 'Low Fidelity', 'Workflow Map', 'Wireframing', 'Comparative Analysis', 'Iteration', 'Heuristic Analysis', 'Design System', 'Prototyping']"></PillsAlone>
                </template>
            </IntroOverview>
        </IntroStructure>

        <!-- INTRO HIGHLIGHTS -->

        <!-- HOW MIGHT WE & HERO IMAGE -->
        <IntroHowMightWe
            how="How might we..."
            direction="...visually integrate artificial intelligence features into the user interface of a design platform?"
            title="Color Highlights Within the Interface"
            :bgColor="bgColor"
        >
            <template #caption>
                <p class="pl-0 md:pl-8 font-main text-sm">The majority of the interface involves shades of gray, as with most major design apps. The introduction of any color would be a highlight. A bright blue and a middle purple are used to bring attention to the AI features, sometimes alone (active/history) and sometimes as a linear gradient (generate something).</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Work/Fontfacing/0_Cover_Small.png"
                    srcset-medium="/Work/Fontfacing/0_Cover_Med.png"
                    srcset-large="/Work/Fontfacing/0_Cover_Full.png"
                    alt-text="A mockup of a desktop app meant for typeface design, showing a working canvas with one glyph, toolbars, live view of the entire typeface, and an analysis window showing the training model as it analyzes inputs in real time."
                />
            </template>
        </IntroHowMightWe>

        <!-- SIDE SCROLLER WITH FEATURE CALL-OUTS -->
        <IntroHighlights 
            title="Highlights"
        >

            <!-- SCROLLER CONTENT START -->


            <ScrollerImage
                :srcset = "{
                    small: '/Work/Fontfacing/0_TabBar.png',
                    medium: '/Work/Fontfacing/0_TabBar.png',
                    large: '/Work/Fontfacing/0_TabBar.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="A tab bar to select process stage" 
                alt-text="One detail of the app interface which shows a series of buttons (Sketch, Live Generation, Focus, Letterspacing) which users can use to move between working stages" 
                imageParent="h-64 md:h-96 w-80 md:w-128" 
            >
                <template #caption>
                    <p>Since the typeface design process works in well defined stages, albeit with some back and forth, this tab bar allows the designer to indicate where in the process they are and to see when the native AI platform will be actively learning versus actively generating or adjusting.</p>
                </template>
            </ScrollerImage>

            <ScrollerImage
                :srcset = "{
                    small: '/Work/Fontfacing/0_AnalysisWindow.png',
                    medium: '/Work/Fontfacing/0_AnalysisWindow.png',
                    large: '/Work/Fontfacing/0_AnalysisWindow.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="Show how the platform analyzes" 
                alt-text="One detail of the app interface which shows a window within the sidebar, Analysis, with some realtime AI analysis" 
                imageParent="h-64 md:h-96 w-60 md:w-72" 
            >
                <template #caption>
                    <p>A specific window displays how the AI is processing input and also gives designers the opportunity to for manual input within that process.</p>
                </template>
            </ScrollerImage>

            <ScrollerImage
                :srcset = "{
                    small: '/Work/Fontfacing/0_ContextToolbar.png',
                    medium: '/Work/Fontfacing/0_ContextToolbar.png',
                    large: '/Work/Fontfacing/0_ContextToolbar.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="Context Bar" 
                alt-text="One detail of the app interface which shows the canvas with a glyph being edited; below the canvas is a toolbar with options that are specific to what the user's currently doing on the canvas; this canvas has a completed letter but nothing's selected, so the context bar has a text input with the label text reading, `Describe what you'd like to generate or change about this letterform`, along with a `Generate` button and another button for additional options" 
                imageParent="h-64 md:h-96 w-80 md:w-128" 
            >
                <template #caption>
                    <p>As is being used more and more often in design programs, a contextual toolbar moves around the interface depending on what you’re interacting with and gives you context-specific options that may be particularly relevant. This allows AI features to be front-and-center without obstructing the workflow.</p>
                </template>
            </ScrollerImage>


            <!-- SCROLLER CONTENT END -->


        </IntroHighlights>

        <!-- PROCESS CONTENT -->
        <!-- 1. Foundational Research -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Foundational Research"
            iconPack="fas"
            iconName="magnifying-glass"
            :visibilityMode="1"
            headerRef="1"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>I started this project by researching how training models are made and making a couple myself. By using the available tools at RunwayML I was able to train image generating models in order to see, firsthand, how an AI system analyzes the material its given and, thereafter, what it can produce.</p>
                <p>After also doing some research into AI platforms working with vector graphics, I solidified the concept I had in mind: a design and editing platform working with SVGs, supported and driven by AI to make it faster and easier for designers to build out the entirety of a typeface.</p>
            </ContentBlurb>

            <ContentMediaWithCaption
                title="First Training Models"
            >
                <template #caption>
                    <p class="mb-4">I made my first training model from an assortment of photos of beer. The results are a little odd, with some images looking okay at a cursory glance but more noticeable errors the closer you look.</p>
                    <p>I made a second training model using a subset of the beer photos selected for their uniformity (mostly similar photos of different, singular 16-ounce cans of beer on a white table with a white background). The depiction of beer cans is fantastic, but any other aspect of the photos, like if I asked for a background other than white, would be extremely abstracted.</p>
                </template>
                <template #media>
                    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8">
                        <ImagePrimary 
                            srcsetLarge="/Work/Fontfacing/1_PrimaryResearch/1_1a.jpg"
                            srcsetMedium="/Work/Fontfacing/1_PrimaryResearch/1_1a.jpg"
                            srcsetSmall="/Work/Fontfacing/1_PrimaryResearch/1_1a.jpg"
                            altText="An AI-generated image of 2 glasses of beer on a misshapen table with a completely inaccurate hand."
                        />
                        <ImagePrimary 
                            srcsetLarge="/Work/Fontfacing/1_PrimaryResearch/1_2b.jpg"
                            srcsetMedium="/Work/Fontfacing/1_PrimaryResearch/1_2b.jpg"
                            srcsetSmall="/Work/Fontfacing/1_PrimaryResearch/1_2b.jpg"
                            altText="An AI-generated image of 2 beer cans on a white table with a white background."
                        />
                    </div>
                </template>
            </ContentMediaWithCaption>

            <ContentMediaWithCaption
                title="Type-Specific Training Model"
            >
                <template #caption>
                    <p>I realized pretty quickly that I wanted to use this project to work with vector graphics, so I took the opportunity to make a training model to test more basic shape creation. Since RunwayML’s resources are limited to more straightforward image/video tools, rather than vector graphics, I created 30 jpgs showing a singular, capital, letter ‘A’ in different typefaces. The resulting output recognizes the shapes and patterns, but not that they’re letters.</p>
                </template>
                <template #media>
                    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-8">
                        <VideoPlayer
                        :videoSources="[
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Input2.mp4', type: 'video/mp4' },
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Input2.mp4', type: 'video/mp4' },
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Input2.mp4', type: 'video/mp4' }
                            ]">
                        </VideoPlayer>
                        <VideoPlayer
                        :videoSources="[
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Output2.mp4', type: 'video/mp4' },
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Output2.mp4', type: 'video/mp4' },
                            { src: '/Work/Fontfacing/1_PrimaryResearch/1_3_Output2.mp4', type: 'video/mp4' }
                            ]">
                        </VideoPlayer>
                    </div>
                </template>
            </ContentMediaWithCaption>

            <ContentMediaWithCaption
                title="Testing Existing AI-Generation"
            >
                <template #caption>
                    <p>As I narrowed down my concept to working with SVGs, I wanted to check on current abilities to create them. I checked a few different existing AI platforms to see how they responded. To the left is an SVG made by asking ChatGPT to make the XML code for a capital letter ‘A’ while on the right is one created by Adobe Illustrator’s beta AI tools.</p>
                </template>
                <template #media>
                    <div class="flex flex-col space-y-1">
                        <div class="bg-white rounded-sm md:rounded-md">
                            <ImagePrimary 
                                srcsetLarge="/Work/Fontfacing/1_PrimaryResearch/1_4_Current.png"
                                srcsetMedium="/Work/Fontfacing/1_PrimaryResearch/1_4_Current.png"
                                srcsetSmall="/Work/Fontfacing/1_PrimaryResearch/1_4_Current.png"
                                altText="An AI-generated image of 2 beer cans on a white table with a white background."
                            />
                        </div>
                        <div class="pl-4 md:pl-8">
                            <p class="font-main text-grayDarker italic text-xs">Left: vector made via XML from ChatGPT; Right: generated by Adobe Illutrator’s beta AI.</p>
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption>

        </ProcessPrimary>

        <!-- 2. Exploring Low Fidelity -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Exploring Low Fidelity"
            iconPack="fas"
            iconName="pencil"
            :visibilityMode="1"
            headerRef="2"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>My initial concept was to create a web-based app where designers could experiment with AI to create typefaces. The idea would’ve acted similarly to something like Dall•e, where there would be pre-trained models that users could use for generation.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- 3. Mapping the WOrkflow -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Mapping the WOrkflow"
            iconPack="fas"
            iconName="map"
            :visibilityMode="1"
            headerRef="3"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p><span class="font-bold">I should’ve done this before starting to wireframe</span> but, to be honest, my original concept was more explorative than it was purposeful.</p>
                <p>The current process to design a typeface (if we ignore the researching, brainstorming, and briefing, which is it’s own in-depth preparatory process) is a long, back and forth workflow. As one would expect, it’s more in-depth than I can adequately convey in a simple process flow and can take anywhere from months, for a single font style with a [relatively] small character set, or years, in the case of multiple font styles, special characters, ligatures, etc.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- 4. Back to Designing -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Back to Designing"
            iconPack="fas"
            iconName="object-group"
            :visibilityMode="1"
            headerRef="4"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>With my initial insights and the typeface design workflow firmly in mind, I went back to my  wire framing process. At this point I decided that <span class="font-bold">my concept should be firmly designed for designers to complement the typeface design process</span>, rather than a simplistic, explorative experience.</p>
                <p>This would allow the AI features to be used as an actual tool within the design process, making use of the AI and potentially improving the technology, instead of a novelty or side project.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- 5. Research & Prep -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Research & Prep"
            iconPack="fas"
            iconName="arrows-to-circle"
            :visibilityMode="1"
            headerRef="5"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>I entered into this project with a very cursory knowledge of AI tools, never having used any myself. To begin, I created a few training models using Runway ML’s easy to use AI tools for insight into how AI parses information and what comes from the resulting training model. I then mapped out the process of creating a typeface and looked at existing tools within the space.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- 6. Prototyping -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Prototyping"
            iconPack="fas"
            iconName="pen-to-square"
            :visibilityMode="1"
            headerRef="6"
            :isConcise="isConcise"
        >
            <ContentBlurb>
                <p>I could feel the final versions beginning to take shape, but there are still some details to figure out. The modal was perplexing me. It’s a good introduction to the AI features, but perhaps only for a new user or for a casual designer. For the experienced designer the modal could simply be obstructive to beginning work.</p>
            </ContentBlurb>
        </ProcessPrimary>

        <!-- OUTRO BEGINNING -->
        <OutroHighlightsWork :bgColor="bgColor">
            <template #central>
                <div class="w-full flex flex-col space-y-64">
                    <div class="bg-fontfacingGreen w-full flex justify-center p-32 rounded-md">
                        <div class="w-48 text-white flex flex-col space-y-32">
                            <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.68 216" class="fill-current" alt="Simplistic logo of a capital letter F, the bottom has serifs but the top doesn't; one corner is empty with a square moving into the space to fill it, like a brick being placed into an empty spot in a wall.">
                                <defs>
                                </defs>
                                <rect class="cls-1" x="9.47" y="6.52" width="57.99" height="57.99" transform="translate(-7.88 11.17) rotate(-15)"/>
                                <rect class="cls-1" x="75.95" y="13.03" width="108.73" height="57.99"/>
                                <path class="cls-1" d="M75.95,149.23v42.4c0,6.65.85,10.94,5.45,13.24,5.04,2.51,12,2.38,12.3,3.03.4.82.13,7.02,0,7.44-.16.56-1.32.66-12.05.66s-15.33-1.24-34.7-1.24-23.96,1.24-34.69,1.24-11.89-.1-12.05-.66c-.13-.42-.4-6.62,0-7.44.3-.65,7.26-.52,12.3-3.03,4.6-2.3,5.45-6.59,5.45-13.24v-120.61h57.99v27.02h86.99v51.19h-86.99Z"/>
                            </svg>
                            <svg width="205" height="22" viewBox="0 0 205 22" class="fill-current" xmlns="http://www.w3.org/2000/svg" alt="Simplistic logo of the word Fontfacing; the leftmost letters are thick and wide and, as they move right, they get lighter and skinnier.">
                                <path d="M8.13612 6.12219V8.84219H17.5441V14.3782H8.13612V21.4502H0.168123V0.618195H23.6561V6.12219H8.13612ZM35.5746 0.298195C37.5373 0.298195 39.3293 0.543528 40.9506 1.03419C42.572 1.52486 43.9693 2.23953 45.1426 3.17819C46.316 4.11686 47.2226 5.24753 47.8626 6.57019C48.5026 7.87153 48.8226 9.34353 48.8226 10.9862C48.8226 11.9249 48.7053 12.8102 48.4706 13.6422C48.2573 14.4529 47.948 15.2209 47.5426 15.9462C47.1373 16.6502 46.636 17.3009 46.0386 17.8982C45.4413 18.4955 44.78 19.0182 44.0546 19.4662C42.8813 20.2129 41.5693 20.7889 40.1186 21.1942C38.6893 21.5782 37.1533 21.7702 35.5106 21.7702C33.4413 21.7702 31.5853 21.5142 29.9426 21.0022C28.3213 20.4689 26.9453 19.7435 25.8146 18.8262C24.684 17.8875 23.82 16.7782 23.2226 15.4982C22.6466 14.1969 22.3586 12.7782 22.3586 11.2422C22.3586 10.6662 22.4013 10.1115 22.4866 9.57819C22.572 9.04486 22.6893 8.53286 22.8386 8.04219C23.0093 7.53019 23.212 7.03953 23.4466 6.57019C23.7026 6.10086 23.98 5.66353 24.2786 5.25819C24.5986 4.83153 24.9506 4.43686 25.3346 4.07419C25.7186 3.69019 26.124 3.32753 26.5506 2.98619C27.7026 2.11153 29.036 1.45019 30.5506 1.00219C32.0866 0.532861 33.7613 0.298195 35.5746 0.298195ZM35.4786 5.4502C34.5186 5.4502 33.644 5.56753 32.8546 5.80219C32.0653 6.03686 31.3826 6.37819 30.8066 6.82619C30.5933 6.97553 30.3906 7.14619 30.1986 7.33819C30.0066 7.53019 29.836 7.74353 29.6866 7.97819C29.5373 8.19153 29.3986 8.42619 29.2706 8.68219C29.1426 8.91686 29.036 9.16219 28.9506 9.41819C28.8866 9.67419 28.8333 9.95153 28.7906 10.2502C28.748 10.5275 28.7266 10.8155 28.7266 11.1142C28.7266 11.9889 28.8973 12.7782 29.2386 13.4822C29.58 14.1649 30.0493 14.7515 30.6466 15.2422C31.2653 15.7115 31.9906 16.0742 32.8226 16.3302C33.676 16.5649 34.5933 16.6822 35.5746 16.6822C36.044 16.6822 36.492 16.6609 36.9186 16.6182C37.3666 16.5542 37.7826 16.4582 38.1666 16.3302C38.572 16.2022 38.9346 16.0529 39.2546 15.8822C39.596 15.7115 39.916 15.5089 40.2146 15.2742C40.5773 15.0395 40.8866 14.7729 41.1426 14.4742C41.3986 14.1542 41.612 13.8235 41.7826 13.4822C41.9746 13.1195 42.1133 12.7355 42.1986 12.3302C42.3053 11.9035 42.3586 11.4769 42.3586 11.0502C42.3586 10.1542 42.2093 9.36486 41.9106 8.68219C41.612 7.97819 41.164 7.39153 40.5666 6.92219C39.9693 6.45286 39.244 6.09019 38.3906 5.83419C37.5373 5.57819 36.5666 5.4502 35.4786 5.4502ZM66.4164 13.8662V0.618195H71.6964L71.6644 21.4502H66.4164L56.1764 7.94619L56.1444 21.4502H50.8964L50.9284 0.618195H56.2084L66.4164 13.8662ZM84.9524 21.4502H80.6964V4.17019H74.1364V0.618195H91.5444V4.17019H84.9524V21.4502ZM99.2701 3.75419V9.57819H106.246V12.6502H99.2701V21.4502H95.6861V0.618195H109.19V3.75419H99.2701ZM116.354 21.4502H113.218L120.226 0.618195H123.522L130.498 21.4502H127.234L125.762 16.8422H117.794L116.354 21.4502ZM124.962 14.2502L121.762 4.58619L118.562 14.2502H124.962ZM147.601 5.51419C147.388 4.98086 147.153 4.5222 146.897 4.1382C146.662 3.75419 146.406 3.44486 146.129 3.21019C145.852 2.95419 145.542 2.77286 145.201 2.66619C144.881 2.53819 144.54 2.47419 144.177 2.47419C143.708 2.47419 143.27 2.55953 142.865 2.73019C142.481 2.90086 142.14 3.15686 141.841 3.49819C141.542 3.83953 141.276 4.26619 141.041 4.77819C140.806 5.26886 140.604 5.83419 140.433 6.47419C140.284 7.11419 140.166 7.81819 140.081 8.58619C140.017 9.35419 139.985 10.1862 139.985 11.0822C139.985 12.4689 140.081 13.6955 140.273 14.7622C140.465 15.8075 140.742 16.6929 141.105 17.4182C141.468 18.1222 141.916 18.6555 142.449 19.0182C143.004 19.3809 143.633 19.5622 144.337 19.5622C144.7 19.5622 145.041 19.4982 145.361 19.3702C145.702 19.2422 146.022 19.0502 146.321 18.7942C146.641 18.5169 146.929 18.1862 147.185 17.8022C147.462 17.3969 147.708 16.9489 147.921 16.4582C147.942 16.4795 147.996 16.5222 148.081 16.5862C148.188 16.6502 148.305 16.7249 148.433 16.8102C148.582 16.8742 148.732 16.9489 148.881 17.0342C149.03 17.1195 149.169 17.2049 149.297 17.2902C149.446 17.3542 149.564 17.4182 149.649 17.4822C149.734 17.5249 149.798 17.5569 149.841 17.5782C149.585 18.2182 149.276 18.8049 148.913 19.3382C148.572 19.8502 148.156 20.2875 147.665 20.6502C147.196 21.0129 146.673 21.2902 146.097 21.4822C145.521 21.6742 144.881 21.7702 144.177 21.7702C143.11 21.7702 142.161 21.5462 141.329 21.0982C140.497 20.6289 139.793 19.9462 139.217 19.0502C138.662 18.1329 138.236 17.0022 137.937 15.6582C137.66 14.3142 137.521 12.7782 137.521 11.0502C137.521 9.91953 137.585 8.87419 137.713 7.9142C137.841 6.93286 138.033 6.04753 138.289 5.25819C138.545 4.44753 138.865 3.74353 139.249 3.14619C139.633 2.52753 140.07 2.00486 140.561 1.57819C141.052 1.15153 141.596 0.831528 142.193 0.618195C142.812 0.404861 143.473 0.298195 144.177 0.298195C144.881 0.298195 145.5 0.404861 146.033 0.618195C146.588 0.810195 147.068 1.09819 147.473 1.48219C147.9 1.84486 148.273 2.27153 148.593 2.76219C148.913 3.23153 149.19 3.75419 149.425 4.33019C149.404 4.33019 149.34 4.36219 149.233 4.4262C149.148 4.49019 149.041 4.56486 148.913 4.65019C148.785 4.73553 148.646 4.83153 148.497 4.93819C148.369 5.02353 148.241 5.10886 148.113 5.19419C147.985 5.2582 147.868 5.3222 147.761 5.38619C147.676 5.45019 147.622 5.49286 147.601 5.51419ZM159.276 21.4502V0.618195H161.196V21.4502H159.276ZM181.455 17.9942L181.487 0.618195H182.799L182.767 21.4502H181.135L175.151 3.75419H175.055L175.023 21.4502H173.711L173.743 0.618195H175.503L181.327 17.9942H181.455ZM203.403 19.8182C203.275 20.1169 203.115 20.3942 202.923 20.6502C202.752 20.8849 202.55 21.0875 202.315 21.2582C202.08 21.4289 201.824 21.5569 201.547 21.6422C201.27 21.7275 200.96 21.7702 200.619 21.7702C199.915 21.7702 199.307 21.5782 198.795 21.1942C198.304 20.7889 197.899 20.1595 197.579 19.3062C197.259 18.4315 197.024 17.3222 196.875 15.9782C196.747 14.6129 196.683 12.9702 196.683 11.0502C196.683 9.85553 196.715 8.76753 196.779 7.78619C196.864 6.78353 196.982 5.88753 197.131 5.09819C197.28 4.28753 197.462 3.58353 197.675 2.98619C197.91 2.38886 198.176 1.89819 198.475 1.51419C198.795 1.10886 199.136 0.810195 199.499 0.618195C199.883 0.404861 200.31 0.298195 200.779 0.298195C201.27 0.298195 201.696 0.404861 202.059 0.618195C202.443 0.831528 202.774 1.11953 203.051 1.48219C203.35 1.84486 203.595 2.27153 203.787 2.76219C203.979 3.23153 204.15 3.74353 204.299 4.29819L203.563 4.65019C203.392 3.96753 203.2 3.40219 202.987 2.9542C202.774 2.48486 202.539 2.11153 202.283 1.83419C202.048 1.55686 201.792 1.35419 201.515 1.22619C201.259 1.09819 201.003 1.03419 200.747 1.03419C200.384 1.03419 200.043 1.13019 199.723 1.3222C199.424 1.5142 199.158 1.80219 198.923 2.18619C198.688 2.57019 198.475 3.03953 198.283 3.59419C198.112 4.14886 197.963 4.79953 197.835 5.5462C197.728 6.29286 197.643 7.12486 197.579 8.04219C197.515 8.93819 197.483 9.9302 197.483 11.0182C197.483 12.7035 197.536 14.1755 197.643 15.4342C197.75 16.6715 197.92 17.7062 198.155 18.5382C198.411 19.3702 198.742 19.9995 199.147 20.4262C199.552 20.8315 200.043 21.0342 200.619 21.0342C201.152 21.0342 201.6 20.8955 201.963 20.6182C202.326 20.3195 202.614 19.9142 202.827 19.4022C203.062 18.8902 203.222 18.2929 203.307 17.6102C203.414 16.9062 203.467 16.1489 203.467 15.3382V12.7462H201.067V11.9782H204.267V21.4502H203.531L203.403 19.8182Z"/>
                            </svg>
                        </div>
                    </div>
                    <ImagePrimary 
                        srcsetLarge="/Work/Fontfacing/0_Cover_Full.png"
                        srcsetMedium="/Work/Fontfacing/0_Cover_Med.png"
                        srcsetSmall="/Work/Fontfacing/0_Cover_Small.png"
                        altText="A mockup of a desktop app meant for typeface design, showing a working canvas with one glyph, toolbars, live view of the entire typeface, and an analysis window showing the training model as it analyzes inputs in real time."
                    />
                    <ImagePrimary 
                        srcsetLarge="/Work/Fontfacing/7_Mockup1_Full.png"
                        srcsetMedium="/Work/Fontfacing/7_Mockup1_1080.png"
                        srcsetSmall="/Work/Fontfacing/7_Mockup1_720.png"
                        altText="A mockup of a MacBook running the desktop app, showing a working canvas with one glyph, toolbars, live view of the entire typeface, and an analysis window showing the training model as it analyzes inputs in real time."
                    />
                    <ImagePrimary 
                        srcsetLarge="/Work/Fontfacing/7_Mockup2_Full.png"
                        srcsetMedium="/Work/Fontfacing/7_Mockup2_1080.png"
                        srcsetSmall="/Work/Fontfacing/7_Mockup2_720.png"
                        altText="A mockup of a MacBook running the desktop app, but this time the canvas is blank so there's no contextual menu and the analysis window is also blank."
                    />
                </div>
            </template>
            <template #full>
                <ContentMediaWithCaption
                    title="Final Thoughts & Next Steps"
                >
                    <template #caption>
                        <p class="mb-4">As developed, the concept itself is structurally sound and I firmly believe that it could successfully empower designers. There would be a lot of difficulty surrounding the base training sets, since the platform would need extensive training on typefaces to understand the anatomy and character sets. Typefaces are intellectual property and their use for AI training could be contentious.</p>
                        <p>Given the opportunity, I would love to continue exploring this concept. The opportunities to explore micro-interactions are endless. Some of the areas I’d like to continue iterating on are the Options Bar and the Stage Slider, since there isn’t a clear indication that they’re stages of the design process meant to be moved through towards an end goal. This is also, roughly, the bare minimum the application would require to be considered a serious design application. Professional typeface design has a plethora of functions which aren’t represented here that would need to be worked into the interface in some way. Not everything can be folded into a menu.</p>
                    </template>
                    <template #media>
                        <ImagePrimary
                            srcset-small="/Work/Fontfacing/7_Mockup3_Small.png"
                            srcset-medium="/Work/Fontfacing/7_Mockup3_Med.png"
                            srcset-large="/Work/Fontfacing/7_Mockup3_Full.png"
                            alt-text="A mockup of a MacBook with the Fontfacing app opened to fullscreen to start a new project, with buttons available to start a new file, Open a file, as well as alternate open options, plus a featured banner for a trending font."
                        />
                    </template>
                </ContentMediaWithCaption>
            </template>
        </OutroHighlightsWork>

        <!-- END OF THE PAGE -->
        <PreFooter :currentProjectId="'4'" :linksVisibility="[true, true, true, false]" class="relative"/>
        <FooterSection />
    </div>
</template>
  
<script>
    import projects from '~/Assets/projects.json';
    import animationData from '~/Assets/animations/FontFacing_ImageRecognitionExample.json';

    export default {
        name: 'CaseStudyFontFacing',
        data() {
            return {
                projects: require('~/Assets/projects.json'),
                isConcise: true,
                bgColor: "gradient-fontfacing",
                animationData
            };
        },
        head: {
        title: 'Max is Wright — FontFacing Case Study',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: "Max's case study on a concept for a type design application empowered by AI. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
            }
        ],
        },
        computed: {
            project() {
                const id = '3'
                // Find the project that matches the ID
                return projects.find(p => p.id === id) || {};
            }
        },
    }
</script>

<style>
</style>