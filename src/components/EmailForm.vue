<script setup lang="ts">
import { ref } from 'vue'
import arrowRight from '@/assets/icons/arrow-right.svg'

const props = defineProps<{
  error?: string
}>()

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
  <form
    @submit.prevent="handleSubmit"
    class="backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040] border-[0.3px] sm:border-[0.5px]
           rounded-[18px] p-[20px]
           flex flex-col gap-[6px] sm:gap-[8px]
           w-full md:w-[340px] lg:w-[400px] xl:w-[420px] 2xl:w-[480px]
           md:h-[232px] lg:h-[231px] xl:h-[241px] 2xl:h-[250px]"
  >
    <!-- Label + Input wrapper: gap-24 on 2xl -->
    <div class="flex flex-col gap-[20px] sm:gap-[24px]">
      <!-- Label: Figma 1680 = Exo 2 Regular 18px/22lh -->
      <p class="font-heading text-white font-normal whitespace-nowrap
                text-[12px] leading-[14px]
                md:text-[14px] md:leading-[17px]
                xl:text-[16px] xl:leading-[18px]
                2xl:text-[18px] 2xl:leading-[22px]">
        Мы напомним о старте голосования
      </p>

      <!-- Input wrapper: Figma 1680 h-71, gap-4, contains input h-52 + message area -->
      <div class="flex flex-col gap-[4px] md:h-[63px] lg:h-[62px] xl:h-[71px]">
        <div class="relative">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            :class="[
              'w-full backdrop-blur-[23px]',
              'h-[44px] xl:h-[52px]',
              'border-solid border-[0.5px] rounded-[99px] bg-transparent',
              'px-[20px] py-[10px] xl:pl-[30px] xl:pr-[20px]',
              'font-body text-white font-light',
              'text-[15px] leading-[18px] xl:text-[18px] xl:leading-[20px]',
              'placeholder:text-white/60',
              'focus:outline-none transition-colors',
              error ? 'border-[#e74c3c]' : 'border-[#b6b6b6] focus:border-white'
            ]"
          />
          <button
            type="submit"
            :disabled="!agreedPolicy || !email"
            class="absolute right-[12px] sm:right-[20px] top-1/2 -translate-y-1/2
                   w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] lg:w-[24px] lg:h-[24px] xl:w-[32px] xl:h-[32px]
                   flex items-center justify-center
                   disabled:opacity-30 hover:opacity-80 transition-opacity"
            aria-label="Отправить"
          >
            <img :src="arrowRight" alt="" class="w-full h-full" />
          </button>
        </div>
        <!-- Message: always takes space, error doesn't shift layout -->
        <p class="min-h-[15px] pl-[20px] xl:pl-[30px]
                  font-body-tight font-light text-[12px] leading-[14.5px]"
           :class="error ? 'text-[#e74c3c]' : 'text-transparent'"
        >{{ error || '&nbsp;' }}</p>
      </div>
    </div>

    <!-- Checkboxes: Figma 1680 gap-15, text-12/14lh, #b6b6b6 -->
    <div class="flex flex-col gap-[12px] sm:gap-[15px]">
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input v-model="agreedPolicy" type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green" />
        <span class="font-body-tight text-[#b6b6b6] font-normal
                     text-[10px] leading-[13px]
                     2xl:text-[12px] 2xl:leading-[14px]">
          Нажав на&nbsp;кнопку &laquo;Отправить или &rarr;&raquo;, я&nbsp;соглашаюсь
          с&nbsp;<a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политикой в&nbsp;отношении обработки персональных данных</a>
          и&nbsp;даю <a href="https://www.vedomosti.ru/info/personal-data" class="underline" target="_blank" rel="noopener">согласие на&nbsp;обработку персональных данных</a>.
        </span>
      </label>
      <label class="flex gap-[8px] items-start cursor-pointer">
        <input v-model="agreedNews" type="checkbox"
          class="mt-px w-[14px] h-[14px] shrink-0 rounded-[2px] border-[0.3px] border-[#b6b6b6] accent-green" />
        <span class="font-body-tight text-[#b6b6b6] font-normal
                     text-[10px] leading-[13px]
                     2xl:text-[12px] 2xl:leading-[14px]">
          Хочу получать новости и&nbsp;обновления проекта на&nbsp;почту (отписаться можно в&nbsp;любой момент)
        </span>
      </label>
    </div>
  </form>
</template>
