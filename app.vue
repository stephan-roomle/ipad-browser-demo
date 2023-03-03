<template>
  <div>Pizza order for: {{ name }}</div>
</template>

<script setup>
const route = useRoute();

const name = ref(route.query.name);
</script>
