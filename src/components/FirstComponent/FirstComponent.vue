<script setup lang="ts">
import { computed } from 'vue';

type ColorType = 'green' | 'red';
const props = defineProps<{
  text: string;
  color?: ColorType;
}>();

const classes = computed(() => props.color ? [`first-component--color-${props.color}`] : []);
</script>
  
<template>
  <h1 :class="['first-component', ...classes]">{{  props.text  }}</h1>
</template>

<style>
.first-component{
  color:black;
}

.first-component--color-green{
  color:green;
}
.first-component--color-red{
  color:red;
}
</style>