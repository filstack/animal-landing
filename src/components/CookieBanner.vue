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
    <div v-if="visible" class="fixed bottom-0 sm:bottom-[20px] left-0 sm:left-1/2 sm:-translate-x-1/2 z-50
                                w-full sm:w-[calc(100%-40px)] sm:max-w-[1105px]">
      <!-- Mobile: full-width bar at bottom. Desktop: rounded pill -->
      <div class="bg-[#1a1a1a] sm:bg-[#1a1a1a]/95 backdrop-blur-[23px] border-t sm:border border-[#404040]/50
                  sm:rounded-[88px]
                  px-[16px] py-[12px] sm:px-[60px] sm:py-[20px]
                  flex items-center gap-[12px] sm:gap-[30px]">
        <p class="flex-1 text-[#b6b6b6] text-[11px] sm:text-[14px] leading-[14px] sm:leading-[17px] line-clamp-2 sm:line-clamp-none"
           style="font-family: 'Fira Sans', 'Inter', sans-serif;">
          На нашем сайте используются cookie-файлы и&nbsp;технологии персонализации.
          <span class="hidden sm:inline">
            Продолжая пользоваться данным сайтом, вы&nbsp;подтверждаете свое согласие на&nbsp;использование
            файлов cookie в&nbsp;соответствии
            с&nbsp;<a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политикой обработки персональных данных</a>.
          </span>
        </p>
        <button
          @click="accept"
          class="shrink-0
                 h-[32px] sm:h-[48px] px-[16px] sm:px-[40px]
                 rounded-[40px] bg-[#748c43]
                 font-heading text-white text-[12px] sm:text-[14px] font-medium
                 hover:bg-[#748c43]/80 active:scale-95 transition-all whitespace-nowrap"
        >
          Принять
        </button>
      </div>
    </div>
  </Transition>
</template>
