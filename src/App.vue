<script setup lang="ts">
import { ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import CookieBanner from './components/CookieBanner.vue'
import SuccessMessage from './components/SuccessMessage.vue'
import type { CardItem } from './components/AnimalCards.vue'

import bearDesktop from './assets/bg/bear-desktop.jpg'
import bearMobile from './assets/bg/bear-mobile.jpg'
import eagleDesktop from './assets/bg/eagle-desktop.jpg'
import eagleMobile from './assets/bg/eagle-mobile.jpg'
import beetleDesktop from './assets/bg/beetle-desktop.jpg'
import beetleMobile from './assets/bg/beetle-mobile.jpg'

const themes = [
  { bgDesktop: bearDesktop, bgMobile: bearMobile },
  { bgDesktop: eagleDesktop, bgMobile: eagleMobile },
  { bgDesktop: beetleDesktop, bgMobile: beetleMobile },
]
const theme = themes[Math.floor(Math.random() * themes.length)]

const showSuccess = ref(false)

function handleFormSubmit(_payload: { email: string; subscribedToNews: boolean }) {
  showSuccess.value = true
}

const cards: CardItem[] = [
  {
    image: bearMobile,
    title: 'A vibrant green chameleon sitting on a tree branch, looking to the left',
    date: '03 сентября / 21:54',
    readTime: '',
  },
  {
    image: eagleMobile,
    title: 'A vibrant green chameleon sitting on a tree branch, looking to the left',
    date: '03 сентября / 21:54',
    readTime: '',
  },
  {
    image: beetleMobile,
    title: 'A vibrant green chameleon sitting on a tree branch, looking to the left',
    date: '03 сентября / 21:54',
    readTime: '',
  },
  {
    image: bearDesktop,
    title: 'A vibrant green chameleon sitting on a tree branch, looking to the left',
    date: '03 сентября / 21:54',
    readTime: '',
  },
]
</script>

<template>
  <div class="min-h-screen bg-[#1e1e1e] text-white">
    <SiteHeader />

    <main>
      <HeroSection
        :bg-desktop="theme.bgDesktop"
        :bg-mobile="theme.bgMobile"
        :cards="cards"
        target-date="2026-06-01T00:00:00"
        @form-submit="handleFormSubmit"
      />
    </main>

    <SiteFooter />

    <CookieBanner />
    <SuccessMessage :visible="showSuccess" @close="showSuccess = false" />
  </div>
</template>
