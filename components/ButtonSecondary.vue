<template>
    <nuxt-link :to="link" class="focus:text-white active:text-white sweep-hover">
        {{ label }}
    </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #FFFFFF;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #000000;
}
</style>