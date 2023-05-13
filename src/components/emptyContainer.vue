<template>
  <v-col class="d-flex justify-center col-12">
    <v-container
      style="border-radius: 50%; height: 200px; width: 400px"
      class="d-inline-flex justify-center flex-column align-center"
    >
      <svg
        style="width: 80%; max-width: 200px; max-height: 200px"
        class="centered"
        viewBox="0 0 24 24"
      >
        <path
          fill="#D81B60"
          d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
        />
      </svg>
      <p style="width: 60%; text-align: center" class="centered">
        No album found
      </p>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: "emptyContainer",
};
</script>
