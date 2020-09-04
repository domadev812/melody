<template>
  <v-container fluid>
    <v-row justify="start">
      <v-col cols="6" :offset="$vuetify.breakpoint.mobile ? 4 : 7">
        <switches :userTypes="userTypes" @send-user-type="filterchoice" />
      </v-col>
    </v-row>

    <v-row no-gutters justify="center">
      <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 5">
        <cam-preview class="mb-4">
          <template #video>
            <vue-player
              src="https://drive.google.com/file/d/1zUxw9Fu-vaHBdxILFVCevdjfTMzvjyEt/view?usp=sharing"
              video-placeholder-src="https://drive.google.com/file/d/1zUxw9Fu-vaHBdxILFVCevdjfTMzvjyEt/view?usp=sharing"
              style="height: 100%"
              :controls="false"
            />
          </template>
          <template #overlay>
            <v-card height="250" color="transparent" flat>
              <v-col>
                <h3 class="mb-12">Are you Over 18?</h3>
              </v-col>
              <v-col>
                <!-- <v-btn color="warning" class="mb-12">
                  Click to verify
                </v-btn> -->
                <ButtonModal class="mb-8" color="warning" btnName="Click to verify" btnIcon="shield-account" />
              </v-col>
              <v-col>
                <h3>It's free</h3>
              </v-col>
            </v-card>
          </template>
        </cam-preview>

        <cam-preview>
          <template #overlay>
            <ButtonModal color="grey" fab btnIcon="microphone" rounded small />
            <ButtonModal color="grey" fab btnIcon="video" rounded small />
          </template>
        </cam-preview>
      </v-col>

      <v-col :cols="$vuetify.breakpoint.xsOnly ? 12 : 7">
        <messages height="65%" class="mb-3"/>
        <v-textarea
          filled
          disabled
          label="This service is unavailable at the moment"
          height="10%"
          append-icon="mdi-send"
          @click:append="logIt"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import vuePlayer from  '@algoz098/vue-player'
  import Messages from './channel-subs/Messages.vue'
  import CamPreview from './channel-subs/CamPreview.vue'
  import Switches from './channel-subs/Switches.vue'
  import ButtonModal from './shared/ButtonModal.vue'
  export default {
    components: {
      ButtonModal,
      Switches,
      CamPreview,
      Messages,
      vuePlayer
    },
    data() {
      return {
        showModal: false,
        overlay: true,
        currentType: 'Female',
        userTypes: [
          'Female',
          'Male',
          'Couple'
        ]
      }
    },
    methods: {
      filterchoice: function (u) {
        this.currentType = u;
      },
      logIt () {
        console.log('clicked icon!')
      }
    }
  }
</script>

<style lang="css" scoped>
  .my-overlay .v-overlay__content {
    height: '100%';
  }

  .mb-8 {
    color: purple;
  }
</style>