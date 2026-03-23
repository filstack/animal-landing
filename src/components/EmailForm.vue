<script setup lang="ts">
import { ref } from 'vue'
import arrowRight from '@/assets/icons/arrow-right.svg'

const email = ref('')
const agreedPolicy = ref(true)
const agreedNews = ref(false)

const emit = defineEmits<{
  submit: [payload: { email: string; subscribedToNews: boolean }]
}>()

function handleSubmit() {
  if (!email.value || !agreedPolicy.value) return
  emit('submit', { email: email.value, subscribedToNews: agreedNews.value })
}
</script>

<template>
  <!-- Desktop: w-420, p-20, gap-20, rounded-18, border #404040 0.5px, backdrop-blur-23px -->
  <!-- Mobile: full width, gap-16, p-20, border 0.3px -->
  <form
    @submit.prevent="handleSubmit"
    class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040]
           border-[0.3px] sm:border-[0.5px]
           rounded-[18px]
           p-[20px]
           flex flex-col
           gap-[16px] sm:gap-[20px]
           w-full sm:w-[420px]"
  >
    <!-- Label: Desktop 16px/18px, Mobile 12px/14px -->
    <p class="font-heading text-white font-normal
              text-[12px] leading-[14px]
              sm:text-[16px] sm:leading-[18px]
              whitespace-nowrap">
      Мы напомним о старте голосования
    </p>

    <!-- Input: Desktop h-52 pl-30 pr-20 py-10 text-18/24, Mobile h-44 px-20 text-15/18 -->
    <div class="relative">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="w-full backdrop-blur-[23px]
               h-[44px] sm:h-auto
               border-solid border-[#b6b6b6] border-[0.5px]
               rounded-[99px] bg-transparent
               px-[20px] py-[10px] sm:pl-[30px] sm:pr-[20px]
               font-body text-white font-light
               text-[15px] leading-[18px] sm:text-[18px] sm:leading-[24px]
               placeholder:text-white/60
               focus:outline-none focus:border-white transition-colors"
      />
      <button
        type="submit"
        :disabled="!agreedPolicy || !email"
        class="absolute right-[12px] sm:right-[20px] top-1/2 -translate-y-1/2
               w-[24px] h-[24px] sm:w-[32px] sm:h-[32px]
               flex items-center justify-center
               disabled:opacity-30 hover:opacity-80 transition-opacity"
        aria-label="Отправить"
      >
        <img :src="arrowRight" alt="" class="w-full h-full" />
      </button>
    </div>

    <!-- Checkboxes: 14x14, rounded-2, border #b6b6b6 0.3px, text 10px/13px #b6b6b6, gap-8 -->
    <!-- Gap between checkboxes: Desktop 15px, Mobile 12px -->
    <div class="flex flex-col gap-[12px] sm:gap-[15px]">
      <!-- Checkbox 1: policy (required) -->
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input
          v-model="agreedPolicy"
          type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green"
        />
        <span class="font-body-tight text-[#b6b6b6] text-[10px] leading-[13px] font-normal">
          Соглашаюсь с&nbsp;<a href="#" class="underline">политикой обработки персональных данных</a>
          и&nbsp;даю согласие на&nbsp;обработку персональных данных. Я&nbsp;принимаю условия
          <a href="#" class="underline">соглашения</a> и&nbsp;<a href="#" class="underline">политику конфиденциальности</a>
        </span>
      </label>

      <!-- Checkbox 2: news (optional) -->
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input
          v-model="agreedNews"
          type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green"
        />
        <span class="font-body-tight text-[#b6b6b6] text-[10px] leading-[13px] font-normal">
          Хочу получать новости и&nbsp;обновления проекта на&nbsp;почту (отписаться можно в&nbsp;любой момент)
        </span>
      </label>
    </div>
  </form>
</template>
