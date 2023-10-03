<script>
import AnimationSection from './AnimationSection.vue';
import FactsSection from './FactsSection.vue';

export default {
    name: 'AppMain',
    components: { AnimationSection, FactsSection }
}
</script>

<template>
    <AnimationSection></AnimationSection>
    <FactsSection></FactsSection>
</template>

<style lang="scss" scoped></style>