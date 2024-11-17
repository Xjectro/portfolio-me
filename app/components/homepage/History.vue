<template>
  <div class="flex flex-col items-center gap-y-2">
    <h1 class="font-poppins text-center font-bold underline text-4xl">Eray Günüuygun</h1>
    <div class="font-poppins font-medium text-center text-zinc-300">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { description } from '../../../constants/data';
</script>
