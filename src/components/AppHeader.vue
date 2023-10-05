<script>
import AppJumbo from './AppJumbo.vue';
import AppNav from './AppNav.vue';

export default {
    name: 'AppHeader',
    components: { AppNav, AppJumbo, }
}
</script>

<template>
    <header class="appHeader">

        <AppNav></AppNav>
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