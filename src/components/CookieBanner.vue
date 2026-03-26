<script setup lang="ts">
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
  if (!localStorage.getItem('cookies-accepted')) {
    visible.value = true
  }
})

function accept() {
  visible.value = false
  localStorage.setItem('cookies-accepted', '1')
}
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="translate-y-full opacity-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-to-class="translate-y-full opacity-0"
  >
    <!-- Figma: bottom-0 mobile, bottom-20 md+, centered -->
    <div v-if="visible" class="fixed bottom-0 left-0 z-50
                                w-full
                                md:bottom-[20px] md:left-1/2 md:-translate-x-1/2
                                md:w-[688px] lg:w-[914px] xl:w-[1105px]">
      <!-- Figma: bg #0f0f0f/90%, blur-5, gradient border -->
      <div class="bg-[#0f0f0f]/90 backdrop-blur-[5px]
                  border-[0.5px] border-[#3f3f3f] 2xl:border-[1px]
                  rounded-t-[18px] md:rounded-[88px]
                  px-[20px] pt-[20px] pb-[24px]
                  md:px-[60px] md:pt-[20px] md:pb-[24px]
                  flex items-center
                  gap-[12px] xs:gap-[8px] sm:gap-[16px] md:gap-[30px]">
        <!-- Text: Fira Sans, #999, full text on all BP -->
        <p class="flex-1 text-[#999] font-normal
                  text-[10px] leading-[13px]
                  xs:text-[12px] xs:leading-[14px]
                  2xl:text-[16px] 2xl:leading-[20px]"
           style="font-family: 'Fira Sans', 'Inter', sans-serif;">
          На нашем сайте используются cookie-файлы и&nbsp;технологии персонализации.
          Продолжая пользоваться данным сайтом, вы&nbsp;подтверждаете свое согласие на&nbsp;использование
          файлов cookie в&nbsp;соответствии
          с&nbsp;<a href="https://www.vedomosti.ru/info/privacy"
                    class="underline font-heading" target="_blank" rel="noopener">Политикой обработки персональных данных</a>.
        </p>
        <!-- Buttons: vertical on mobile/md, horizontal on lg+ -->
        <div class="flex flex-col gap-[16px] xs:gap-[16px] md:gap-[10px] lg:flex-row lg:gap-[10px] shrink-0">
          <button
            @click="accept"
            class="h-[40px] px-[14px] xs:px-[14px] sm:px-[20px] md:h-[48px] md:px-[40px]
                   rounded-[40px] bg-[#ffaa00]
                   font-heading text-white text-[12px] md:text-[14px] font-medium
                   hover:bg-[#ffaa00]/80 active:scale-95 transition-all whitespace-nowrap"
          >
            Принять
          </button>
          <button
            @click="accept"
            class="h-[40px] px-[14px] xs:px-[20px] md:h-[48px] md:px-[40px]
                   rounded-[40px] border border-[#999] bg-transparent
                   font-heading text-[#999] text-[12px] md:text-[14px] font-medium
                   hover:bg-white/5 active:scale-95 transition-all whitespace-nowrap"
          >
            Настроить
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
