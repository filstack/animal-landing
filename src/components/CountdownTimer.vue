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
  <!--
    Figma timer sizes:
    320: 52px centered, label 12px/14px
    360: 52px centered, label 12px/14px
    480: 64px centered, label 14px/17px
    768+: right-aligned, grows with breakpoint
    1280: 114px, label 16px/18px
  -->
  <div class="flex flex-col gap-[4px] items-start justify-center
              text-center w-full py-[20px]
              md:text-right md:w-auto md:py-0">
    <p class="font-heading text-white font-normal w-full
              text-[12px] leading-[14px]
              sm:text-[14px] sm:leading-[17px]
              md:text-[16px] md:leading-[18px] md:indent-[6px]">
      До старта голосования
    </p>
    <p class="font-heading text-[#fa0] w-full
              text-[52px] leading-[52px]
              sm:text-[64px] sm:leading-[64px]
              md:text-[80px] md:leading-[0.9]
              lg:text-[90px]
              xl:text-[114px]">
      {{ timeLeft.days }}:{{ timeLeft.hours }}:{{ timeLeft.minutes }}
    </p>
  </div>
</template>
