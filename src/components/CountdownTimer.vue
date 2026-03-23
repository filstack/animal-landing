<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  targetDate?: string
}>()

const now = ref(Date.now())
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => { now.value = Date.now() }, 1000)
})

onUnmounted(() => { clearInterval(interval) })

const timeLeft = computed(() => {
  if (!props.targetDate) return { days: '00', hours: '00', minutes: '00' }
  const diff = Math.max(0, new Date(props.targetDate).getTime() - now.value)
  const days = Math.floor(diff / 86400000)
  const hours = Math.floor((diff % 86400000) / 3600000)
  const minutes = Math.floor((diff % 3600000) / 60000)
  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
  }
})
</script>

<template>
  <!-- Figma 1680: Timer w=480, gap=4, label 18px/22lh left-aligned, timer 114px/102.6lh #fa0 -->
  <div class="flex flex-col gap-[4px] justify-center
              text-center w-full py-[20px]
              md:text-left md:w-[480px] md:py-0">
    <p class="font-heading text-white font-normal w-full
              text-[12px] leading-[14px]
              sm:text-[14px] sm:leading-[17px]
              md:text-[16px] md:leading-[18px]
              2xl:text-[18px] 2xl:leading-[22px]">
      До старта голосования
    </p>
    <!-- Timer with day/hour/min labels for clarity -->
    <div class="font-heading text-[#ffaa00] w-full
                text-[52px] leading-[52px]
                sm:text-[64px] sm:leading-[64px]
                md:text-[80px] md:leading-[0.9]
                lg:text-[90px]
                xl:text-[114px] xl:leading-[102.6px]">
      <span>{{ timeLeft.days }}</span><span class="text-[0.35em] text-white/40 align-super">дн</span>
      <span> : {{ timeLeft.hours }}</span><span class="text-[0.35em] text-white/40 align-super">ч</span>
      <span> : {{ timeLeft.minutes }}</span><span class="text-[0.35em] text-white/40 align-super">м</span>
    </div>
  </div>
</template>
