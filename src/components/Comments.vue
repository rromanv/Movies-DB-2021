<template>
  <div
    class="fixed inset-0 bg-red-500 bg-center bg-cover"
    :style="`background-image: url(${bgBaseURL}${movie.backdrop_path})`"
  >
    <button @click="emit('close')" class="absolute text-red-300 left-3 top-3">
      <mdi:close-box class="w-12 h-12 filter drop-shadow-2xl" />
    </button>
    <div class="inline-block px-4 py-2 mt-8">
      <h1
        class="text-4xl font-bold tracking-wider uppercase text-coolGray-100 filter drop-shadow-2xl"
      >
        {{ movie.title }}
      </h1>
    </div>
    <div
      class="flex flex-col items-center py-2 space-y-4 overflow-y-scroll h-5/6"
    >
      <div
        v-for="({ text, userName }, index) in messages"
        :key="index"
        class="w-1/2 px-4 py-2 text-left rounded bg-coolGray-100"
      >
        {{ text }}
        <p class="mt-4 ml-auto text-sm text-right">{{ userName }}</p>
      </div>
      <input
        type="text"
        name=""
        id=""
        placeholder="New Comment"
        class="w-1/2 rounded bg-coolGray-100"
        @change="send"
        v-model="newComment"
      />
    </div>
  </div>
</template>

<script setup>
  import { defineProps, defineEmit, ref } from 'vue'
  import { bgBaseURL } from '~/helpers/useMoviesAPI'
  import { database } from '~/helpers/useFirebase'

  const newComment = ref('')
  const emit = defineEmit(['close'])

  const props = defineProps({
    movie: {
      type: Object,
      default: () => {
        return {
          title: '',
          overview: '',
          poster_path: '',
        }
      },
    },
  })

  const { messages, sendMessage } = database(props.movie.id)

  const send = () => {
    sendMessage(newComment.value)
    newComment.value = ''
  }
</script>
