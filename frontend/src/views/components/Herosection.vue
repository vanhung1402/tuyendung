<template>
  <section id="hero-section">
    <img src="./../../assets/img/job.jpg" alt="Good job!" />
    <div class="center">
      <div class="center-content custom-padding">
        <h1>Rất nhiều công việc đang chờ bạn.</h1>
        <form method="post">
          <div id="form-search">
            <div id="tenviec" class="col-md-6">
              <input
                class="form-control"
                type="text"
                name="tenviec"
                placeholder="Công việc / Từ khóa / Vị trí việc làm..."
                autocomplete="off"
              />
            </div>
            <div id="diadiem" class="col-md-5">
              <input
                class="form-control"
                type="text"
                name="diadiem"
                placeholder="Địa điểm làm việc..."
              />
            </div>
            <div id="button" class="col-md-1">
              <button class="form-control">
                <b-icon-search></b-icon-search>
              </button>
            </div>
          </div>
        </form>
        <div id="key-noibat" class="mt-2">
          Từ khóa nổi bật: <a href="" class="popular-key">Sale</a
          ><a href="" class="popular-key">Maketing</a
          ><a href="" class="popular-key">Kế toán</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  font-size: 3.5vw;
}
#hero-section {
  position: relative;
  display: flex;
  align-items: center;
}
#hero-section img {
  width: 100%;
  height: auto;
  opacity: 0.75;
}
#hero-section .center {
  width: 100%;
  position: absolute;
  padding: 5px 0;
}
#hero-section .center .center-content h1 {
  color: #000;
}
#form-search {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0;
  border-radius: 5px;
}
#form-search #button button {
  background-color: #39b49b;
  border: 1px solid #39b49b;
  color: #FFF;
  border-radius: 5px;
  font-size: 1.2vw;
  transition: all ease .5s;
}
#form-search #button button:hover {
  background-color: #FFF;
  color: #39b49b;
}
#form-search input {
  font-size: 1.2vw;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
}
#key-noibat {
  color: #000;
  font-weight: bold;
  font-size: 1.5vw;
}
.popular-key {
  color: #fff;
  background-color: #39b49b;
  margin: 0 0.3vw;
  border-radius: 0.5vw;
  padding: 0.5vw;
}
@media screen and (max-width: 768px) {
  #form-search #diadiem {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  #form-search input,
  #form-search #button button {
    font-size: 10pt;
  }
  #hero-section img {
    min-height: 55vw;
  }
}
</style>