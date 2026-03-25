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
| 768 (md) | ✅ done | w-688, title 54px, form w-340 gap-8, timer 76px, 2 cards w-340 |
| 480 (sm) | ✅ done | mobile, form standalone, timer 64px below, vertical cards |
| 360 (xs) | ✅ done | title 44px, badge 36x36, cards h-220 |
| 320 (base) | ✅ done | title 32px, badge 30x30, cards h-210, image 140x94 |

## Команды

```bash
npx vue-tsc -b          # TypeScript check
npx vite build           # Production build
npx vite --host          # Dev server
npx vercel --prod --yes  # Deploy to production
```

## Правила работы

- **Pixel-perfect**: каждое значение из Figma MCP get_design_context, не интерполировать
- **Проверка локально**: всегда dev server + Playwright ПЕРЕД деплоем
- **Коммиты**: локально, без push (push только по запросу)
- **Ревью**: запускать superpowers:code-reviewer агента для проверки каждого брейкпоинта
