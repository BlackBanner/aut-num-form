<template>
  <div id="app">
    <v-app id="inspire">
      <v-toolbar color="indigo" dark fixed app>
        <v-toolbar-title>aut-num Form</v-toolbar-title>
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
                    :rules="{ required:true, unique:true}"
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
                    :rules="{ required: true}"
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
                    :rules="{ required: true}"
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
                    name="status"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="status"
                      name="status"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="status"
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
                      v-model="member_of"
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

                  <ValidationProvider
                    name="export"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="export"
                      name="export"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="exports"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mp_export"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mp-export"
                      name="mp_export"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mp_export"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="default"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="default"
                      name="default"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="defaults"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mp_default"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mp-default"
                      name="mp_default"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mp_default"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="remarks"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="remarks"
                      name="remarks"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="remarks"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="org"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="org"
                      name="org"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="org"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="admin_c"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="admin-c"
                      name="admin_c"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="admin_c"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>
                  
                  <ValidationProvider
                    name="tech_c"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="tech-c"
                      name="tech_c"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="tech_c"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>
                  
                  <ValidationProvider
                    name="notify"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="notify"
                      name="notify"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="notify"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mnt_irt"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mnt-irt"
                      name="mnt_irt"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mnt_irt"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mnt_lower"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mnt-lower"
                      name="mnt_lower"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mnt_lower"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mnt_routes"
                    :rules="{ required: false}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mnt-routes"
                      name="mnt_routes"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mnt_routes"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="mnt_by"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="mnt-by"
                      name="mnt_by"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="mnt_by"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="change"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="change"
                      name="change"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="change"
                      :error-messages="errors"
                    >
                    </v-text-field>
                  </ValidationProvider>

                  <ValidationProvider
                    name="source"
                    :rules="{ required: true}"
                    v-slot="{ errors }"
                  >
                    <v-text-field
                      label="source"
                      name="source"
                      class="custom_label custom_input"
                      placeholder=" "
                      v-model="source"
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
      status:'',
      member_of:'',
      imports:'',
      mp_import:'',
      exports:'',
      mp_export:'',
      defaults:'',
      mp_default:'',
      remarks:'',
      org:'',
      admin_c:'',
      tech_c:'',
      notify:'',
      mnt_irt:'',
      mnt_lower:'',
      mnt_routes:'',
      mnt_by:'',
      change:'',
      source:''
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
            required: "as_name is required",
          },
          descr: {
            required: "descr is required",
          },
          status: {
            required: "status is required",
          },
          org: {
            required: "org is required",
          },
          admin_c: {
            required: "admin_c is required",
          },
          tech_c: {
            required: "tech_c is required",
          },
          mnt_by: {
            required: "mnt_by is required",
          },
          change: {
            required: "change is required",
          },
          source: {
            required: "source is required",
          }
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
