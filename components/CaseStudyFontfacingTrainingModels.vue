<template>
    <ContentMediaWithCaption
        title="Type-Specific Training Model"
    >
        <template #caption>
            <p>I took the opportunity to make a training model to test more basic shape creation. I created 30 jpgs showing a singular, capital, letter ‘A’ in different typefaces. The resulting output recognizes the shapes and patterns, but not that they’re letters.</p>
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
</template>