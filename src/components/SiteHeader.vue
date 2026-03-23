<script setup lang="ts">
import logoSvg from '@/assets/logos/vedomosti.svg'
</script>

<template>
  <!-- Figma: 320/360=px-20 py-28, 480=px-40 py-32, 768=px-40, 1024=px-54, 1280+=centered, 1680=logo 167x30 -->
  <header class="absolute top-0 left-0 w-full z-30">
    <div class="px-[20px] py-[28px]
                sm:px-[40px] sm:py-[32px]
                lg:px-[54px]
                xl:px-0 xl:py-[36px]
                2xl:py-[40px]
                xl:flex xl:justify-center">
      <div class="w-full xl:w-[1108px] 2xl:w-[1520px]">
        <a href="/" aria-label="Ведомости — на главную">
          <img :src="logoSvg" alt="Ведомости"
            class="h-[20px] w-[112px]
                   sm:h-[24px] sm:w-[134px]
                   xl:h-[26px] xl:w-[145px]
                   2xl:h-[30px] 2xl:w-[167px]" />
        </a>
      </div>
    </div>
  </header>
</template>
