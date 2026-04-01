<script setup lang="ts">
import { ref, onMounted } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import CookieBanner from './components/CookieBanner.vue'
import type { CardItem } from './components/AnimalCards.vue'
import { fetchRssCards } from './utils/rss'
import { extractUtmParams } from './utils/utm'

import bearDesktop from './assets/bg/bear-desktop.jpg'
import bearMobile from './assets/bg/bear-mobile.jpg'
import bearMobileXs from './assets/bg/bear-mobile-xs.jpg'
import bearMobileSm from './assets/bg/bear-mobile-sm.jpg'
import eagleDesktop from './assets/bg/eagle-desktop.jpg'
import eagleMobile from './assets/bg/eagle-mobile.jpg'
import beetleDesktop from './assets/bg/beetle-desktop.jpg'
import beetleMobile from './assets/bg/beetle-mobile.jpg'

const themes = [
  { bgDesktop: bearDesktop, bgMobile: bearMobile, bgMobileXs: bearMobileXs, bgMobileSm: bearMobileSm, mobilePos: 'center center' },
  { bgDesktop: eagleDesktop, bgMobile: eagleMobile, mobilePos: 'center center' },
  { bgDesktop: beetleDesktop, bgMobile: beetleMobile, mobilePos: 'center center' },
]
const theme = themes[Math.floor(Math.random() * themes.length)]

const formSubmitted = ref(false)
const formError = ref('')
const formLoading = ref(false)

async function handleFormSubmit(payload: { email: string; agreedPolicy: boolean; subscribedToNews: boolean }) {
  formError.value = ''
  formLoading.value = true

  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: payload.email,
        agreedPolicy: payload.agreedPolicy,
        subscribedToNews: payload.subscribedToNews,
        utm: extractUtmParams(),
        pageUrl: window.location.href,
      }),
    })

    const data = await response.json()

    if (!response.ok || !data.success) {
      formError.value = data.error || 'Произошла ошибка. Попробуйте позже.'
      return
    }

    formSubmitted.value = true
  } catch {
    formError.value = 'Ошибка сети. Проверьте подключение и попробуйте ещё раз.'
  } finally {
    formLoading.value = false
  }
}

const fallbackCards: CardItem[] = [
  { image: bearMobile, title: 'Россияне выберут 100 самых уязвимых краснокнижных видов', date: '16 марта / 11:04', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/articles/2026/03/16/1182989-rossiyane-viberut-100-samih-uyazvimih-krasnoknizhnih-vidov?from=100vidov' },
  { image: eagleMobile, title: 'Численность оседлой популяции дзерена в Забайкалье стабилизировалась', date: '12 марта / 13:02', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/12/1182374-chislennost-osedloi-populyatsii-dzerena-v-zabaikale-stabilizirovalas?from=100vidov' },
  { image: beetleMobile, title: 'Ученые обследовали заказник «Позарым» и получили данные о краснокнижных животных', date: '11 марта / 13:17', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/11/1182073-krasnoknizhnih-zhivotnih?from=100vidov' },
  { image: bearDesktop, title: 'Искусственный интеллект вышел на охрану Дальневосточного морского заповедника', date: '10 марта / 12:51', readTime: '', href: 'https://www.vedomosti.ru/esg/protection_nature/news/2026/03/10/1181759-iskusstvennii-intellekt-vishel-na-ohranu-dalnevostochnogo-morskogo-zapovednika?from=100vidov' },
]

const cards = ref<CardItem[]>(fallbackCards)

onMounted(async () => {
  const rssCards = await fetchRssCards(4)
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
        :bg-mobile-xs="theme.bgMobileXs"
        :bg-mobile-sm="theme.bgMobileSm"
        :mobile-pos="theme.mobilePos"
        :cards="cards"
        target-date="2026-06-01T00:00:00"
        :submitted="formSubmitted"
        :form-error="formError"
        :form-loading="formLoading"
        @form-submit="handleFormSubmit"
      />
    </main>

    <SiteFooter />
    <CookieBanner />
  </div>
</template>
