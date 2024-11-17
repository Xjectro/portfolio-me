<template>
  <a :href="href" target="_blank"
    class="transition-all flex flex-col items-start justify-between gap-y-2 rounded-xl cursor-pointer group border-4 border-double border-dark-500 bg-dark-100">
    <img :src="thumbnailURL"
      class="transition-all object-cover min-h-[10rem] max-h-[10rem] rounded-xl scale-[1.02] group-hover:scale-110 border-4 border-double border-transparent group-hover:border-dark-500 bg-dark-200">
    <div class="flex flex-col items-start p-3 gap-y-2">
      <span class="flex items-center gap-2 font-poppins font-medium hover:text-blue-500">
        <img :src="avatarURL" class="w-6 h-6 rounded-full" />
        {{ username }}
      </span>
      <span v-if="description" class="max-w-[250px] text-sm text-start font-poppins font-medium text-zinc-400">
        {{ description }}
      </span>
    </div>
  </a>
</template>

<script lang="ts" setup>
interface Props {
  username: string;
  avatarURL: string;
  thumbnailURL: string;
  href: string;
  description?: string;
}

withDefaults(defineProps<Props>(), {})
</script>

<style></style>