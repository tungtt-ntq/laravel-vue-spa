<template>
  <div class="row">
    <div class="col-lg-12 m-auto">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  components: {

  },

  middleware: 'guest',

  metaInfo () {
    return { title: this.$t('register') }
  },

  data: () => ({

  }),

  methods: {

  }
}
</script>
