<template>
  <v-container>
    <v-btn
      :color="color"
      :class="btnClass"
      :fab="fab"
      :rounded="rounded"
      :small="small"
      @click.stop="dialog = true"
    >
      <VIcon v-if="btnIcon">
        mdi-{{ btnIcon }}
      </VIcon>

      <v-img v-if="src" :src="src" contain />

      {{ btnName }}
    </v-btn>
    <v-dialog
      v-model="dialog"
      max-width="590"
    >
      <v-card>
        <v-card-title primary-title>
          {{ title }}
        </v-card-title>
        <VCardText>
          {{ notes }}
        </VCardText>
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
  </v-container>
</template>

<script>
  export default {
    name: 'ButtonModal',
    props: {
      color: {
        type: String,
        default: 'secondary'
      },
      btnClass: {
        type: String,
        default: ''
      },
      btnName: {
        type: String,
        default: null
      },
      fab: {
        type: Boolean,
        default: false
      },
      btnIcon: {
        type: String,
        default: null
      },
      rounded: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: 'Warning'
      },
      notes: {
        type: String,
        default: 'You need to be connected to use any free features from our cam Site.'
      }
    },
    data: () => ({
      dialog: false
    })
  }
</script>

<style lang="scss" scoped>

</style>