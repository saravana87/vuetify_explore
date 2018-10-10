<template>
<v-container>
   <v-alert
      :value="false"
      color="warning"
      v-model="calert"
      dismissible
    >
      {{ calertText }}

    </v-alert>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-label color="red">Signup with us <v-icon>person_add</v-icon></v-label>
    <v-text-field
      v-model="name"
      :rules="nameRules"
      :counter="30"
      label="Username"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email"
      required
    ></v-text-field>
     <v-text-field
      v-model="passtxt"
      type="password"
      :rules="notEmpty"
      label="Password"
      required
    ></v-text-field>
     <v-btn v-on:click="submit" color="success">Submit</v-btn>
  </v-form>
  </v-container>
</template>

<script>
import axios from 'axios'
  export default {
    data: () => ({
      calert: '',
      calertType: 'error',
      calertText: '',
      valid: false,
      name: '',
      passtxt: '',
      nameRules: [
        v => !!v || 'Please enter username',
        v => v.length <= 30 || 'Name must be less than 30 characters'
      ],
      notEmpty: [
        v => !!v || 'Please enter username',        
      ],
      email: '',
      emailRules: [
        v => !!v || 'Please enter e-mail address.',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]      
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          axios.get('http://127.0.0.1:3000/api/email_exist?name='+this.name+'&email='+this.email).then(
            response => {
              console.log("Json returns = "+JSON.parse(response.data).a)
              if (JSON.parse(response.data).a == 0){
                  axios.post('http://127.0.0.1:3000/api/signup', 
          {
            username: this.name,email: this.email,password: this.passtxt
          }).then(function(){
            console.log('true')            
          
            return
            });
              this.calert=true
              this.calertText = "Signup completed :-)" 
              }
              else {                 
                this.calert=true
                this.calertText = "Email ID already exist. Please use a different one" }
            }

          )
          
        }
        }
      },    
  
 }
</script>