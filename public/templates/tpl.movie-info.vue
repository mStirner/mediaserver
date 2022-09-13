<template>
  <!-- INFORMATION -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-3">
        <img
          width="100%"
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg"
        >

        <button class="btn btn-outline-primary btn-block mt-2" v-on:click="play()">Wiedergabe</button>
      </div>
      <div class="col-5">
        <h4>Bohemian Rhapsody</h4>

        <hr>

        <span>
          "Bohemian Rhapsody" erzählt die Geschichte wie Freddie Mercury und seine Bandmitglieder Brian May,
          Roger Taylor und John Deacon Queen gründeten – eine der legendärsten Rockgruppen aller Zeiten. Durch
          so grundverschiedene Songs wie „Killer Queen”, „Bohemian Rhapsody”, „We Are The Champions” und „We
          Will Rock You” sowie unzählige weitere Songs gelang der Band ein beispielloser Erfolg, der Freddie
          zu einem der beliebtesten Entertainer weltweit machte. Doch hinter der Fassade von Erfolg kämpft
          Freddie mit seiner inneren Zerrissenheit. Der aus Sansibar stammende Parse sucht unablässig nach
          seinem Platz in der Welt, während er gleichzeitig versucht, sich in einer Gesellschaft, die in
          Stereotypen und Erwartungen gefangen ist, mit einer Sexualität zu arrangieren, die er selbst kaum
          definieren kann. Freddie wagt es, sich zu widersetzen, aber zahlt auch den Preis dafür...
        </span>

        <!-- PLAYER -->
        <video id="video" controls>
          <source src="http://127.0.0.1/file" type="video/mp4">
        </video>

        <!-- PLAYER -->
      </div>
      <div class="col-4">
        <div>
          <h5>Bewertungen</h5>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star text-warning"></i>
          <i class="fas fa-star-half text-warning"></i>
        </div>

        <hr>

        <div class="row">
          <div class="col-6">
            <h5>Hauptdarsteller</h5>

            <p>
              <b>Rami Malek</b>
              <br>Freddie Mercury
            </p>

            <p>
              <b>Gwilym Lee</b>
              <br>Brian May
            </p>

            <p>
              <b>Ben Hardy</b>
              <br>Roger Taylor
            </p>

            <p>
              <b>Joseph Mazzello</b>
              <br>John Deacon
            </p>

            <p>
              <b>Lucy Boynton</b>
              <br>Mary Austin
            </p>
          </div>
          <div class="col-6">
            <h5>Crew</h5>

            <p>
              <b>Anthony McCarten</b>
              <br>Director
            </p>

            <p>
              <b>Dexter Fletcher</b>
              <br>Director
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- INFORMATION -->
</template>

<script>
module.exports = {
  methods: {
    play: function() {
      var video = document.getElementById("video");

      console.log("start video");
      video.style.display = "block";

      video.play();

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style>
video#video {
  display: none;
  width: calc(100% - 15px);
  position: absolute;
  top: 60px;
  left: 0;
  margin: 0 15px;
  z-index: 99999;
}
</style>