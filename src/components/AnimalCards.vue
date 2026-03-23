<script setup lang="ts">
import { ref, onMounted } from 'vue'
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

const loading = ref(true)
const scrollOffset = ref(0)

onMounted(() => {
  setTimeout(() => { loading.value = false }, 1500)
})

function scrollLeft() {
  if (scrollOffset.value > 0) scrollOffset.value--
}
function scrollRight() {
  if (scrollOffset.value < props.cards.length - 3) scrollOffset.value++
}
</script>

<template>
  <!-- Desktop: 3 cards visible, gap-8, navigation arrows. Mobile: vertical stack, gap-8 -->
  <div class="relative">
    <!-- Loader -->
    <div v-if="loading" class="flex justify-center py-12">
      <div class="dots-loader" />
    </div>

    <Transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0">
      <div v-if="!loading">
        <!-- Mobile: vertical stack -->
        <div class="flex flex-col gap-[8px] sm:hidden px-0">
          <AnimalCard v-for="(card, i) in cards" :key="i" v-bind="card" class="w-full" />
        </div>

        <!-- Desktop: horizontal slider, 3 visible -->
        <div class="hidden sm:block relative">
          <div class="flex gap-[8px] overflow-hidden">
            <AnimalCard
              v-for="(card, i) in cards.slice(scrollOffset, scrollOffset + 3)"
              :key="scrollOffset + i"
              v-bind="card"
              class="w-[364px] shrink-0"
            />
          </div>

          <!-- Navigation arrows: 32x32, border white, rounded-24 -->
          <div class="absolute top-1/2 -translate-y-1/2 flex items-center justify-between w-[calc(100%+100px)] -left-[50px]">
            <button
              @click="scrollLeft"
              :disabled="scrollOffset === 0"
              class="size-[32px] rounded-[24px] border border-white flex items-center justify-center
                     disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Назад"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              @click="scrollRight"
              :disabled="scrollOffset >= cards.length - 3"
              class="size-[32px] rounded-[24px] border border-white flex items-center justify-center
                     disabled:opacity-30 hover:bg-white/10 transition-colors"
              aria-label="Вперёд"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
