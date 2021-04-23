<template>
  <div class="w-full lg:max-w-full lg:flex">
    <img
      class="flex-none object-cover h-48 overflow-hidden text-center rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
      :src="`${imageBaseURL}${movie.poster_path}`"
    />
    <div
      class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r"
    >
      <div class="mb-8">
        <div class="mb-2 text-xl font-bold text-coolGray-900">
          {{ movie.title }}
        </div>
        <p class="text-base text-coolGray-700 line-clamp-6">
          {{ movie.overview }}
        </p>
      </div>
      <div class="flex items-start justify-end">
        <div class="flex flex-col items-center">
          <button @click="newLike" class="text-coolGray-400 hover:text-red-600">
            <mdi:heart class="w-8 h-8" />
            <span>{{ likes }}</span>
          </button>
        </div>
        <div class="flex flex-col items-center">
          <button @click="toggle" class="text-coolGray-400 hover:text-blue-600">
            <mdi:comment class="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <Comments v-if="value" :movie="movie" @close="toggle" />
</template>

<script setup>
  import { defineProps, ref, onMounted, watch } from 'vue'
  import { imageBaseURL } from '~/helpers/useMoviesAPI'
  import { countByObjectId, add } from '~/helpers/useLikes'
  import { toRefs, useToggle } from '@vueuse/core'
  import { authentication } from '~/helpers/useFirebase'

  const [value, toggle] = useToggle(false)

  const { user } = authentication()

  const newLike = async () => {
    await add({ objectId: props.movie.id.toString(), userId: user.value.uid })
    await getLikes()
  }
  onMounted(() => getLikes())

  const likes = ref(0)

  const getLikes = async () => {
    const response = await countByObjectId(props.movie.id.toString())
    const { data } = response
    if (data) likes.value = data.count
  }

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
  const { movie } = toRefs(props)
  watch(movie, () => {
    getLikes()
  })
</script>
