<template>
  <div class="max-w-4xl mx-auto mt-10 px-4">
    <h2 class="text-2xl font-bold mb-6 text-right text-gray-800">
      ویژگی‌های برند خلاقانه
    </h2>

    <draggable
      v-model="features"
      item-key="id"
      class="grid grid-cols-1 sm:grid-cols-2 gap-6"
      ghost-class="ghost-card"
    >
      <template #item="{ element }">
        <div
          class="bg-white rounded-xl shadow-sm p-6 cursor-move hover:shadow-md transition border"
        >
          <div class="flex items-start gap-4 text-right">
            <!-- آیکون تصویری -->
            <img
              :src="element.icon"
              alt="icon"
              class="w-10 h-10 object-contain"
            />
            <div class="flex-1">
              <h3 class="text-lg font-semibold text-gray-800 mb-1">
                {{ element.title }}
              </h3>
              <p class="text-gray-600 text-sm leading-6">
                {{ element.description }}
              </p>
            </div>
          </div>
        </div>
      </template>
    </draggable>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";
import draggable from "vuedraggable";

const props = defineProps<{
  modelValue?: {
    id: number;
    title: string;
    description: string;
    icon: string;
  }[];
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: typeof features.value): void;
}>();

const features = ref(props.modelValue ? [...props.modelValue] : []);

//  فقط وقتی مقدار واقعاً تغییر کرد emit کن
watch(
  features,
  (newVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(props.modelValue)) {
      emit("update:modelValue", newVal);
    }
  },
  { deep: true }
);

//  فقط وقتی props تغییر کرد، features رو به‌روز کن
watch(
  () => props.modelValue,
  (newVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(features.value)) {
      features.value = newVal ? [...newVal] : [];
    }
  },
  { deep: true }
);
</script>

<style scoped>
.ghost-card {
  @apply opacity-50;
}
</style>
