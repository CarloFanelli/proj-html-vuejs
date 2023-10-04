<script>
import AnimationSection from './AnimationSection.vue';
import FactsSection from './FactsSection.vue';
import WorksSection from './WorksSection.vue'
import ProcessSection from './ProcessSection.vue'

export default {
    name: 'AppMain',
    components: { AnimationSection, FactsSection, WorksSection, ProcessSection }
}
</script>

<template>
    <AnimationSection></AnimationSection>
    <FactsSection></FactsSection>
    <WorksSection></WorksSection>
    <ProcessSection></ProcessSection>
</template>

<style lang="scss" scoped></style>