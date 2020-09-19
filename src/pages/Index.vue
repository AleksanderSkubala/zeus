<template>
  <Layout>
    <WelcomeSection/>
    <AboutUs/>
    <Joining/>
    <Socials/>
  </Layout>
</template>

<script>
import WelcomeSection from '~/components/WelcomeSection.vue';
import AboutUs from '~/components/AboutUs.vue';
import Joining from '~/components/Joining.vue';
import Socials from '~/components/Socials.vue';

import { gsap, CSSPlugin, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(CSSPlugin, ScrollTrigger);

export default {
  components: {
    WelcomeSection,
    AboutUs,
    Joining,
    Socials
  },
  mounted() {
    const aos = document.querySelectorAll('.aos');

    aos.forEach(section => {
      gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
      trigger: section,
      start: 'top 20%',
    }});
    });
  },
}
</script>
