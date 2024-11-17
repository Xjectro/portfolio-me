<template>
  <DialogTrigger v-bind="forwardedProps">
    <slot />
  </DialogTrigger>
</template>

<script lang="ts" setup>
import {
  useForwardProps,
  DialogTrigger,
  type DialogTriggerProps,
} from "radix-vue";

interface Props extends DialogTriggerProps {}

const props = defineProps<Props>();

const forwardedProps = useForwardProps(props);
</script>
