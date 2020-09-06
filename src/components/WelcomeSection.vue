<template>
  <div class="wrapper">
    <g-image class="welcomeImage" src="~/assets/images/scouts.jpg"/>
    <h2 class="text-center">158 Poznańska Drużyna Starszoharcerka "Zeus"</h2>
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

  > h2 {
    margin: 0;
    z-index: 1;
  }

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--bg-color);
    position: absolute;
    top: 0;
    left: 0;
    opacity: .8;
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