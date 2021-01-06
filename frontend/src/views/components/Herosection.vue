<template>
  <section id="hero-section">
    <img src="./../../assets/img/people.jpg" alt="Good job!" />
    <div class="center">
      <div class="center-content custom-padding">
        <h1>Hơn 100,000 công việc đang chờ bạn.</h1>
        <form method="post">
          <div id="form-search">
            <div id="tenviec" class="col-md-6">
              <input
                class="form-control"
                type="text"
                name="tenviec"
                placeholder="Công việc / Từ khóa / Công ty..."
                autocomplete="off"
              />
            </div>
            <div id="diadiem" class="col-md-5">
              <input
                class="form-control"
                type="text"
                name="diadiem"
                placeholder="Tỉnh thành / Mã bưu điện..."
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
          Từ khóa nổi bật: <a href="" class="popular-key">Web design</a
          ><a href="" class="popular-key">Frontend developer</a
          ><a href="" class="popular-key">Unknown</a>
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
  color: #fff;
}
#form-search {
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0;
  border-radius: 5px;
}
#form-search #button {
  text-align: right;
}
#form-search #button button {
  background-color: #00e0ff;
  border: 1px solid #324e7b;
  color: #fff;
  border-radius: 5px;
  font-size: 1.2vw;
}
#form-search input {
  font-size: 1.2vw;
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
}
#key-noibat {
  color: #fff;
  font-weight: bold;
  font-size: 1.5vw;
}
.popular-key {
  color: #fff;
  background-color: #3d6cb9;
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