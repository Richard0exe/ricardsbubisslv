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
  <v-app>
    <v-app-bar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>ricardsbubiss</v-toolbar-title>
  </v-app-bar>
  <router-view/>
</v-app>
</template>