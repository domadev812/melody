<template>
  <v-card :height="height" width="450">
    <slot name="video" />
    <v-overlay
      :value="true"
      absolute
      opacity="0.7"
      class="preview-overlay"
    >
      <slot name="overlay" />
    </v-overlay>
  </v-card>
</template>

<script>
  export default {
    name: 'CamPreview',

    props: {
      height: {
        type: Number,
      },
    }
  }
</script>

<style lang="scss" scoped>

</style>