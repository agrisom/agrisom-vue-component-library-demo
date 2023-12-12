<script setup lang="ts">
import { computed } from 'vue';

type ColorType = 'green' | 'red';
const props = defineProps<{
  text: string;
  color?: ColorType;
}>();

const classes = computed(() => props.color ? [`second-component--color-${props.color}`] : []);
</script>
  
<template>
  <h1 :class="['second-component', ...classes]">{{  props.text  }}</h1>
</template>

<style>
.second-component{
  color:black;
}

.second-component--color-green{
  color:green;
}
.second-component--color-red{
  color:red;
}
</style>