<template>
  <div class="home">
    <DragDropUpload />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import DragDropUpload from "@/components/DragDropUpload.vue";
@Options({
  components: {
    DragDropUpload,
  },
})
export default class HomeView extends Vue {}
</script>
