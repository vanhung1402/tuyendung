<template>
  <div class="jobs-table">
    <div class="table-header">
      <div class="table-cells">
        <div class="job-field job-name">Công việc / Công ty</div>
        <div class="job-field job-type">Loại việc</div>
        <div class="job-field job-location">Địa điểm</div>
        <div class="job-field job-expired">Ngày hết hạn</div>
        <div class="job-field job-salary">Mức lương</div>
      </div>
    </div>
    <div class="table-body">
      <Jobtablecell
        v-for="item in works"
        :job="item"
        :key="item._id"
      ></Jobtablecell>
    </div>
  </div>
</template>

<script>
import Jobtablecell from "./Jobtablecell";

export default {
  components: {
    Jobtablecell,
  },
  props: ["works"],
};
</script>

<style scoped>
.table-header {
  text-transform: uppercase;
  font-size: 10pt;
  color: #0d8abc;
  font-weight: bold;
}
.table-cells {
  display: flex;
  margin: 15px 0;
}
.table-cells .job-field {
  width: 150px;
  display: flex;
  align-items: center;
}
.table-header .table-cells .job-field {
  justify-content: center;
}
.table-cells .job-name {
  flex-grow: 2;
}
.table-cells .job-location {
  flex-grow: 1;
}
@media screen and (max-width: 768px) {
  .table-header {
    display: none;
  }
  .table-cells {
    flex-wrap: wrap;
  }
}
</style>