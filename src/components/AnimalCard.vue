<script setup lang="ts">
import arrowCard from '@/assets/icons/arrow-card.svg'

withDefaults(defineProps<{
  image: string
  title: string
  date: string
  readTime: string
  href?: string
  showImage?: boolean
}>(), {
  showImage: true
})
</script>

<template>
  <!-- Figma 1680: flex-1, h-240, rounded-18, px-16 py-30, gap-20 -->
  <a
    :href="href || '#'"
    class="group block
           backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040] border-[0.5px]
           rounded-[18px] overflow-hidden
           flex flex-col gap-[20px]
           px-[16px] py-[24px] sm:py-[30px] lg:py-[24px] xl:py-[30px]
           hover:border-white
           transition-all duration-300 cursor-pointer"
  >
    <!-- Top: text + optional image -->
    <div class="flex-1 flex flex-col min-h-0 pointer-events-none">
      <div class="flex-1 flex gap-[16px] items-start min-h-0">
        <!-- Figma 1680: Exo 2 Medium 18px/20lh -->
        <p class="flex-1 font-heading text-white font-medium min-h-0 line-clamp-6 pointer-events-none
                  text-[14px] leading-[17px]
                  xs:text-[16px] xs:leading-[18px]
                  md:text-[14px] md:leading-[17px]
                  xl:text-[16px] xl:leading-[18px]
                  2xl:text-[18px] 2xl:leading-[20px]">
          {{ title }}
        </p>
        <div v-if="showImage !== false" class="shrink-0 w-[140px] h-[94px] xs:w-[160px] xs:h-[108px] lg:w-[120px] lg:h-[81px] xl:w-[160px] xl:h-[108px] rounded-[16px] overflow-hidden">
          <img :src="image" :alt="title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </div>

    <!-- Bottom: date + green icon -->
    <div class="flex items-center justify-between shrink-0 pointer-events-none">
      <!-- Figma 1680: Inter Regular 14px/17lh #807974 -->
      <span class="font-body text-[#807974] font-normal whitespace-nowrap
                   text-[12px] leading-[14px]
                   2xl:text-[14px] 2xl:leading-[17px]">
        {{ date }}
      </span>
      <!-- Figma 1680: 40x40, p-7.5, r-30. 1280: 32x32, p-6, r-24 -->
      <div class="bg-[#748c43] flex items-center justify-center shrink-0
                  size-[32px] rounded-[24px] p-[6px]
                  2xl:size-[40px] 2xl:rounded-[30px] 2xl:p-[7.5px]">
        <img :src="arrowCard" alt="" class="w-full h-full" />
      </div>
    </div>
  </a>
</template>
