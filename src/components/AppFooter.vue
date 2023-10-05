<script>
import { state } from '../state';
import FooterBottom from './FooterBottom.vue';
import FooterTop from './FooterTop.vue';

export default {
    name: 'AppFooter',
    components: { FooterTop, FooterBottom },
    data() {
        return {
            state,
            /* footerMenuItems: ['about us', 'portfolio', 'pricing', 'career', 'contact'], */
        }
    }
}
</script>

<template>
    <footer>
        <FooterTop></FooterTop>
        <FooterBottom :footerMenuItems="state.footerMenuItems"></FooterBottom>
    </footer>
</template>

<style lang="scss" scoped></style>