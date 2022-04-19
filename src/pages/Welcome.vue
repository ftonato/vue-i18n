<script setup>
import { ref } from 'vue';

const pageTitle = ref('@ƒtonato');
</script>

<template>
  <h1>
    {{ $t('welcome_page_title.other', { page: pageTitle }) }}
  </h1>

  <p>
    {{ $t('welcome_page_subtitle.other') }}
  </p>
</template>
