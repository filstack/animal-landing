<script setup lang="ts">
import partnerAtre from '@/assets/logos/partner-atre.svg'
import partnerFond from '@/assets/logos/partner-fond.svg'
import iconVkChat from '@/assets/icons/social/vk-chat.svg'
import iconVk from '@/assets/icons/social/vk.svg'
import iconDzen from '@/assets/icons/social/dzen.svg'
import iconOk from '@/assets/icons/social/ok.svg'
import iconRustore from '@/assets/icons/stores/rustore.png'
import iconAppstore from '@/assets/icons/stores/appstore.png'
import iconHuawei from '@/assets/icons/stores/huawei.png'
import iconGoogleplay from '@/assets/icons/stores/googleplay.png'
</script>

<template>
  <footer class="bg-[#0f0f0f] overflow-hidden">
    <div class="flex flex-col py-[44px]
                px-[20px] gap-[60px]
                sm:px-[40px]
                md:items-center md:px-0">

      <!-- ====== SECTION 1 ====== -->
      <div class="flex flex-col gap-[30px]
                  md:flex-row md:gap-[40px]
                  lg:flex-col lg:gap-[40px]
                  w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px]
                  md:items-start">

        <!-- LEFT COLUMN (md) / FULL WIDTH (lg+) -->
        <div class="flex flex-col gap-[30px] md:gap-[40px] shrink-0 w-full">

          <!-- ROW 1: Partners + Producer + Social icons (lg+ inline) -->
          <div class="flex flex-col gap-[24px]
                      lg:flex-row lg:items-start lg:justify-between">
            <!-- Partners -->
            <div class="flex gap-[24px] items-center 2xl:gap-[30px]">
              <span class="font-heading text-[#999] font-medium whitespace-nowrap
                           text-[11px] leading-[13px]
                           md:text-[13px] md:leading-[15px]
                           2xl:text-[16px] 2xl:leading-[18px]">
                Партнеры:
              </span>
              <div class="flex items-center gap-[24px]">
                <a href="https://agencytde.ru/" target="_blank" rel="noopener">
                  <img :src="partnerAtre" alt="АТРЭ"
                    class="h-[32px] w-[66px] md:h-[40px] md:w-[83px] 2xl:h-[48px] 2xl:w-[99.6px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://xn--80afcdbalict6afooklqi5o.xn--p1ai/" target="_blank" rel="noopener">
                  <img :src="partnerFond" alt="Фонд президентских грантов"
                    class="h-[32px] w-[76px] md:h-[40px] md:w-[95px] 2xl:h-[48px] 2xl:w-[114px] brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>

            <!-- Producer info -->
            <div class="flex flex-col gap-[2px] 2xl:gap-[4px] font-heading text-[#999] font-medium whitespace-nowrap
                        text-[11px] leading-[13px]
                        md:text-[13px] md:leading-[15px]
                        2xl:text-[16px] 2xl:leading-[18px]">
              <span>Продюсер проекта: Юния Алеева</span>
              <span>+7 925 008-75-48, 100vidov@vedomosti.ru</span>
            </div>

            <!-- Social icons (lg+ only, inline with partners row) -->
            <div class="hidden lg:flex items-center gap-[16px] xl:gap-[20px]">
              <a href="https://max.ru/join/SBCJ-wjqwFBh6FSsk4pc3W-zkkGyR3zz41D1VHLpkEg" target="_blank" rel="noopener" aria-label="MAX"
                 class="size-[24px] xl:size-[30px] shrink-0">
                <img :src="iconVk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте"
                 class="size-[24px] xl:size-[30px] shrink-0">
                <img :src="iconVkChat" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://dzen.ru/100vidov" target="_blank" rel="noopener" aria-label="Дзен"
                 class="size-[24px] xl:size-[30px] shrink-0">
                <img :src="iconDzen" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://ok.ru/group/70000047830828" target="_blank" rel="noopener" aria-label="Одноклассники"
                 class="size-[24px] xl:size-[30px] shrink-0">
                <img :src="iconOk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <!-- Mobile social icons (below md) -->
          <div class="flex items-center gap-[20px] md:hidden">
            <a href="https://max.ru/join/SBCJ-wjqwFBh6FSsk4pc3W-zkkGyR3zz41D1VHLpkEg" target="_blank" rel="noopener" aria-label="MAX" class="size-[24px] shrink-0">
              <img :src="iconVk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте" class="size-[24px] shrink-0">
              <img :src="iconVkChat" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://dzen.ru/100vidov" target="_blank" rel="noopener" aria-label="Дзен" class="size-[24px] shrink-0">
              <img :src="iconDzen" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://ok.ru/group/70000047830828" target="_blank" rel="noopener" aria-label="Одноклассники" class="size-[24px] shrink-0">
              <img :src="iconOk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          <!-- Mobile app badges -->
          <div class="flex flex-col gap-[12px]
                      md:items-start
                      2xl:gap-[16px]">
            <span class="font-heading text-[#999] font-medium whitespace-nowrap
                         text-[11px] leading-[13px]
                         md:text-[13px] md:leading-[15px]
                         2xl:text-[16px] 2xl:leading-[18px]">
              Мобильное приложение Ведомости:
            </span>
            <div class="flex flex-wrap gap-[8px_16px] sm:flex-nowrap sm:gap-[16px]">
              <a href="https://redirect.appmetrica.yandex.com/serve/101826322610875925" target="_blank" rel="noopener"
                 class="h-[24px] w-[67.636px] lg:h-[30px] lg:w-[84.545px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img :src="iconRustore" alt="RuStore" class="h-full w-full" />
              </a>
              <a href="https://redirect.appmetrica.yandex.com/serve/173883918209080136" target="_blank" rel="noopener"
                 class="h-[24px] w-[67.636px] lg:h-[30px] lg:w-[84.545px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img :src="iconAppstore" alt="App Store" class="h-full w-full" />
              </a>
              <a href="https://redirect.appmetrica.yandex.com/serve/390056699366506369" target="_blank" rel="noopener"
                 class="h-[24px] w-[67.636px] lg:h-[30px] lg:w-[84.545px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img :src="iconHuawei" alt="Huawei AppGallery" class="h-full w-full" />
              </a>
              <a href="https://redirect.appmetrica.yandex.com/serve/462114291743470927" target="_blank" rel="noopener"
                 class="h-[24px] w-[67.636px] lg:h-[30px] lg:w-[84.545px] flex items-center justify-center hover:opacity-80 transition-opacity">
                <img :src="iconGoogleplay" alt="Google Play" class="h-full w-full" />
              </a>
            </div>
          </div>
        </div>

        <!-- RIGHT COLUMN (md only) - Social icons -->
        <div class="hidden md:flex md:items-start md:justify-end lg:hidden">
          <div class="flex items-center gap-[16px]">
            <a href="https://max.ru/join/SBCJ-wjqwFBh6FSsk4pc3W-zkkGyR3zz41D1VHLpkEg" target="_blank" rel="noopener" aria-label="MAX" class="size-[24px] shrink-0">
              <img :src="iconVk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://vk.com/sto_vidov" target="_blank" rel="noopener" aria-label="ВКонтакте" class="size-[24px] shrink-0">
              <img :src="iconVkChat" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://dzen.ru/100vidov" target="_blank" rel="noopener" aria-label="Дзен" class="size-[24px] shrink-0">
              <img :src="iconDzen" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="https://ok.ru/group/70000047830828" target="_blank" rel="noopener" aria-label="Одноклассники" class="size-[24px] shrink-0">
              <img :src="iconOk" alt="" class="w-full h-full brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>

      <!-- ====== DIVIDER (xl+) ====== -->
      <div class="w-full md:w-[688px] lg:w-[916px] xl:w-[1108px] 2xl:w-[1520px] h-px bg-[#5d5d5d]"></div>

      <!-- ====== SECTION 2 (2xl: two-column legal block below divider) ====== -->
      <!-- On smaller screens: sequential rows as before -->
      <!-- On 2xl: flex row with gap-120, left col has cookie+reprint+copyright+badge, right col has editorial -->
      <div class="flex flex-col gap-[20px] xs:gap-[30px] sm:gap-[20px]
                  w-full md:w-[688px] lg:w-[916px] xl:w-[1108px]
                  md:flex-row md:gap-[40px] lg:gap-[60px] xl:gap-[120px] md:items-start
                  2xl:w-[1520px]">

        <!-- LEFT COLUMN (2xl) -->
        <div class="flex flex-col gap-[16px] md:flex-1">
          <!-- Cookie text -->
          <p class="font-body-tight text-[#999] font-normal
                    text-[11px] leading-[13px]
                    md:text-[13px] md:leading-[16px] 2xl:text-[14px] 2xl:leading-[17px]">
            Сайт использует
            <span class="md:text-[#d9d9d9]">IP&nbsp;адреса, cookie и&nbsp;данные геолокации</span>
            Пользователей сайта, условия
            использования содержатся в&nbsp;<span class="md:text-[#d9d9d9]"><a href="https://www.vedomosti.ru/info/privacy" class="underline" target="_blank" rel="noopener">Политике в&nbsp;отношении обработки персональных данных</a>
            АО&nbsp;&laquo;Бизнес Ньюс Медиа&raquo;.</span>
          </p>

          <!-- Reprint text -->
          <p class="font-body-tight text-[#999] font-normal
                    text-[11px] leading-[13px]
                    md:text-[13px] md:leading-[16px] 2xl:text-[14px] 2xl:leading-[17px]">
            Любое использование материалов допускается только при соблюдении
            <span class="md:text-[#d9d9d9]"><a href="https://www.vedomosti.ru/info/reprint_rules" class="underline" target="_blank" rel="noopener">правил перепечатки</a></span>
            и&nbsp;при наличии гиперссылки на&nbsp;<span class="md:text-[#d9d9d9]">vedomosti.ru</span>
          </p>

          <!-- Copyright -->
          <p class="font-body-tight text-[#999] font-normal
                    text-[11px] leading-[13px]
                    md:text-[13px] md:leading-[16px] 2xl:text-[14px] 2xl:leading-[17px]">
            Все права защищены &copy;&nbsp;АО&nbsp;Бизнес Ньюс Медиа,
            ИНН/КПП 7712108141/771501001, ОГРН 1027739124775, 127018, г.&nbsp;Москва, вн.тер.г.
            муниципальный округ Марьина Роща, ул.&nbsp;Полковая, д.&nbsp;3, стр.&nbsp;1 1999&mdash;2026
          </p>

          <!-- 16+ badge -->
          <div class="size-[40px] rounded-[40px] border border-[#999] flex items-center justify-center p-[10px]">
            <span class="font-heading text-[#999] font-medium text-[16px] leading-[18px]">16+</span>
          </div>
        </div>

        <!-- RIGHT COLUMN (editorial) — on mobile shows first -->
        <div class="order-first md:order-none md:flex-1 font-body-tight text-[#999] font-normal
                    text-[11px] leading-[13px]
                    md:text-[13px] md:leading-[16px] 2xl:text-[14px] 2xl:leading-[17px]">
          <!-- On smaller screens this was a single <p> with <br>. Keep that behavior, but for 2xl use mb-[16px] paragraphs -->
          <p class="mb-[16px]">Сетевое издание Ведомости (Vedomosti)</p>
          <p class="mb-[16px]">Решение Федеральной службы по надзору в&nbsp;сфере связи, информационных технологий
            и&nbsp;массовых коммуникаций (Роскомнадзор) от&nbsp;27&nbsp;ноября 2020&nbsp;г. ЭЛ&nbsp;№&nbsp;ФС&nbsp;77-79546</p>
          <p class="mb-[16px]">Учредитель: АО&nbsp;&laquo;Бизнес Ньюс Медиа&raquo;</p>
          <p class="mb-[16px]">Главный редактор: Казьмина Ирина Сергеевна</p>
          <p class="mb-[16px]">Электронная почта: news@vedomosti.ru</p>
          <p>Телефон: +7&nbsp;495&nbsp;956-34-58</p>
        </div>
      </div>

    </div>
  </footer>
</template>
