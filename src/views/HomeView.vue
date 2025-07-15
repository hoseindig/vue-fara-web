<template>
  <div class="home">
    <div class="flex items-center justify-center bg-[#ffffff] mt-6">
      <h1 class="text-4xl font-extrabold text-black font-vazir">
        آگهی‌های اسپانسریــنگ
      </h1>
    </div>
    <HeaderButton @update="handleToggle" />
    <!-- @update:features="saveFeaturesToStore" -->
    <!-- محتوای تب‌ها -->
    <div
      v-if="activeTab === true"
      class="bg-white p-6 rounded shadow text-right"
    >
      <!-- <h3 class="text-lg font-bold mb-2">محتوای تب مستقیم</h3> -->
      <DragDropUpload v-model="features" />
    </div>

    <div
      v-if="activeTab === false"
      class="bg-white p-6 rounded shadow text-right"
    >
      <!-- <h3 class="text-lg font-bold mb-2">محتوای تب غیر مستقیم</h3> -->
      <DragDropUpload v-model="features" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useStore } from "vuex";
// import { computed } from "vue";
const store = useStore();

import HeaderButton from "../components/HeaderButton.vue";
import DragDropUpload from "../components/DragDrop.vue";

const selected = ref(false);
// const activeTab = ref<"first" | "second">("first");
const activeTab = ref(false);

const featuresList = ref([]);
const features = ref([
  {
    id: 1,
    title: "ماندگاری",
    description: "برند در داستان طنز مثل یک جوک خوب در ذهن می‌ماند.",
    icon: new URL("@/assets/brain-duotone (1) 1.png", import.meta.url).href,
  },
  {
    id: 2,
    title: "غافلگیری مخاطب",
    description:
      "برند خلاقانه و بامزه وارد داستان می‌شود و لبخند مخاطب را جلب می‌کند.",
    icon: new URL("@/assets/smiley-x-eyes-duotone 1.png", import.meta.url).href,
  },
  {
    id: 3,
    title: "تعامل بیشتر",
    description:
      "اشاره مستقیم، بحث‌برانگیز است و تعامل مخاطبان را افزایش می‌دهد.",
    icon: new URL("@/assets/armchair-duotone 1.png", import.meta.url).href,
  },
  {
    id: 4,
    title: "ارتباط احساسی",
    description: "حضور در موقعیت طنز، حس مثبت و صمیمیت برند را تقویت می‌کند.",
    icon: new URL("@/assets/heartbeat-duotone 1.png", import.meta.url).href,
  },
]);

const handleToggle = (val: boolean) => {
  selected.value = val;
  activeTab.value = val;
  console.log("handleToggle", val);
};

const saveFeaturesToStore = (features: any[]) => {
  // selected.value = val;
  featuresList.value = features;
  console.log("saveFeaturesToStore", JSON.parse(JSON.stringify(features)));
  store.commit("features/setFeatures", features);
};

watch(
  features,
  (val) => {
    store.commit("features/setFeatures", val);
    console.log("featuresList.value watch", features.value);
  },
  { deep: true }
);
</script>
