<template>
  <nav class="bg-coolGray-900">
    <div class="container flex items-center justify-between mx-auto">
      <div class="flex items-center space-x-4">
        <noto:videocassette class="w-16 h-16" />
        <p
          class="text-4xl tracking-wider text-transparent font-extralight bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
        >
          Movies<span class="font-bold">DB</span>
        </p>
      </div>
      <div>
        <div v-if="isAuthenticated" class="flex items-center space-x-4">
          <p class="text-coolGray-200">Welcome {{ user?.displayName }}</p>
          <button
            @click="signOut"
            class="px-8 py-2 font-semibold bg-red-600 rounded-full focus:ring-red-900 focus:ring-4 focus:outline-none text-coolGray-100 hover:bg-red-800"
          >
            Logout
          </button>
        </div>
        <button
          v-else
          @click="googlePopup"
          class="px-8 py-2 font-semibold bg-green-600 rounded-full focus:ring-green-900 focus:ring-4 focus:outline-none text-coolGray-100 hover:bg-green-800"
        >
          Login
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
  import { authentication } from '~/helpers/useFirebase'
  import tmdbLogo from '~/assets/tmdb.svg'

  const { googlePopup, signOut, isAuthenticated, user } = authentication()
</script>
