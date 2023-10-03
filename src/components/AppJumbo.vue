<script>
export default {
    name: 'AppJumbo'
}
</script>

<template>
    <div class="jumbotron container-fluid my-5">
        <div class="row m-auto">
            <div class="col-2">
                <img class="img-fluid" src="../assets/img/left-man.png" alt="">
            </div>
            <div class="col-8">
                <div class="jumbo_content text-center">
                    <h5 class="intro">Imagine, Create, Explore</h5>
                    <h1 class="title">We Animate <br>With Ninja-Like Precision</h1>
                    <h6 class="sub_title">We are a character-driven animation studio striving to make high-quality
                        animations.</h6>

                    <div class="my-5 jumbo_btns d-flex justify-content-evenly w-50 m-auto">
                        <div class="btn btn_filled btn-sm">
                            <a class="p-1 nav-link" href="#" role="button">Start a project </a>
                        </div>

                        <div class="btn btn_not_filled btn-sm">
                            <a class=" p-1 nav-link" href="#" role="button"> Portfolio </a>
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-2">
                <img class="img-fluid" src="../assets/img/right-man.png" alt="">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
@use '../assets/scss/partials/elements' as *;

.jumbotron {
    .jumbo_content {
        color: $light;

        .intro {
            color: $evidence;
        }

        .title {
            font-size: 4rem;
        }

        .btn_filled {
            @include btn_filled;
        }

        .btn_not_filled {
            @include btn_not_filled;
        }
    }
}
</style>