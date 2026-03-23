<script setup lang="ts">
import partnerAtre from '@/assets/logos/partner-atre.svg'
import partnerFond from '@/assets/logos/partner-fond.svg'
import iconVkChat from '@/assets/icons/social/vk-chat.svg'
import iconVk from '@/assets/icons/social/vk.svg'
import iconDzen from '@/assets/icons/social/dzen.svg'
import iconOk from '@/assets/icons/social/ok.svg'
</script>

<template>
  <footer class="bg-[#0f0f0f] overflow-hidden">
    <div class="flex flex-col
                px-[20px] py-[44px] gap-[30px]
                sm:items-center sm:py-[44px] sm:gap-[20px] sm:px-0">

      <!-- Row 1: Partners + Producer -->
      <div class="flex flex-col gap-[24px]
                  sm:flex-row sm:items-start sm:justify-between sm:w-[1108px]">
        <div class="flex gap-[24px] items-center">
          <span class="font-heading text-[#999] font-medium whitespace-nowrap
                       text-[11px] leading-[13px]
                       sm:text-[13px] sm:leading-[15px]">
            Партнеры:
          </span>
          <div class="flex items-center gap-[24px] sm:gap-[30px]">
            <a href="https://agencytde.ru/" target="_blank" rel="noopener">
              <img :src="partnerAtre" alt="АТРЭ"
                class="h-[32px] w-[66px] sm:h-[40px] sm:w-[83px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noopener">
              <img :src="partnerFond" alt="Фонд президентских грантов"
                class="h-[32px] w-[76px] sm:h-[40px] sm:w-[95px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-[2px] font-heading text-[#999] font-medium whitespace-nowrap
                    text-[11px] leading-[13px]
                    sm:text-[13px] sm:leading-[15px]">
          <span>Продюсер проекта: Юния Алеева</span>
          <span>+7 925 008-75-48, 100vidov@vedomosti.ru</span>
        </div>
      </div>

      <!-- Row 2: Legal -->
      <p class="font-body text-[#5d5d5d] font-extrabold
                text-[11px] leading-[13px]
                sm:text-[13px] sm:leading-[15.7px] sm:w-[1108px]">
        Любое использование материалов допускается только при соблюдении
        <a href="https://www.vedomosti.ru/info/reprint_rules" class="underline" target="_blank" rel="noopener">правил перепечатки</a>
        и&nbsp;при наличии гиперссылки на&nbsp;vedomosti.ru. Все права защищены &copy;&nbsp;АО&nbsp;Бизнес Ньюс Медиа,
        ИНН/КПП 7712108141/771501001, ОГРН 1027739124775, 127018, г.&nbsp;Москва, вн.тер.г.
        муниципальный округ Марьина Роща, ул.&nbsp;Полковая, д.&nbsp;3, стр.&nbsp;1 1999&mdash;2026.
        Сайт использует IP&nbsp;адреса, cookie и&nbsp;данные геолокации Пользователей сайта, условия
        использования содержатся в&nbsp;<a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политике по&nbsp;защите персональных данных</a>
      </p>

      <!-- Row 3: 4 Social icons — Desktop 30x30 gap-20, Mobile 24x24 gap-16 -->
      <div class="flex items-center gap-[16px] sm:gap-[20px] sm:w-[1108px]">
        <!-- 1: VK Chat (speech bubble) -->
        <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте чат"
           class="size-[24px] sm:size-[30px] shrink-0">
          <img :src="iconVkChat" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <!-- 2: VK -->
        <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте"
           class="size-[24px] sm:size-[30px] shrink-0">
          <img :src="iconVk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <!-- 3: Dzen -->
        <a href="https://dzen.ru/100vidov" target="_blank" rel="noopener" aria-label="Дзен"
           class="size-[24px] sm:size-[30px] shrink-0">
          <img :src="iconDzen" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <!-- 4: OK -->
        <a href="https://ok.ru/group/70000047830828" target="_blank" rel="noopener" aria-label="Одноклассники"
           class="size-[24px] sm:size-[30px] shrink-0">
          <img :src="iconOk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  </footer>
</template>
