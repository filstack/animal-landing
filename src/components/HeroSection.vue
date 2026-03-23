<script setup lang="ts">
import EmailForm from './EmailForm.vue'
import CountdownTimer from './CountdownTimer.vue'
import AnimalCards from './AnimalCards.vue'
import type { CardItem } from './AnimalCards.vue'

defineProps<{
  bgDesktop: string
  bgMobile?: string
  targetDate?: string
  cards: CardItem[]
}>()

defineEmits<{
  formSubmit: [payload: { email: string; subscribedToNews: boolean }]
}>()
</script>

<template>
  <!--
    Layout per breakpoint (from Figma):
    320: px-20, 1st screen h-560, title gap-16
    360: px-20, 1st screen h-680, title gap-24
    480: px-40, 1st screen h-733, title gap-24
    768: px-40, content w-688, all in one screen h-896+280
    1024: px-54, content w-916
    1280: content w-1108, centered
    1680: content w-1520, centered
  -->
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img :src="bgDesktop" alt="" class="w-full h-full object-cover object-[70%_center] hidden sm:block" />
      <img :src="bgMobile || bgDesktop" alt="" class="w-full h-full object-cover object-[60%_20%] sm:hidden" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/40 to-transparent sm:via-[#1e1e1e]/20" />
    </div>

    <div class="relative z-10 flex flex-1 flex-col">
      <!-- Header spacer: 320=76, 360=76, 480=84, 768+=90, 1280+=98 -->
      <div class="h-[76px] sm:h-[84px] md:h-[90px] xl:h-[98px] shrink-0" />

      <!-- Content area -->
      <div class="flex flex-1 flex-col justify-end sm:justify-center
                  px-[20px] sm:px-[40px] md:px-[40px] lg:px-[54px] xl:px-0
                  sm:items-center
                  pb-[20px] sm:pb-[40px] xl:pb-[60px]
                  gap-[30px] sm:gap-[36px]">

        <!-- Content container: responsive widths from Figma -->
        <div class="w-full
                    md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                    flex flex-col gap-[30px]">

          <!-- Title block: gap-16 on 320, gap-24 on 360+ -->
          <div class="flex flex-col gap-[16px] xs:gap-[24px] w-full sm:w-[400px] xl:w-[420px]">
            <div class="flex gap-[4px] sm:gap-[8px] items-center">
              <!-- Title: 320=38px, 360=44px, 480=48px, 768=52px, 1024=56px, 1280=70px, 1680=80px -->
              <p class="font-heading text-white font-extrabold whitespace-pre
                        text-[38px] leading-[36px]
                        xs:text-[44px] xs:leading-[40px]
                        sm:text-[48px] sm:leading-[44px]
                        md:text-[52px] md:leading-[48px]
                        lg:text-[56px] lg:leading-[52px]
                        xl:text-[70px] xl:leading-[62px]
                        2xl:text-[80px] 2xl:leading-[72px]">Вместе <br />для дикой<br />природы</p>
              <!-- Badge "скоро": 320=30px, 360=36px, desktop=48px -->
              <div class="flex items-start self-stretch py-[16px] xs:py-[20px] sm:py-[50px]">
                <div class="bg-[#fa0] rounded-full flex items-center justify-center shrink-0
                            size-[30px] p-[6px]
                            xs:size-[36px] xs:p-[7.5px]
                            sm:size-[48px] sm:p-[10px]">
                  <span class="font-body-tight font-semibold text-white whitespace-nowrap
                               text-[9px] leading-[8px]
                               xs:text-[10.5px] xs:leading-[9.4px]
                               sm:text-[14px] sm:leading-[12.5px]">скоро</span>
                </div>
              </div>
            </div>
            <!-- Subtitle: 320=16px, 360=18px, 480=18px, 768+=20px, 1280+=24px -->
            <p class="font-heading text-white font-bold whitespace-pre-wrap
                      text-[16px] leading-[20px]
                      xs:text-[18px] xs:leading-[22px]
                      md:text-[20px] md:leading-[26px]
                      xl:text-[24px] xl:leading-[30px]">Эксперты отобрали редкие виды. <br />Теперь выбор за нами</p>
          </div>

          <!-- Form + Timer -->
          <div class="flex flex-col md:flex-row md:items-start md:justify-between w-full">
            <EmailForm @submit="$emit('formSubmit', $event)" />
            <div class="hidden md:flex md:items-end md:self-stretch">
              <CountdownTimer :target-date="targetDate" />
            </div>
          </div>
        </div>

        <!-- Mobile/small tablet timer (below form) -->
        <div class="md:hidden w-full">
          <CountdownTimer :target-date="targetDate" />
        </div>

        <!-- Cards inside hero -->
        <div class="w-full
                    md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]">
          <AnimalCards :cards="cards" />
        </div>
      </div>
    </div>
  </section>
</template>
