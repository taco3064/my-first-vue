import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

export function useCounter() {
  const counterStore = useCounterStore();
  const { increment, reset } = counterStore

  return {
    ...storeToRefs(counterStore),
    increment,
    reset
  }
}

const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  return {
    count,
    doubleCount: computed(() => count.value * 2),
    increment() {
      count.value++
    },
    reset() {
      count.value = 0
    }
  }
})
