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
  if (!props.targetDate) return '00:00:00'
  const diff = Math.max(0, new Date(props.targetDate).getTime() - now.value)
  const days = String(Math.floor(diff / 86400000)).padStart(2, '0')
  const hours = String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0')
  const minutes = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0')
  return `${days}:${hours}:${minutes}`
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
    <p class="font-heading text-[#ffaa00] w-full whitespace-nowrap
              text-[52px] leading-[52px]
              sm:text-[64px] sm:leading-[64px]
              md:text-[76px] md:leading-[68.4px]
              lg:text-[90px] lg:leading-[0.9]
              xl:text-[114px] xl:leading-[102.6px]">{{ timeLeft }}</p>
  </div>
</template>
