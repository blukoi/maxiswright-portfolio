<template>
  <div class="py-2">
    <a :href="link" class="px-3 py-2 font-main bg-grayDarker hover:bg-mint focus:bg-mint active:bg-mint focus:border-white text-white hover:text-white focus:text-white active:text-white notch-small">
        {{ label }}
    </a>
  </div>
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