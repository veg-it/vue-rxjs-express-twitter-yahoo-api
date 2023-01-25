<template>
  <!-- <p v-bind:textContent="stock.currentPrice"></p> -->
  <div v-if="loaded" class="chart">
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>
  
<script>
import { chart } from "@/api/index"

import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  name: "ChartComponent",
  components: { Line },
  props: {
    symbol: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      loaded: false,
      saved_symbol: "",
      chartData: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"],
        datasets: [{ label: "close", backgroundColor: "#4BC0C0", data: [] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  watch: {
    symbol(newValue) {
      this.saved_symbol = newValue;
    },
  },
  async mounted() {
    this.loaded = false;
    this.saved_symbol = this.symbol;

    chart
  },
};
</script>
<style>
.chart{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
};
canvas{
    width: 100%;
    height: auto;
}
</style>