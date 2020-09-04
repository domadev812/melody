<template>
  <v-app>
    <Nav :buttons="buttons" @click="drawer = !drawer" />

    <v-navigation-drawer
        v-model="drawer"
        app
        temporary
      >
        <v-list>
          <v-list-item
            v-for="item in buttons"
            :key="item.name"
            :href="item.link"
          >
            <v-list-item-icon v-if="item.icon">
              <v-icon color="blue">mdi-{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="nav-btn">{{
                item.name
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <wrapper />
    </v-main>
  </v-app>
</template>

<script>
import Wrapper from './components/Wrapper.vue'
import Nav from './components/nav/Nav.vue'

export default {
  name: 'App',

  components: {
    Nav,
    Wrapper
  },

  data: () => ({
    drawer: false,
    buttons: [
      {
        name: 'login with camRoyal',
        rounded: true,
        icon: '',
        link: 'https://t.bdwafx.com/alt4o9a3wg?url_id=14981&aff_id=75586&offer_id=2994&bo=2779,2778,2777,2776,2775&po=6533',
        color: 'black',
        class: 'orange--text'
      },
      { name: 'signup', icon: '', color: 'secondary', rounded: false },
    ]
  }),
};
</script>
