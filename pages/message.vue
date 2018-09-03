<template>
  <v-container grid-list-xl>
    <v-form ref="form" lazy-validation>
    <v-layout v-bind="binding" column>
      <v-flex>
           <v-text-field
            solo 
            :rules="notemptyRules"
            label="Enter phone number"
            clearable v-model="phoneno"
            required
          ></v-text-field>
      </v-flex>
      <v-flex>
       <v-textarea
          outline
          v-model="msgcontent"
          label="Enter SMS content here"
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          :rules="notemptyRulesMsg"
        ></v-textarea>
      </v-flex>
      <v-flex>
       <div class="text-xs-center">
        <v-btn  round color="primary" dark v-on:click="passthru">  Send  </v-btn>
      </div>
      </v-flex>
    </v-layout>
    </v-form>
  </v-container>
</template>
<script>
import axios from 'axios'
  export default {
    data: function () {
      return {
        phoneno: '',
        msgcontent: '',
        notemptyRules: [
        v => !!v || 'Phone number is required',
        ],
        notemptyRulesMsg: [
        v => !!v || 'SMS Text is required',
        ]
      }
    },
    computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.mdAndUp) binding.column = true

        return binding
      }
    },
    methods: {
      passthru: function (event) {
        var jsonPromise = new Promise(function(resolve, reject) {   
        //example promise
        });
        if(this.$refs.form.validate())
        {
        axios.post('http://127.0.0.1:3000/api/getmessage@', 
        {phone: this.phoneno,msg: this.msgcontent})
        .then(function(){console.log('true')});
        }
        //alert('phone' + this.phoneno + ' ' + this.msgcontent)
        
      }
    }
  }
</script>