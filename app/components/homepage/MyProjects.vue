<template>
  <div class="flex flex-col items-center w-full gap-10">
    <UiDivider>
      <template #name>
        My Projects
      </template>
    </UiDivider>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
      <UiCard v-for="project, index in projects" :key="index" :href="project.href" :username="project.name"
        :avatarURL="project.avatarURL" :thumbnailURL="project.thumbnailURL" :description="project.description" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { projects } from '../../../constants/data';

const repos = ref([])

onMounted(async () => {
  const response = await useFetchRepos()

  repos.value = response
})
</script>