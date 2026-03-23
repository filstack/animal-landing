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
    <div
      v-if="visible"
      class="fixed bottom-[20px] left-[20px] right-[20px] sm:left-auto sm:right-[20px] z-50
             sm:max-w-[420px]
             backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
             border-solid border-[#404040] border-[0.5px]
             rounded-[18px]
             p-[20px]
             flex flex-col gap-[16px]"
    >
      <p class="font-body text-[#b6b6b6] text-[12px] leading-[16px] sm:text-[13px] sm:leading-[17px]">
        Мы используем файлы cookie для персонализации контента и&nbsp;рекламы, предоставления функций социальных сетей
        и&nbsp;анализа нашего трафика.
      </p>
      <div class="flex gap-[8px]">
        <button
          @click="accept"
          class="h-[36px] px-[20px] rounded-[99px] bg-[#748c43] font-heading text-white text-[13px] font-medium
                 hover:bg-[#748c43]/80 active:scale-95 transition-all whitespace-nowrap"
        >
          Принять все
        </button>
        <button
          @click="accept"
          class="h-[36px] px-[20px] rounded-[99px] border border-[#b6b6b6] border-[0.5px] bg-transparent
                 font-heading text-white text-[13px] font-medium
                 hover:bg-white/10 active:scale-95 transition-all whitespace-nowrap"
        >
          Настройки
        </button>
      </div>
    </div>
  </Transition>
</template>
