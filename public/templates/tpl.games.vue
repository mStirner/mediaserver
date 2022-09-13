<template>
  <!-- QUCIK ACCESS -->
  <div class="container-fluid">
    <!-- KÜRZLICH GESEHEN -->
    <div class="row">
      <div class="col-12">
        <list-view base="/games" col="2" v-bind:items="loved"></list-view>
      </div>
    </div>
    <!-- KÜRZLICH GESEHEN -->
  </div>
  <!-- QUCIK ACCESS -->
</template>

<script>
module.exports = {
  data: function() {
    return {
      loved: [
        {
          _id: "e49c3151-49d3-4fb1-9de0-fb31f8eb1b17",
          title: "Battlefield V",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/vkdea0wwyn0zx8fjs1kt.jpg"
        },
        {
          _id: "asdfasdf",
          title: "Battlefield 1",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/ts6ceuy9nu1sgwpeabmo.jpg"
        },
        {
          _id: "asdfasdf",
          title: "Battlefield 4",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/ejcbrblr9aj12b8ihgfj.jpg"
        },
        {
          _id: "asdfew35r",
          title: "Battlefield 3",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/z84romyc73p8xoqgwt7c.jpg"
        },
        {
          _id: "adlsfjk",
          title: "Battlefield Hardline",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/u0avsydlgq1nsf7ordkp.jpg"
        },
        {
          _id: "adlasdfsfjk",
          title: "Battlefield 1942",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/oyzjxd6h3jwabgakeffx.jpg"
        },
        {
          _id: "ad4345lsfjk",
          title: "Battlefield 2142",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/ox05tdvjookghbqkgbsy.jpg"
        },
        {
          _id: "ad4345lsfjk",
          title: "Age of Empires: 2",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/yoqdjsssreh8sjs9nvtv.jpg"
        },
        {
          _id: "ad4345lsfjk",
          title: "Age of Empires: 3",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/fdvwbxvitxqaeyp2s6z6.jpg"
        },
        {
          _id: "adasetw3z4345lsfjk",
          title: "Age of Empires",
          poster:
            "https://images.igdb.com/igdb/image/upload/t_cover_big/lclbmfihd2crlasugy6b.jpg"
        }
      ]
    };
  }
};
</script>