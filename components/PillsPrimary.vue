<template>
    <ul class="list-none flex flex-row flex-wrap gap-x-px gap-y-1">
        <li v-for="(tag, index) in tags" :key="index" class="px-4 py-2 bg-mint font-main text-xs text-white inline-block">
            {{ tag }}
        </li>
    </ul>
</template>
  
<script>
export default {
props: {
    tags: {
    type: Array,
    required: true
    }
}
}
</script>