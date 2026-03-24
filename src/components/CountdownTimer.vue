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
  <div class="flex flex-col gap-[4px] justify-center
              text-center w-full py-[20px]
              md:text-left md:py-0">
    <p class="font-heading text-white font-normal w-full
              text-[12px] leading-[14px]
              sm:text-[14px] sm:leading-[17px]
              md:text-[14px] md:leading-[17px]
              xl:text-[16px] xl:leading-[18px]
              2xl:text-[18px] 2xl:leading-[22px]">
      До старта голосования
    </p>
    <p class="font-heading text-[#ffaa00] w-full
              text-[52px] leading-[52px]
              sm:text-[64px] sm:leading-[64px]
              md:text-[76px] md:leading-[68.4px]
              lg:text-[90px] lg:leading-[0.9]
              xl:text-[114px] xl:leading-[102.6px]">{{ timeLeft }}</p>
  </div>
</template>
