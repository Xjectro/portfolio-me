<template>
  <a :href="href" target="_blank"
    class="transition-all font-poppins font-medium text-center text-zinc-400 hover:text-white">
    <slot />
  </a>
</template>

<script lang="ts" setup>
interface Props {
  href: string;
}

defineProps<Props>()
</script>