<template>
  <div class="home">
    <HeaderButton @update="handleToggle" />
    <DragDropUpload @update:features="saveFeaturesToStore" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();

import HeaderButton from "../components/HeaderButton.vue";
import DragDropUpload from "../components/DragDropUpload.vue";
const selected = ref(false);

const handleToggle = (val: boolean) => {
  selected.value = val;
  console.log("handleToggle", val);
};

const saveFeaturesToStore = (features: any[]) => {
  // selected.value = val;
  console.log("saveFeaturesToStore", JSON.parse(JSON.stringify(features)));
  store.commit("features/setFeatures", features);
};
</script>
