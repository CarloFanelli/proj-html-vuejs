<script>
import AppNav from './AppNav.vue';

export default {
    name: 'AppHeader',
    components: { AppNav }
}
</script>

<template>
    <div class="appHeader">
        <AppNav></AppNav>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.appHeader {
    height: 100vh;
    background-image: url('../assets/img/banner-bg.png');
}
</style>