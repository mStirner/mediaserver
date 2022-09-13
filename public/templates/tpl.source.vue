<template>
  <!-- QUCIK ACCESS -->
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="loading" v-if="loading">Loading...</div>

        <div v-if="error" class="error">{{ error }}</div>

        <div v-if="post" class="content">
          <h2>{{post}}</h2>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col d-block m-2 text-center align-middle p-0 source">
        <video autoplay>
          <source src="/file" type="video/mp4">
        </video>
      </div>

      <div class="col d-block m-2 text-center align-middle p-0 source">
        <video autoplay>
          <source src="/file" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
  <!-- QUCIK ACCESS -->
</template>

<script>
module.exports = {
  methods: {
    fullscreen: function(source) {
      console.log("Toogle fullscreen/Post live render");

      let video = document.getElementById(source);

      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    },
    fetchData: function() {
      this.error = this.post = null;
      this.loading = true;

      // replace `getPost` with your data fetching util / API wrapper

      socket.on("data", data => {
        console.log("Data received");
        this.loading = false;
        if (false) {
          this.error = err.toString();
        } else {
          this.post = data;
        }
      });
    }
  },
  data: function() {
    return {
      inputs: 2,
      loading: false,
      post: null,
      error: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  }
};
</script>

<!--
<style>
video {
  height: 100%;
  width: 100%;
  display: block;
  z-index: 9999999;
}
</style>-->