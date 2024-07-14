<template>
    <div class="w-full bg-transparent">
        <VideoPlayer
         :videoSources="[
            { src: '/Brand/Hero_Animated_Full.mp4', type: 'video/mp4' },
            { src: '/Brand/Hero_Animated_960.mp4', type: 'video/mp4' },
            { src: '/Brand/Hero_Animated_720.mp4', type: 'video/mp4' },
            { src: '/Brand/Hero_Animated_480.mp4', type: 'video/mp4' }
            ]">
        </VideoPlayer>
    </div>
</template>