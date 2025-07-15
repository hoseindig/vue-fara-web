<template>
  <div class="max-w-md mx-auto mt-10">
    <h2 class="text-xl font-bold mb-4 text-right">لیست قابل جابجایی</h2>

    <draggable
      v-model="items"
      item-key="id"
      class="space-y-2"
      ghost-class="bg-blue-100"
    >
      <template #item="{ element }">
        <div
          class="bg-white shadow p-4 rounded border cursor-move hover:bg-gray-50"
        >
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable";

const items = ref([
  { id: 1, name: "آیتم اول" },
  { id: 2, name: "آیتم دوم" },
  { id: 3, name: "آیتم سوم" },
]);
</script>

<style scoped>
.ghost-class {
  opacity: 0.5;
}
</style>
