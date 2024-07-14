<template>
  <div>
    <CustomCursor />
    <NavBar />
    <TestComponent />
    <HomeJumbotron />
  </div>
</template>

<script>
import CustomCursor from '~/components/CustomCursor.vue';
import NavBar from '~/components/NavBar.vue';
import TestComponent from '~/components/TestComponent.vue';

export default {
  name: 'HomePage',
  components: {
    CustomCursor,
    TestComponent,
    NavBar,
  },
  head: {
    title: 'Max is Wright',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: "Max's new, rebuilt portfolio website. Max is a versatile product designer with a talent for visual design and product + systems thinking / eager to tackle complex challenges and craft user-focused digital experiences."
      }
    ],
  },
}
</script>