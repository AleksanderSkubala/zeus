<template>
  <div class="joining space-around aos">
    <h3 class="text-center">Jak do nas dołączyć?</h3>
    <p>Nie gryziemy! Jeżeli jesteś w wieku 13-16 lat, chcesz zobaczyć czy warto być harcerzem i dlaczego odpowiedź brzmi TAK, napisz do nas na Facebooku lub Instagramie. 😊</p>
    <div class="socials">
      <a href="https://www.facebook.com/158pdsh" target="_blank"><Facebook /></a>
      <a href="https://www.instagram.com/158_pdsh_zeus/" target="_blank"><Instagram /></a>
    </div>
  </div>
</template>

<script>
import Facebook from '~/assets/images/facebook.svg';
import Instagram from '~/assets/images/instagram.svg';

import { gsap, CSSPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
  name: "Joining",
  components: {
    Facebook,
    Instagram,
  },
  mounted() {
    const joining = document.querySelector('.joining');

    gsap.fromTo(joining.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.6, duration: 1, delay: 0.3, ease: 'easeInOut', scrollTrigger: {
      trigger: '.wrapperLeft',
      start: 'top top',
    }});

  },
}
</script>

<style lang="scss">
.joining {
  p {
    text-align: center;
    padding: 20px;
  }

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin-right: 20px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    svg {
      height: 7vh;
      width: auto;
    }
  }
}
</style>