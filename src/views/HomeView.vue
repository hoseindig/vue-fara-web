<template>
  <div class="home">
    <HeaderButton @update="handleToggle" />
    <DragDropUpload />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderButton from "../components/HeaderButton.vue";
import DragDropUpload from "../components/DragDropUpload.vue";
const selected = ref(false);

const handleToggle = (val: boolean) => {
  selected.value = val;
  console.log("handleToggle", val);
};
</script>
