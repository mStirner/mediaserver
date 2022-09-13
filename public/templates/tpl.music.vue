<template>
  <!-- QUCIK ACCESS -->
  <div class="container-fluid">
    <div class="row">
      <div class="col-2">player</div>
      <div class="col-10">
        <!-- CONTROL -->
        <div class="row mb-4">
          <div class="col-2">
            <i class="fas fa-step-backward"></i>
            <i class="far fa-pause-circle" style="font-size: 2em"></i>
            <i class="fas fa-step-forward"></i>
          </div>
          <div class="col-10">
            <div class="progress" style="height: 4px;">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <!-- CONTROL -->

        <!-- SEARCH -->
        <div class="row mb-4">
          <div class="col-12">
            <input type="text" placeholder="Suche..." class="form-control">
          </div>
        </div>
        <!-- SEARCH -->

        <!-- INVENTAR -->
        <div class="row mb-4">
          <div class="col-12">
            <table class="table text-light">
              <thead>
                <tr>
                  <th scope="col">Play</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Title</th>
                  <th scope="col">Album</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Dauer</th>
                  <th scope="col">Erschienen</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="track in tracks">
                  <td>
                    <i class="far fa-play-circle fa-2"></i>
                  </td>
                  <td>{{track.artist}}</td>
                  <td>{{track.title}}</td>
                  <td>{{track.album}}</td>
                  <td>{{track.genre}}</td>
                  <td>{{track.duration}}</td>
                  <td>{{track.released}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- INVENTAR -->
      </div>
    </div>
  </div>
  <!-- QUCIK ACCESS -->
</template>

<script>
module.exports = {
  data: function() {
    return {
      tracks: [
        {
          artist: "Headhunterz",
          title: "Sound intense City",
          album: "Next Gen!",
          duration: "07:06",
          genre: "Hardstyle",
          released: "2012"
        },
        {
          artist: "Headhunterz",
          title: "Zombie",
          album: "Next Gen!",
          duration: "03:38",
          genre: "Hardstyle",
          released: "2012"
        }
      ]
    };
  }
};
</script>