<script setup lang="ts">
import { computed } from 'vue';

type ColorType = 'green' | 'red';
const props = defineProps<{
  text: string;
  color?: ColorType;
}>();

const classes = computed(() => props.color ? [`basic-component--color-${props.color}`] : []);
</script>
  
<template>
  <h1 :class="['basic-component', ...classes]">{{  props.text  }}</h1>
</template>

<style>
.basic-component{
  color:black;
}

.basic-component--color-green{
  color:green;
}
.basic-component--color-red{
  color:red;
}
</style>