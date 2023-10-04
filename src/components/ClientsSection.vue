<template>
    <section class="clients">
        <div class="container">
            <div class="row m-auto justify-content-center">
                <div class="col-6">
                    <div class="content text-center">
                        <h5 class="intro">Why Anidio studio?</h5>
                        <h1 class="title">We Love Our Clients</h1>
                        <h6 class="sub_title">We are trusted throughout adland and have a wealth of recommendations from
                            start-ups to renowed global brands.</h6>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="../assets/img/sponsor5.png" alt="">

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="../assets/img/sponsor6.png" alt="">

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="../assets/img/sponsor1.png" alt="">

                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="../assets/img/sponsor2.png" alt="">
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img class="img-fluid" src="../assets/img/sponsor3.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.clients {
    margin: 10rem auto 4rem;

    .content {
        margin: 3rem auto;

        .intro {
            color: $main_light;
        }

        .title {
            font-size: 3.5rem;
        }

    }

    .card {
        border: none;

        img {
            border: none;
        }
    }
}
</style>