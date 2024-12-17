<template>
    <div class="w-full space-y-32 md:space-y-64">
        <ContentMediaWithCaption
            title="Persona"
        >
            <template #caption>
                <p>This is Tina, a divorcee working as an astrophysicist in Los Angeles. With her son going to college, she has more time to spend on herself, with her dog, and with her friends.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Work/EV/3_Conceptualization/Persona_Small.png"
                    srcset-medium="/Work/EV/3_Conceptualization/Persona_Med.png"
                    srcset-large="/Work/EV/3_Conceptualization/Persona.png"
                    alt-text="A summary and description of a fictional person, named Tina, acting as the synthesis of a variety of research and a target for the concepts to be designed for"
                />
            </template>
        </ContentMediaWithCaption>
        <ContentMediaWithCaption
            title="Journey Map"
        >
            <template #caption>
                <p>We brainstormed what the ideal day of Tina, as a new Apple Car owner, could look like, taking into consideration her life and needs.</p>
            </template>
            <template #media>
                <ImagePrimary
                    srcset-small="/Work/EV/3_Conceptualization/Journey_Small.jpg"
                    srcset-medium="/Work/EV/3_Conceptualization/Journey_Med.jpg"
                    srcset-large="/Work/EV/3_Conceptualization/Journey_Full.jpg"
                    alt-text="A written out map through one 'ideal' day using an Apple Car, with sections for emotions, thoughts, actions, touchpoints, opportunities, and more"
                />
            </template>
        </ContentMediaWithCaption>
    </div>
</template>