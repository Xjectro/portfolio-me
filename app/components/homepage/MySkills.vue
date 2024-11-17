<template>
    <div class="flex flex-col items-center w-full gap-10">
        <UiDivider>
            <template #name>
                My Skills
            </template>
        </UiDivider>
        <div class="flex flex-col items-center gap-y-2">
            <div v-for="skill, index in skills" :key="index"
                class="flex max-md:flex-col items-center w-full md:gap-2 rounded-xl border-4 border-double border-dark-500 bg-dark-100">
                <span
                    class="font-poppins font-medium text-start min-w-[150px] md:max-w-[150px] truncate px-2 py-3 md:border-r-4 border-double border-dark-500">{{
                        skill.label
                    }}</span>
                <div class="flex flex-wrap items-center justify-center md:justify-start pb-3 md:py-3 px-2 gap-2">
                    <InfoCard v-for="item, index in skill.items" :key="index" :img="item.img"
                        :description="item.description">
                        <template #name>
                            {{ item.name }}
                        </template>
                    </InfoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { skills } from '../../../constants/data';
</script>