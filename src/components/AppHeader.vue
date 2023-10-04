<script>
import AppJumbo from './AppJumbo.vue';
import AppNav from './AppNav.vue';

export default {
    name: 'AppHeader',
    components: { AppNav, AppJumbo, }
}
</script>

<template>
    <div class="appHeader">

        <AppNav></AppNav>
        <AppJumbo></AppJumbo>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.appHeader {
    background-image: url('../assets/img/banner-bg.png');
    background-repeat: no-repeat;
}
</style>