<template>
    <ContentCaptionWithPostits 
        title="Insights" 
        gridCols="md:grid-cols-2 lg:grid-cols-4" 
    >
        <template #caption>
            <!-- <p>These are the key learnings I tried to keep in mind as I started to explore low fidelity wireframes and build out my concept.</p> -->
        </template>
        <template #postits>
            <ContentPostit
                postitColor="bg-postitYellow"
            >
                <template #copy>
                    <p><span class="font-bold">AI systems often prioritize their capabilities over user interaction</span>, leading to basic input methods. Shifting focus towards empowering users with what they can achieve using AI can enhance the design for more intuitive and impactful interactions.</p>
                </template>
            </ContentPostit>
            <ContentPostit
                postitColor="bg-postitYellow"
            >
                <template #copy>
                    <p>Every word or pixel included in training data influences the output, especially concerning outliers, as <span class="font-bold">AI lacks the ability to identify outliers without specific training</span>.</p>
                </template>
            </ContentPostit>
            <ContentPostit
                postitColor="bg-postitYellow"
            >
                <template #copy>
                    <p>The “magic” of AI comes from not knowing how input is being analyzed and processed, which can be confusing for designers. <span class="font-bold">Transparent and understandable AI interactions will help enhance trust and comprehension</span>.</p>
                </template>
            </ContentPostit>
            <ContentPostit
                postitColor="bg-postitYellow"
            >
                <template #copy>
                    <p>For best results, <span class="font-bold">users must go beyond data selection and make use of ongoing supervised learning and reinforcement of the model</span> (which, for some AI systems, can be impossible for the user). This approach not only refines pattern recognition but also ensures consistent performance.</p>
                </template>
            </ContentPostit>
        </template>
    </ContentCaptionWithPostits>
</template>