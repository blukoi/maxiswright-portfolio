<template>
  <div>
    <CustomCursor />
    <NavBar />
    <!-- <TestComponent /> -->
    <div class="fixed top-20 w-full content-center h-50vh md:h-75vh z-0">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-12">
        <div class="col-span-1 col-start-1 md:col-span-6 md:col-start-4">
          <JumbotronHome />
        </div>
      </div>
    </div>
    <div class="">
      Test
    </div>
  </div>
</template>

<script>
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
}
</script>