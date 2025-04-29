<script setup lang="ts">
import { useCounter } from '@/composables/useCounterStore';

const { count, doubleCount, increment, reset } = useCounter();
</script>

<template>
  <div>
    <h1>Counter: {{ count }}</h1>
    <h2>Double Count: {{ doubleCount }}</h2>
    <button @click="increment">Increment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<style src="./styles.css" />
