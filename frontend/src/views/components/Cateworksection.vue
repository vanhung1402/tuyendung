<template>
  <section id="categories">
    <div class="custom-padding">
      <h1>Nhóm Công Việc</h1>
      <div class="row no-gutters">
        <div class="col-md-3 text-center work-category">
          <p class="h1"><b-icon-handbag-fill></b-icon-handbag-fill></p>
          <div><b>Sales</b></div>
          <div>286 việc</div>
        </div>
        <div class="col-md-3 text-center work-category">
          <p class="h1"><b-icon-pie-chart-fill></b-icon-pie-chart-fill></p>
          <div><b>Maketing</b></div>
          <div>286 việc</div>
        </div>
        <div class="col-md-3 text-center work-category">
          <p class="h1"><b-icon-telephone-fill></b-icon-telephone-fill></p>
          <div><b>Chăm sóc khách hàng</b></div>
          <div>286 việc</div>
        </div>
        <div class="col-md-3 text-center work-category">
          <p class="h1"><b-icon-cash></b-icon-cash></p>
          <div><b>Kế hoạch / tài chính</b></div>
          <div>286 việc</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "work-category",
};
</script>

<style scoped>
#categories {
  background-color: #50c4ed;
  padding-bottom: 50px;
  color: #fff;
  border-collapse: collapse;
}
.work-category {
  border: 2px solid rgb(235, 235, 235);
	padding: 25px;
}
</style>