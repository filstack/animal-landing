<script setup lang="ts">
import partnerAtre from '@/assets/logos/partner-atre.svg'
import partnerFond from '@/assets/logos/partner-fond.svg'
import iconVkChat from '@/assets/icons/social/vk-chat.svg'
import iconVk from '@/assets/icons/social/vk.svg'
import iconDzen from '@/assets/icons/social/dzen.svg'
import iconOk from '@/assets/icons/social/ok.svg'
</script>

<template>
  <!--
    Figma footer per breakpoint:
    320: px-20, py-44, gap-20, text 11px
    360: px-20, py-44, gap-30, text 11px
    480: px-40, py-44, gap-20, text 11px
    768: centered w-688, py-44, gap-24, text 13px
    1024: centered w-916, py-44, gap-20, text 13px
    1280: centered w-1108, py-44, gap-20, text 13px
    1680: centered w-1520, py-44, gap-24, text 14px
  -->
  <footer class="bg-[#0f0f0f] overflow-hidden">
    <div class="flex flex-col py-[44px]
                px-[20px] gap-[20px] xs:gap-[30px]
                sm:px-[40px] sm:gap-[20px]
                md:items-center md:px-0 md:gap-[24px]
                lg:gap-[20px]
                2xl:gap-[24px]">

      <!-- Content container: same widths as hero -->
      <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                  flex flex-col gap-[24px] md:flex-row md:items-start md:justify-between">
        <div class="flex gap-[24px] items-center">
          <span class="font-heading text-[#999] font-medium whitespace-nowrap
                       text-[11px] leading-[13px]
                       md:text-[13px] md:leading-[15px]
                       2xl:text-[16px] 2xl:leading-[18px]">
            Партнеры:
          </span>
          <div class="flex items-center gap-[24px] md:gap-[30px]">
            <a href="https://agencytde.ru/" target="_blank" rel="noopener">
              <img :src="partnerAtre" alt="АТРЭ"
                class="h-[32px] w-[66px] md:h-[40px] md:w-[83px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noopener">
              <img :src="partnerFond" alt="Фонд президентских грантов"
                class="h-[32px] w-[76px] md:h-[40px] md:w-[95px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div class="flex flex-col gap-[2px] font-heading text-[#999] font-medium whitespace-nowrap
                    text-[11px] leading-[13px]
                    md:text-[13px] md:leading-[15px]
                    2xl:text-[16px] 2xl:leading-[18px]">
          <span>Продюсер проекта: Юния Алеева</span>
          <span>+7 925 008-75-48, 100vidov@vedomosti.ru</span>
        </div>
      </div>

      <!-- Legal -->
      <p class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                font-body text-[#5d5d5d] font-extrabold
                text-[11px] leading-[13px]
                md:text-[13px] md:leading-[15.7px]
                2xl:text-[14px] 2xl:leading-[16.9px]">
        Любое использование материалов допускается только при соблюдении
        <a href="https://www.vedomosti.ru/info/reprint_rules" class="underline" target="_blank" rel="noopener">правил перепечатки</a>
        и&nbsp;при наличии гиперссылки на&nbsp;vedomosti.ru. Все права защищены &copy;&nbsp;АО&nbsp;Бизнес Ньюс Медиа,
        ИНН/КПП 7712108141/771501001, ОГРН 1027739124775, 127018, г.&nbsp;Москва, вн.тер.г.
        муниципальный округ Марьина Роща, ул.&nbsp;Полковая, д.&nbsp;3, стр.&nbsp;1 1999&mdash;2026.
        Сайт использует IP&nbsp;адреса, cookie и&nbsp;данные геолокации Пользователей сайта, условия
        использования содержатся в&nbsp;<a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политике по&nbsp;защите персональных данных</a>
      </p>

      <!-- Social: Desktop 30x30 gap-20, Mobile 24x24 gap-16 -->
      <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                  flex items-center gap-[16px] md:gap-[20px]">
        <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте чат"
           class="size-[24px] md:size-[30px] shrink-0">
          <img :src="iconVkChat" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте"
           class="size-[24px] md:size-[30px] shrink-0">
          <img :src="iconVk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <a href="https://dzen.ru/100vidov" target="_blank" rel="noopener" aria-label="Дзен"
           class="size-[24px] md:size-[30px] shrink-0">
          <img :src="iconDzen" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
        <a href="https://ok.ru/group/70000047830828" target="_blank" rel="noopener" aria-label="Одноклассники"
           class="size-[24px] md:size-[30px] shrink-0">
          <img :src="iconOk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
        </a>
      </div>
    </div>
  </footer>
</template>
