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
    <!-- Figma: 1105x91, rounded-88, px-60 py-20, gap-30, Fira Sans 400 14px, button rounded-40 136x48 -->
    <div v-if="visible" class="fixed bottom-[20px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-16px)] sm:w-[calc(100%-40px)] max-w-[1105px]">
      <div class="bg-[#1a1a1a]/95 backdrop-blur-[23px] border border-[#404040]/50
                  rounded-[24px] sm:rounded-[88px]
                  px-[20px] py-[16px] sm:px-[60px] sm:py-[20px]
                  flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[30px]">
        <p class="flex-1 text-[#b6b6b6] text-[12px] sm:text-[14px] leading-[16px] sm:leading-[17px]" style="font-family: 'Fira Sans', 'Inter', sans-serif;">
          На нашем сайте используются cookie-файлы и&nbsp;технологии персонализации.
          Продолжая пользоваться данным сайтом, вы&nbsp;подтверждаете свое согласие на&nbsp;использование
          файлов cookie и&nbsp;технологий персонализации в&nbsp;соответствии
          с&nbsp;<a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политикой в&nbsp;отношении обработки персональных данных</a>.
        </p>
        <button
          @click="accept"
          class="shrink-0 self-start sm:self-auto
                 h-[40px] sm:h-[48px] px-[24px] sm:px-[40px]
                 rounded-[40px] bg-[#748c43]
                 font-heading text-white text-[13px] sm:text-[14px] font-medium
                 hover:bg-[#748c43]/80 active:scale-95 transition-all whitespace-nowrap"
        >
          Принять
        </button>
      </div>
    </div>
  </Transition>
</template>
