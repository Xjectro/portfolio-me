<template>
    <div>
        <NuxtPage />
    </div>

    <PreloadPage />
</template>

<script setup lang="ts">
import { description } from '~~/constants/data';
useSeoMeta({
    ogDescription: description,
    description: description,
})
</script>