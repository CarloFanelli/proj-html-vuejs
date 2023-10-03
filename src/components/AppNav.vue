<script>
import { state } from '../state';

export default {
    name: 'AppNav',
    data() {
        return {
            state
        }
    },
    props: {
        menuItems: Array,
    }

}
</script>

<template>
    <nav class="navbar navbar-expand-sm bg-transparent">
        <div class="container justify-content-between my-3">
            <img class="navbar-brand" src="../assets/img/logo.png" alt="">
            <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="collapsibleNavId">
                <ul class="navbar-nav ms-auto me-5 mt-2 mt-lg-0 justify-content-between w-75">
                    <!-- <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page">Home <span
                                class="visually-hidden">(current)</span></a>
                    </li> -->

                    <li v-for="menuItem in state.menuItems" class="nav-item">
                        <a class="text-capitalize nav-link" href="#">{{ menuItem }}</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/elements' as *;

.navbar {
    z-index: 2;
}


li {
    a {
        color: $light;
    }
}

li:last-of-type {

    @include btn-filled;

}
</style>