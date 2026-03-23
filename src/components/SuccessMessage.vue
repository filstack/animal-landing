<script setup lang="ts">
defineProps<{
  visible: boolean
}>()

defineEmits<{
  close: []
}>()
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-200"
    leave-to-class="opacity-0"
  >
    <div
      v-if="visible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-[20px]"
      @click.self="$emit('close')"
    >
      <!-- Same glassmorphism as form -->
      <div class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
                  border-solid border-[#404040] border-[0.5px]
                  rounded-[18px] p-[30px] sm:p-[40px]
                  max-w-[420px] w-full text-center
                  flex flex-col items-center gap-[20px]">
        <!-- Check icon -->
        <div class="size-[48px] sm:size-[56px] rounded-full bg-[#748c43]/20 flex items-center justify-center">
          <svg class="size-[24px] sm:size-[28px]" viewBox="0 0 24 24" fill="none" stroke="#748c43" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div class="flex flex-col gap-[8px]">
          <h2 class="font-heading text-white text-[24px] sm:text-[28px] leading-[28px] sm:leading-[32px] font-bold">
            Спасибо!
          </h2>
          <p class="font-body text-[#b6b6b6] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[22px]">
            Мы&nbsp;напомним вам о&nbsp;старте голосования на&nbsp;указанную почту.
          </p>
        </div>

        <button
          @click="$emit('close')"
          class="h-[44px] px-[30px] rounded-[99px] bg-[#748c43] font-heading text-white text-[16px] font-medium
                 hover:bg-[#748c43]/80 active:scale-95 transition-all"
        >
          Отлично
        </button>
      </div>
    </div>
  </Transition>
</template>
