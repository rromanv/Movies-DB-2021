<template>
  <nav class="bg-coolGray-900">
    <div class="container mx-auto flex justify-between items-center">
      <div class="flex items-center space-x-4">
        <noto:videocassette class="w-16 h-16" />
        <p
          class="text-4xl tracking-wider text-transparent font-extralight bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Movies<span class="font-bold">DB</span>
        </p>
      </div>
      <div>
        <button class="bg-green-600 text-coolGray-100 font-semibold hover:bg-green-800 px-8 py-2 rounded-full">
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import tmdbLogo from '~/assets/tmdb.svg'
</script>
