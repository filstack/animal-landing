<script setup lang="ts">
import EmailForm from './EmailForm.vue'
import successBadge from '@/assets/icons/success-badge.svg'
import CountdownTimer from './CountdownTimer.vue'
import AnimalCards from './AnimalCards.vue'
import type { CardItem } from './AnimalCards.vue'

const props = withDefaults(defineProps<{
  bgDesktop: string
  bgMobile?: string
  bgMobileXs?: string
  bgMobileSm?: string
  mobilePos?: string
  targetDate?: string
  cards: CardItem[]
  submitted?: boolean
  formError?: string
  formLoading?: boolean
  headingTag?: 'h1' | 'h2'
}>(), { headingTag: 'h1' })

const emit = defineEmits<{
  formSubmit: [payload: { email: string; agreedPolicy: boolean; subscribedToNews: boolean }]
}>()

function handleFormSubmit(payload: { email: string; agreedPolicy: boolean; subscribedToNews: boolean }) {
  emit('formSubmit', payload)
}
</script>

<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img :src="bgDesktop" alt="" class="w-full h-full object-cover object-[70%_center] hidden md:block" />
      <picture class="md:hidden">
        <source v-if="bgMobileSm" :srcset="bgMobileSm" media="(min-width: 480px)" />
        <source v-if="bgMobileXs" :srcset="bgMobileXs" media="(min-width: 360px)" />
        <img :src="bgMobile || bgDesktop" alt=""
          class="absolute top-0 left-0 w-full h-[560px] xs:h-[680px] sm:h-[744px] object-cover"
          :style="{ objectPosition: mobilePos || 'center center' }" />
      </picture>
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/30 to-transparent md:via-[#1e1e1e]/20" />
    </div>

    <div class="relative z-10 flex flex-1 flex-col">
      <!-- Header spacer: Figma 1680 = py-40 header → 110px total -->
      <div class="h-[76px] sm:h-[84px] md:h-[90px] xl:h-[98px] 2xl:h-[110px] shrink-0" />

      <!-- 1st screen: base/xs=justify-end, sm=justify-start+pt-120+pb-60 -->
      <div class="flex flex-col justify-end sm:justify-start
                  min-h-[484px] xs:min-h-[604px] sm:min-h-[660px] md:min-h-0 md:flex-1
                  px-[20px] sm:px-[40px] lg:px-0
                  sm:items-center
                  pb-[20px] sm:pb-[60px] md:pb-[60px]
                  sm:pt-[120px] md:pt-[24px] lg:pt-[4px] 2xl:pt-[30px]
                  gap-[36px]">

        <!-- Top section: Figma 1680 = w-1520, gap-46 between title-block and form-row -->
        <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                    flex flex-col gap-[20px] xs:gap-[30px] sm:gap-[34px] md:gap-[30px] 2xl:gap-[46px]">

          <!-- Title block: Figma 1680 = gap-40 between title-row and subtitle -->
          <div class="flex flex-col gap-[16px] xs:gap-[24px] 2xl:gap-[40px]
                      w-full sm:w-[400px] lg:w-[400px] xl:w-[420px] 2xl:w-auto">
            <!-- Title + Badge row: Figma 1680 = gap-10 -->
            <div class="flex gap-[2px] xs:gap-[4px] sm:gap-[8px] 2xl:gap-[10px] items-center">
              <!-- Title: Figma 1680 = 84px/70lh, ExtraBold, TWO lines -->
              <component :is="headingTag" class="font-heading text-white font-extrabold
                        text-[32px] leading-[30px]
                        xs:text-[44px] xs:leading-[40px]
                        sm:text-[50px] sm:leading-[46px]
                        md:text-[54px] md:leading-[50px]
                        lg:text-[62px] lg:leading-[56px]
                        xl:text-[70px] xl:leading-[62px]
                        2xl:text-[84px] 2xl:leading-[70px]">Вместе<br>для дикой<br class="2xl:hidden"> природы</component>
              <!-- Badge: Figma 1680 = h-140 py-50, sticker 54x54 p-11.25 r-112.5 -->
              <div class="flex items-start self-stretch py-[20px] sm:py-[34px] md:py-[40px]
                          lg:py-[50px] 2xl:h-[140px]">
                <div class="bg-[#fa0] rounded-full flex items-center justify-center shrink-0
                            size-[30px] p-[6.25px]
                            xs:size-[36px] xs:p-[7.5px]
                            sm:size-[40px] sm:p-[8.3px]
                            lg:size-[48px] lg:p-[10px]
                            2xl:size-[54px] 2xl:p-[11.25px]">
                  <span class="font-body-tight font-semibold text-white whitespace-nowrap
                               text-[8.75px] leading-[7.84px]
                               xs:text-[10.5px] xs:leading-[9.4px]
                               sm:text-[12px] sm:leading-[10.5px]
                               lg:text-[14px] lg:leading-[12.5px]
                               2xl:text-[16px] 2xl:leading-[14px]">скоро</span>
                </div>
              </div>
            </div>
            <!-- Subtitle: Figma 1680 = 24px/30lh, Bold, single line -->
            <h2 class="font-heading text-white font-bold whitespace-pre-wrap
                      text-[16px] leading-[20px]
                      xs:text-[18px] xs:leading-[22px]
                      sm:text-[20px] sm:leading-[26px]
                      lg:text-[22px] lg:leading-[28px]
                      xl:text-[24px] xl:leading-[30px]
                      2xl:whitespace-nowrap">Эксперты отобрали редкие виды. Теперь выбор за нами</h2>
          </div>

          <!-- Form + Timer row: md=gap-8 start, lg/xl=justify-between, 2xl=gap-40 start -->
          <div class="flex flex-col md:flex-row md:items-start md:gap-[8px]
                      lg:justify-between
                      2xl:justify-start 2xl:gap-[40px] w-full">
            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              leave-active-class="transition-opacity duration-200"
              leave-to-class="opacity-0"
              mode="out-in"
            >
              <EmailForm v-if="!submitted" :error="formError" :loading="formLoading" @submit="handleFormSubmit" />
              <!-- Success message (Figma: Form State=Success) -->
              <div v-else
                class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
                       border-solid border-[#404040] border-[0.3px] sm:border-[0.5px]
                       rounded-[18px] px-[20px] py-[30px]
                       w-full md:w-[340px] lg:w-[400px] xl:w-[420px] 2xl:w-[480px]
                       md:h-[232px] lg:h-[231px] xl:h-[241px] 2xl:h-[250px]
                       flex flex-col items-center justify-center gap-[30px] lg:gap-[20px] text-center">
                <!-- Success badge icon (Figma: star-shield with checkmark) -->
                <img :src="successBadge" alt="" class="shrink-0
                     w-[50px] h-[53px]
                     sm:w-[60px] sm:h-[63px]
                     lg:w-[70px] lg:h-[74px]
                     2xl:w-[80px] 2xl:h-[84px]" />
                <p class="font-heading text-white font-medium
                          text-[14px] leading-[17px]
                          sm:text-[16px] sm:leading-[20px]
                          md:text-[14px] md:leading-[17px]
                          xl:text-[16px] xl:leading-[20px]
                          2xl:text-[18px] 2xl:leading-[24px]">
                  Успешно!<br>Мы&nbsp;напомним вам о&nbsp;старте голосования
                </p>
              </div>
            </Transition>
            <!-- Timer: md=flex-1(FILL), lg/xl=auto(HUG+space-between), 2xl=auto(FIXED w-480) -->
            <div class="hidden md:flex md:flex-1 lg:flex-initial md:self-stretch md:items-center">
              <CountdownTimer :target-date="targetDate" />
            </div>
          </div>
        </div>
      </div>

      <!-- Below fold: timer + cards (separate from 1st screen, as in Figma) -->
      <div class="relative z-10 md:hidden px-[20px] sm:px-[40px] py-[20px] sm:py-0">
        <div class="-mx-[20px] sm:mx-0">
          <CountdownTimer :target-date="targetDate" />
        </div>
      </div>

      <div class="relative z-10 md:flex md:justify-center
                  px-[8px] pt-[20px] pb-[40px]
                  sm:px-[40px] sm:pt-[60px] sm:pb-[60px]
                  md:px-0 md:pt-0 md:pb-[60px]">
        <div class="md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]">
          <AnimalCards :cards="cards" />
        </div>
      </div>
    </div>
  </section>
</template>
