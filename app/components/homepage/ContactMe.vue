<template>
  <div class="flex flex-col items-center w-full gap-10">
    <UiDivider>
      <template #name>
        Contact Me
      </template>
    </UiDivider>
    <div class="flex flex-wrap items-center justify-center gap-2">
      <InfoCard img="/assets/logo/gmail.png"
        description="This email address can be used to contact me for collaborations, projects, or other professional matters. I will do my best to respond as soon as possible.">
        <template #name>
          business@xjectro.com
        </template>
      </InfoCard>
      <InfoCard img="/assets/logo/telephone.svg"
        description="This phone number can be used to contact me directly. You can leave a message or request a call. I aim to respond as soon as possible.">
        <template #name>
          +90 544 245 45 58
        </template>
      </InfoCard>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>