<template>
    <div class="w-full space-y-32 md:space-y-64">
        <!-- Finalized Name & Logo -->
        <ContentMediaWithCaption
            title="Finalized Name & Logo"
        >
            <template #caption>
                <p>Simple, to-the-point, easy to remember, and with a tiny bit of design flair from the triple “o” resembling the dots of a tattoo line. </p>
            </template>
            <template #media>
                <ImagePrimary 
                    srcsetLarge="/Work/Tattooo/3_VisualDesign/Logotype.svg"
                    srcsetMedium="/Work/Tattooo/3_VisualDesign/Logotype.svg"
                    srcsetSmall="/Work/Tattooo/3_VisualDesign/Logotype.svg"
                    altText="A form of logo lockup, showing the finalized, primary logotype `Tattooo` in a bold, geometric font, arranged with a dot before the triple `o` and the 3 `o`s overlapping slightly; there are also some smaller layouts, such as a small version for use as an app icon."
                />
            </template>
        </ContentMediaWithCaption>

        <!-- Visual Design Process -->
        <ContentScroller
            title="Visual Design Process"
        >

            <!-- Names -->
            <ScrollerImage
                :srcset = "{
                    small: '/Work/Tattooo/3_VisualDesign/StyleTiles.png',
                    medium: '/Work/Tattooo/3_VisualDesign/StyleTiles.png',
                    large: '/Work/Tattooo/3_VisualDesign/StyleTiles.png',
                }"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                title="Style Tiles"
                alt-text="3 visual design explorations in a row, each one in the form of an iPhone mockup with several visual design elements, like buttons and text inputs, and typography explorations on the screen. Each phone is next to a color palette."
                imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue"
            >
                <template #caption>
                    <p class="pb-4">I did 3 style explorations to test out different combinations of text, visual language, and color. Each one tries to relate to a different aspect of the platform.</p>
                    <ul class="list-disc pl-4 space-y-1">
                        <li>The first exploration, on the left, is a more sterile design language with muted colors where the goal is to let the artists be the centerpiece.</li>
                        <li>The middle exploration is a calm, community-focused style with more friendly iconography and also using the opportunity to use the device default font, SF Pro, since I’m designing with an iPhone in mind.</li>
                        <li>The third exploration, on the right, is supposed to create a more accountable feeling with darker backgrounds since, when we talk about art, photos tend to display better on black/dark backgrounds.</li>
                    </ul>
                </template>
            </ScrollerImage>

            <!-- Iconography -->
            <ScrollerImage
                :srcset = "{
                    small: '/Work/Tattooo/3_VisualDesign/Icons.svg',
                    medium: '/Work/Tattooo/3_VisualDesign/Icons.svg',
                    large: '/Work/Tattooo/3_VisualDesign/Icons.svg',
                }"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
                title="Iconography"
                alt-text="An array showing the icons selected for the app. All of them are designed with simple lines, rather than purely solid shapes, with the overall appearance being more round and approachable, rather than having sharp edges and angles."
                imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-96 sm:w-120 md:w-160 lg:w-180 bg-tattoooBlue px-8 sm:px-16 md:px-32"
            >
                <template #caption>
                    <p>A few weeks into the project, as I explored the information architecture and user flows, I realized that this was going to be a complex system. As I worked on the visual design, I pretty quickly decided that I would need to find a fitting icon set as there simply wouldn’t be enough time to create all of the icons I would need, since that’s an undertaking of its own. I found <a href="https://www.figma.com/community/file/1066305773644252559/xnix-icon-pack-500-editable-lines-icons" class="font-bold hover:text-mint hover:bg-white rounded-sm">Ankush Syal’s Xnix Icon Set</a> on Figma’s Community pages and decided, for my purposes, the rounded shapes and line-based design are fitting and quite readable.</p>
                </template>
            </ScrollerImage>

            <!-- Color Palette -->
            <ScrollerCustom
                imageParent="h-64 sm:h-80 md:h-112 lg:h-120 w-max p-8 bg-tattoooBlue rounded-sm" 
                title="Color Palette"
            >
                <template #media>
                    <div class="flex flex-row space-x-8 items-center justify-center">
                        <ImageStylable
                            srcset-small="/Work/Tattooo/3_VisualDesign/Color1.svg"
                            srcset-medium="/Work/Tattooo/3_VisualDesign/Color1.svg"
                            srcset-large="/Work/Tattooo/3_VisualDesign/Color1.svg"
                            alt-text="2 Color swatches, a calming blue and a darker blue, along with the cases where each color would be used." 
                            imageStyles="rounded-sm w-32 sm:w-48"
                        />
                        <ImageStylable
                            srcset-small="/Work/Tattooo/3_VisualDesign/Color2.svg"
                            srcset-medium="/Work/Tattooo/3_VisualDesign/Color2.svg"
                            srcset-large="/Work/Tattooo/3_VisualDesign/Color2.svg"
                            alt-text="2 Color swatches, pure black and white, along with the cases where each color would be used." 
                            imageStyles="rounded-sm w-32 sm:w-48"
                        />
                        <ImageStylable
                            srcset-small="/Work/Tattooo/3_VisualDesign/Color3.svg"
                            srcset-medium="/Work/Tattooo/3_VisualDesign/Color3.svg"
                            srcset-large="/Work/Tattooo/3_VisualDesign/Color3.svg"
                            alt-text="2 Color swatches, light grey and a coral red, along with the cases where each color would be used." 
                            imageStyles="rounded-sm w-32 sm:w-48"
                        />
                        <ImageStylable
                            srcset-small="/Work/Tattooo/3_VisualDesign/Color4.svg"
                            srcset-medium="/Work/Tattooo/3_VisualDesign/Color4.svg"
                            srcset-large="/Work/Tattooo/3_VisualDesign/Color4.svg"
                            alt-text="2 Color swatches, a light violet and a darker version, along with the cases where each color would be used." 
                            imageStyles="rounded-sm w-32 sm:w-48"
                        />
                    </div>
                </template>
                <template #caption>
                    <p>I tried various combinations of these colors in place as the background, highlight, text, etc. The blue is meant to be a calming brand color, so I initially planned to use it as the primary background. However, it was a little overwhelmingly blue, so I replace it with a light gray and kept the blues as the primary highlight and brand color for calls to action, buttons, titles, etc.</p>
                </template>
            </ScrollerCustom>

        </ContentScroller>
    </div>
</template>