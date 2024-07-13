<template>
  <div>
    <CustomCursor />
    <Tutorial />
  </div>
</template>

<script>
import CustomCursor from '~/components/CustomCursor.vue'

export default {
  name: 'HomePage',
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
  components: {
    CustomCursor
  }
}
</script>