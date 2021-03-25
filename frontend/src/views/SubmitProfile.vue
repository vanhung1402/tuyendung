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
      viTriTuyenDung: "Nhân viên sale",
      form: {
        sHotenUngvien: "",
        dNgaysinhUngvien: new Date().setFullYear(new Date().getFullYear() - 18),
        bGioitinhUngvien: true,
        sDienthoaiUngvien: "",
        sEmailUngvien: "",
        sDiachiUngvien: "",
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

      this.saveRecruitmentProfile()
    },
    saveRecruitmentProfile(){
      let newRecruitmentProfile = {...this.form}
      console.log(newRecruitmentProfile)
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
      sHotenUngvien: {
        required,
        minLength: minLength(3),
      },
      sDienthoaiUngvien: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(12),
      },
      sEmailUngvien: {
        required,
        email,
      },
      sDiachiUngvien: {
        required,
        minLength: minLength(10),
      },
    },
  },
};
</script>
<template>
  <div class="container">
    <h4 class="text-center text-uppercase">Nộp hồ sơ tuyển dụng: {{ viTriTuyenDung }}</h4>
    <form novalidate class="md-layout" @submit.prevent="validateProfile">
      <div class="row">
        <div class="col-md-6 form-group">
          <md-field :class="getValidationClass('sHotenUngvien')">
            <label for="ho-ten"
              >Họ và tên <span class="text-danger">*</span></label
            >
            <md-input id="ho-ten" v-model="form.sHotenUngvien"></md-input>
            <span class="md-error" v-if="!$v.form.sHotenUngvien.required"
              >Họ và tên trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sHotenUngvien.minlength"
              >Họ và tên phải nhiều hơn 3 ký tự</span
            >
          </md-field>
        </div>
        <div class="col-md-3 form-group">
          <md-datepicker
            id="ngay-sinh"
            v-model="form.dNgaysinhUngvien"
            :md-immediately="true"
            :required="true"
            :class="
              getDateValidationClass(form.dNgaysinhUngvien, Date.now(), '<') &&
              form.dNgaysinhUngvien
                ? ''
                : 'md-invalid'
            "
          >
            <label for="ngay-sinh"
              >Ngày sinh <span class="text-danger">*</span></label
            >
            <span class="md-error" v-if="!form.dNgaysinhUngvien">Ngày sinh trống</span>
            <span
              class="md-error"
              v-if="!getDateValidationClass(form.dNgaysinhUngvien, Date.now(), '<')"
              >Ngày sinh không hợp lệ</span
            >
          </md-datepicker>
        </div>
        <div class="col-md-3 form-group row-flex">
          <md-radio v-model="form.bGioitinhUngvien" :value="true" class="md-primary"
            >Nam</md-radio
          >
          <md-radio v-model="form.bGioitinhUngvien" :value="false" class="md-primary"
            >Nữ</md-radio
          >
        </div>
        <div class="col-md-6 form-group">
          <md-field>
            <label>Điện thoại <span class="text-danger">*</span></label>
            <md-input v-model="form.sDienthoaiUngvien"></md-input>
          </md-field>
        </div>
        <div class="col-md-6 form-group">
          <md-field :class="getValidationClass('sEmailUngvien')">
            <label for="email">Email <span class="text-danger">*</span></label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.sEmailUngvien"
            />
            <span class="md-error" v-if="!$v.form.sEmailUngvien.required"
              >Email trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sEmailUngvien.email"
              >Email không hợp lệ</span
            >
          </md-field>
        </div>
        <div class="col-md-12 form-group">
          <md-field :class="getValidationClass('sDiachiUngvien')">
            <label for="dia-chi"
              >Địa chỉ <span class="text-danger">*</span></label
            >
            <md-textarea
              id="dia-chi"
              v-model="form.sDiachiUngvien"
              md-autogrow
              md-counter="200"
            ></md-textarea>
            <span class="md-error" v-if="!$v.form.sDiachiUngvien.required"
              >Địa chỉ trống</span
            >
            <span class="md-error" v-else-if="!$v.form.sDiachiUngvien.minlength"
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
.row-flex .md-radio {
  margin-top: 30px;
}
.row-flex {
  display: flex;
}
.row-flex > div {
  width: 100%;
}
</style>