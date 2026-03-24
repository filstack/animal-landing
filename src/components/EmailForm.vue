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
  <!-- Figma: 1280 w=420, 1680 w=480, p=20, gap=20, rounded-18, border #404040 0.5px -->
  <form
    @submit.prevent="handleSubmit"
    class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040] border-[0.3px] sm:border-[0.5px]
           rounded-[18px] p-[20px]
           flex flex-col gap-[16px] sm:gap-[20px]
           w-full md:w-[340px] xl:w-[420px] 2xl:w-[480px]"
  >
    <!-- Label: Figma 1680=18px/22lh, 1280=16px/18lh, mobile=12px/14lh -->
    <p class="font-heading text-white font-normal whitespace-nowrap
              text-[12px] leading-[14px]
              md:text-[14px] md:leading-[17px]
              xl:text-[16px] xl:leading-[18px]
              2xl:text-[18px] 2xl:leading-[22px]">
      Мы напомним о старте голосования
    </p>

    <!-- Input: Figma 1680=440x52 pl-30 pr-20, Inter w300 18px/24lh -->
    <div class="relative">
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        required
        class="w-full backdrop-blur-[23px]
               h-[44px] xl:h-[52px]
               border-solid border-[#b6b6b6] border-[0.5px]
               rounded-[99px] bg-transparent
               px-[20px] py-[10px] xl:pl-[30px] xl:pr-[20px]
               font-body text-white font-light
               text-[15px] leading-[18px] xl:text-[18px] xl:leading-[24px]
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

    <!-- Checkboxes: Figma 1680=12px/14lh, 1280=10px/13lh, gap=15 desktop, 12 mobile -->
    <div class="flex flex-col gap-[12px] sm:gap-[15px]">
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input v-model="agreedPolicy" type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green" />
        <span class="font-body-tight text-[#b5b5b5] font-normal
                     text-[10px] leading-[13px]
                     2xl:text-[12px] 2xl:leading-[14px]">
          Соглашаюсь с&nbsp;<a href="#" class="underline">политикой обработки персональных данных</a>
          и&nbsp;даю согласие на&nbsp;обработку персональных данных. Я&nbsp;принимаю условия
          <a href="#" class="underline">соглашения</a> и&nbsp;<a href="#" class="underline">политику конфиденциальности</a>
        </span>
      </label>
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input v-model="agreedNews" type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green" />
        <span class="font-body-tight text-[#b5b5b5] font-normal
                     text-[10px] leading-[13px]
                     2xl:text-[12px] 2xl:leading-[14px]">
          Хочу получать новости и&nbsp;обновления проекта на&nbsp;почту (отписаться можно в&nbsp;любой момент)
        </span>
      </label>
    </div>
  </form>
</template>
