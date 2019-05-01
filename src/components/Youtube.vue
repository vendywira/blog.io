<template>
  <div>
    <youtube :video-id="videoId" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
  </div>
</template>

<script src="./js/youtube.js">
</script>
