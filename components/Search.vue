<script setup lang="ts">
const search = ref('');

const results = ref<any>([]);

watch(search, async (value) => {
  if (!value) {
    results.value = [];
    return;
  }

  const searchResult = await searchContent(search.value);
  results.value = searchResult.value;
});
</script>

<template>
  <input v-model="search" type="text" placeholder="Search..." />
  <div>
    <div v-for="result in results">
      <div>{{ result.title }}</div>
      <pre>{{ result.content }}</pre>
    </div>
  </div>
</template>
