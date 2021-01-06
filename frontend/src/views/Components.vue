<template>
  <div>
    <Hero></Hero>
    <Worksection :workCate="'outstanding'"></Worksection>
    <Cateworksection></Cateworksection>
    <Worksection :workCate="'newest'"></Worksection>
    <div class="section cta-section parallax text-center">
      <div class="inner">
        <div class="container">
          <h2 class="text-uppercase">Tìm việc làm</h2>
          <p class="large light">
            Tham gia cùng hàng nghìn nhà tuyển dụng và kiếm được những gì bạn xứng đáng
          </p>
          <div class="cta-button">
            <a href="about" class="btn btn-primary btn-md text-uppercase">Bắt đầu ngay</a>
          </div>
          <!-- end .cta-button -->
        </div>
        <!-- end .container -->
      </div>
      <!-- end .inner -->
    </div>
		<Newestsection></Newestsection>
  </div>
</template>

<script>
import Hero from "./components/Herosection";
import Worksection from "./components/Worksection";
import Cateworksection from "./components/Cateworksection";
import Newestsection from "./components/Newestsection";

export default {
  components: {
    Hero,
    Worksection,
		Cateworksection,
		Newestsection,
  },
};
</script>

<style scoped>
h2{
	color: white;
}
p.light{
	color: #ccc;
}
.cta-section.parallax {
  background-image: url("./../../public/img/background02.jpg");
  background-attachment: fixed;
  position: relative;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.section.parallax > .inner {
  background: rgba(0, 0, 0, 0.7);
  padding: 100px 0;
}
.btn{
	border-radius: 3em;
	padding: 0.25em 1em;
	border: 1px solid lavender;
	border-bottom: 3px solid lavender;
}
</style>