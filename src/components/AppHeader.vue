<script>
import AppJumbo from './AppJumbo.vue';
import AppNav from './AppNav.vue';
import { state } from '../state';


export default {
    name: 'AppHeader',
    components: { AppNav, AppJumbo, },
    data() {
        return {
            state,

            /* menuItems: ['home', 'about us', 'portfolio', 'our process', 'pricing', 'blog', 'contact', 'get a quote'], */
        }
    }
}
</script>

<template>
    <header class="appHeader">

        <AppNav :menuItems="state.menuItems"></AppNav>
        <AppJumbo></AppJumbo>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.appHeader {
    background-image: url('../assets/img/banner-bg.png');
    background-repeat: no-repeat;
}
</style>