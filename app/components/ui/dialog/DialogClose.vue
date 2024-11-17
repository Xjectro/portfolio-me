<template>
  <DialogClose v-bind="delegatedProps" :class="$cn(
    'transition-all flex items-center justify-center p-2 rounded-full border-4 border-double border-dark-600 bg-dark-100 hover:bg-dark-200',
    props.class,
  )
    " aria-label="Close">
    <IconX :size="16" />
  </DialogClose>
</template>

<script setup lang="ts">
import { DialogClose } from "radix-vue";
import type { DialogCloseProps } from "radix-vue";
import { type HtmlHTMLAttributes } from "vue";

const props = defineProps<
  DialogCloseProps & { class?: HtmlHTMLAttributes["class"] }
>();

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>
