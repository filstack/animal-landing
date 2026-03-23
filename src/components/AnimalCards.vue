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

// Visible count depends on breakpoint — handled via CSS, but for slice we use max
const visibleCards = computed(() => props.cards.slice(scrollOffset.value, scrollOffset.value + 4))

function scrollLeft() {
  if (scrollOffset.value > 0) scrollOffset.value--
}
function scrollRight() {
  if (scrollOffset.value < props.cards.length - 1) scrollOffset.value++
}
</script>

<template>
  <!--
    Figma breakpoints for cards:
    320: vertical, w-304, h-210, gap-8, px-8
    360: vertical, full width, h-220, gap-8, px-8
    480: vertical, w-400, h-220, gap-8, px-40
    768: horizontal 2 cards, w-340 h-196, gap-8
    1024: horizontal 3 cards, w-300 h-196, gap-8
    1280: horizontal 3 cards, w-364 h-226, gap-8
    1680: horizontal 4 cards, w-374 h-240, gap-8
  -->
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
          <div class="flex gap-[8px] overflow-hidden">
            <AnimalCard
              v-for="(card, i) in visibleCards"
              :key="scrollOffset + i"
              v-bind="card"
              class="shrink-0
                     w-[340px] h-[196px]
                     lg:w-[300px] lg:h-[196px]
                     xl:w-[364px] xl:h-[226px]
                     2xl:w-[374px] 2xl:h-[240px]"
            />
          </div>

          <!-- Navigation arrows -->
          <div class="absolute top-1/2 -translate-y-1/2 flex items-center justify-between
                      w-[calc(100%+80px)] -left-[40px]
                      xl:w-[calc(100%+100px)] xl:-left-[50px]">
            <button
              @click="scrollLeft"
              :disabled="scrollOffset === 0"
              class="size-[32px] rounded-[24px] border border-white flex items-center justify-center
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
              class="size-[32px] rounded-[24px] border border-white flex items-center justify-center
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
