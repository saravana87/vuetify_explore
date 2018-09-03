<template>
<v-container>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-label color="red">Configure Twilio Credentials</v-label>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="10"
      label="API Key"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="tokenRules"
      label="Token"
      required
    ></v-text-field>
     <v-btn @click="submit" color="success">Encrypt & Save in Local</v-btn>
  </v-form>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'API key is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
      ],
      email: '',
      tokenRules: [
        v => !!v || 'Token is required',
        v => v.length <= 10 || 'Token must be valid'
      ]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
        }
      }
    }
  }
</script>