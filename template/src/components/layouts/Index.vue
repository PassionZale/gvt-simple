<template>
    <div class="layout">
        <gvt-sidebar></gvt-sidebar>
        <Layout :style="{marginLeft: '200px'}">
            <gvt-header></gvt-header>
            <gvt-content></gvt-content>
        </Layout>
    </div>
</template>

<script>
import gvtHeader from "./TheHeader.vue";
import gvtSidebar from "./TheSidebar.vue";
import gvtContent from "./TheContent.vue";
export default {
  components: { gvtHeader, gvtSidebar, gvtContent }
};
</script>

