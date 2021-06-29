<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="default" effect="dark" expand>
        <div class="col-6 collapse-brand">
          <router-link slot="brand" class="header__link header__link-primary mr-lg-5" to="/">
            <span>Cesi Eat</span>
          </router-link>
          <router-link slot="brand" class="header__link mr-lg-5" to="/components">
            <span>Components</span>
          </router-link>
          <router-link slot="brand" class="header__link mr-lg-5" to="/restaurants">
            <span>Restaurants</span>
          </router-link>
        </div>
        <div class="col-6 collapse-brand header__right">
          <router-link slot="brand" class="navbar-brand mr-lg-2" to="/login">
             <base-button type="neutral">Login</base-button>
          </router-link>
          <router-link slot="brand" class="navbar-brand" to="/register">
             <base-button type="primary">Register</base-button>
          </router-link>
        </div>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav
  },
};
</script>
<style>
  header{ 
    height: 77px;
  }
  .header__link{
    text-transform: none;
    color: #f6f9fc 
  }
  .header__link:hover{
    color: #f6f9fc 
  }
  .header__link-primary{
    font-weight: bold;
    font-size: 1.5em;
  }
  .header__right{
    display: flex;
    justify-content: flex-end;
  }
</style>
