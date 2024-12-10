<template>
    <div class="w-full space-y-32 md:space-y-64">
        <!-- Pain Points -->
        <!-- <ContentCaptionWithPostits 
            title="Pain Points" 
            gridCols="md:grid-cols-2 lg:grid-cols-4" 
        >
            <template #caption>
            </template>
            <template #postits>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Lack of strong communication</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Too much information about tattooing from too many different sources</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Not seeing artwork until late in the process, often not until you show up for the tattoo</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>The artwork isn’t always what was expected</p>
                    </template>
                </ContentPostit>
            </template>
        </ContentCaptionWithPostits> -->

        <!-- Opportunities -->
        <ContentCaptionWithPostits 
            title="Opportunities" 
            gridCols="md:grid-cols-2 lg:grid-cols-4" 
        >
            <template #caption>
            </template>
            <template #postits>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Improve and streamline the communication process</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Provide helpful information and resources in a centralized platform</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Help customers see the artwork early and the artists to get feedback</p>
                    </template>
                </ContentPostit>
                <ContentPostit
                    postitColor="bg-grayLightPrimary"
                >
                    <template #copy>
                        <p>Provide helpful information and resources in a centralized platform</p>
                    </template>
                </ContentPostit>
            </template>
        </ContentCaptionWithPostits>

        <!-- Persona -->
        <ContentMediaWithCaption
            title="Persona"
        >
            <template #caption>
                <p class="mb-4">Jenny is the synthesis of all of my foundational research and journey maps. I was able to incorporate all of my insights and condense them down into some core needs:</p>
                <ul class="list-disc pl-4 space-y-4">
                    <li>Safety & security</li>
                    <li>Comfort & understanding</li>
                    <li>Good art</li>
                    <li>Seamless process</li>
                </ul>
            </template>
            <template #media>
                <div class="flex flex-col justify-center items-center space-y-4 bg-tattoooBlue h-full p-4">
                    <ImagePrimary 
                        srcsetLarge="/Work/Tattooo/1_FoundationalResearch/Persona.png"
                        srcsetMedium="/Work/Tattooo/1_FoundationalResearch/Persona.png"
                        srcsetSmall="/Work/Tattooo/1_FoundationalResearch/Persona.png"
                        altText="A visual called a persona, detailing a fictitious person named Jenny, a 22-year-old interested in getting tattoos. This visual includes a short bio and details her motivations, goals, frustrations, and needs."
                    />
                </div>
            </template>
        </ContentMediaWithCaption>
    </div>
</template>