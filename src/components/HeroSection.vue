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
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Background: full bleed, no gaps -->
    <div class="absolute inset-0 z-0">
      <img :src="bgDesktop" alt="" class="w-full h-full object-cover object-[70%_center] hidden sm:block" />
      <img :src="bgMobile || bgDesktop" alt="" class="w-full h-full object-cover object-[60%_20%] sm:hidden" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/40 to-transparent sm:via-[#1e1e1e]/20" />
    </div>

    <!-- All content inside hero -->
    <div class="relative z-10 flex flex-1 flex-col">

      <!-- Spacer for header -->
      <div class="h-[76px] sm:h-[98px] shrink-0" />

      <!-- Main content area: Desktop centered w-1108 -->
      <div class="flex flex-1 flex-col
                  gap-[30px] sm:gap-[36px]
                  px-[20px] sm:px-0
                  sm:items-center
                  justify-end sm:justify-center
                  pb-[20px] sm:pb-[60px]">

        <div class="w-full sm:w-[1108px] flex flex-col gap-[30px]">
          <!-- Title block -->
          <div class="flex flex-col gap-[24px] w-full sm:w-[420px]">
            <div class="flex gap-[4px] sm:gap-[8px] items-center">
              <p class="font-heading text-white font-extrabold whitespace-pre
                        text-[44px] leading-[40px]
                        sm:text-[48px] sm:leading-[44px]
                        md:text-[56px] md:leading-[52px]
                        lg:text-[62px] lg:leading-[56px]
                        xl:text-[70px] xl:leading-[62px]">Вместе <br />для дикой<br />природы</p>
              <div class="flex items-start self-stretch py-[20px] sm:py-[50px]">
                <div class="bg-[#fa0] rounded-full flex items-center justify-center shrink-0
                            size-[36px] p-[7.5px] sm:size-[48px] sm:p-[10px]">
                  <span class="font-body-tight font-semibold text-white whitespace-nowrap
                               text-[10.5px] leading-[9.4px] sm:text-[14px] sm:leading-[12.5px]">скоро</span>
                </div>
              </div>
            </div>
            <p class="font-heading text-white font-bold whitespace-pre-wrap
                      text-[18px] leading-[22px]
                      sm:text-[20px] sm:leading-[26px]
                      xl:text-[24px] xl:leading-[30px]">Эксперты отобрали редкие виды. <br />Теперь выбор за нами</p>
          </div>

          <!-- Form + Timer row -->
          <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between w-full">
            <EmailForm @submit="$emit('formSubmit', $event)" />
            <div class="hidden sm:flex sm:items-end sm:self-stretch">
              <CountdownTimer :target-date="targetDate" />
            </div>
          </div>
        </div>

        <!-- Mobile timer -->
        <div class="sm:hidden w-full">
          <CountdownTimer :target-date="targetDate" />
        </div>

        <!-- Cards INSIDE hero (desktop: w-1108, 3 visible) -->
        <div class="w-full sm:w-[1108px]">
          <AnimalCards :cards="cards" />
        </div>
      </div>
    </div>
  </section>
</template>
