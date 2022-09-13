<template>
  <div class="row">
    <router-link
      tag="div"
      :to="base + '/' + item._id"
      v-bind:class="'col-' + col || '2'"
      class="list-view"
      v-for="item in items"
      :key="item._id"
    >
      <img width="100%" v-bind:src="item.poster">
      <!-- <h6>{{item.title}}</h6>-->
    </router-link>
    <!-- ITEM -->
  </div>
</template>

<script>
module.exports = {
  props: {
    col: {
      default: 2,
      type: Number
    },
    base: {
      default: "/",
      type: String
    },
    items: {
      default: [],
      type: Array
    }
  },
  data: function() {
    return {};
  }
};
</script>