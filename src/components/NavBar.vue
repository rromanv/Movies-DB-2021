<template>
  <nav class="bg-coolGray-900">
    <div class="container mx-auto">
      <div class="flex items-center space-x-4">
        <noto:videocassette class="w-16 h-16" />
        <p
          class="text-4xl tracking-wider text-transparent font-extralight bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Movies<span class="font-bold">DB</span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import tmdbLogo from '~/assets/tmdb.svg'
</script>
