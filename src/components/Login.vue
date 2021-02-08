<template>
  <div>
    <div id="login">
      <a-tabs default-active-key="2">
        <a-tab-pane key="1" tab="Password Login">
          hi
        </a-tab-pane>
        <a-tab-pane key="2" tab="Azure Login" force-render>
          hi again
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
 
  data() {
    return {
    
    };
  },
  methods: {
  },
};
</script>

<style scoped>

</style>
