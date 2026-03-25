<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
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

const visibleCards = computed(() => props.cards.slice(scrollOffset.value, scrollOffset.value + 4))

function scrollLeft() {
  if (scrollOffset.value > 0) scrollOffset.value--
}
function scrollRight() {
  if (scrollOffset.value < props.cards.length - 1) scrollOffset.value++
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
            :show-image="i % 2 === 0"
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
              class="shrink-0 min-w-0
                     h-[196px]
                     md:w-[340px] lg:w-[300px]
                     xl:w-[364px] xl:h-[226px]
                     2xl:w-auto 2xl:flex-1 2xl:h-[240px]"
            />
          </div>

          <!-- Navigation arrows: Figma 1680 = w-1640 centered, size-40 r-30 border-1.25 -->
          <div class="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2
                      flex items-center justify-between
                      w-[calc(100%+80px)]
                      xl:w-[1208px]
                      2xl:w-[1640px]">
            <button
              @click="scrollLeft"
              :disabled="scrollOffset === 0"
              class="flex items-center justify-center
                     size-[32px] rounded-[24px] border border-white
                     2xl:size-[40px] 2xl:rounded-[30px] 2xl:border-[1.25px] 2xl:p-[7.5px]
                     disabled:opacity-30 hover:bg-white/10 transition-colors bg-black/30"
              aria-label="Назад"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 6L9 12L15 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              @click="scrollRight"
              :disabled="scrollOffset >= cards.length - 2"
              class="flex items-center justify-center
                     size-[32px] rounded-[24px] border border-white
                     2xl:size-[40px] 2xl:rounded-[30px] 2xl:border-[1.25px] 2xl:p-[7.5px]
                     disabled:opacity-30 hover:bg-white/10 transition-colors bg-black/30"
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
