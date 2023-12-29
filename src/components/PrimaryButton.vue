<template>
    <button class="personal-button">
      {{ props.text }}
    </button>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    text: string;
  }>();
  </script>