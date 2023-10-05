<script>
import AnimationSection from './AnimationSection.vue';
import FactsSection from './FactsSection.vue';
import WorksSection from './WorksSection.vue';
import ProcessSection from './ProcessSection.vue';
import TeamMembers from './TeamMembers.vue';
import ClientsSection from './ClientsSection.vue';

export default {
    name: 'AppMain',
    components: { AnimationSection, FactsSection, WorksSection, ProcessSection, TeamMembers, ClientsSection }
}
</script>

<template>
    <main>
        <img class="shape w-100 m-0 p-0 img-fluid" src="../assets/img/bottom-shape.png" alt="">

        <AnimationSection></AnimationSection>
        <FactsSection></FactsSection>
        <WorksSection></WorksSection>
        <ProcessSection></ProcessSection>
        <TeamMembers></TeamMembers>
        <ClientsSection></ClientsSection>
    </main>
</template>

<style lang="scss" scoped></style>