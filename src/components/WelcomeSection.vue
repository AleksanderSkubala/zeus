<template>
  <div class="wrapper">
    <h2 class="text-center">158 Poznańska Drużyna Starszoharcerska "Zeus"</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--title-color);

  > h2 {
    color: var(--bg-content-color);
    margin: 0;
    z-index: 1;
  }
}

.welcomeImage {
  position: absolute;
  z-index: -1;
  object-position: center center;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>