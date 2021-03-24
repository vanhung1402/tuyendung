<script>
import { validationMixin } from "vuelidate";
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      fileRecordsForUpload: [],
      uploadUrl: "http://localhost/upload-server/php/upload-server.php",
      uploadHeaders: { "X-Test-Header": "vue-file-agent" },
      form: {
        sHoten: "",
        dNgaysinh: new Date().setFullYear(new Date().getFullYear() - 18),
        bGioitinh: true,
        sDienthoai: "",
        sEmail: "",
        sDiachi: "",
      },
    };
  },
  methods: {
    uploadFiles() {
      this.$refs.vueFileAgent.upload(
        this.uploadUrl,
        this.uploadHeaders,
        this.fileRecordsForUpload
      );
      this.fileRecordsForUpload = [];
    },
    validateProfile() {
      this.$v.$touch();
      console.log(this.$v);

      if (!this.$v.$invalid) {
        console.log(this.form);
      }
    },
    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];

      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },
    getDateValidationClass(date, dateCompare, condition) {
      switch (condition) {
        case ">":
          return date > dateCompare;
        case "<":
          return date < dateCompare;

        default:
          return false;
      }
    },
    convertDate(dateOld) {
      let date = dateOld.split("/");
      let newDate = [date[1], date[0], date[2]];
      return newDate.join("/");
    },
    isValidDate(date) {
      return date instanceof Date && !isNaN(date);
    },
  },
  computed: {
    dateFormat: {
      get() {
        return this.$material.locale.dateFormat;
      },
      set(val) {
        this.$material.locale.dateFormat = val;
      },
    },
  },
  validations: {
    form: {
      sHoten: {
        required,
        minLength: minLength(3),
      },
      sDienthoai: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(12),
      },
      sEmail: {
        required,
        email,
      },
      sDiachi: {
        required,
        minLength: minLength(10),
      }
    },
  },
};
</script>
<template>
  <div class="container">
    <form novalidate class="md-layout" @submit.prevent="validateProfile">
      <div class="row">
        <div class="col-md-6 form-group">
          <md-field :class="getValidationClass('sHoten')">
            <label for="ho-ten"
              >Họ và tên <span class="text-danger">*</span></label
            >
            <md-input id="ho-ten" v-model="form.sHoten"></md-input>
            <span class="md-error" v-if="!$v.form.sHoten.required"
              >Họ và tên trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sHoten.minlength"
              >Họ và tên phải nhiều hơn 3 ký tự</span
            >
          </md-field>
        </div>
        <div class="col-md-3 form-group">
          <md-datepicker
            id="ngay-sinh"
            v-model="form.dNgaysinh"
            :md-immediately="true"
            :required="true"
            :class="
              getDateValidationClass(form.dNgaysinh, Date.now(), '<') &&
              form.dNgaysinh
                ? ''
                : 'md-invalid'
            "
          >
            <label for="ngay-sinh"
              >Ngày sinh <span class="text-danger">*</span></label
            >
            <span class="md-error" v-if="!form.dNgaysinh">Ngày sinh trống</span>
            <span
              class="md-error"
              v-if="!getDateValidationClass(form.dNgaysinh, Date.now(), '<')"
              >Ngày sinh không hợp lệ</span
            >
          </md-datepicker>
        </div>
        <div class="col-md-3 form-group">
          <md-radio v-model="form.bGioitinh" :value="true" class="md-primary"
            >Nam</md-radio
          >
          <md-radio v-model="form.bGioitinh" :value="false" class="md-primary"
            >Nữ</md-radio
          >
        </div>
        <div class="col-md-6 form-group">
          <md-field>
            <label>Điện thoại <span class="text-danger">*</span></label>
            <md-input v-model="form.sDienthoai"></md-input>
          </md-field>
        </div>
        <div class="col-md-6 form-group">
          <md-field :class="getValidationClass('sEmail')">
            <label for="email">Email <span class="text-danger">*</span></label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.sEmail"
            />
            <span class="md-error" v-if="!$v.form.sEmail.required"
              >Email trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sEmail.email"
              >Email không hợp lệ</span
            >
          </md-field>
        </div>
        <div class="col-md-12 form-group">
          <md-field :class="getValidationClass('sDiachi')">
            <label for="dia-chi">Địa chỉ <span class="text-danger">*</span></label>
            <md-textarea
              id="dia-chi"
              v-model="form.sDiachi"
              md-autogrow
              md-counter="200"
            ></md-textarea>
            <span class="md-error" v-if="!$v.form.sDiachi.required"
              >Địa chỉ trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sDiachi.minlength"
              >Địa chỉ phải nhiều hơn 10 ký tự</span
            >
          </md-field>
        </div>
        <div class="col-md-12 form-group">
          <VueFileAgent
            ref="vueFileAgent"
            v-model="fileRecordsForUpload"
            :uploadUrl="uploadUrl"
            :multiple="false"
            :theme="'list'"
            :editable="true"
            :deletable="true"
            :helpText="'Tải lên CV của bạn dưới dạng PDF'"
          ></VueFileAgent>
        </div>
        <div class="col-md-12 form-group text-center">
          <md-button type="submit" class="md-raised md-primary">Nộp</md-button>
        </div>
      </div>
    </form>
  </div>
</template>

<style>
.md-radio {
  margin-top: 30px;
}
.row-flex {
  display: flex;
}
.row-flex > div {
  width: 100%;
}
</style>