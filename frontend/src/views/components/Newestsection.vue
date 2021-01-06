<template>
  <section class="custom-padding">
    <div class="section-header">
      <span class="section-title">{{
        capitalizeFirstLetter("Tin tức mới nhất")
      }}</span>
      <span class="section-view-all"
        >Xem tất cả tin tức
        <b-icon-arrow-right></b-icon-arrow-right>
      </span>
    </div>
    <div class="section-body">
      <div class="row no-gutters">
				<Newspost class="col-md-4"></Newspost>
			</div>
    </div>
  </section>
</template>
<script>
import Newspost from "./Newspost";
export default {
  components: {
    Newspost,
  },
};
</script>
<style scoped>
.section-header {
  margin: 1.5vw 0;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.section-title {
  padding-right: 2vw;
  font-size: 2.5vw;
}
.section-view-all {
  padding: 1vw;
  border-left: 1px solid #ccc;
  padding-left: 2vw;
  text-transform: uppercase;
  font-size: 1.2vw;
  color: #2794eb;
}
@media screen and (max-width: 768px) {
  .section-title {
    font-size: 15pt;
  }
  .section-view-all {
    font-size: 8pt;
  }
}
</style>