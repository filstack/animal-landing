<script setup lang="ts">
defineProps<{
  image: string
  title: string
  date: string
  readTime: string
  href?: string
  showImage?: boolean
}>()
</script>

<template>
  <!-- Figma 1680: w-374 h-240, rounded-18, px-16 py-30, gap-20 -->
  <!-- Title: Exo 2 w500 18px/20lh, Date: Inter w400 14px/17lh, Icon: 40x40 -->
  <a
    :href="href || '#'"
    class="group block
           backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040] border-[0.5px]
           rounded-[18px] overflow-hidden
           flex flex-col gap-[20px]
           px-[16px] py-[24px] sm:py-[30px]
           hover:border-white/40 hover:from-[rgba(122,122,122,0.25)]
           transition-all duration-300 cursor-pointer"
  >
    <!-- Top: text + optional image -->
    <div class="flex-1 flex flex-col min-h-0">
      <div class="flex-1 flex gap-[16px] items-start min-h-0">
        <!-- Figma 1680: Exo 2 Medium 18px/20lh. 1280: 16px/18lh -->
        <p class="flex-1 font-heading text-white font-medium min-h-0 line-clamp-6
                  text-[16px] leading-[18px]
                  2xl:text-[18px] 2xl:leading-[20px]">
          {{ title }}
        </p>
        <div v-if="showImage !== false" class="shrink-0 w-[160px] h-[108px] rounded-[16px] overflow-hidden">
          <img :src="image" :alt="title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>

    <!-- Bottom: date + green icon -->
    <div class="flex items-center justify-between shrink-0">
      <!-- Figma 1680: Inter w400 14px/17lh #807974. 1280: 12px/14lh -->
      <span class="font-body text-[#807974] font-normal whitespace-nowrap
                   text-[12px] leading-[14px]
                   2xl:text-[14px] 2xl:leading-[17px]">
        {{ date }}
      </span>
      <!-- Figma 1680: 40x40, p=7.5, r=30. 1280: 32x32, p=6, r=24 -->
      <div class="bg-[#748c43] flex items-center justify-center shrink-0
                  size-[32px] rounded-[24px] p-[6px]
                  2xl:size-[40px] 2xl:rounded-[30px] 2xl:p-[7.5px]">
        <svg viewBox="0 0 24 24" fill="none" class="w-full h-full">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
</template>
