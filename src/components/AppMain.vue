<script>
import AnimationSection from './AnimationSection.vue';
import FactsSection from './FactsSection.vue';
import WorksSection from './WorksSection.vue'

export default {
    name: 'AppMain',
    components: { AnimationSection, FactsSection, WorksSection }
}
</script>

<template>
    <AnimationSection></AnimationSection>
    <FactsSection></FactsSection>
    <WorksSection></WorksSection>
</template>

<style lang="scss" scoped></style>