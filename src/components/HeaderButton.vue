<template>
  <div class="flex items-center justify-center bg-gray-50">
    <div
      class="relative bg-gray-200 rounded-full p-1 cursor-pointer transition-all duration-300 ease-in-out mt-5"
    >
      <div class="flex">
        <!-- مستقیم -->

        <div
          @click="toggleSwitch"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out',
            !isNonStraight
              ? 'bg-teal-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800',
          ]"
        >
          مستقيم
        </div>
        <!-- غیر مستقیم -->

        <div
          @click="toggleSwitch"
          :class="[
            'px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 ease-in-out',
            isNonStraight
              ? 'bg-teal-500 text-white shadow-md'
              : 'text-gray-600 hover:text-gray-800',
          ]"
        >
          غير مستقيم
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps<{
  isNonStraight: boolean;
}>();

const emit = defineEmits<{
  (e: "update", value: boolean): void;
}>();

const isNonStraight = ref<boolean>(false);
const toggleSwitch = (): void => {
  isNonStraight.value = !isNonStraight.value;
  console.log("toggleSwitch", isNonStraight.value);
  emit("update", isNonStraight.value);
};
</script>
