<template>
  <div class="container">
    <div class="wrapperLeft">
      <div class="content">
        <h3>Trochę o nas...</h3>
        <p>Nasza drużyna to 158 Poznańska Drużyna Starszoharcerska "Zeus". Działamy na osiedlu Przyjaźni. uwielbiamy dzielić się naszymi zainteresowaniami i stawiać sobie coraz to nowe wyzwania. Jesteśmy dowodem na to, że drużyna to miejsce do rozwijania się nie tylko w obszarach związanych z harcerstwem. Nie wierzysz? Przyjdź i sam się przekonaj!</p>
      </div>
    </div>
    <div class="wrapperRight">
      <Graphic/>
    </div>
  </div>
</template>

<script>
import Graphic from '~/assets/images/camping.svg';

import { gsap, CSSPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
  name: "AboutUs",
  components: {
    Graphic,
  },
  mounted() {
    const container = document.querySelector('.container');

    gsap.fromTo(container.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.6, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: container,
      start: 'top 40%',
    }});

  },
};
</script>

<style lang="scss" scoped>
  .container {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  .wrapperLeft, .wrapperRight {
    width: 100%;
  }

  .wrapperLeft {
    .content {
      background-color: var(--bg-content-color);
      padding: var(--space);
      border-radius: var(--radius);
      box-shadow: 1px 1px 5px 0 rgba(0,0,0,.02), 1px 1px 15px 0 rgba(0,0,0,.03);
    }

    h3 {
      margin-top: 0;
    }

    p {
      text-align: justify;
      margin-bottom: 0;
    }
  }

  .wrapperRight {
    margin-top: 40px;
    justify-content: center;
    align-items: center;
    min-height: 50%;

    svg {
      width: auto;
      height: 75%;
    }
  }

  @media (min-width: 425px) {
    .container {
      height: 95vh;
      min-height: 95vh;
    }

    .wrapperRight {
      display: flex;
    }
  }

   @media (min-width: 768px) {
    .container {
      height: 80vh;
      min-height: 80vh;
    }
  }
</style>