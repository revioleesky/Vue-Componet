<template>
  <div id="app">
    <name-avatar scale='1' name="李亨达"></name-avatar>
  </div>
</template>
<script>
import nameAvatar from "./name-avatar/index.vue";
export default {
  name: "app",
  components: {
    nameAvatar
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
</style>
