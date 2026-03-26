<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  targetDate?: string
}>()

const now = ref(Date.now())
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => { now.value = Date.now() }, 60000)
})
onUnmounted(() => { clearInterval(interval) })

function pluralDays(n: number): string {
  const mod10 = n % 10, mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return 'день'
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'дня'
  return 'дней'
}

const timeLeft = computed(() => {
  if (!props.targetDate) return '0 дней'
  const diff = Math.max(0, new Date(props.targetDate).getTime() - now.value)
  const days = Math.floor(diff / 86400000)
  return `${days} ${pluralDays(days)}`
})
</script>

<template>
  <!-- Timer: md=FILL+px16+left, lg/xl=HUG+left, 2xl=FIXED480+center -->
  <div class="flex flex-col gap-[4px] justify-center font-heading
              text-center w-full py-[20px]
              md:text-left md:py-0 md:px-[16px]
              lg:w-auto lg:px-0
              2xl:w-[480px] 2xl:text-center">
    <!-- Label: md=14/17 indent-2, lg=14/17 indent-6, xl=16/18, 2xl=18/22 center -->
    <p class="text-white font-normal w-full md:indent-[2px] lg:indent-[6px] 2xl:indent-0
              text-[12px] leading-[14px]
              sm:text-[14px] sm:leading-[17px]
              md:text-[14px] md:leading-[17px]
              xl:text-[16px] xl:leading-[18px]
              2xl:text-[18px] 2xl:leading-[22px]">
      До старта голосования
    </p>
    <!-- Value: md=76/68.4, lg=100/0.9, xl=114/0.9, 2xl=114/0.9+center -->
    <p class="text-[#ffaa00] w-full
              text-[52px] leading-[52px]
              sm:text-[64px] sm:leading-[64px]
              md:text-[76px] md:leading-[68.4px]
              lg:text-[100px] lg:leading-[0.9]
              xl:text-[114px] xl:leading-[0.9]">{{ timeLeft }}</p>
  </div>
</template>
