<template>
  <DialogPortal>
    <DialogOverlay />
    <DialogContent v-bind="forwarded"
      class="transition-all data-[state=open]:animate-content-show data-[state=closed]:animate-content-hide fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100] border-4 border-double border-dark-500 bg-dark-50">
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<script setup lang="ts">
import type { HtmlHTMLAttributes } from "vue";
import DialogOverlay from "./DialogOverlay.vue";
import { useForwardPropsEmits, DialogContent, DialogPortal } from "radix-vue";
import type { DialogContentProps, DialogContentEmits } from "radix-vue";

const props = defineProps<
  DialogContentProps & { class?: HtmlHTMLAttributes["class"]; title?: string }
>();
const emits = defineEmits<DialogContentEmits>();

const forwarded = useForwardPropsEmits(props, emits);
</script>
