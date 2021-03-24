<template>
  <b-navbar toggleable="sm" variant="faded" type="light" class="custom-padding">
    <b-navbar-brand href="#">
      <a href="/"
        ><img src="./../assets/img/header/locifa.png" alt="Logo" />
      </a>
    </b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse" id="btn-collape">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">
          <b-icon-house-fill></b-icon-house-fill> Trang chủ</b-nav-item
        >
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown right>
          <template #button-content>
            <b-icon-briefcase-fill></b-icon-briefcase-fill>
            Việc làm
          </template>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#"
          ><b-icon-person-badge-fill></b-icon-person-badge-fill> Việc làm quản
          lý</b-nav-item
        >
        <b-nav-item href="#"
          ><b-icon-building></b-icon-building> Công ty</b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {};
</script>
<style scroped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
header a {
  font-weight: bold;
  color: #fff !important;
}
header .navbar-nav a.nav-link {
  text-decoration: none;
  font-size: 17px;
}
.nav-item:hover {
    box-shadow: 0px 6px 0 0px #fff;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all 0.5s ease;
}
.nav-item:focus, .nav-link:focus{
  outline: none;
}
#btn-collape {
  color: #fff;
  border: 1px solid #fff;
}
.dropdown-menu{
  margin-top: 0px;
  background-color: #FFF;
  border-color: #FFF;
  border-radius: 0px;
}
.dropdown-menu li a.dropdown-item{
  color: #0066bf !important;
}
@media (max-width: 576px) {
  .nav-item{
    padding: 10px;
  }
}
</style>