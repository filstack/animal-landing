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
  if (!props.targetDate) return { days: '00', hours: '00', minutes: '00', seconds: '00' }
  const diff = Math.max(0, new Date(props.targetDate).getTime() - now.value)
  return {
    days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
    hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
    minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
    seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
  }
})
</script>

<template>
  <div class="flex flex-col gap-[4px] justify-center
              text-center w-full py-[20px]
              md:text-left md:py-0">
    <p class="font-heading text-white font-normal w-full
              text-[12px] leading-[14px]
              sm:text-[14px] sm:leading-[17px]
              md:text-[16px] md:leading-[18px]
              2xl:text-[18px] 2xl:leading-[22px]">
      До старта голосования
    </p>
    <!-- Mobile: DD д : HH ч : MM м : SS с (smaller). Desktop: same but bigger -->
    <div class="font-heading text-[#ffaa00] w-full whitespace-nowrap
                text-[36px] leading-[40px]
                xs:text-[42px] xs:leading-[46px]
                sm:text-[52px] sm:leading-[56px]
                md:text-[64px] md:leading-[0.9]
                lg:text-[80px]
                xl:text-[100px] xl:leading-[0.9]
                2xl:text-[114px] 2xl:leading-[102.6px]">
      <span>{{ timeLeft.days }}</span><sup class="text-[0.28em] text-white/40">д</sup>
      <span>:</span>
      <span>{{ timeLeft.hours }}</span><sup class="text-[0.28em] text-white/40">ч</sup>
      <span>:</span>
      <span>{{ timeLeft.minutes }}</span><sup class="text-[0.28em] text-white/40">м</sup>
      <span>:</span>
      <span>{{ timeLeft.seconds }}</span><sup class="text-[0.28em] text-white/40">с</sup>
    </div>
  </div>
</template>
