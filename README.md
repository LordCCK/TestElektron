# Electron App

Moderní desktopová aplikace vytvořená s Electron a TypeScript.

## Předpoklady

Před instalací se ujistěte, že máte nainstalovaný:
- [Node.js](https://nodejs.org/) (verze 16 nebo vyšší)
- npm (součást Node.js)

## Instalace

1. Nainstalujte závislosti:
```bash
npm install
```

## Vývoj

Spuštění aplikace v režimu vývoje:

```bash
npm run dev
```

## Sestavení

Sestavení aplikace:

```bash
npm run build
npm start
```

## Distribuce

Vytvoření instalátoru:

```bash
npm run dist
```

## Struktura projektu

```
├── src/
│   ├── main.ts          # Hlavní proces Electronu
│   └── preload.ts       # Preload skript
├── public/
│   └── index.html       # Renderer proces (UI)
├── dist/                # Zkompilované soubory
└── package.json         # Závislosti a skripty
```

## Technologie

- [Electron](https://www.electronjs.org/) - Framework pro desktopové aplikace
- [TypeScript](https://www.typescriptlang.org/) - Typovaný JavaScript
- [Node.js](https://nodejs.org/) - JavaScript runtime

## Licence

MIT
