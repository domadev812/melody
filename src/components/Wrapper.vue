<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <p class="error--text">
          Note: All features are free for our user.
          You will need to be logged to use our cam site
        </p>
      </v-col>

      <!--  -->
      <channel />
    </v-row>
  </v-container>
</template>

<script>
import Channel from './Channel.vue'
  export default {
    name: 'HelloWorld',
    components: { Channel },
  }
</script>
