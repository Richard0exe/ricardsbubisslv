<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useTheme } from 'vuetify';

import { mdiTranslate, mdiWhiteBalanceSunny, mdiMoonWaningCrescent } from '@mdi/js'

import { i18n } from '@/i18n'

const theme = useTheme()
const route = useRoute()

function toggleTheme(){
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function changeLanguage(languageCode: any){
  i18n.global.locale.value = languageCode
}

const themeButton = computed(() => {
  return theme.global.current.value.dark ? mdiWhiteBalanceSunny : mdiMoonWaningCrescent
})

const languages = [
  { title: 'LV',
    code: 'lv'
  },
  { title: 'EN',
    code: 'en'
  }
]

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
    <v-btn :icon="themeButton" @click="toggleTheme"/>
    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn
        dark
        v-bind="props"
        :icon="mdiTranslate"
        >
    </v-btn>
      </template>

      <v-list>
        <v-list-item
        v-for="(item,index) in languages"
        :key="index"
        @click="changeLanguage(item.code)"
        >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  <v-main>
  <router-view/>
  </v-main>
</v-app>
</template>