<template>
  <footer class="section footer transparent">
    <div class="custom-padding">
      <div class="top flex space-between items-center">
        <img
          src="./../../public/img/header/logo.png"
          alt="footer-logo"
          class="img-responsive"
        />
        <ul class="list-unstyled footer-menu flex">
          <li><a href="/">Trang chủ</a></li>
          <li><a href="/about">Công ty</a></li>
          <li><a href="/job">Việc làm</a></li>
        </ul>
        <!-- end .footer-menu -->
      </div>
      <!-- end .top -->
      <div class="row middle">
        <div class="col-md-4 widget">
          <h5 class="widget-title">Địa chỉ</h5>
          <p>Phòng 1706 - Tòa nhà CT2 Nàng Hương, 583 Nguyễn Trãi, Hà Nội</p>
        </div>
        <div class="col-md-4 widget">
          <h5 class="widget-title">Liên hệ</h5>
          <p>Điện thoại: +84-904885185 +84-24-85872007</p>
          <p>Hotline (web): +84-936226385</p>
          <p>Email: contact@vinades.vn</p>
          <p>Website: http://vinades.vn</p>
        </div>
        <div class="col-md-4 widget">
          <h5 class="widget-title">Kết nối</h5>
          <p class="communities" >
            <b-icon class="p-2" icon="facebook"></b-icon>
            <b-icon class="p-2" icon="twitter"></b-icon>
            <b-icon class="p-2" icon="youtube"></b-icon>
          </p>
        </div>
      </div>
      <!-- end .footer-widgets -->
      <div class="bottom flex space-between items-center">
        <p class="copyright-text small">
          © 2021 <a href="#0">Locifa</a>. All Rights Reserved. Designed by
          <a href="#0">FFC Team</a>.
        </p>
        <!-- end .copyright-menu -->
      </div>
      <!-- end .bottom -->
    </div>
    <!-- end .container -->
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-image: url("./../../public/img/footer/background03.jpg");
  position: relative;
  padding: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.footer .top {
  position: relative;
}
.footer .top a {
  color: #a0a7ba;
  font-weight: bold;
}
.space-between {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.items-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.widget {
  color: #a0a7ba;
}
.widget .widget-title {
  text-transform: uppercase;
}
.flex {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-flow: row wrap;
}
.communities{
	font-size: 3rem;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
  margin-bottom: 0;
}
.footer .top ul > li {
  font-size: 12px;
  margin-right: 25px;
  text-transform: uppercase;
}
.copyright-text {
  color: #627199;
}
.footer .bottom a{
  color: #a0a7ba;
}
@media screen and (max-width: 768px) {
	.footer-menu{
		margin-top: 1rem;
	}
}
.footer .top, .footer .middle{
  padding: 40px 0;
	border-bottom: 1px solid rgb(99, 99, 99);
	margin-bottom: 1rem;
}
</style>