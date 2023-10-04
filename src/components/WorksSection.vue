<script>
export default {
    name: 'WorksSection'
}
</script>

<template>
    <section class="works_section my-5">
        <div class="container">
            <div class="row">
                <div class="col-6 m-auto text-center">
                    <div class="content">
                        <h5 class="intro">Our Works</h5>
                        <h1 class="title">Featured Productions</h1>
                        <h6 class="sub_title">Here's Just a small sample of some of those projects that were quite proud of.
                            If you're looking for something specific feel free to get in contact with us.</h6>
                    </div>
                </div>
            </div>
            <!-- /.row -->

            <div class="row m-auto justify-content-center">
                <div class="col-5">
                    <div class="card my-4 border-0">
                        <img src="../assets/img/work1.png" alt="">
                    </div>

                    <div class="card my-4 border-0">
                        <img src="../assets/img/work3.png" alt="">


                    </div>
                </div>
                <div class="col-5">
                    <div class="card my-4 border-0">
                        <img src="../assets/img/work2.png" alt="">

                    </div>

                    <div class="card my-4 border-0">
                        <img src="../assets/img/work4.png" alt="">

                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-3 m-auto text-center">

                    <div class="btn rounded-5 ">
                        <a href="#">See Our Works</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.works_section {

    .content {
        margin: 3rem auto;

        .intro {
            color: $main_light;
        }

        .title {
            font-size: 3.5rem;
        }
    }

    .btn {
        border: 1px solid $soft_light;
        padding: 0.5rem 1.5rem;

        a {
            text-decoration: none;
            color: $main_color;
        }
    }
}
</style>