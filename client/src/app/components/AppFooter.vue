<template lang="pug">
  footer
    div(class="wrapper" v-if="showNav")
      p Except where otherwise noted, content on this site is licensed under a <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons Attribution 4.0 International License</a>.
</template>

<script>
import UiLink from '../ui/UiLink.vue'

export default {
  name: 'AppFooter',
  components: {
    UiLink
  },
  data: function () {
    return {
      showNav: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/definitions';
footer {
  background: $toolbar-background-color;
  color: $toolbar-color;
  padding: 20px;
  text-align: center;
  p {
    color: $white;
    margin-bottom: 0;
  }
  a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
    &:hover {
      color: rgba(255, 255, 255, 1);
      transition: 350ms ease-out;
    }
  }
}
</style>
