<template>
    <div>
        <CustomCursor />
        <NavBar />

        <!-- TITLE AND VISUAL -->
        <IntroTitle :bgColor="bgColor" mediaBackground="bg-tattoooBlue">
            <template #title>{{ project.title }} —</template>
            <template #media>
                <div class="w-full h-full flex justify-center">
                    <ImagePrimary 
                        srcsetLarge="/Work/Tattooo/0_Background_Full.png"
                        srcsetMedium="/Work/Tattooo/0_Background_Med.png"
                        srcsetSmall="/Work/Tattooo/0_Background_Small.png"
                        altText="A series of mockups showing multiple iPhones. Each iPhone shows a different, high-fidelity screen of a mobile app. The mobile app shows pages like Home, Messages, and Contacts in a minimal palette of white and blue."
                        additionalStyles="min-w-full min-h-full object-cover"
                    />
                    <!-- <LottieParent bgColor="bg-tattoooSecondaryDarker" :animation-data="animationData" alt="An animation showing a quick snapshot of what this app can help facilitate: when you get a tattoo idea, you can use this app to post about it, talk to an artist about it, and get the tattoo of your dreams with the artist that's right for you."></LottieParent> -->
                </div>
            </template>
            <template #info>
                <PillsAlone 
                    :items="['Mobile App', 'Role: UX Researcher, Product Designer', '14 Weeks', 'Sept - December 2022', 'Solo Project']">
                </PillsAlone>
            </template>
            <template #tools>
                <PillsAlone 
                    :items="['Figma', 'Adobe Illustrator', 'Adobe AfterEffects']">
                </PillsAlone>
            </template>
        </IntroTitle>

        <!-- CASE STUDY INTRO -->
        <IntroStructure :showDisclaimer="false">
            <template #overview>
                <span class="font-bold">Tatt.ooo</span> is a mobile app concept meant to make it easier to find tattoo artists/customers, start a conversation, and communicate your needs. Although there are features of social networks, that’s not necessarily the purpose of the platform. It’s a simplified, centralized platform for tattoo artists (rather than creating multiple social accounts in addition to maintaining a website, Yelp, etc.) and a way for their customers to find, message, schedule, and hold them accountable.
            </template>
            <template #problem>
                <ul class="list-disc list-outside pl-8 space-y-4 text-sm text-grayMiddle">
                    <li>The process of planning a new tattoo has too many different touchpoints to figure out whether an artist is the right fit.</li>
                    <li>Pricing & other details are often not discussed until after a conversation has started, which can be a barrier to entry for many people.</li>
                    <li>Tattoo artists will often only show the work that they're most proud of and viewing an artist’s work doesn't indicate whether or not the process was worthwhile for the customer. Additionally, good, local artists can be overshadowed by more popular ones due to their social media presence.</li>
                </ul>
            </template>
            <template #goals>
                <ul class="list-disc list-outside pl-8 space-y-4 text-sm text-grayMiddle">
                    <li>Decrease the number of touchpoints that customers have to utilize and put more of the necessary information and tools in one place.</li>
                    <li>Make the process more comfortable and streamlined for customers to approach and build rapport/trust with a tattoo artist. Provide an avenue for tattoo artists to be more discoverable and responsible to their customers.</li>
                </ul>
            </template>
            <template #solution>
                <ul class="list-disc list-outside pl-8 space-y-4 text-sm text-grayMiddle">
                    <li>Centralize the various touchpoints so that customers can do their searching, viewing, and contacting in one place, while also giving artists an easier, singular platform to maintain.</li>
                    <li>Create a gallery and profile system that allows for artists and their customers to both post images in a way that's connected.</li>
                    <li>Incorporate features to increase responsibility and transparency.</li>
                </ul>
            </template>
        </IntroStructure>

        <!-- INTRO HIGHLIGHTS -->

        <!-- HOW MIGHT WE & HERO IMAGE -->
        <IntroHowMightWe
            how="How might we..."
            direction="How can we make finding and working with tattoo artists easier and more trustworthy?"
            title="The problem of trying to get a tattoo"
            :bgColor="bgColor"
        >
            <template #caption>
                <p class="font-main text-sm">Finding the right tattoo artist can be a daunting, time-consuming process.</p>
                <p class="font-main text-sm mt-4">Tattoo enthusiasts typically have to navigate through multiple platforms such as Google, Yelp, and Instagram, sifting through countless search results and social media profiles. This disjointed process can lead to frustration, insufficient information, and questionable quality. Tattoo artists, similarly, struggle with effectively showcasing their skills and managing client expectations across these varied channels.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Work/Tattooo/0_Problem_Small.jpg"
                    srcset-medium="/Work/Tattooo/0_Problem_Med.jpg"
                    srcset-large="/Work/Tattooo/0_Problem_Full.jpg"
                    alt-text="Screenshots showing different mobile touchpoints when researching tattoos: Google search results, Apple Maps search results, Instagram search results, and Yelp search results."
                />
            </template>
        </IntroHowMightWe>

        <!-- SIDE SCROLLER WITH FEATURE CALL-OUTS -->
        <!-- <IntroHighlights 
            title="Highlights"
        >

            <ScrollerImage
                :srcset = "{
                    small: '/Work/Tattooo/0_TattoooHome_Small.png',
                    medium: '/Work/Tattooo/0_TattoooHome_Med.png',
                    large: '/Work/Tattooo/0_TattoooHome_Full.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="Post, search, get informed, message, and schedule in one place" 
                alt-text="A mobile app home page with a banner that says `Have an idea for a tattoo?` next to a button to `Post it`. There are also buttons for Notifications, FAQs About Tattoos, Messages, and more." 
                imageParent="h-120 md:h-160 w-56 md:w-72" 
            >
                <template #caption>
                    <p>So much of the friction from this process comes from the wide variety of touchpoints which are inconsistent between artists and studios. Why can’t we make all of this easier by putting it all in one platform? The artist can maintain a portfolio, post flash artwork, communicate with their customers, connect with potential customers, schedule appointments, and proof artwork using one service.</p>
                </template>
            </ScrollerImage>

            <ScrollerCustom
                imageParent="h-120 md:h-160 w-max" 
                title="Accountability, tracking, and additional messaging features"
            >
                <template #media>
                    <div class="flex flex-col space-y-8  w-56 md:w-72 h-full items-center justify-center mr-8">
                        <ImageStylable
                            srcset-small="/Work/Tattooo/0_Messaging2.png"
                            srcset-medium="/Work/Tattooo/0_Messaging2.png"
                            srcset-large="/Work/Tattooo/0_Messaging2.png"
                            alt-text="The Title bar of the app when using the messaging features. There's the name of the person you're messaging, a left-to-right check list with Basics, Design, Schedule, and Complete listed in order, and a button to go to the Project, so that the tattoo project can be tracked responsibly." 
                            imageStyles="rounded-sm"
                        />
                        <ImageStylable
                            srcset-small="/Work/Tattooo/0_Messaging1.png"
                            srcset-medium="/Work/Tattooo/0_Messaging1.png"
                            srcset-large="/Work/Tattooo/0_Messaging1.png"
                            alt-text="The text entry bar used in the messaging feature. Below the text entry box there are also features to add a link to something and start a new tattoo project, as well as disabled options to schedule an appointment, add an image, and more." 
                            imageStyles="rounded-none p-1.5"
                        />
                    </div>
                    <div class="flex flex-col space-y-8  w-56 md:w-72 h-full items-center justify-center p-2">
                        <ImageStylable
                            srcset-small="/Work/Tattooo/0_ProofArtwork.png"
                            srcset-medium="/Work/Tattooo/0_ProofArtwork.png"
                            srcset-large="/Work/Tattooo/0_ProofArtwork.png"
                            alt-text="The artwork proofing page within the messaging feature, titled `Feedback Request`. The tattoo artwork is featured and there's a text entry tool to add comments and feedback onto the artwork." 
                            imageStyles="rounded-sm"
                        />
                    </div>
                </template>
                <template #caption>
                    <p>When artists and customers communicate, they can start a “New Tattoo” which will require certain information to be passed along, such as the idea, location, budget, style, and would require the art to be approved by the customer before scheduling an appointment. So often, the art isn’t seen until you show up to get the tattoo but, this way, customers get some assurance and can express their needs more reasonably without the same pressure.</p>
                </template>
            </ScrollerCustom>

            <ScrollerImage
                :srcset = "{
                    small: '/Work/Tattooo/0_TattoooIdeas.png',
                    medium: '/Work/Tattooo/0_TattoooIdeas.png',
                    large: '/Work/Tattooo/0_TattoooIdeas.png',
                }" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px" 
                title="An alternative to the stress of approaching a tattoo artist" 
                alt-text="A different screen of the app titled `Tattoo Ideas` with a slider to switch to `Flash Artwork` and social media-like posts with descriptions of tattoo ideas" 
                imageParent="h-120 md:h-160 w-56 md:w-72" 
            >
                <template #caption>
                    <p>Instead of putting all of the responsibility on customers to approach tattoo artists to get the ball rolling, they can publicly post the tattoo that they want, with all of the details. This way, artists can look through the ideas they find interesting and work on the tattoos they’re passionate about.</p>
                </template>
            </ScrollerImage>

        </IntroHighlights> -->

        <!-- PROCESS CONTENT -->
        <!-- 1. Foundational Research -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Foundational Research"
            iconPack="fas"
            iconName="magnifying-glass"
            totalProcess="5"
            headerRef="1"
        >
            <!-- <ContentBlurb>
                <p>I had an idea for a platform to improve the process of finding a tattoo artist. However, it was based on my personal experiences from getting tattoos. To begin working on this platform, I started by looking at the existing tools to help connect with tattoo artists, then spoke with other tattoo enthusiasts to understand more perspectives and experiences. This helped me map customer journeys in several different ways.</p>
            </ContentBlurb> -->

            <!-- Competitive Research -->
            <!-- <ContentMediaWithCaption
                title="Competitive Research"
            >
                <template #caption>
                    <p class="mb-4">From my own experiences, I knew some of the methods used to search for tattoo artists. You could start on a listicle of artists, find the studio they look at, visit the studio’s website and find that it’s not updated, then go to the artist’s Instagram page and look at their work. You might use a website like Tattoos Wizard which is a directory of artists, but they have to register for the service to show up. You might find an amazing artist on Instagram but find out they’re not located near you.</p>
                    <p>The opportunity here is to create an entirely tattoo-focused platform which allows you to do everything related to tattooing, including searching for artists and studios, hours and scheduling, messaging and tracking, viewing art and providing feedback, and even researching the tattooing process.</p>
                </template>
                <template #media>
                    <ImagePrimary 
                        srcsetLarge="/Work/Tattooo/1_FoundationalResearch/Competitive.png"
                        srcsetMedium="/Work/Tattooo/1_FoundationalResearch/Competitive.png"
                        srcsetSmall="/Work/Tattooo/1_FoundationalResearch/Competitive.png"
                        altText="A quadrant matrix showing different positions of competitive platforms; the x-axis shows General on the left and Focused on the right, while the y-axis shows Centralized at the top and Decentralized at the bottom."
                        additionalStyles="md:px-32 lg:px-64"
                    />
                </template>
            </ContentMediaWithCaption> -->

            <!-- Interviews -->
            <!-- <ContentMediaWithCaption
                title="Interviews"
            >
                <template #caption>
                    <p>I only had 1 week for interviews, so was only able to get 3 done. My plan was to speak with people who had just one or two tattoos as well as people with many tattoos. Ideally, I would’ve also spoken with some people who didn’t have tattoos but were planning to get one. I would also like to note that my research is missing a notable perspective: customers who’ve had poor tattoo experiences.</p>
                </template>
                <template #media>
                    <div class="flex flex-wrap justify-center items-center bg-tattoooBlue rounded-sm md:rounded-md h-full py-16">
                        <div class="p-4 md:p-8 w-40 md:w-48">
                            <img src="/Work/Tattooo/1_FoundationalResearch/Interview1.png" alt="An emoji representation vaguely depicting an interview participant.">
                        </div>
                        <div class="p-4 md:p-8 w-40 md:w-48">
                            <img src="/Work/Tattooo/1_FoundationalResearch/Interview2.png" alt="An emoji representation vaguely depicting an interview participant.">
                        </div>
                        <div class="p-4 md:p-8 w-40 md:w-48">
                            <img src="/Work/Tattooo/1_FoundationalResearch/Interview3.png" alt="An emoji representation vaguely depicting an interview participant.">
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption> -->

            <!-- User Interviews & Journey Maps -->
            <ContentMediaWithCaption
                title="User Interviews & Journey Maps"
            >
                <template #caption>
                    <p>Based on some user interviews with people who've gone through the tattooing process, ranging from just once to several times, I was able to make some well-defined journey maps. The break came from looking at the journey touchpoints in terms of the different levels of technology available.</p>
                </template>
                <template #media>
                    <div class="flex flex-col justify-center items-center space-y-4 bg-tattoooBlue h-full p-4">
                        <div>
                            <img src="/Work/Tattooo/1_FoundationalResearch/Journey1.png" alt="A complex graph showing the customer journey through the tattoo process and the user's thoughts, feelings, and actions.">
                        </div>
                        <div>
                            <img src="/Work/Tattooo/1_FoundationalResearch/Journey2.png" alt="A complex graph showing the customer journey through the tattoo process and the touchpoints, goals, pain points, and opportunities.">
                        </div>
                        <div>
                            <img src="/Work/Tattooo/1_FoundationalResearch/Journey3.png" alt="A complex graph showing the customer journey through the tattoo process and the different levels of technology available or possible at each juncture, including no tech, low tech, current tech, high tech, and extreme tech.">
                        </div>
                    </div>
                </template>
            </ContentMediaWithCaption>

            <!-- Blockquote -->
            <CaseStudyTattoooBlockquote />

            <!-- Confirmation -->
            <!-- <ContentCaptionWithPostits 
                title="Confirmation" 
                gridCols="md:grid-cols-2 lg:grid-cols-4" 
            >
                <template #caption>
                </template>
                <template #postits>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p>The “problems” typically end once the tattooing process starts (with obvious exceptions)</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p>The experience overall is very personal, from the meaningfulness of the artwork to the aftercare routine which follows</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p>Approaching an artist for the first time is a source of anxiety</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitYellow"
                    >
                        <template #copy>
                            <p>Too many different websites</p>
                        </template>
                    </ContentPostit>
                </template>
            </ContentCaptionWithPostits> -->

            <!-- Pain Points -->
            <!-- <ContentCaptionWithPostits 
                title="Pain Points" 
                gridCols="md:grid-cols-2 lg:grid-cols-4" 
            >
                <template #caption>
                </template>
                <template #postits>
                    <ContentPostit
                        postitColor="bg-postitBlue"
                    >
                        <template #copy>
                            <p>Lack of timely communication</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitBlue"
                    >
                        <template #copy>
                            <p>Too much information about tattooing from different sources</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitBlue"
                    >
                        <template #copy>
                            <p>Not seeing artwork until late in the process</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitBlue"
                    >
                        <template #copy>
                            <p>Artwork isn’t always as expected</p>
                        </template>
                    </ContentPostit>
                </template>
            </ContentCaptionWithPostits> -->

            <!-- Discovery -->
            <!-- <ContentCaptionWithPostits 
                title="Discovery" 
                gridCols="md:grid-cols-2 lg:grid-cols-5" 
            >
                <template #caption>
                </template>
                <template #postits>
                    <ContentPostit
                        postitColor="bg-postitPink"
                    >
                        <template #copy>
                            <p>The most important parts of getting a tattoo are:</p>
                            <ol class="list-decimal pl-4 space-y-4">
                                <li>an artist who communicates, answers questions, asks questions, and welcomes feedback</li>
                                <li>feeling comfortable with the artist and in the space in which they work</li>
                            </ol>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitPink"
                    >
                        <template #copy>
                            <p>The first tattoo is the most important, a “make or break” situation</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitPink"
                    >
                        <template #copy>
                            <p>Being tattooed is very meditative; although there may be pain it isn’t necessarily a painful experience</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitPink"
                    >
                        <template #copy>
                            <p>Very rarely do people leave a review or go out of their way to comment on their experience</p>
                        </template>
                    </ContentPostit>
                    <ContentPostit
                        postitColor="bg-postitPink"
                    >
                        <template #copy>
                            <p>There’s always an understanding that quality tattoos come with a certain cost so this isn’t usually a concern</p>
                        </template>
                    </ContentPostit>
                </template>
            </ContentCaptionWithPostits> -->

            <!-- Research Summary -->
            <CaseStudyTattoooResearch />

        </ProcessPrimary>

        <!-- 2. Flows & Wireframing -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Flows & Wireframing"
            iconPack="fas"
            iconName="diagram-project"
            totalProcess="5"
            headerRef="2"
        >
            <!-- <ContentBlurb>
                <p>The first version of my information architecture was fairly limited. As I explored task flows and started wireframing, it necessarily expanded... a lot.</p>
                <p>I started with just a few of the basic features, like Search and Messaging pages. As I expanded the system, through wireframing and prototyping, I discovered a slew of additional pages, functions, and processes that would need to be considered, such as Scheduling.</p>
            </ContentBlurb> -->

            <!-- Planning & Wireframes -->
            <ContentScroller
                title="Planning & Wireframes"
            >

                <!-- Information Architecture -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/2_Wireframing/IA.png',
                        medium: '/Work/Tattooo/2_Wireframing/IA.png',
                        large: '/Work/Tattooo/2_Wireframing/IA.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Information Architecture (Final)"
                    alt-text="A sitemap of the app to start planning out layout, structures, and interactions."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-white"
                >
                    <template #caption>
                        <!-- <p>Pictured is the final information architecture that I reached by the end of the project. The first version was extremely simple, comparatively.</p> -->
                    </template>
                </ScrollerImage>

                <!-- Wireframing -->
                <ScrollerCustom
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-max" 
                    title="Rough Wireframing"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 w-32 sm:w-40 md:w-48 lg:w-56 h-full items-center justify-center mr-8">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/2_Wireframing/Wireframing1.png"
                                srcset-medium="/Work/Tattooo/2_Wireframing/Wireframing1.png"
                                srcset-large="/Work/Tattooo/2_Wireframing/Wireframing1.png"
                                alt-text="Low fidelity wireframe of a mobile app with a tab bar at the bottom, a content box for a hero image, and placeholder buttons below." 
                                imageStyles=""
                            />
                        </div>
                        <div class="flex flex-col space-y-8 w-32 sm:w-40 md:w-48 lg:w-56 h-full items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/2_Wireframing/Wireframing2.png"
                                srcset-medium="/Work/Tattooo/2_Wireframing/Wireframing2.png"
                                srcset-large="/Work/Tattooo/2_Wireframing/Wireframing2.png"
                                alt-text="Low fidelity wireframe of a form which appears as a modal over the previous home page wireframe; its one page of text entry inputs." 
                                imageStyles=""
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>My first attempt at wireframing was off the cuff, trying to accomplish too many things without enough thought. On the left is the home page, where there’s a primary call to action (“Post [Your Idea]”) above a social feature. The social feature, in this version, functions similarly to an Instagram feed, which wouldn’t necessarily work underneath other content since it would scroll infinitely.</p> -->
                        <!-- <p>On the right is the first version of the “Post Your Tattoo Idea” feature, which is the most basic, one-page form.</p> -->
                    </template>
                </ScrollerCustom>

                <!-- User Flows -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/2_Wireframing/UserFlow.png',
                        medium: '/Work/Tattooo/2_Wireframing/UserFlow.png',
                        large: '/Work/Tattooo/2_Wireframing/UserFlow.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="User Flows"
                    alt-text="Based off of the sitemap structure, this user flow maps out the different tasks/interactions to complete a specific task."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-white"
                >
                    <template #caption>
                        <!-- <p>I started exploring user flows to try and figure out specific steps & processes to complete the necessary tasks. A few of them start with pop-up notifications, but this one, posting a tattoo idea, turned into one of the driving features of the platform. This user flow helped me to consider all of the relevant details of getting a tattoo, from art style to physical location. </p> -->
                    </template>
                </ScrollerImage>

                <!-- Expanding Feature Form -->
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/2_Wireframing/Wireframing3.png',
                        medium: '/Work/Tattooo/2_Wireframing/Wireframing3.png',
                        large: '/Work/Tattooo/2_Wireframing/Wireframing3.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Revised Wireframe of a Primary Form"
                    alt-text="Based off of the sitemap structure, this user flow maps out the different tasks/interactions to complete a specific task."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180"
                >
                    <template #caption>
                        <!-- <p>The previous form was too basic and didn’t feel empathetic enough, so I expanded it. Breaking apart each form field/question into a separate page gives each step of the process its own level of gravitas. Tattoo ideas are, often, serious and personal, and the process of getting a tattoo is a commitment to a lifelong piece of body art [for many people]. This expanded idea for the “Post Your Idea” form tries to pay the utmost respect to that truth by giving users the most thoughtful but functional way to describe their perfect tattoo in a way that anyone can understand.</p> -->
                    </template>
                </ScrollerImage>

            </ContentScroller>

        </ProcessPrimary>

        <!-- 3. Branding & Visual Design -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Branding & Visual Design"
            iconPack="fas"
            iconName="swatchbook"
            totalProcess="5"
            headerRef="3"
        >
            <!-- <ContentBlurb>
                <p>From the beginning, I was sketching random thoughts to try to get a feel for the branding and visual design. This constituted sketching for branding, iconography, abstract shapes, as well as brainstorming for a name.</p>
                <p>My initial idea was to come up with some combination of a name and logomark where one could speak specifically to tattoos and the other could speak to connection or communication. In the end, I abandoned a logomark because they were just too abstract and pursued a logotype.</p>
            </ContentBlurb> -->

            <!-- Sketching Immediately -->
            <ContentMediaWithCaption
                title="Sketching Immediately"
            >
                <template #caption>
                    <p>From the moment I decided to work on a tattoo-focused platform for searching and communication, I worked out a mind map and started sketching some vague shapes and ideas to get the ball rolling.</p>
                </template>
                <template #media>
                    <div class="flex flex-row justify-center items-center space-x-4 rounded-sm md:rounded-md h-full">
                        <ImagePrimary 
                            srcsetLarge="/Work/Tattooo/3_VisualDesign/Sketching1_Full.png"
                            srcsetMedium="/Work/Tattooo/3_VisualDesign/Sketching1_Med.png"
                            srcsetSmall="/Work/Tattooo/3_VisualDesign/Sketching1_Small.png"
                            altText="A notebook page with a rough mind map drawn on it. `Tattoo` is at the center with links arrayed outward to topics like Self-Expression, Art, Communication, Inspiration, Methods, and more, and more connections from each of those to further connections."
                        />
                        <ImagePrimary 
                            srcsetLarge="/Work/Tattooo/3_VisualDesign/Sketching2_Full.png"
                            srcsetMedium="/Work/Tattooo/3_VisualDesign/Sketching2_Med.png"
                            srcsetSmall="/Work/Tattooo/3_VisualDesign/Sketching2_Small.png"
                            altText="A notebook page of rough sketches of abstract shapes, motifs like a ribbon and interlocking shapes, iconographic shapes like a starburst, and more."
                        />
                    </div>
                </template>
            </ContentMediaWithCaption>

            <!-- Brand Design Process -->
            <!-- <ContentScroller
                title="Brand Design Exploration"
            >

                Names
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/3_VisualDesign/Names.png',
                        medium: '/Work/Tattooo/3_VisualDesign/Names.png',
                        large: '/Work/Tattooo/3_VisualDesign/Names.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Potential Names"
                    alt-text="A typed out list of 40 names including some puns, translations from English, and meaningful solo words. 4 of the names are highlighted."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue"
                >
                    <template #caption>
                        <p class="pb-4">In many ways, naming a project is the most difficult part. The right name can carry a mediocre project in the same way that a bad name can doom an amazing project. Highlighted are the 4 names that I shortlisted:</p>
                        <ul class="list-disc pl-4 space-y-1">
                            <li><span class="font-bold">Tatt.ooo</span> — a literal name that also works as a URL</li>
                            <li><span class="font-bold">Ink Different</span> — pointing to a change in the tattoo process</li>
                            <li><span class="font-bold">Cwtch</span> — a Welsh word for "an embrace which brings a feeling of warmth and safety"</li>
                            <li><span class="font-bold">Conversate</span> — "this platform is for messaging"</li>
                        </ul>
                    </template>
                </ScrollerImage>

                Exploring Type
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/3_VisualDesign/Names2.svg',
                        medium: '/Work/Tattooo/3_VisualDesign/Names2.svg',
                        large: '/Work/Tattooo/3_VisualDesign/Names2.svg',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Exploring Logotype"
                    alt-text="The 4 highlighted names are typed out in different fashions using a variety of fonts, styles, and playing with basic visual design and layout, like horizontal versus vertical."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue"
                >
                    <template #caption>
                        <p>I plugged in different typefaces to explore the feeling of them. I went through dozens and some work really nicely. I didn’t want a caricature of tattooing, so I tried to stick to more humanistic, geometric, modern typefaces.</p>
                    </template>
                </ScrollerImage>

                Abstraction
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/3_VisualDesign/Abstraction.png',
                        medium: '/Work/Tattooo/3_VisualDesign/Abstraction.png',
                        large: '/Work/Tattooo/3_VisualDesign/Abstraction.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Shape Abstraction"
                    alt-text="An array of different abstracted logo experiments, each one using some combination of geometric shapes and polygons, like 3 rings transposed on top of each other or a slice cut out from a circle."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue"
                >
                    <template #caption>
                        <p class="mb-4">At the same time that I explored names I was also playing with shapes. I was trying to describe the feelings, the space, and the purposes that the platform was relating to: connection, completeness, safety, and more.</p>
                        <p>After a few weeks I came to the conclusion that abstraction isn’t quite working for this project. None of these feel like a tattoo platform’s logo.</p>
                    </template>
                </ScrollerImage>

                Trying a Different Tactic
                <ScrollerImage
                    :srcset = "{
                        small: '/Work/Tattooo/3_VisualDesign/Names3.png',
                        medium: '/Work/Tattooo/3_VisualDesign/Names3.png',
                        large: '/Work/Tattooo/3_VisualDesign/Names3.png',
                    }"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                    title="Trying a Different Tactic"
                    alt-text="A series of new explorations using the temporary working name of `Tatt.ooo` along with some geometric shape explorations, all which use variations on a circular theme, such as an incomplete ring with dots filling the space."
                    imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue"
                >
                    <template #caption>
                        <p class="mb-4">Abstracted shapes weren’t really working so I wanted to try something a little more literal. I took some time to explore the visual patterning that happens with tattoo machines since the way they work is that they don’t create lines but, rather, series of dots.</p>
                        <p>This, again, isn’t quit right. At a certain level it looks great and really touches on the platform and purpose, but on another level, when you’re dealing with technology and digital experiences, these explorations look like loader animations.</p>
                    </template>
                </ScrollerImage>

            </ContentScroller> -->

            <!-- Final Logo & Visual Design -->
             <CaseStudyTattoooVisualDesign />

        </ProcessPrimary>

        <!-- 4. Research & Prep -->
        <!-- Removed in edits -->

        <!-- 5. Design System -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Design System"
            iconPack="fas"
            iconName="layer-group"
            totalProcess="5"
            headerRef="4"
        >
            <!-- <ContentBlurb>
                <p>Since I’d realized fairly early on that this would be a more complex platform than I’d first assumed, I approached the basic construction of Tatt.ooo’s design system from the viewpoint of having reusable components where small changes, like swapping out an icon, could make it easy to reuse or remix the pieces when adding a feature, function, or page.</p>
            </ContentBlurb> -->

            <!-- Interface Elements -->
            <ContentScroller
                title="Interface Elements"
            >

                <!-- Title & Tab Bars -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Title & Tab Bars"
                >
                    <template #media>
                        <div class="flex flex-col space-y-4 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_NavBar1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_NavBar1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_NavBar1.png"
                                alt-text="A title bar, which would go at the top of the app, containing the logotype on the left and 2 buttons, one to Create a Post and one for Notifications, on the right." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_NavBar2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_NavBar2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_NavBar2.png"
                                alt-text="A title bar, which would go at the top of the app, but the logo on the left has been replaced by a `Back` button and page title and on the right is now a `Close` button." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_NavBar3.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_NavBar3.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_NavBar3.png"
                                alt-text="A title bar, which would go at the top of the app, with the same `Back` button but a username instead of page title, and the `Create a Post` and `Notification` buttons are back." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_NavBar4.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_NavBar4.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_NavBar4.png"
                                alt-text="A title bar, which would go at the top of the app, that's similar to the previous, with a username at the top, but the right side now has a button to go to the current Project, and underneath the bar is a small, horizontal checklist with list items for Basics, Design, Schedule, and Complete, to track the current tattoo process." 
                                imageStyles="w-64 md:w-80 mb-4"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_TabBar1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_TabBar1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_TabBar1.png"
                                alt-text="A title bar, which would go at the top of the app, containing the logotype on the left and 2 buttons, one to Create a Post and one for Notifications, on the right." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_TabBar2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_TabBar2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_TabBar2.png"
                                alt-text="A title bar, which would go at the top of the app, containing the logotype on the left and 2 buttons, one to Create a Post and one for Notifications, on the right." 
                                imageStyles="w-64 md:w-80"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>Taking cues from Apple’s iOS design guidelines, there is a separate navigation bar at the top of the screen with different states to help users navigate between hierarchical content, while a tab bar persists [most of the time] at the bottom of the screen for primary page navigation.</p>
                        <p>I opted to lean more into the iOS design system because I wanted, as much as possible, to refrain from folding extra navigation options into a “more” or hamburger-type menu in the navigation.</p> -->
                    </template>
                </ScrollerCustom>

                <!-- Minor State Changes vs Page Movement -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Minor State Changes"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Search1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Search1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Search1.png"
                                alt-text="A Search bar; contained inside, on the left, is a 'magnifying glass' icon and, on the right, is an icon of sliders to signify 'Filters'." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Search2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Search2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Search2.png"
                                alt-text="A slider component with 2 options to choose between, Ideas and Available Art, with Ideas being currently selected. To the right of the sliders is a button for 'Filters' and another of a 'Magnifying Glass'." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Search3.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Search3.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Search3.png"
                                alt-text="A Search bar; contained inside, on the left, is a 'magnifying glass' icon and, on the right, is an icon of sliders to signify 'Filters'. To the left of the Search bar is a 'Close' button." 
                                imageStyles="w-64 md:w-80"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>As much as possible, I tried to indicate with the visual design language a difference between elements which would lead to a minor state change (fully rounded elements) versus those which would lead to a separate page (rectangular elements). These search bars, for instance, are contextual and have multiple states. Interacting with these elements will open a keyboard, expand a dropdown, etc.</p>
                        <p>The only exceptions to these rules are social profile pictures, multi-line text entry fields, and one particular “More” button.</p> -->
                    </template>
                </ScrollerCustom>

                <!-- Familiar Design -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Familiar Design"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Message1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Message1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Message1.png"
                                alt-text="A Messaging Bar, like would be in a texting or messaging app, with a text-entry field sandwiched between a 'Plus' button' and a 'Send' button." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Message2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Message2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Message2.png"
                                alt-text="A Messaging Bar, like the previous one, but the 'Plus' button has changed to a 'Close' button and below the bar is a row of additional buttons, such as to add a link, image, etc." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Message3.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Message3.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Message3.png"
                                alt-text="A Messaging Bar, like the previous ones but, above the bar is now an example, additional form labeled 'Budget Request' with 2 entry fields labeled 'Low end' and 'High end'." 
                                imageStyles="w-64 md:w-80"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>I struggled with the messaging elements for a while. Eventually, I realized that some digital interactions are so engrained that they’re very difficult to change. Tatt.ooo isn’t meant to define a new way of operating digital experiences, so I tried to design these elements to feel familiar and relate to existing task flows.</p> -->
                    </template>
                </ScrollerCustom>

                <!-- Basic, Expanded, & Complex Buttons -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Basic, Expanded, & Complex Buttons"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Buttons1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Buttons1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Buttons1.png"
                                alt-text="A pop-up modal with an example of basic buttons. Below the title of the modal are 2 different, simple buttons for 'Cancel' and 'I`m Sure', with one being the primary (filled in with color) and the other being secondary (only outlined)." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Buttons2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Buttons2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Buttons2.png"
                                alt-text="An expanded style button in the form of a full-width button, label on the left, with an 'arrow' on the right to continue to the labeled page." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Buttons3.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Buttons3.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Buttons3.png"
                                alt-text="An expanded style button in the form of a full-width button, label on the left, with an 'arrow' on the right to continue to the labeled page. This version has additional space to the left of the button for a smaller icon, in this case a 'Notification' icon." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Buttons4.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Buttons4.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Buttons4.png"
                                alt-text="A complex-style button, primarily for profile/social purposes, with a profile picture on the left, name and additional information next to it, complete with a 'Message' button on the right." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Buttons5.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Buttons5.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Buttons5.png"
                                alt-text="A complex-style button, primarily for profile/social purposes, with a profile picture on the left, name and additional information next to it, complete with a 'More' button on the right." 
                                imageStyles="w-64 md:w-80"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>Because there are multiple instances to highlight artists and studios, I wanted to create a kind of button style which can fulfill multiple roles depending on the context. Using the profile pictures as a basis, the complex button style has enough room for multiple text lines and a dedicated space for a contextual button. (This is the instance of a “More” button which doesn’t follow the previously mentioned minor state change logic.)</p> -->
                    </template>
                </ScrollerCustom>

                <!-- Card Styles -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Different Card Styles"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Cards1.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Cards1.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Cards1.png"
                                alt-text="An example of a hero card style, with an image at the top and two buttons underneath, one primary and one secondary." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Cards2.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Cards2.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Cards2.png"
                                alt-text="An example of a basic card style, with an image at the top and a Title/Label underneath." 
                                imageStyles="w-64 md:w-80"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/5_DesignSystem/5_Cards3.png"
                                srcset-medium="/Work/Tattooo/5_DesignSystem/5_Cards3.png"
                                srcset-large="/Work/Tattooo/5_DesignSystem/5_Cards3.png"
                                alt-text="An example of a basic card style, with an image at the top and a checkbox and Label underneath." 
                                imageStyles="w-64 md:w-80"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>Because tattoos (as visual art) necessitate imagery, working with cards is also a necessity.</p> -->
                    </template>
                </ScrollerCustom>

            </ContentScroller>

            <!-- Complex Cards -->
            <ContentMediaWithCaption
                title="Complex Cards"
            >
                <template #caption>
                    <p class="mb-4">I realized that my concept would keep open the possibility of having posts without images. Therefore, I wanted the titles, text, and images to have similar levels of visual hierarchy.</p>
                    <!-- <p>Since these two card styles can appear next to each other within the app, I wanted some visual consistency in their design language. This solution not only allows for that visual consistency, it also carries the styling from the previous complex button styles.</p> -->
                </template>
                <template #media>
                    <div class="flex flex-col md:flex-row justify-center items-center bg-tattoooBlue space-y-8 md:space-y-0 space-x-0 md:space-x-8 p-8 px-32 md:px-24 lg:px-32">
                        <ImageStylable 
                            srcsetLarge="/Work/Tattooo/5_DesignSystem/5_Cards4.png"
                            srcsetMedium="/Work/Tattooo/5_DesignSystem/5_Cards4.png"
                            srcsetSmall="/Work/Tattooo/5_DesignSystem/5_Cards4.png"
                            altText="A mockup showing the visual design of `complex cards` which include a variety of different elements on them, such as a title, copy text, smaller buttons, images, and more. This complex card is a social style, which includes profile elements at the top, such as tattoo artist profile picture, name, and location at the top, with a hero image and description in the middle, then hashtag-style pills at the bottom." 
                            imageStyles="filter drop-shadow-md" 
                        />
                        <ImageStylable 
                            srcsetLarge="/Work/Tattooo/5_DesignSystem/5_Cards5.png"
                            srcsetMedium="/Work/Tattooo/5_DesignSystem/5_Cards5.png"
                            srcsetSmall="/Work/Tattooo/5_DesignSystem/5_Cards5.png"
                            altText="A mockup showing the visual design of `complex cards` which include a variety of different elements on them, such as a title, copy text, smaller buttons, images, and more. This complex card is a post style, with a title at the top followed by a description, then thumbnail images, and at the bottom are hashtag-style pills." 
                            imageStyles="filter drop-shadow-md" 
                        />
                    </div>
                </template>
            </ContentMediaWithCaption>

        </ProcessPrimary>

        <!-- 6. Prototyping -->
        <ProcessPrimary
            :bgColor="bgColor"
            title="Prototyping"
            iconPack="fas"
            iconName="pen-to-square"
            totalProcess="5"
            headerRef="5"
        >
            <!-- <ContentBlurb>
                <p>Prototyping is really where I started to work out the kinks. Some pages and flows worked out without issue once I figured out the correct starting point. Other issues needed a little more finessing and iteration.</p>
                <p>However, one of my beliefs is to test early and test often, so when I had one version ready to go, I tested the working prototype and ran it by some of my associates for their thoughts.</p>
            </ContentBlurb> -->

            <!-- Iteration & High Fidelity -->
            <ContentScroller
                title="Iteration & High Fidelity"
            >

                <!-- Bringing Wireframes into High Fidelity -->
                <ScrollerCustom
                    imageParent="h-120 md:h-160 w-max p-8" 
                    title="Bringing Wireframes into High Fidelity"
                >
                    <template #media>
                        <div class="flex flex-col space-y-16 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_HighDef1.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_HighDef1.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_HighDef1.png"
                                alt-text="A series of low fidelity wireframes going page by page through a multi-page form. Everything is filler content, with gray rectangles instead of buttons, words in place of icons, and a black 'X' in place of each image." 
                                imageStyles="w-80 md:w-120"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_HighDef2.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_HighDef2.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_HighDef2.png"
                                alt-text="A series of high fidelity wireframes going page by page through a multi-page form. The grays have all been filled in with the white, blue, and gray color palette, icons have been put in place, and image spaces have been filled in." 
                                imageStyles="w-80 md:w-120"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <!-- <p>As mentioned, some of my flows were worked out pretty well by the time I moved to prototyping in high fidelity. This is one of the tasks that moved into high fidelity fairly easily. The initial concept, a one-page form, was way off target. Iterating on that concept from the jump meant a more fleshed out flow and easier time moving into high fidelity.</p> -->
                    </template>
                </ScrollerCustom>

                <!-- Bad UI -->
                <ScrollerImageThumbs 
                    imageParent="h-120 md:h-160 w-max p-8 flex justify-center items-center"
                >
                    <template #media>
                        <ImageStylable
                            srcset-small="/Work/Tattooo/6_Prototyping/6_Fixing1.png"
                            srcset-medium="/Work/Tattooo/6_Prototyping/6_Fixing1.png"
                            srcset-large="/Work/Tattooo/6_Prototyping/6_Fixing1.png"
                            alt-text="A page showing the beginning of the 'Artwork Feedback' Request process. In the messaging space, the screen has been grayed out and a pop-up modal is above everything. The title on the pop-up says 'Feedback', an image is below it, and there's a text entry field under that." 
                            imageStyles="w-48 md:w-64 rounded-sm"
                        />
                    </template>
                    <template #thumbs>
                        <ThumbBad comment="Restricted Space" />
                        <ThumbBad comment="Clunky Interaction" />
                    </template>
                    <template #caption>
                        <!-- <p>This was the original concept to provide feedback on artwork from a tattoo artist: a modal comes up over the messaging interface.</p> -->
                    </template>
                </ScrollerImageThumbs>

                <!-- Fixed UI -->
                <ScrollerImageThumbs 
                    imageParent="h-120 md:h-160 w-max p-8 flex justify-center items-center"
                >
                    <template #media>
                        <ImageStylable
                            srcset-small="/Work/Tattooo/6_Prototyping/6_Fixing2.png"
                            srcset-medium="/Work/Tattooo/6_Prototyping/6_Fixing2.png"
                            srcset-large="/Work/Tattooo/6_Prototyping/6_Fixing2.png"
                            alt-text="A page showing the beginning of the 'Artwork Feedback' Request process. Instead of a pop-up modal, the keyboard and messages have disappeared and the title 'Feedback Request' is now at the top of the screen, under the username being messaged, and the image takes up most of the space on the page, with the text entry box  below it still." 
                            imageStyles="w-48 md:w-64 rounded-sm"
                        />
                    </template>
                    <template #thumbs>
                        <ThumbGood comment="Enhanced Visibility" />
                        <ThumbGood comment="Improved Workflow" />
                    </template>
                    <template #caption>
                        <!-- <p>The solution is to replace the messaging space by a new feedback space and hide the keyboard away until it’s needed.</p> -->
                    </template>
                </ScrollerImageThumbs>

            </ContentScroller>

            <!-- In Context -->
            <!-- <ContentScroller
                title="In Context"
            >

                Start & End Points
                <ScrollerCustom
                    imageParent="h-96 md:h-120 w-max p-8" 
                    title="Start & End Points"
                >
                    <template #media>
                        <div class="flex flex-col space-y-4 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_Flows.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_Flows.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_Flows.png"
                                alt-text="A series of screens showing a user flow starting from a pop-up notification." 
                                imageStyles="w-120 md:w-160"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <p>I wouldn’t normally work on a prototype with a pop-up notification as a starting point for a task flow. However, in this case, I think its important for real-world context and processes to show how the app operates within a busy lifestyle and also to highlight how it function from the mobile app perspective.</p>
                    </template>
                </ScrollerCustom>

                Putting Everything in Context
                <ScrollerCustom
                    imageParent="h-96 md:h-120 w-max p-8" 
                    title="Putting Everything in Context"
                >
                    <template #media>
                        <div class="flex flex-col space-y-4 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Text1.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Text1.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Text1.png"
                                alt-text="A series of text boxes running through a text-based scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-120 md:w-160"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Text2.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Text2.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Text2.png"
                                alt-text="A series of text boxes running through a text-based scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-120 md:w-160"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Text3.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Text3.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Text3.png"
                                alt-text="A series of text boxes running through a text-based scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-120 md:w-160"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Text4.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Text4.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Text4.png"
                                alt-text="A series of text boxes running through a text-based scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-120 md:w-160 pr-2 md:pr-3"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <p>Taking those task flows, journey maps, and the persona from earlier, I put them into the context of what a real user experience could look like. I broke every step and touchpoint down into steps to get a better picture of how the actual app should operate. Essentially it becomes a story to help understand the value of these tasks and how to accomplish them in Tatt.ooo.</p>
                    </template>
                </ScrollerCustom>

                Visualize
                <ScrollerCustom
                    imageParent="h-96 md:h-120 w-max p-8" 
                    title="Visualize"
                >
                    <template #media>
                        <div class="flex flex-col space-y-2 md:space-y-4 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Visual1.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Visual1.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Visual1.png"
                                alt-text="A series of roughly sketched storyboards running through a visual scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-96 md:w-128"
                            />
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_SB_Visual2.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_SB_Visual2.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_SB_Visual2.png"
                                alt-text="A series of roughly sketched storyboards running through a visual scenario depicting several situations of a customer using the app to communicate with a tattoo artist and get a tattoo." 
                                imageStyles="w-96 md:w-128"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <p>I was working on a video to help explain the value of Tatt.ooo, so I took that story from earlier and turned it into a storyboard.</p>
                    </template>
                </ScrollerCustom>

                Adding a Few Things
                <ScrollerCustom
                    imageParent="h-96 md:h-120 w-max p-8" 
                    title="Adding a Few Things"
                >
                    <template #media>
                        <div class="flex flex-col space-y-8 items-center justify-center">
                            <ImageStylable
                                srcset-small="/Work/Tattooo/6_Prototyping/6_ipad.png"
                                srcset-medium="/Work/Tattooo/6_Prototyping/6_ipad.png"
                                srcset-large="/Work/Tattooo/6_Prototyping/6_ipad.png"
                                alt-text="A mockup of an iPad showing a photo-taking screen associated with the app. At the top of the screen is a title navigation bar with the logo and most of the screen is a camera view with indicators instructing the user to position themselves in a certain space in the camera view." 
                                imageStyles="w-64 md:w-80 rounded-sm"
                            />
                        </div>
                    </template>
                    <template #caption>
                        <p>From that storyboard I made, I realized there were a few things to add. (Actually, from that first story there was a lot to add, like the feedback and review system, but that’s for another time.) I added some screens to animate for use in the video I was working on.</p>
                    </template>
                </ScrollerCustom>

            </ContentScroller> -->

        </ProcessPrimary>

        <!-- OUTRO BEGINNING -->
        <OutroHighlightsWork :bgColor="bgColor">
            <template #central>
                <div class="w-full flex flex-col space-y-16">
                    <div class="bg-tattoooBlue w-full flex justify-center px-16 py-32 md:p-32">
                        <div class="w-64 text-white flex justify-center">
                            <svg width="256" height="57" viewBox="0 0 256 57" class="fill-current" xmlns="http://www.w3.org/2000/svg" alt="A logo of the name of the app `Tattooo` in a heavyweight, geometric font with a dot before the `ooo` like a URL.">
                                <g clip-path="url(#clip0_1631_6078)">
                                <path d="M26.0887 12.1883V55.352H11.7692V12.1883H0V0H37.858V12.1883H26.0887V12.1883Z"/>
                                <path d="M61.1681 17.6937H74.4675V55.352H61.1681V51.1694C58.3438 54.7403 54.5146 56.5295 49.6957 56.5295C46.9628 56.5295 44.4582 56.0248 42.1668 55.0232C39.8753 54.0215 37.8808 52.6146 36.1756 50.8024C34.4703 48.9902 33.1457 46.8645 32.1941 44.4177C31.2425 41.9708 30.7706 39.3023 30.7706 36.4196C30.7706 33.7281 31.2349 31.1742 32.1561 28.7503C33.0772 26.3264 34.3714 24.2084 36.0309 22.4038C37.6829 20.5916 39.6622 19.1618 41.9536 18.1066C44.245 17.0514 46.7801 16.5314 49.5511 16.5314C54.2253 16.5314 58.1002 18.1754 61.1681 21.448V17.7013V17.6937ZM44.5039 36.4119C44.5039 37.6354 44.7246 38.7747 45.1586 39.8222C45.6001 40.8774 46.1939 41.795 46.9475 42.5749C47.7012 43.3548 48.5995 43.9665 49.6501 44.41C50.7006 44.8535 51.8273 45.0676 53.0453 45.0676C54.2634 45.0676 55.3215 44.8459 56.3721 44.41C57.4226 43.9665 58.3209 43.3548 59.0746 42.5749C59.8282 41.795 60.4373 40.8851 60.9016 39.8605C61.366 38.8358 61.5944 37.7348 61.5944 36.5572C61.5944 35.3797 61.366 34.271 60.9016 33.2158C60.4373 32.1606 59.8282 31.243 59.0746 30.4631C58.3209 29.6832 57.415 29.0714 56.3721 28.628C55.3215 28.1845 54.2177 27.9704 53.0453 27.9704C51.873 27.9704 50.693 28.1921 49.6501 28.628C48.5995 29.0714 47.7012 29.6832 46.9475 30.4631C46.1939 31.243 45.5925 32.1376 45.1586 33.1393C44.717 34.141 44.5039 35.2344 44.5039 36.4043V36.4119Z"/>
                                <path d="M95.882 28.7732V55.3443H82.6511V28.7732H78.2662V17.686H82.6511V6.38471H95.882V17.686H103.411V28.7732H95.882V28.7732Z"/>
                                <path d="M124.239 28.7732V55.3443H111.008V28.7732H106.624V17.686H111.008V6.38471H124.239V17.686H131.768V28.7732H124.239V28.7732Z"/>
                                <path d="M127.893 48.302C127.893 47.1245 128.114 46.0158 128.548 44.9606C128.99 43.9054 129.599 42.9878 130.375 42.2079C131.152 41.428 132.065 40.8162 133.116 40.3728C134.166 39.9293 135.27 39.7152 136.442 39.7152C137.615 39.7152 138.719 39.9369 139.769 40.3728C140.82 40.8162 141.733 41.428 142.51 42.2079C143.286 42.9878 143.895 43.9054 144.337 44.9606C144.778 46.0158 144.992 47.1245 144.992 48.302C144.992 49.4796 144.771 50.5883 144.337 51.6435C143.895 52.6987 143.286 53.6162 142.51 54.3962C141.733 55.1761 140.82 55.7878 139.769 56.2313C138.719 56.6748 137.615 56.8889 136.442 56.8889C135.27 56.8889 134.166 56.6671 133.116 56.2313C132.065 55.7878 131.152 55.1761 130.375 54.3962C129.599 53.6162 128.99 52.6987 128.548 51.6435C128.107 50.5883 127.893 49.4796 127.893 48.302V48.302Z"/>
                                <path d="M146.674 36.1902C146.674 33.3993 147.23 30.7919 148.356 28.3756C149.475 25.9517 151.036 23.849 153.031 22.0597C155.025 20.2705 157.4 18.8636 160.156 17.8389C162.912 16.8143 165.919 16.2944 169.185 16.2944C172.451 16.2944 175.381 16.799 178.137 17.8007C180.885 18.8024 183.276 20.2017 185.301 21.9833C187.326 23.7725 188.894 25.8982 190.013 28.368C191.132 30.8378 191.695 33.5675 191.695 36.5496C191.695 39.5317 191.125 42.2614 189.975 44.7312C188.833 47.201 187.257 49.3343 185.263 51.1159C183.268 52.9051 180.863 54.2815 178.061 55.2602C175.26 56.2389 172.222 56.7283 168.964 56.7283C165.706 56.7283 162.775 56.2389 160.049 55.2602C157.324 54.2815 154.972 52.8898 153 51.0777C151.028 49.2655 149.483 47.1015 148.356 44.5783C147.237 42.055 146.674 39.2564 146.674 36.1749V36.1902ZM160.636 36.3355C160.636 37.6048 160.864 38.767 161.328 39.8222C161.793 40.8774 162.402 41.795 163.155 42.5749C163.909 43.3548 164.815 43.9665 165.858 44.41C166.909 44.8535 168.012 45.0676 169.185 45.0676C170.357 45.0676 171.461 44.8459 172.511 44.41C173.562 43.9665 174.46 43.3548 175.214 42.5749C175.968 41.795 176.577 40.8774 177.041 39.8222C177.505 38.767 177.734 37.6354 177.734 36.4119C177.734 35.1885 177.505 34.1257 177.041 33.0705C176.577 32.0153 175.968 31.0977 175.214 30.3178C174.46 29.5379 173.554 28.9262 172.511 28.4827C171.461 28.0392 170.357 27.8251 169.185 27.8251C168.012 27.8251 166.909 28.0468 165.858 28.4827C164.807 28.9262 163.909 29.5379 163.155 30.3178C162.402 31.0977 161.793 32.0076 161.328 33.0323C160.864 34.0569 160.636 35.1579 160.636 36.3355Z"/>
                                <path d="M178.83 36.1902C178.83 33.3993 179.386 30.7919 180.512 28.3756C181.632 25.9517 183.192 23.849 185.187 22.0597C187.181 20.2705 189.556 18.8636 192.312 17.8389C195.068 16.8143 198.075 16.2944 201.341 16.2944C204.607 16.2944 207.538 16.799 210.293 17.8007C213.042 18.8024 215.432 20.2017 217.457 21.9833C219.482 23.7725 221.05 25.8982 222.169 28.368C223.288 30.8378 223.852 33.5675 223.852 36.5496C223.852 39.5317 223.281 42.2614 222.131 44.7312C220.989 47.201 219.413 49.3343 217.419 51.1159C215.424 52.9051 213.019 54.2815 210.217 55.2602C207.416 56.2389 204.378 56.7283 201.12 56.7283C197.862 56.7283 194.931 56.2389 192.206 55.2602C189.48 54.2815 187.128 52.8898 185.156 51.0777C183.184 49.2655 181.639 47.1015 180.512 44.5783C179.393 42.055 178.83 39.2564 178.83 36.1749V36.1902ZM192.792 36.3355C192.792 37.6048 193.02 38.767 193.484 39.8222C193.949 40.8774 194.558 41.795 195.312 42.5749C196.065 43.3548 196.971 43.9665 198.014 44.41C199.065 44.8535 200.168 45.0676 201.341 45.0676C202.513 45.0676 203.617 44.8459 204.668 44.41C205.718 43.9665 206.616 43.3548 207.37 42.5749C208.124 41.795 208.733 40.8774 209.197 39.8222C209.661 38.767 209.89 37.6354 209.89 36.4119C209.89 35.1885 209.661 34.1257 209.197 33.0705C208.733 32.0153 208.124 31.0977 207.37 30.3178C206.616 29.5379 205.71 28.9262 204.668 28.4827C203.617 28.0392 202.513 27.8251 201.341 27.8251C200.168 27.8251 199.065 28.0468 198.014 28.4827C196.963 28.9262 196.065 29.5379 195.312 30.3178C194.558 31.0977 193.949 32.0076 193.484 33.0323C193.02 34.0569 192.792 35.1579 192.792 36.3355Z"/>
                                <path d="M210.986 36.1902C210.986 33.3993 211.542 30.7919 212.668 28.3756C213.788 25.9517 215.348 23.849 217.343 22.0597C219.337 20.2705 221.712 18.8636 224.468 17.8389C227.224 16.8143 230.231 16.2944 233.497 16.2944C236.763 16.2944 239.694 16.799 242.449 17.8007C245.198 18.8024 247.588 20.2017 249.613 21.9833C251.638 23.7725 253.206 25.8982 254.325 28.368C255.444 30.8378 256.008 33.5675 256.008 36.5496C256.008 39.5317 255.437 42.2614 254.287 44.7312C253.145 47.201 251.569 49.3343 249.575 51.1159C247.58 52.9051 245.175 54.2815 242.373 55.2602C239.572 56.2389 236.534 56.7283 233.276 56.7283C230.018 56.7283 227.087 56.2389 224.362 55.2602C221.636 54.2815 219.284 52.8898 217.312 51.0777C215.341 49.2655 213.795 47.1015 212.668 44.5783C211.549 42.055 210.986 39.2564 210.986 36.1749V36.1902ZM224.948 36.3355C224.948 37.6048 225.176 38.767 225.641 39.8222C226.105 40.8774 226.714 41.795 227.468 42.5749C228.221 43.3548 229.127 43.9665 230.17 44.41C231.221 44.8535 232.324 45.0676 233.497 45.0676C234.669 45.0676 235.773 44.8459 236.824 44.41C237.874 43.9665 238.772 43.3548 239.526 42.5749C240.28 41.795 240.889 40.8774 241.353 39.8222C241.818 38.767 242.046 37.6354 242.046 36.4119C242.046 35.1885 241.818 34.1257 241.353 33.0705C240.889 32.0153 240.28 31.0977 239.526 30.3178C238.772 29.5379 237.867 28.9262 236.824 28.4827C235.773 28.0392 234.669 27.8251 233.497 27.8251C232.324 27.8251 231.221 28.0468 230.17 28.4827C229.12 28.9262 228.221 29.5379 227.468 30.3178C226.714 31.0977 226.105 32.0076 225.641 33.0323C225.176 34.0569 224.948 35.1579 224.948 36.3355Z"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1631_6078">
                                        <rect width="256" height="56.8889"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <iframe 
                        style="border: 1px solid rgba(0, 0, 0, 0.1);" 
                        class="notch w-full" 
                        height="640px" 
                        src="https://embed.figma.com/proto/La9a3mCGaD9Lbfmxg5a0k0/Tatt.ooo?page-id=562%3A1467&node-id=562-1468&node-type=canvas&viewport=810%2C349%2C0.04&scaling=scale-down&content-scaling=fixed&starting-point-node-id=562%3A1468&embed-host=share&client-id=LgwX9A9zrjrhXIrAKxjivZ" allowfullscreen></iframe>
                    <div class="flex flex-col space-y-1">
                        <VideoPlayerControlled 
                            :autoplay=false 
                            :loop=false 
                            :muted=false 
                            :controls=true
                            roundedLvl="notch" 
                            alt="A 3-minute video showing a scenario of the Jenny persona finally getting a tattoo. She can handle all of her needs through the Tatt.ooo platform from messaging to scheduling and even proofing the artwork." 
                            :videoSources="[
                                { src: '/Work/Tattooo/x_TattoooScenario_Full.mp4', type: 'video/mp4' },
                                { src: '/Work/Tattooo/x_TattoooScenario_Med.mp4', type: 'video/mp4' },
                                { src: '/Work/Tattooo/x_TattoooScenario_Med.mp4', type: 'video/mp4' }
                            ]">
                        </VideoPlayerControlled>
                        <p class="pl-8 italic font-main text-xs text-grayMiddle">Some designs continued to be worked on after this video was rendered so they may not be an exact match for some of the images you see elsewhere on the page.</p>
                    </div>
                </div>
            </template>
            <template #full>
                <ContentMediaWithCaption
                    title="Final Thoughts & Next Steps"
                >
                    <template #caption>
                        <p class="mb-4">Tatt.ooo wasn’t designed for people who go and get tattoos on a whim; it was designed around tattoo enthusiasts and first timers who need some time to think about it beforehand. (That’s not to say there’s anything wrong with people who just want to go to a shop and pick a cute flash tattoo, this app just wasn't designed around those needs.) <!-- On the other hand, although I tried to make this a thoughtful experience for customers, there isn’t a truly compelling reason for artists to use this service, as it creates more work for them than simply posting to their existing social media and/or other page(s). The features to help create accountability and improve communication for customers could also prove to be hurdles for artists who don’t want to be constrained in such ways or on stricter schedules. --></p>
                        <p>To truly refine this concept I would need to do additional research with tattoo artists. It's a good lesson that just solving around one group's need doesn't always mean a service will succeed.</p>
                    </template>
                    <template #media>
                        <ImagePrimary
                            srcset-small="/Work/Tattooo/x_MockupThrees_Small.png"
                            srcset-medium="/Work/Tattooo/x_MockupThrees_Med.png"
                            srcset-large="/Work/Tattooo/x_MockupThrees_Full.png"
                            alt-text="A mockup of 3 different screens in the Messaging process, while proofing artwork from an artist, side by side."
                            additionalStyles="md:px-24 xl:px-48"
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
    import animationData from '~/Assets/animations/Tattooo_Short.json';

    export default {
        name: 'CaseStudyTattooo',
        data() {
            return {
                projects: require('~/Assets/projects.json'),
                isConcise: false,
                bgColor: "gradient-tattooo",
                animationData
            };
        },
        head: {
        title: 'Max is Wright — Tattooo Case Study',
        meta: [
            {
            hid: 'description',
            name: 'description',
            content: "Max's case study on a concept for a tattoo scheduling application to help artists and customers connect. Max is a versatile product designer with a talent for visual design and product + systems thinking. He's eager to tackle complex challenges and craft user-focused digital experiences. This website was built with plain HTML, CSS, and JS, and ChatGPT was used to convert the entire site for Nuxt.JS, including project initiation, folder management, using terminal, script changes, incorporating JSON, and problem fixes."
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