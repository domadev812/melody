<template>
  <v-app-bar
      app
      color="white"
      height="75"
    >
      <!-- Navigation Drawer activator -->
      <!-- <v-app-bar-nav-icon v-if="$vuetify.breakpoint.mobile" @click="$emit('click')" /> -->
      <!-- ./Navigation Drawer activator -->

      <!-- Brand name/icon -->
      <v-toolbar-title class="primary--text font-weight-black">
        MelodyCam
      </v-toolbar-title>
      <!-- ./Brand name/icon -->

      <v-spacer></v-spacer>

      <!-- Nav buttons -->
      <v-row justify="end">
        <div
          v-for="btn in buttons"
          :key="btn.name">
          <v-btn
            :href="btn.link ? btn.link : null"
            rounded
            :target="btn.link ? '_blank' : null"
            class="nav-btn mr-2 p-0"
            :class="btn.class ? btn.class : ''"
            :color="btn.color"
            link
            :small="$vuetify.breakpoint.mobile"
            @click.stop="!btn.link ? dialog = true : null"
          >
            <span>{{ btn.name }}</span>
          </v-btn>
          <div class="btn-under-text" v-if="btn.moreText">{{ btn.moreText }}</div>
        </div>
      </v-row>
      <!-- ./Nav buttons -->

      <!-- Modal for more info -->
      <v-dialog
        v-model="dialog"
        max-width="590"
      >
      <v-card>
        <v-card-title primary-title>
          Creating account for RoyalCam
        </v-card-title>
        <v-card-text>
          RoyalCam is cam site with different female and male models that explore their body
        </v-card-text>
        <v-card-actions>
          <v-btn
            rounded
            color="black"
            class="orange--text"
            target="_blank"
            href="https://t.bdwafx.com/alt4o9a3wg?url_id=14981&aff_id=75586&offer_id=2994&bo=2779,2778,2777,2776,2775&po=6533"
          >
            login with CamRoyal
          </v-btn>
        </v-card-actions>
      </v-card>
      </v-dialog>
      <!-- ./Modal for more info -->
    </v-app-bar>
</template>

<script>
  export default {
    name: 'Nav',
    props: {
      buttons: {
        type: Array,
        default: null
      }
    },
    data: () => ({
      dialog: false
    })
  }
</script>

<style lang="scss" scoped>
  .btn-under-text {
    text-align: center;
  }
</style>