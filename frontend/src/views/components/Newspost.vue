<template>
  <div class="post">
    <div class="img-post">
      <img src="./../../../public/img/post/news-grid01.jpg" alt="" />
    </div>
    <div class="body-post">
      <p class="post-detail">
        <span>Hanoi</span>
        <span>07.01.2021</span>
        <span>07 read</span>
      </p>
      <a href="" class="post-link"
        ><h4>
          Mẹo viết sơ yếu lý lịch trực tuyến ấn tượng cho người mới bắt đầu
        </h4></a
      >
      <p class="post-shortdes">
        Thị trường việc làm đang bão hòa hơn bao giờ hết. Làm thế nào bạn có thể
        giúp hồ sơ xin việc của mình được chú ý?
      </p>

      <div class="text-center">
        <button class="btn btn-primary btn-sm">Đọc thêm</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped>
.post {
  border: 0.5px solid #eee;
  border-radius: 0.15em;
}
.img-post img {
  width: 100%;
}
.body-post {
  padding: 1em;
}
.post-detail {
  text-transform: uppercase;
  font-weight: 700;
  color: #627199;
  font-size: 8pt;
}
.post-detail span + span:before {
  padding: 0.5em;
  color: black;
  content: "\2022";
}
.post-detail span:last-child {
  color: #1650e3;
}
.post-link {
  color: black;
  font-weight: 700;
  font-size: 13pt;
}
.post-link:hover{
  text-decoration: none;
}
.post-shortdes {
  color: #a0a7ba;
  font-size: 10pt;
}
.btn{
	border-radius: 1em;
	padding: 0.25em 1em;
	border: 1px solid lavender;
	border-bottom: 3px solid lavender;
}
</style>