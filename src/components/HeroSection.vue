<script setup lang="ts">
import { ref } from 'vue'
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

const emit = defineEmits<{
  formSubmit: [payload: { email: string; subscribedToNews: boolean }]
}>()

const submitted = ref(false)

function handleFormSubmit(payload: { email: string; subscribedToNews: boolean }) {
  emit('formSubmit', payload)
  submitted.value = true
}
</script>

<template>
  <section class="relative min-h-screen flex flex-col overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <img :src="bgDesktop" alt="" class="w-full h-full object-cover object-[70%_center] hidden sm:block" />
      <img :src="bgMobile || bgDesktop" alt=""
        class="absolute top-0 left-0 w-full h-[680px] xs:h-[733px] object-cover object-[center_top] sm:hidden" />
      <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      <div class="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-[#1e1e1e]/30 to-transparent sm:via-[#1e1e1e]/20" />
    </div>

    <div class="relative z-10 flex flex-1 flex-col">
      <!-- Header spacer: Figma 1680=110, 1280=98, 768=90, 480=84, 360=76 -->
      <div class="h-[76px] sm:h-[84px] md:h-[90px] xl:h-[98px] 2xl:h-[110px] shrink-0" />

      <!-- Content -->
      <div class="flex flex-1 flex-col justify-end sm:justify-center
                  px-[20px] sm:px-[40px] lg:px-[54px] xl:px-0
                  sm:items-center
                  pb-[20px] sm:pb-[30px] xl:pb-[40px]
                  gap-[30px] sm:gap-[36px]">

        <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                    flex flex-col gap-[30px] 2xl:gap-[36px]">

          <!-- Title block: Figma 1680 gap=40, 1280 gap=24 -->
          <div class="flex flex-col gap-[16px] xs:gap-[24px] 2xl:gap-[40px]
                      w-full sm:w-[400px] xl:w-[420px] 2xl:w-auto">
            <!-- Title + Badge row: Figma 1680 gap=10 -->
            <div class="flex gap-[4px] sm:gap-[8px] 2xl:gap-[10px] items-center">
              <!-- Title: Figma 1680=84/70, 1280=70/62, 360=44/40, 320=38/36 -->
              <p class="font-heading text-white font-extrabold whitespace-pre
                        text-[38px] leading-[36px]
                        xs:text-[44px] xs:leading-[40px]
                        sm:text-[48px] sm:leading-[44px]
                        md:text-[54px] md:leading-[50px]
                        lg:text-[56px] lg:leading-[52px]
                        xl:text-[70px] xl:leading-[62px]
                        2xl:text-[84px] 2xl:leading-[70px]">Вместе <br />для дикой<br />природы</p>
              <!-- Badge: Figma 1680=54x54 16px, 1280=48x48 14px, 360=36x36 10.5px -->
              <div class="flex items-start self-stretch py-[16px] xs:py-[20px] sm:py-[50px]">
                <div class="bg-[#fa0] rounded-full flex items-center justify-center shrink-0
                            size-[30px] p-[6px]
                            xs:size-[36px] xs:p-[7.5px]
                            md:size-[40px] md:p-[8.3px]
                            xl:size-[48px] xl:p-[10px]
                            2xl:size-[54px] 2xl:p-[11.25px]">
                  <span class="font-body-tight font-semibold text-white whitespace-nowrap
                               text-[9px] leading-[8px]
                               xs:text-[10.5px] xs:leading-[9.4px]
                               md:text-[12px] md:leading-[10.5px]
                               xl:text-[14px] xl:leading-[12.5px]
                               2xl:text-[16px] 2xl:leading-[14px]">скоро</span>
                </div>
              </div>
            </div>
            <!-- Subtitle: Figma 1680 w=659, 24px/30lh. 1280 same. -->
            <p class="font-heading text-white font-bold whitespace-pre-wrap
                      text-[16px] leading-[20px]
                      xs:text-[18px] xs:leading-[22px]
                      md:text-[20px] md:leading-[26px]
                      xl:text-[24px] xl:leading-[30px]
                      max-w-full 2xl:max-w-[659px]">Эксперты отобрали редкие виды. <br />Теперь выбор за нами</p>
          </div>

          <!-- Form + Timer row: Figma 1680 gap=40 between form and timer -->
          <div class="flex flex-col md:flex-row md:items-center md:gap-[40px] w-full">
            <Transition
              enter-active-class="transition-opacity duration-300"
              enter-from-class="opacity-0"
              leave-active-class="transition-opacity duration-200"
              leave-to-class="opacity-0"
              mode="out-in"
            >
              <EmailForm v-if="!submitted" @submit="handleFormSubmit" />
              <!-- Success: Figma = "Успешно! Мы напомним вам о...", Exo 2 w500 16px/20lh, white -->
              <div v-else
                class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
                       border-solid border-[#404040] border-[0.3px] sm:border-[0.5px]
                       rounded-[18px] p-[20px]
                       w-full sm:w-[420px] 2xl:w-[480px]">
                <p class="font-heading text-white font-medium text-[14px] leading-[18px] sm:text-[16px] sm:leading-[20px]">
                  Успешно! Мы&nbsp;напомним вам о&nbsp;старте голосования на&nbsp;указанную почту.
                </p>
              </div>
            </Transition>
            <!-- Timer: Figma 1680 w=480, aligned center vertically with form -->
            <div class="hidden md:flex md:items-center">
              <CountdownTimer :target-date="targetDate" />
            </div>
          </div>
        </div>

        <!-- Mobile timer -->
        <div class="md:hidden w-full">
          <CountdownTimer :target-date="targetDate" />
        </div>

        <!-- Cards -->
        <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]">
          <AnimalCards :cards="cards" />
        </div>
      </div>
    </div>
  </section>
</template>
