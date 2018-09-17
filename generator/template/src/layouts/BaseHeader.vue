<template>
  <EkHeader :title="header.title" :styles="header"/>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['header'])
  }
}
</script>

