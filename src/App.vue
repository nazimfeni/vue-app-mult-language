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
