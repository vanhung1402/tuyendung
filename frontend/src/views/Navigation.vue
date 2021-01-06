<template>
    <b-navbar toggleable="sm" variant="faded" type="light" class="custom-padding">
      <b-navbar-brand href="#"
        ><img src="./../assets/img/header/logo.png" alt="Logo"
      /></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <b-icon-house-fill></b-icon-house-fill> Home</b-nav-item
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
            ><b-icon-bookmark-star-fill></b-icon-bookmark-star-fill> Khóa học</b-nav-item
          >
          <b-nav-item href="#"
            ><b-icon-building></b-icon-building> Công ty</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    
}
</script>
<style scroped>
body {
  font-family: Arial, Helvetica, sans-serif;
}
header .navbar-nav a.nav-link {
  font-weight: bold;
  color: #627199 !important;
  text-decoration: none;
  font-size: 17px;
}
</style>