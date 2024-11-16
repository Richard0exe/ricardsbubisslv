<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import { i18n } from '@/i18n'

const route = useRoute()

watch(
  route,
  () => {
    document.title = i18n.global.t('title')
  },
  { immediate: true }
)
</script>

<template>
  <router-view/>
</template>