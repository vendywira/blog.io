<template>
  <div>
    <youtube :video-id="getId()" ref="youtube" @playing="playing"></youtube>
    <button @click="playVideo">play</button>
  </div>
</template>

<script src="./js/youtube.js">
</script>
