<template>
  <div class="table-cells">
    <div class="job-field job-name">
      <img :src="'/img/' + job.img" class="img-company" />
      <div>
        <p class="name-job">{{ job.jobname }}</p>
        <p class="name-company">{{ job.companyname }}</p>
      </div>
    </div>
    <div class="job-field job-type">
      <span :class="job.jobtype">{{ capitalizeFirstLetter(job.jobtype) }}</span>
    </div>
    <div class="job-field job-location">{{ job.joblocation }}</div>
    <div class="job-field job-expired">{{ job.jobexpired }}</div>
    <div class="job-field job-salary">{{ formartMoney(job.jobsalary) }}đ</div>
  </div>
</template>

<script>
export default {
  props: ["job"]
};
</script>

<style scoped>
.table-cells {
  display: flex;
  margin: 15px 0;
}
.table-cells .job-field {
  width: 150px;
  display: flex;
  align-items: center;
}
.table-cells .job-name {
  flex-grow: 2;
}
.table-cells .job-location {
  flex-grow: 1;
}
.table-body .table-cells {
  background-color: #fff;
}
.table-body .table-cells .job-field:not(:last-child) {
  border-right: 1px solid #eee;
}
.table-body .table-cells .job-field:not(:first-child) {
  justify-content: center;
}
.table-body .table-cells .img-company {
  width: 55px;
  height: 55px;
  margin: 10px;
}
.table-body .table-cells .name-job {
  font-weight: bold;
  margin: 5px;
}
.table-body .table-cells .name-company {
  text-transform: uppercase;
  margin: 5px;
  color: #0d8abc;
  font-size: 10pt;
}
.table-body .table-cells .job-type span {
  padding: 5px 10px;
  color: #fff;
  font-size: 10pt;
  border-radius: 10px;
}
.job-type .fulltime {
  background-color: #66d37e;
}
.job-type .parttime {
  background-color: #e84a5f;
}
.job-type .freelancer {
  background-color: #ec9454;
}
.table-body .job-location,
.table-body .job-expired,
.table-body .job-salary {
  color: #444;
}

@media screen and (max-width: 768px) {
  .table-cells {
    flex-wrap: wrap;
  }
  .table-body .table-cells .job-field {
    width: 100%;
    display: flex;
    padding: 15px;
    justify-content: flex-start !important;
  }
  .table-body .table-cells .img-company {
    margin: 0;
  }
}
</style>