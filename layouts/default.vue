<template>
 <v-app
    id="inspire"
    light
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
      <v-list dense>
       
        <v-subheader class="mt-3 grey--text text--darken-1">TWILIO SERVICES</v-subheader>
        
        <v-list-tile class="mt-3" @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">message</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1"> <no-ssr><nuxt-link to="/message" button>Send a Message</nuxt-link></no-ssr></v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1"><no-ssr><nuxt-link to="/settings" button>Settings</nuxt-link></no-ssr></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="white"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <v-icon>blur_on</v-icon><span class="title">Talkify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <!-- <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field> -->
      </v-layout>
    </v-toolbar>
    <v-content>
     
       
           <nuxt />
        
    
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
