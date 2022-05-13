<script>
import AdminPanel from "../../layouts/admin-panel";



/**
 * Dashboard component
 */
export default {
  components: {
    AdminPanel,
   
  },
  data() {
    return {
      title: "Dashboard",
      items: [
        {
          text: "InterView"
        },
        {
          text: "Dashboard",
          active: true
        }
      ]
    };
  }
};
</script>

<template>
  <AdminPanel>
    <div class="row">
        Main Content Here
    </div>
  </AdminPanel>
</template> 