<template>
  <div>
    <div v-for="video in videos" :key="video.sequence">
      <md-card>
        <md-card-media-actions>
          <md-card-media>
            <youtube
              fitParent="true"
              resize="true"
              :video-id="getId(video.url)"
              ref="youtube"
              @playing="playing"
            ></youtube>
          </md-card-media>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>bookmark</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-media-actions>
        <md-card-header>
          <div class="md-subhead">{{video.title}}</div>
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script src="./js/video-carousel.js">
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>
