<script setup>
const redirectTo = () => {
  console.log('redirectTo');
};
</script>

<template>
  <h2>
    {{ $t('about_page_title.other') }}
  </h2>

  <button @click="redirectTo">
    {{ $t('about_page_back_button.other') }}
  </button>
</template>
