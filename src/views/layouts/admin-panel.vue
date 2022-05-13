<script>
import TopBar from "@/components/page-header";
import SideBar from "@/components/side-bar";
import AppFooter from "@/components/footer";


export default {
  components: {  TopBar, SideBar  ,AppFooter },
  
  
};
</script>

<template>
 
    <div id="layout-wrapper">
      <TopBar />
      <div class="container-fluid">
        <div class="row flex-xl-nowrap">
         <SideBar />

          <main class="col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
              <slot />
          </main>
        </div>
      </div>
      <AppFooter />
    </div>
</template>