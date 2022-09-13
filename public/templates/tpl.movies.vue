<template>
  <div class="container-fluid">
    <!-- KÜRZLICH GESEHEN -->
    <div class="row mt-2">
      <div class="col-12">
        <h5>Kürzlich gesehen</h5>
      </div>

      <div class="col-12">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
          data-interval="10000"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <list-view base="/movies" col="2" v-bind:items="viewed"></list-view>
            </div>
            <div class="carousel-item">
              <list-view base="/movies" col="2" v-bind:items="listed"></list-view>
            </div>
            <div class="carousel-item">
              <list-view base="/movies" col="2" v-bind:items="listed"></list-view>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <!-- KÜRZLICH GESEHEN -->

    <hr>

    <!-- VORWENBIGEN TAGEN -->
    <div class="row mt-2">
      <div class="col-12">
        <h5>Vor wenigen Tagen erschienen</h5>
      </div>
      <div class="col-12">
        <!-- ITEM -->
        <list-view base="/movies" v-bind:items="released"></list-view>
        <!-- ITEM -->
      </div>
    </div>
    <!-- VORWENBIGEN TAGEN -->

    <hr>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      viewed: [
        {
          _id: "e49c3151-49d3-4fb1-9de0-fb31f8eb1b17",
          title: "葉問外傳：張天志",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/puPdv7xyTM8Zidli3TPjWbAPcWJ.jpg"
        },
        {
          _id: "d49b3393-9725-4319-8549-8f2ec95a2989",
          title: "Spider-Man: A New Universe",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iSV8qnNhnOgQ1TyQbQfqEDGroFW.jpg"
        },
        {
          _id: "d49b3393-9725-4319-8549-8f2ec95b2989",
          title: "Phantastische Tierwesen: Grindelwalds Verbrechen",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wNGupBYMeUCmXCT3nUUQzIVLmuf.jpg"
        },
        {
          _id: "b6e7ce5d-d419-4747-8246-bbd8943a6590",
          title: "Aquaman",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg"
        },
        {
          _id: "b6e7ce5d-d419-4747-8246-ade8943a6590",
          title: "Avengers: Infinity War",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9mvgmX2b05SERQWC1IAGIdkfd8n.jpg"
        },
        {
          _id: "a6e7ce5d-d419-4747-8246-ade8943a6590",
          title: "Mary Poppins‘ Rückkehr",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uIJLCtJ3iMmSh0F68NZN3QMyxUk.jpg"
        }
      ],
      listed: [
        {
          title: "Creed 2",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg"
        },
        {
          title: "Ralph reichts 2 - Chaos im Netz",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/1nSlMZ2dsVWT4VZt5vEqpZEXLDQ.jpg"
        },
        {
          title: "Mortal Engines: Krieg der Städte",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/xDR8r28fKel2C8hI8iJ2tkngvwt.jpg"
        },
        {
          title: "Bohemian Rhapsody",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg"
        },
        {
          title: "Fifty Shades of Grey - Befreite Lust",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/84eFxQOU3x7Hoq8aSaFVL8zMyyT.jpg"
        },
        {
          title: "Black Panther",
          poster:
            "https://image.tmdb.org/t/p/w600_and_h900_bestv2/daKUTgrMnsMLFrRv3a7s6yUyXf1.jpg"
        }
      ]
    };
  }
};
</script>