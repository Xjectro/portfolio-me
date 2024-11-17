<template>
  <div class="flex flex-col items-center w-full gap-10">
    <UiDivider>
      <template #name>
        My Github Repos
      </template>
    </UiDivider>
    <div class="grid md:auto-rows-[15rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto">
      <UiCard v-for="repo, index in repos" :key="index" :href="repo.svn_url" :username="repo.name"
        :avatarURL="repo.owner.avatar_url"
        :thumbnailURL="`https://opengraph.githubassets.com/62759269b3ad959816c5901d0eb10248573c5d7ea4f3daa038d0ed60ca93fbaa/Xjectro/${repo.name}`" />
    </div>
  </div>
</template>

<script setup lang="ts">
const repos = ref()

onMounted(async () => {
  const response = await useFetchRepos()

  repos.value = response
})
</script>