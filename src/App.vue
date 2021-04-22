<template>
  <NavBar />
  <EmptyHome v-if="!isAuthenticated" />
  <Home v-else />
  <Footer />
</template>

<script setup>
  import { authentication } from '~/helpers/useFirebase'

  const { isAuthenticated } = authentication()
</script>

<style lang="postcss">
  .main {
    @apply flex flex-col items-center justify-center min-h-screen space-x-4 text-6xl text-coolGray-300 font-extralight;
  }
  .title {
    @apply flex items-center justify-center;
  }
</style>
