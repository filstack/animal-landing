<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps<{
  targetDate?: string
}>()

const now = ref(Date.now())
let interval: ReturnType<typeof setInterval>

onMounted(() => {
  interval = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

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
  <!-- Desktop: right-aligned, 114px #fa0, label 16px/18px indent-6 -->
  <!-- Mobile: centered, 52px, label 12px/14px -->
  <div class="flex flex-col gap-[4px] items-start justify-center
              text-center w-full
              sm:text-right sm:w-auto
              py-[20px] sm:py-0">
    <p class="font-heading text-white font-normal w-full
              text-[12px] leading-[14px]
              sm:text-[16px] sm:leading-[18px] sm:indent-[6px]">
      До старта голосования
    </p>
    <p class="font-heading text-[#fa0] w-full
              text-[52px] leading-none
              sm:text-[60px] sm:leading-[0.9]
              md:text-[80px]
              lg:text-[90px]
              xl:text-[114px]">
      {{ timeLeft.days }}:{{ timeLeft.hours }}:{{ timeLeft.minutes }}
    </p>
  </div>
</template>
