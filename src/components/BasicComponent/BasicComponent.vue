<script setup lang="ts">
type ColorTest = 'green' | 'red' | undefined;
const props = defineProps<{
  text: string;
  color: ColorTest;
}>();
</script>
  
<template>
  <h1 :class="[props.color]">{{  props.text  }}</h1>
</template>