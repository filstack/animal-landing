<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SiteFooter from './components/SiteFooter.vue'

import bearDesktop from './assets/bg/bear-desktop.jpg'
import bearMobile from './assets/bg/bear-mobile.jpg'
import bearMobileXs from './assets/bg/bear-mobile-xs.jpg'
import bearMobileSm from './assets/bg/bear-mobile-sm.jpg'
import eagleDesktop from './assets/bg/eagle-desktop.jpg'
import eagleMobile from './assets/bg/eagle-mobile.jpg'
import beetleDesktop from './assets/bg/beetle-desktop.jpg'
import beetleMobile from './assets/bg/beetle-mobile.jpg'

const themes = [
  { name: 'bear', bgDesktop: bearDesktop, bgMobile: bearMobile, bgMobileXs: bearMobileXs, bgMobileSm: bearMobileSm, mobilePos: 'center top' },
  { name: 'eagle', bgDesktop: eagleDesktop, bgMobile: eagleMobile, mobilePos: 'center center' },
  { name: 'beetle', bgDesktop: beetleDesktop, bgMobile: beetleMobile, mobilePos: 'center center' },
]
</script>

<template>
  <div class="min-h-screen bg-[#1e1e1e] text-white">
    <SiteHeader />

    <main>
      <div v-for="theme in themes" :key="theme.name" :data-ssg-theme="theme.name">
        <HeroSection
          :bg-desktop="theme.bgDesktop"
          :bg-mobile="theme.bgMobile"
          :bg-mobile-xs="theme.bgMobileXs"
          :bg-mobile-sm="theme.bgMobileSm"
          :mobile-pos="theme.mobilePos"
          :cards="[]"
          target-date="2026-06-01T00:00:00"
          :submitted="false"
          form-error=""
          :form-loading="false"
        />
      </div>
    </main>

    <SiteFooter />
  </div>
</template>
