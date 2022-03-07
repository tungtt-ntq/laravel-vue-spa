<template>
  <div class="row">
    <router-view />
  </div>
</template>

<script>

export default {

  metaInfo () {
    return { title: this.$t('dashboard') }
  },

  data: () => ({

  }),

  methods: {

  }
}
</script>
