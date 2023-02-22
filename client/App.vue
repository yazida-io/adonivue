<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { markRaw, ref, watch } from 'vue'
import Default from '@/layouts/Default.vue'
const layout = ref<any>('default')
const route = useRoute()

const snakeToPascal = (str: string) => {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')
}

watch(
  () => route.meta?.layout || 'default',
  async (metaLayout) => {
    let component
    try {
      if (metaLayout !== 'default') {
        // @ts-ignore
        component = await import(`@/layouts/${snakeToPascal(metaLayout)}.vue`)
        layout.value = markRaw(component?.default || Default)
      } else {
        layout.value = markRaw(Default)
      }
    } catch (e) {
      layout.value = markRaw(Default)
    }
  },
  { immediate: true }
)
</script>
