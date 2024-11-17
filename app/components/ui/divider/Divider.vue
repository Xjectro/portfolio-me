<template>
  <div class="flex items-center justify-center w-full gap-5">
    <div class="h-[1px] w-full bg-dark-500" />
    <span class="flex items-center justify-center font-poppins font-medium whitespace-nowrap text-base">
      <slot name="name" />
    </span>
    <div class="h-[1px] w-full bg-dark-500" />
  </div>
</template>
