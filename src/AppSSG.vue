<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import type { CardItem } from './components/AnimalCards.vue'

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

const fallbackCards: CardItem[] = [
  { image: '', title: 'Россияне выберут 100 самых уязвимых краснокнижных видов', date: '16 марта / 11:04', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/articles/2026/03/16/1182989-rossiyane-viberut-100-samih-uyazvimih-krasnoknizhnih-vidov?from=100vidov' },
  { image: '', title: 'Численность оседлой популяции дзерена в Забайкалье стабилизировалась', date: '12 марта / 13:02', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/12/1182374-chislennost-osedloi-populyatsii-dzerena-v-zabaikale-stabilizirovalas?from=100vidov' },
  { image: '', title: 'Ученые обследовали заказник «Позарым» и получили данные о краснокнижных животных', date: '11 марта / 13:17', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/11/1182073-krasnoknizhnih-zhivotnih?from=100vidov' },
  { image: '', title: 'Искусственный интеллект вышел на охрану Дальневосточного морского заповедника', date: '10 марта / 12:51', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/10/1181759-iskusstvennii-intellekt-vishel-na-ohranu-dalnevostochnogo-morskogo-zapovednika?from=100vidov' },
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
          :cards="fallbackCards"
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
