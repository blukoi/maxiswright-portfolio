<template>
    <ul class="list-none flex flex-row flex-wrap gap-x-px gap-y-1">
        <li v-for="(tag, index) in tags" :key="index" class="h-8 px-4 bg-mint font-main text-xs text-white inline-block flex flex-row content-center">
            <span class="h-full flex pr-2"><p class="self-center">{{ tag.label }}</p></span>
            <span class="h-full flex"><p class="self-center">—</p></span>
            <span class="h-full flex pl-2 text-blackFaded"><p class="self-center">{{ tag.level }}</p></span>
        </li>
    </ul>
</template>
  
<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
      validator(tags) {
        // Use the hasOwnProperty method in a safer way
        return tags.every(tag => Object.prototype.hasOwnProperty.call(tag, 'label') && Object.prototype.hasOwnProperty.call(tag, 'level'));
      }
    }
  }
}
</script>
