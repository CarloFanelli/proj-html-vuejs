<script>
import FooterBottom from './FooterBottom.vue';
import FooterTop from './FooterTop.vue';

export default {
    name: 'AppFooter',
    components: { FooterTop, FooterBottom }
}
</script>

<template>
    <footer>
        <FooterTop></FooterTop>
        <FooterBottom></FooterBottom>
    </footer>
</template>

<style lang="scss" scoped></style>