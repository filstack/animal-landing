# Pixel-Perfect Guard Agent

> Запускается ПОСЛЕ каждой CSS/layout правки. Ловит ошибки до деплоя.

## Когда запускать

- После любых изменений в `.vue` файлах компонентов
- Перед каждым `git commit` с CSS-правками
- Перед каждым `vercel --prod` деплоем

## Чеклист (выполнять ВСЁ)

### 1. Build Check
```bash
npx vue-tsc -b && npx vite build
```
Если падает — не двигаться дальше.

### 2. Visual Screenshot Comparison (ВСЕ 7 брейкпоинтов)
Для каждого из 7 viewport (320, 360, 480, 768, 1024, 1280, 1680):
```bash
agent-browser set viewport WIDTH HEIGHT
agent-browser screenshot --full verify-BREAKPOINT.png
```
Затем получить Figma-скриншот того же брейкпоинта:
```
mcp__figma-mcp__get_image(fileKey, ids=[nodeId], scale=1)
```
**Сравнить глазами.** Не доверять числам — смотреть на картинку.

### 3. Layout Behavior Audit
Для каждого flex-контейнера в изменённых файлах проверить:

| Свойство Figma | Что проверить в коде |
|---------------|---------------------|
| layoutSizingHorizontal: HUG | НЕ flex-1. Нужен flex-initial + w-auto |
| layoutSizingHorizontal: FILL | flex-1 или w-full |
| layoutSizingHorizontal: FIXED | w-[Npx], НЕ flex-1 |
| layoutGrow: 0 | НЕ flex-1 |
| layoutGrow: 1 | flex-1 |
| primaryAxisAlignItems: SPACE_BETWEEN | justify-between |
| counterAxisAlignItems: CENTER | items-center |
| counterAxisAlignItems: MIN | items-start (осторожно — ломает ширину!) |

### 4. Breakpoint Visibility Check
Для элементов с `hidden`/`block` переключением:
- На КАКОМ breakpoint Figma показывает/скрывает элемент?
- Совпадает ли с кодом (sm:hidden vs md:hidden)?
- Проверить: мобильный фон, desktop фон, mobile timer, md social column

### 5. Click Test (интерактив)
```bash
agent-browser snapshot -i  # получить refs
agent-browser click @eN    # кликнуть по каждой ссылке/кнопке
agent-browser get url       # проверить куда ведёт
```
Проверить ВСЕ ссылки в футере: MAX → max.ru, VK → vk.com, Dzen → dzen.ru, OK → ok.ru

### 6. Per-Theme Check
Перезагрузить страницу несколько раз (3 темы: медведь, орёл, жук):
- Badge "скоро" не перекрывает морду животного
- Фон корректно позиционирован для каждого животного
- Object-position из theme.mobilePos применяется

### 7. Gap Consistency Check
Для КАЖДОГО gap в изменённых файлах:
- Проверить значение для КАЖДОГО breakpoint в Figma (не копировать одно значение на все)
- Особенно: social icons (md=16, xl=20), footer sections, top section

## Формат отчёта

```
✅ Build: OK
✅ Visual 2xl: совпадает
✅ Visual xl: совпадает
❌ Visual lg: social icons не справа
   → Причина: items-start на parent
   → Фикс: добавить w-full

✅ Layout: все flex-контейнеры корректны
✅ Breakpoints: visibility совпадает
✅ Click test: все ссылки ведут правильно
✅ Themes: badge не на морде для всех 3
✅ Gaps: значения per-breakpoint совпадают

ИТОГ: 1 ошибка найдена, требует фикса
```

## Красные флаги (остановиться и проверить!)

- `flex-1` в коде, но Figma показывает HUG или FIXED → **СТОП, проверить**
- `items-start` на parent flex-контейнере → **СТОП, дети не растянутся по ширине**
- `sm:hidden` / `sm:block` → **СТОП, проверить что Figma переключает на sm, а не md**
- `gap-[N]` без breakpoint-префиксов → **СТОП, проверить что gap одинаковый на всех BP**
- `object-position` / `object-center` → **СТОП, проверить для КАЖДОГО животного**
