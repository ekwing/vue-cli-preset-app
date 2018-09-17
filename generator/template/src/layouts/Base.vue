<template>
  <section class="base">
    <router-view name="header"/>
    <router-view class="base-body"/>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.base {
  &-body {
    padding-top: px2rem(80);
    height: 100%;
  }
}
</style>
