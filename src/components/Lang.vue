<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import i18n from '../i18n.js';
import { LANGUAGE } from '../constants';

const { locale } = useI18n();

const selectedValue = ref(LANGUAGE.ENGLISH);

const onChange = (event) => {
  const { value } = event.target;
  i18n.global.locale = value;
};
</script>

<template>
  <div class="locale-changer">
    <select v-model="selectedValue" @change="onChange($event)">
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
