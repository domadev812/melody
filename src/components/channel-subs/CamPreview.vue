<template>
  <v-card height="300" width="450">
    <slot name="video" />
    <v-overlay
      :value="true"
      absolute
      opacity="0.7"
    >
      <slot name="overlay" />
    </v-overlay>
  </v-card>
</template>

<script>
  export default {
    name: 'CamPreview'
  }
</script>

<style lang="scss" scoped>

</style>