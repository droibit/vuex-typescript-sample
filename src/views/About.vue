<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>double: {{ double }}, triple: {{ triple }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { counter } from "@/store/module/counter";

export default Vue.extend({
  name: "about",
  computed: {
    ...counter.mapGetters(["double", "triple"])
  },
  methods: {
    ...counter.mapActions({
      incrementAsync: "incrementAsync"
    })
  },
  created() {
    this.incrementAsync({ amount: 10, interval: 1000 });
  }
});
</script>

