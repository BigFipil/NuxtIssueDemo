<template>
  <div class="layout">
    ERROR PAGE
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  error: Record<string, string | number>
}>(), {
  error: () => ({})
})
</script>
