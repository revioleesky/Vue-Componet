<template>
  <div id="app" class="center">
    <div class="mr" >
      <name-avatar scale='2' name="李亨达"></name-avatar>
    </div>
    <div>
      <name-avatar scale='2' faceUrl="https://c-ssl.duitang.com/uploads/item/201809/21/20180921212643_omxtr.jpg"></name-avatar>
    </div>
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
.center {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .mr{
    margin: 59px;
  }
}
</style>
