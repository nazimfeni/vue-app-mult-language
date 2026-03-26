# Vue 3 Multi-Language Application (i18n)

This project is a Vue 3 application built with Vite, featuring a multi-language setup using `vue-i18n`.

## 🚀 Initial Setup Commands

### 1. Create Vue 3 Project (Vite)
```bash
npm create vite@latest vue-app-multi-lang
```

### 2. Install vue-i18n
```bash
npm install vue-i18n@9
```

## 🛠 Project Configuration

### `vite.config.js`
Standard Vite configuration with the Vue plugin.
```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
})
```

### `src/main.js`
Integrating the i18n configuration into the Vue app.
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'

const app = createApp(App)
app.use(i18n)
app.mount('#app')
```

## 🌍 Internationalization (i18n) Setup

### `src/i18n.js`
The central configuration for `vue-i18n`.
```javascript
import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import bn from './locales/bn.json'

const messages = { en, bn }

const i18n = createI18n({
  legacy: false, // Use Composition API
  globalInjection: true, // Allow $t in templates
  locale: 'en',  // default language
  fallbackLocale: 'en',
  messages
})

export default i18n
```

### Locale Files (`src/locales/`)

#### `en.json` (English)
```json
{
  "message": {
    "hello": "Hello",
    "welcome": "Welcome to our application!"
  }
}
```

#### `bn.json` (Bengali)
```json
{
  "message": {
    "hello": "হ্যালো",
    "welcome": "আমাদের অ্যাপ্লিকেশনে স্বাগতম!"
  }
}
```

## 🖥 Usage in Components

### `src/App.vue`
Example of how to use translations and switch languages.
```vue
<script setup>
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const changeLang = (lang) => {
  locale.value = lang;
};
</script>

<template>
  <h1>{{ t("message.hello") }}</h1>
  <p>{{ t("message.welcome") }}</p>

  <button @click="changeLang('en')">English</button>
  <button @click="changeLang('bn')">বাংলা</button>
</template>
```

## 🛠 Development Commands

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```
