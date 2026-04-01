<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AnimalCard from './AnimalCard.vue'

export interface CardItem {
  image: string
  title: string
  date: string
  readTime: string
  href?: string
}

const props = defineProps<{
  cards: CardItem[]
}>()

const isSSR = typeof window === 'undefined'
const loading = ref(!isSSR)
const scrollOffset = ref(0)
const visibleCount = ref(4)

function updateVisibleCount() {
  if (window.matchMedia('(min-width: 1680px)').matches) visibleCount.value = 4
  else if (window.matchMedia('(min-width: 1024px)').matches) visibleCount.value = 3
  else visibleCount.value = 2
}

onMounted(() => {
  setTimeout(() => { loading.value = false }, 1500)
  updateVisibleCount()
  window.addEventListener('resize', updateVisibleCount)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleCount)
})

const maxOffset = computed(() => Math.max(0, props.cards.length - visibleCount.value))
const visibleCards = computed(() => {
  const clamped = Math.min(scrollOffset.value, maxOffset.value)
  if (clamped !== scrollOffset.value) scrollOffset.value = clamped
  return props.cards.slice(clamped, clamped + visibleCount.value)
})

function scrollLeft() {
  if (scrollOffset.value > 0) scrollOffset.value--
}
function scrollRight() {
  if (scrollOffset.value < maxOffset.value) scrollOffset.value++
}
</script>

<template>
  <div class="relative">
    <div v-if="loading" class="flex justify-center py-12">
      <div class="dots-loader" />
    </div>

    <Transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0">
      <div v-if="!loading">
        <!-- Mobile ≤767: vertical stack -->
        <div class="flex flex-col gap-[8px] md:hidden">
          <AnimalCard
            v-for="(card, i) in cards"
            :key="'m'+i"
            v-bind="card"
            class="w-full h-[210px] xs:h-[220px]"
          />
        </div>

        <!-- Tablet/Desktop ≥768: horizontal with arrows -->
        <div class="hidden md:block relative">
          <!-- Figma 1680: cards use flex-1 (equal width), h-240, gap-8 -->
          <div class="flex gap-[8px] overflow-hidden">
            <AnimalCard
              v-for="(card, i) in visibleCards"
              :key="scrollOffset + i"
              v-bind="card"
              class="shrink-0 min-w-0 flex-1
                     h-[196px]
                     md:w-[340px] md:h-[196px]
                     lg:w-[300px]
                     xl:w-[364px] xl:h-[226px]
                     2xl:w-auto 2xl:h-[240px]"
            />
          </div>

          <!-- Navigation arrows: Figma 1680 = w-1640 centered, size-40 r-30 border-1.25 -->
          <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                      flex items-center justify-between pointer-events-none
                      w-[calc(100%+80px)]
                      md:w-[768px]
                      lg:w-[1000px]
                      xl:w-[1208px]
                      2xl:w-[1640px]">
            <button
              @click="scrollLeft"
              :disabled="scrollOffset === 0"
              class="flex items-center justify-center pointer-events-auto
                     size-[32px] rounded-[24px] border border-white p-[6px]
                     2xl:size-[40px] 2xl:rounded-[30px] 2xl:border-[1.25px] 2xl:p-[7.5px]
                     disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Назад"
            >
              <svg class="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              @click="scrollRight"
              :disabled="scrollOffset >= maxOffset"
              class="flex items-center justify-center pointer-events-auto
                     size-[32px] rounded-[24px] border border-white p-[6px]
                     2xl:size-[40px] 2xl:rounded-[30px] 2xl:border-[1.25px] 2xl:p-[7.5px]
                     disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Вперёд"
            >
              <svg class="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M9 6L15 12L9 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.dots-loader {
  width: 45px;
  aspect-ratio: 1;
  --c: no-repeat radial-gradient(farthest-side, #748c43 92%, transparent);
  background: var(--c) 0 0, var(--c) 100% 0, var(--c) 100% 100%, var(--c) 0 100%;
  background-size: 12px 12px;
  animation: dots-loader 1.5s infinite cubic-bezier(0.3, 1, 0, 1);
}
@keyframes dots-loader {
  33% { background-position: 100% 0, 100% 100%, 0 100%, 0 0; }
  66% { background-position: 100% 100%, 0 100%, 0 0, 100% 0; }
  100% { background-position: 0 100%, 0 0, 100% 0, 100% 100%; }
}
</style>
