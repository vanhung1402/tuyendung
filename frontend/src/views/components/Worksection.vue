<template>
  <section class="custom-padding">
    <div class="section-header">
      <span class="section-title">{{
        capitalizeFirstLetter(workOutstanding.titleWork)
      }}</span>
      <span class="section-view-all"
        >Xem tất cả công việc
        <b-icon-arrow-right></b-icon-arrow-right>
      </span>
    </div>
    <div class="section-body">
      <Jobtable :works="workOutstanding.listWork"></Jobtable>
    </div>
    <div class="section-footer text-right">
      <button
        class="btn btn-outline-primary btn-sm btn-pagination"
        :hidden="currentPage == pages[0]"
        @click="handleClickPage(currentPage - 1)"
      >
        <b-icon-arrow-left></b-icon-arrow-left>
      </button>

      <button
        v-for="(page, index) in pages"
        :key="index"
        class="btn btn-sm btn-pagination"
        :class="page == currentPage ? 'btn-primary' : 'btn-outline-primary'"
        :disabled="page == '...'"
        @click="handleClickPage(page)"
      >
        {{ page }}
      </button>

      <button
        class="btn btn-outline-primary btn-sm btn-pagination"
        :hidden="currentPage == [...pages].pop()"
        @click="handleClickPage(currentPage + 1)"
      >
        <b-icon-arrow-right></b-icon-arrow-right>
      </button>
    </div>
  </section>
</template>

<script>
import Jobtable from "./Jobtable";
import axios from "axios";

export default {
  components: {
    Jobtable,
  },
  data: () => {
    return {
      currentPage: 1,
      pages: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      PAGES: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      workOutstanding: { titleWork: "", listWork: [] },
    };
  },
  props: ["workCate"],
  methods: {
    loadWorkoutstanding() {
      let workCate = this.workCate;
      let currentPage = this.currentPage;

      axios
        .get("/api/works/" + workCate + "/" + currentPage)
        .then((res) => {
          this.workOutstanding.titleWork = res.data.titleWork;
          this.workOutstanding.listWork = res.data.listWork;
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    },
    handleClickPage(newPage) {
      if (newPage >= this.PAGES[0] || newPage <= [...this.PAGES].pop()) {
        this.currentPage = newPage;
        this.handleReloadPagination();
      }
    },
    handleReloadPagination() {
      let newPaginations = [];
      let lastPage = [...this.PAGES].pop();
      const MAX_PAGE = 5

      for (let i = 0; i < MAX_PAGE; i++) {
        newPaginations.push(i + 1);
      }

      if (lastPage > MAX_PAGE) {
        newPaginations[MAX_PAGE - 1] = lastPage;
        switch (this.currentPage) {
          case 1:
          case 2:
          case 3:
            newPaginations[MAX_PAGE - 2] = "...";
            break;
          case lastPage:
          case lastPage - 1:
          case lastPage - 2:
            newPaginations[1] = "...";
            newPaginations[MAX_PAGE - 2] = lastPage - 1;
            newPaginations[MAX_PAGE - 3] = lastPage - 2;
            break;
          default:
            newPaginations[1] = "...";
            newPaginations[MAX_PAGE - 2] = "...";
            newPaginations[2] = this.currentPage;
        }
      }

      this.pages = newPaginations;
      this.loadWorkoutstanding();
    },
  },
  created() {
    this.currentPage = this.pages[0];
    this.handleReloadPagination();
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
.section-body,
.section-footer {
  background-color: #f0f3fa;
  padding: 1.5vw;
}
.btn-pagination {
  margin: 0 0.25rem;
  border: none;
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