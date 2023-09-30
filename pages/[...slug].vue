<template>
  <div>
    Slug
  </div>
</template>

<script async setup lang="ts">
definePageMeta({
  middleware: [
    defineNuxtRouteMiddleware(async (to) => {
      console.log('Hello there')
    })
  ]
})
</script>
