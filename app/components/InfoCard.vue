<template>
    <UiDialog>
        <UiDialogTrigger>
            <div
                class="flex items-center justify-center gap-1 px-1 py-0.5 rounded-md border border-solid border-dark-500 text-sm font-poppins font-medium bg-dark-300">
                <img :src="img" class="h-4 object-cover" />
                <span>
                    <slot name="name" />
                </span>
            </div>
        </UiDialogTrigger>
        <UiDialogContent class="max-sm:w-full max-sm:min-h-screen p-5 space-y-5 sm:rounded-xl">
            <div class="flex items-center justify-between w-full gap-5">
                <UiDialogTitle>
                    <img :src="img" class="h-6 object-cover">
                    <slot name="name" />
                </UiDialogTitle>
                <UiDialogClose />
            </div>
            <UiDialogDescription>
                {{ description }}
            </UiDialogDescription>
        </UiDialogContent>
    </UiDialog>
</template>

<script setup lang="ts">
interface Props {
    img: string;
    description?: string;
}

withDefaults(defineProps<Props>(), { img: '/assets/logo/nuxt.png' })
</script>