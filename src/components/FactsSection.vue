<script>
export default {
    name: 'FactsSection',
}
</script>

<template>
    <section class="anidio_quick_facts position-relative">
        <img height="100%" class="position-absolute globe" src="../assets/img/globe.png" alt="">
        <div class="content">

            <img class="shape_top" src="../assets/img/shape-top.png" alt="">
            <div class="container py-5">

                <h1 class="title text-center">Anidio Quick Facts</h1>
                <div class="row pt-5 my-3">
                    <div class="col-3">
                        <div class="rounded-4 card">
                            <h2 class="card_title">700+</h2>
                            <p class="content">Projects Done</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="rounded-4 card">
                            <h2 class="card_title">250+</h2>
                            <p class="content">Happy Clients</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="rounded-4 card">
                            <h2 class="card_title">25+</h2>
                            <p class="content">Team Members</p>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="rounded-4 card">
                            <h2 class="card_title">12+</h2>
                            <p class="content">Years on the Market</p>
                        </div>
                    </div>
                </div>

            </div>

            <img class="shape_bottom" src="../assets/img/shape-bottom.png" alt="">
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.anidio_quick_facts {
    background-image: url('../assets/img/preloader.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .shape_top {
        margin-top: -1px;
        z-index: 2;
        position: relative;
    }

    .shape_bottom {
        margin-bottom: -1px;
        z-index: 2;
        position: relative;
    }

    .content {
        .title {
            color: $light;
        }
    }

    .card {
        background: transparent;
        border: 1px solid $light;
        padding: 2rem;
        text-align: center;

        .card_title {
            font-size: 3rem;
            color: $light;
        }

        .content {
            color: $evidence;
            margin: 0;
            padding: 0.5rem 0;
        }
    }

    .globe {
        z-index: 1;
        left: 50%;
        transform: translate(-50%);
    }

}
</style>