<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import CookieBanner from './components/CookieBanner.vue'
import type { CardItem } from './components/AnimalCards.vue'
import { fetchRssCards } from './utils/rss'

import bearDesktop from './assets/bg/bear-desktop.jpg'
import bearMobile from './assets/bg/bear-mobile.jpg'
import eagleDesktop from './assets/bg/eagle-desktop.jpg'
import eagleMobile from './assets/bg/eagle-mobile.jpg'
import beetleDesktop from './assets/bg/beetle-desktop.jpg'
import beetleMobile from './assets/bg/beetle-mobile.jpg'

const themes = [
  { bgDesktop: bearDesktop, bgMobile: bearMobile, mobilePos: 'center 40%' },
  { bgDesktop: eagleDesktop, bgMobile: eagleMobile, mobilePos: 'center center' },
  { bgDesktop: beetleDesktop, bgMobile: beetleMobile, mobilePos: 'center center' },
]
const theme = themes[Math.floor(Math.random() * themes.length)]

function handleFormSubmit(_payload: { email: string; subscribedToNews: boolean }) {
  // TODO: CRM-Битрикс integration
}

const fallbackCards: CardItem[] = [
  { image: bearMobile, title: 'Россияне выберут 100 самых уязвимых краснокнижных видов', date: '16 марта / 11:04', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/articles/2026/03/16/1182989-rossiyane-viberut-100-samih-uyazvimih-krasnoknizhnih-vidov' },
  { image: eagleMobile, title: 'Численность оседлой популяции дзерена в Забайкалье стабилизировалась', date: '12 марта / 13:02', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/12/1182374-chislennost-osedloi-populyatsii-dzerena-v-zabaikale-stabilizirovalas' },
  { image: beetleMobile, title: 'Ученые обследовали заказник «Позарым» и получили данные о краснокнижных животных', date: '11 марта / 13:17', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/11/1182073-krasnoknizhnih-zhivotnih' },
  { image: bearDesktop, title: 'Искусственный интеллект вышел на охрану Дальневосточного морского заповедника', date: '10 марта / 12:51', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/10/1181759-iskusstvennii-intellekt-vishel-na-ohranu-dalnevostochnogo-morskogo-zapovednika' },
]

const cards = ref<CardItem[]>(fallbackCards)

onMounted(async () => {
  const rssCards = await fetchRssCards(10)
  if (rssCards.length) {
    cards.value = rssCards
  }
})
</script>

<template>
  <div class="min-h-screen bg-[#1e1e1e] text-white">
    <SiteHeader />

    <main>
      <HeroSection
        :bg-desktop="theme.bgDesktop"
        :bg-mobile="theme.bgMobile"
        :mobile-pos="theme.mobilePos"
        :cards="cards"
        target-date="2026-06-01T00:00:00"
        @form-submit="handleFormSubmit"
      />
    </main>

    <SiteFooter />
    <CookieBanner />
  </div>
</template>
