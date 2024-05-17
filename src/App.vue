<template>
  <div id="app">
    <HeroSection />
    <Subpages />
    <OurMission/>
    <WhyExplore/>
    <TextTwosides/>
    <ContactUs/>
    <FooterBlock/>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue';
import Subpages from './components/SubPages.vue';
import OurMission from './components/OurMission.vue';
import WhyExplore from './components/WhyExplore';
import TextTwosides from './components/TextTwosides';
import ContactUs from './components/ContactUs';
import FooterBlock from './components/FooterBlock';

export default {
  name: 'App',
  components: {
    HeroSection,
    Subpages,
    OurMission,
    WhyExplore,
    TextTwosides,
    ContactUs,
    FooterBlock
  },
};
</script>

<style>
#app {
  font-family: 'Clash Display', sans-serif;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
