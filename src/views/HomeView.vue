<template>
  <div class="home">
    <HeaderButton @update="handleToggle" />
    <DragDropUpload @update:features="saveFeaturesToStore" />
    <!-- محتوای تب‌ها -->
    <div
      v-if="activeTab === true"
      class="bg-white p-6 rounded shadow text-right"
    >
      <h3 class="text-lg font-bold mb-2">محتوای تب اول</h3>
      <p class="text-gray-600 leading-relaxed">
        اینجا محتوای مربوط به تب اول قرار می‌گیرد. می‌توانید هر چیزی مانند فرم،
        متن، تصویر یا کامپوننت قرار دهید.
      </p>
    </div>

    <div
      v-if="activeTab === false"
      class="bg-white p-6 rounded shadow text-right"
    >
      <h3 class="text-lg font-bold mb-2">محتوای تب دوم</h3>
      <p class="text-gray-600 leading-relaxed">
        اینجا محتوای مربوط به تب دوم قرار می‌گیرد. مثلاً لیستی از داده‌ها یا
        تنظیمات یا هر چیز دیگر.
      </p>
    </div>
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
// const activeTab = ref<"first" | "second">("first");
const activeTab = ref(false);

const handleToggle = (val: boolean) => {
  selected.value = val;
  activeTab.value = val;
  console.log("handleToggle", val);
};

const saveFeaturesToStore = (features: any[]) => {
  // selected.value = val;
  console.log("saveFeaturesToStore", JSON.parse(JSON.stringify(features)));
  store.commit("features/setFeatures", features);
};
</script>
