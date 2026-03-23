<script setup lang="ts">
import logoSvg from '@/assets/logos/vedomosti.svg'
</script>

<template>
  <!-- Desktop: py-36px, content w-1108. Mobile: px-20px py-28px, logo 112x20 -->
  <header class="absolute top-0 left-0 w-full z-30">
    <div class="flex flex-col items-start
                px-[20px] py-[28px]
                sm:items-center sm:py-[36px] sm:px-0">
      <div class="w-full sm:w-[1108px]">
        <a href="/" aria-label="Ведомости — на главную">
          <img
            :src="logoSvg"
            alt="Ведомости"
            class="h-[20px] w-[112px] sm:h-[26px] sm:w-[145px]"
          />
        </a>
      </div>
    </div>
  </header>
</template>
