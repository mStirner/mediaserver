<template>
  <!-- QUCIK ACCESS -->
  <div class="container-fluid">
    <!-- KÜRZLICH GESEHEN -->
    <div class="row mt-2">
      <div class="col-12">
        <h5>Beliebt</h5>
      </div>

      <div class="col-12">
        <list-view base="/shows" col="2" v-bind:items="loved"></list-view>
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
          title: "The Big Gang Theory",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
        },
        {
          _id: "asdfasdf",
          title: "Brickleberry",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4Uy151t8UGMoAXaFKx8ZAmvFn6q.jpg"
        },
        {
          _id: "asdfasdf",
          title: "American Dad",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yUEvXpR6LoqNHUWK2N0VnFzIynQ.jpg"
        },
        {
          _id: "asdfew35r",
          title: "Two and a Half Men",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/3OO5gilCRlTQPbZDozYEHMDZtEg.jpg"
        },
        {
          _id: "adlsfjk",
          title: "Family Guy",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/n3UBzIx28m3FpC2EDwVJIjvPxnl.jpg"
        }
      ]
    };
  }
};
</script>