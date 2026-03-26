# Проект: 100 видов — Ведомости

Landing page для проекта "Вместе для дикой природы" (100vidov.vedomosti.ru).

## Стек

- **Vue 3** + TypeScript + Vite
- **Tailwind CSS v4** (через `@import 'tailwindcss'` в style.css, `@theme` блок)
- Деплой: **Vercel** (prod: animal-weld.vercel.app)

## Структура

```
src/
  App.vue              — корневой компонент, 3 темы (медведь/орёл/жук) случайная ротация
  style.css            — design tokens (@theme), шрифты, breakpoints
  components/
    SiteHeader.vue     — логотип Ведомости, centered на md+
    HeroSection.vue    — фон + title + form + timer + cards
    EmailForm.vue      — форма email с чекбоксами, error slot
    CountdownTimer.vue — "N дней" с русским склонением
    AnimalCard.vue     — карточка животного (текст + фото + дата)
    AnimalCards.vue     — слайдер карточек с навигацией
    SiteFooter.vue     — партнёры, магазины, legal, редакция
    CookieBanner.vue   — баннер cookies
    SuccessMessage.vue — сообщение об успехе
  assets/
    bg/                — фоны (desktop/mobile для bear/eagle/beetle)
    logos/             — vedomosti.svg, partner-atre.svg, partner-fond.svg
    icons/
      arrow-right.svg  — стрелка в инпуте
      arrow-card.svg   — стрелка → в зелёном круге карточки (из Figma MCP)
      social/          — vk-chat, vk, dzen, ok
      stores/          — rustore.png, appstore.png, huawei.png, googleplay.png (PNG из Figma)
```

## Figma

- **Файл**: `t8wmaEerAX4LrNxK9Mgf3f` ("Животные")
- **Страница макетов**: node `321:207`
- **Секция Орел**: node `488:2028` (7 брейкпоинтов)
- **MCP авторизация**: plugin:figma:figma под design.vedomosti (Professional plan)
- **PAT**: хранится в memory (figma_token.md)

### Ноды брейкпоинтов (секция Орел)

| Node | Размер | Viewport |
|------|--------|----------|
| 488:2063 | 1680+ | 2xl |
| 488:2029 | 1280-1679 | xl |
| 488:2099 | 1024-1279 | lg |
| 488:2133 | 768-1023 | md |
| 488:2166 | 480-767 | sm |
| 488:2200 | 360-479 | xs |
| 488:2234 | 320-359 | base |

## Breakpoints (Tailwind)

```
base: 0px (320+)
xs:   360px
sm:   480px
md:   768px
lg:   1024px
xl:   1280px
2xl:  1680px
```

## Шрифты

- `font-heading` = Exo 2 (заголовки, лейблы, badge)
- `font-body` = Inter (инпуты, даты)
- `font-body-tight` = Inter Tight (чекбоксы, legal тексты)

## Текущий статус верстки (Орел)

| Размер | Статус | Ключевые значения |
|--------|--------|-------------------|
| 1680+ (2xl) | ✅ done | w-1520, title 84px 2 строки, form w-480, 4 cards flex-1 |
| 1280 (xl) | ✅ done | w-1108, title 70px 3 строки, form w-420 justify-between, 3 cards w-364 |
| 1024 (lg) | ✅ done | w-916, title 62px, form w-400, timer 100px, 3 cards w-300 |
| 768 (md) | ✅ done | w-688, title 54px, form w-340 gap-8, timer 76px, 2 cards w-340, image 120x81 |
| 480 (sm) | ✅ done | mobile, form standalone label 14px, timer 64px below, vertical cards, app badges column |
| 360 (xs) | ✅ done | title 44px, badge 36x36, cards h-220 |
| 320 (base) | ✅ done | title 32px, badge 30x30 text 8.75px, cards h-210 py-30, image 140x94 |

## Полный аудит pixel-perfect (2026-03-26)

Проведён полный аудит 7 брейкпоинтов через Figma MCP (7 параллельных агентов).
19 исправлений в 4 файлах. Основные классы фиксов:

- **Footer gaps**: main 60px (было 20), section1 30px (было 20), social 20px (было 16), legal 16px (было 8)
- **Card py cascade**: base 30→md 24→xl 30 (было base 24→sm 30→lg 24)
- **Card image md**: 120x81 (было наследование xs 160x108)
- **Submit button**: right-20, base 24x24, xl 32x32 (было right-12, sm 32x32 ломало md)
- **Form label sm**: 14px/17lh (было base 12px наследование)
- **Hero gap**: base 36px (было 30), sm pb 60px (было 30)
- **Badge text base**: 8.75px/7.84lh (было 9/8)
- **App badges sm**: always column (было sm:flex-row)
- **2xl legal leading**: 17px (было leading-normal=21px)

### Правки по фидбеку дизайнера (2026-03-26)
- **Чекбоксы формы**: оба не отмечены по умолчанию (agreedPolicy: false). Figma: Selected=Off
- **Success-состояние формы**: вектор-галочка + один текстовый блок font-medium, px-20 py-30, gap-30 (lg:20), размеры текста по Figma (base 14/17 → sm 16/20 → md 14/17 → xl 16/20 → 2xl 18/24)
- **Error message paddingLeft**: 30px для всех брейкпоинтов (было 20 на base-lg)
- **Timer layout lg/xl**: flex-initial + w-auto (HUG) вместо flex-1. justify-between позиционирует таймер вправо
- **Соцсети**: ссылка MAX добавлена (https://max.ru/join/SBCJ-...), md-колонка убран flex-1 (HUG)
- **Футер**: проверен по Figma node 473:1610 — расхождений нет
- **Cookie**: проверен по Figma node 485:1997 — расхождений нет

### Ссылки соцсетей
- MAX: https://max.ru/join/SBCJ-wjqwFBh6FSsk4pc3W-zkkGyR3zz41D1VHLpkEg
- VK: https://vk.com/sto_vidov
- Dzen: https://dzen.ru/100vidov
- OK: https://ok.ru/group/70000047830828

### Паттерн "HUG vs flex-1"
На lg/xl элементы рядом с формой (таймер, соцсети) в Figma имеют sizing=HUG (по контенту), НЕ FILL. В коде нельзя использовать flex-1 для таких элементов — нужен flex-initial + w-auto. justify-between разводит их по краям.

### Оставшиеся нюансы (не критичные)
- lg: showImage чередование на десктопных карточках (дизайнерский выбор)
- sm: структурный gap form→timer→cards (Figma ~60px, код 36px flex gap)
- xs: cards container 320px vs Figma 344px (структурная разница padding)
- 2xl: backdrop-blur 23px vs Figma radius 46 (Figma radius=diameter, CSS=sigma)

## Команды

```bash
npx vue-tsc -b          # TypeScript check
npx vite build           # Production build
npx vite --host          # Dev server
npx vercel --prod --yes  # Deploy to production
```

## Правила работы

- **Pixel-perfect**: каждое значение из Figma MCP, не интерполировать
- **Коммиты**: локально, без push (push только по запросу)

### Обязательная верификация (после КАЖДОЙ CSS/layout правки)

1. **Визуальное сравнение**: agent-browser screenshot + Figma get_image → сравнить глазами
2. **Layout behavior**: проверять не числа, а ПОВЕДЕНИЕ — flex-1 vs auto, justify-*, items-*, visibility breakpoints
3. **Клик-тест**: проверить ссылки кликом (иконки MAX/VK были перепутаны — файлы именовались обманчиво)
4. **Нет "косметических" расхождений**: если Figma показывает X, код даёт X. Точка.
5. **Структурные различия фиксить сразу**: если Figma = отдельные фреймы, а код = один div — это баг, не нюанс

### Частые ловушки (проверять ВСЕГДА)

| Ловушка | Как ловить |
|---------|-----------|
| flex-1 vs HUG | Проверять layoutSizingHorizontal и layoutGrow в Figma. HUG = flex-initial + w-auto |
| items-start ломает ширину | Если parent items-start, дочерние не растягиваются. Нужен w-full |
| sm:hidden vs md:hidden | Проверять на КАКОМ breakpoint Figma переключает mobile↔desktop элементы |
| Иконки перепутаны | Проверять визуально что ИКОНКА соответствует ССЫЛКЕ (кликнуть!) |
| Gap = одинаковый везде? | НЕТ! Проверять gap для КАЖДОГО breakpoint отдельно (social: md=16, xl=20) |
| Object-position и bg | Разные темы (медведь/орёл/жук) могут требовать разный object-position |
