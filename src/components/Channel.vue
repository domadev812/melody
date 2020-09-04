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
              src="/static/small.mp4"
              video-placeholder-src="/static/small.mp4"
              style="height: 100%"
              :controls="false"
            />
          </template>
          <template #overlay>
            <v-card height="200" color="transparent" flat class="border-container">
              <v-card height="200" color="transparent" flat class="child-container">
                <v-col>
                  <h3 class="text-uppercase">Are you Over 18?</h3>
                </v-col>
                <v-col>
                  <!-- <v-btn color="warning" class="mb-12">
                    Click to verify
                  </v-btn> -->
                  <ButtonModal class="mt-3" color="#6825c1" btnName="Click to verify" />
                </v-col>
                <v-col>
                  <h3 class="mt-3 text-uppercase">It's free</h3>
                </v-col>
              </v-card>
            </v-card>
          </template>
        </cam-preview>

        <cam-preview :height="300">
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

<style lang="scss">
  .my-overlay .v-overlay__content {
    height: '100%';
  }

  .mb-8 {
    color: purple;
  }

  .preview-overlay {
    .v-overlay__content {
      width: 100%;
    }
  }

  .start-button {
    display: none;
  }

  .border-container {
    width: 100%;
    &::before{
      content: "";
      top: 20px;
      left: 30px;
      border-top: 2px solid white;
      border-left: 2px solid white;
      position: absolute;
      display: block;
      width: 20px;
      height: 20px;
    }

    &::after{
      display: block;
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      top: 20px;
      right: 30px;
      border-top: 2px solid white;
      border-right: 2px solid white;
    }
  }
  
  .child-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &::before {
      content: "";
      bottom: 10px;
      left: 30px;
      border-bottom: 2px solid white;
      border-left: 2px solid white;
      position: absolute;
      display: block;
      width: 20px;
      height: 20px;
    }
    &::after {
      display: block;
      content: "";
      width: 20px;
      height: 20px;
      position: absolute;
      bottom: 10px;
      right: 30px;
      border-bottom: 2px solid white;
      border-right: 2px solid white;
    }
  }
</style>