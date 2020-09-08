<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>Form</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-content>
        <v-container fluid fill-height>
          <v-flex xs12 sm6 offset-sm3>
            <v-card style="padding:12px">

              <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
                <v-form
                  class="p-3"
                  ref="form"
                  v-model="valid"
                  @submit.prevent="handleSubmit(success)"
                >
                  <ValidationProvider
                    name="aut_num"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="aut-num"
                      name="aut_num"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="aut_num"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="as_name"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="as-name"
                      name="as_name"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="as_name"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="descr"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="descr"
                      name="descr"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="descr"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="member_of"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="member-of"
                      name="member_of"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="descr"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="import"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="import"
                      name="import"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="imports"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mp_import"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mp-import"
                      name="mp_import"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mp_import"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>


                  <v-btn type="submit" end color="green darken-1" text >
                    Submit
                  </v-btn>
                </v-form>
              </ValidationObserver>

            </v-card>
          </v-flex>
        </v-container>
      </v-content>

      <v-footer height="auto" color="indigo" dark>
        <v-layout justify-center row wrap>
          <v-flex color="indigo" dark py-3 text-xs-center white--text xs12>
            &copy;2020 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
import { required, email, max, regex } from "vee-validate/dist/rules";
import { extend, localize } from "vee-validate";
extend("required", required);
extend("email", email);
extend("max", max);
extend("regex", regex);
export default {
  data() {
    return {
      valid: true,
      aut_num:'',
      as_name:'',
      descr:'',
      member_of:'',
      imports:'',
      mp_import:''
    };
  },

  methods: {
    success() {
      console.log('submitted');
    },
    isUnique(value){
      return false;
    }
  },
  mounted() {
    localize({
      en: {
        fields: {
          aut_num: {
            required: "Aut-num is required",
          },
          as_name: {
            required: "Aut-num is required",
          },
          descr: {
            required: "Aut-num is required",
          },
        },
      },
    });

    extend("unique", {
      validate: this.isUnique,
      message: "false",
    });
  }
};
</script>
<style>
.custom_input{

}
</style>
