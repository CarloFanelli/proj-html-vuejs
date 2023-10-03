<script>
import JumboVideo from './JumboVideo.vue';

export default {
    name: 'AppJumbo',
    components: { JumboVideo }
}
</script>

<template>
    <div class="jumbotron container-fluid my-5 p-0 position-relative">
        <div class="bg_jumbo">
            <img class="start-0 top-0 position-absolute" src="../assets/img/dots-left.png" alt="">
            <img class="end-0 top-0 position-absolute" src="../assets/img/dots-right.png" alt="">
            <div class="row m-auto py-5">
                <div class="col-2 position-relative">
                    <img class=" globe1 position-absolute" src="../assets/img/globe1.png" alt="">
                    <img class="mt-5 img-fluid" src="../assets/img/left-man.png" alt="">
                </div>
                <div class="col-8 position-relative">

                    <img class=" globe3 position-absolute" src="../assets/img/globe3.png" alt="">
                    <img class=" globe2 position-absolute" src="../assets/img/globe2.png" alt="">


                    <div class="jumbo_content text-center">
                        <h5 class="intro">Imagine, Create, Explore</h5>
                        <h1 class="title">We Animate <br>With Ninja-Like Precision</h1>
                        <h6 class="sub_title">We are a character-driven animation studio striving to make high-quality
                            animations.</h6>

                        <div class="my-5 jumbo_btns d-flex justify-content-center w-50 m-auto gap-3">
                            <div class="btn btn_filled btn-sm">
                                <a class=" p-1 nav-link" href="#" role="button">Start a project </a>
                            </div>

                            <div class="btn btn_not_filled btn-sm">
                                <a class=" p-1 nav-link" href="#" role="button"> Portfolio </a>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="col-2 position-relative">
                    <img class=" light position-absolute" src="../assets/img/light.png" alt="">

                    <img class="mt-5 img-fluid" src="../assets/img/right-man.png" alt="">
                </div>
            </div>


            <JumboVideo></JumboVideo>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/elements' as *;

.jumbotron {
    .bg_jumbo {
        background-image: url('../assets/img/banner-bg.png');

    }

    .jumbo_content {
        color: $light;

        .intro {
            color: $evidence;
        }

        .title {
            font-size: 4rem;
            z-index: 2;
            position: inherit;
            margin: 1.5rem 0;
        }

        .btn_filled {
            @include btn_filled;
        }

        .btn_not_filled {
            @include btn_not_filled;
        }
    }


    .globe1 {
        margin-top: -3rem;
        width: 7rem;
        left: 60%;
    }

    .globe2 {
        z-index: 1;
        right: 10rem;
        top: -29px;
    }

    .globe3 {
        left: 33%;
        margin-top: -28rem;
    }

    .light {
        top: -5rem;
    }
}
</style>