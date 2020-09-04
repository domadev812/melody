<template>
  <v-btn-toggle
    v-model="toggle"
    background-color="transparent"
    color="secondary"
    borderless
    group
    shaped
  >
    <v-btn
      v-for="(userType, index) in userTypes"
      :key="index"
      @click="$emit('send-user-type', userType)"
    >
      <!-- userType -->
      {{ userType }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
  export default {
    name: 'Switches',
    props: {
      userTypes: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      toggle: 0,
    })
  }
</script>

<style lang="scss" scoped>

</style>