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
  <a
    :href="href || '#'"
    class="group block
           backdrop-blur-[23px] bg-gradient-to-r from-[rgba(122,122,122,0.14)] to-[rgba(115,115,115,0)]
           border-solid border-[#404040] border-[0.5px]
           rounded-[18px] overflow-hidden
           flex flex-col gap-[20px]
           px-[16px] py-[30px]
           hover:from-[rgba(122,122,122,0.25)] transition-all duration-300"
  >
    <!-- Top: text + optional image -->
    <div class="flex-1 flex flex-col min-h-0">
      <div class="flex-1 flex gap-[16px] items-start min-h-0">
        <p class="flex-1 font-heading text-white font-medium text-[16px] leading-[18px] min-h-0 line-clamp-6">
          {{ title }}
        </p>
        <div v-if="showImage !== false" class="shrink-0 w-[160px] h-[108px] rounded-[16px] overflow-hidden">
          <img
            :src="image"
            :alt="title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>

    <!-- Bottom: date + green icon -->
    <div class="flex items-center justify-between shrink-0">
      <span class="font-body text-[#807974] text-[12px] leading-[14px] font-normal whitespace-nowrap">
        {{ date }}
      </span>
      <div class="bg-[#748c43] rounded-[24px] p-[6px] size-[32px] flex items-center justify-center shrink-0">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="w-[24px] h-[24px]">
          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
  </a>
</template>
