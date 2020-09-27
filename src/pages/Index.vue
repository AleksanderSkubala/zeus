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
}
</script>
