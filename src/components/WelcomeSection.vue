<template>
  <div class="wrapper">
    <h2 class="text-center welcomeHeading">158 Poznańska Drużyna <br/> Starszoharcerska "Zeus"</h2>
    <g-image class="welcomeImage" src="~/assets/images/tie-lights.jpg"/>
  </div>
</template>

<script>
export default {
  name: "WelcomeSection",
};
</script>

<style lang="scss">
.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--title-color);
    position: absolute;
    top: 0;
    left: 0;
    opacity: .8;
  }
}

.welcomeHeading {
  color: var(--bg-content-color);
  margin: 0;
  z-index: 1;
  padding: 15px;

  @media screen and (max-width: 320px) {
    font-size: 1.2em;
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