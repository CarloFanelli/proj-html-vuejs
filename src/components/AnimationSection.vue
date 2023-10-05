<script>
export default {
    name: 'AnimationSection'
}
</script>

<template>
    <section class="animation_section position-relative">
        <img class="shape w-100 m-0 p-0 img-fluid position-absolute" src="../assets/img/bottom-shape.png" alt="">

        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                </div>
                <div class="col-6 text-center">
                    <div class="content">
                        <h5 class="intro">Our Love For Animation</h5>
                        <h1 class="title">We're Storytelling<br>Experts With Creative<br>Smarts</h1>
                        <h6 class="sub_title">Our culture inspires the creative and innovate spirit found throughout oru
                            Smarts Studio. We breathe life into new ideas!</h6>
                    </div>
                </div>
                <div class="col-3">

                </div>
            </div>
        </div>
        <!-- /.container -->

        <div class="container">
            <div class="row">
                <div class="col-3"></div>
                <div class="col-3">
                    <div class="card justify-content-center align-items-center smart1">
                        <img class="w-25" src="../assets/img/smart1.png" alt="">
                        <h4 class="card_title">3D modeling</h4>
                        <p class="card_content">
                            We constantly ask questions.
                            It helps us shape your story and deliver the results you
                            crave. yed. well drill deep to
                            deliver above and beyond your expectation.
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card justify-content-center align-items-center smart2">
                        <img class="w-25" src="../assets/img/smart2.png" alt="">
                        <h4 class="card_title">Collaboration</h4>
                        <p class="card_content">
                            We constantly ask questions.
                            It helps us shape your story and deliver the results you
                            crave. yed. well drill deep to
                            deliver above and beyond your expectation.
                        </p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card justify-content-center align-items-center smart3">
                        <img class="w-25" src="../assets/img/smart3.png" alt="">
                        <h4 class="card_title">Creativity</h4>
                        <p class="card_content">
                            We constantly ask questions.
                            It helps us shape your story and deliver the results you
                            crave. yed. well drill deep to
                            deliver above and beyond your expectation.
                        </p>
                    </div>

                    <div class="rocket">

                        <img height="130" class="position-absolute end-0
                        " src="../assets/img/smart4.png" alt="">
                    </div>

                </div>
            </div>
        </div>
        <!-- /.container -->

        <div class="container-fluid">
            <div class="row justify-content-end">
                <div class="col-4 text-end">


                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.shape {
    top: -100px;
}

.animation_section {
    background-image: url('../assets/img/smart.png');
    background-repeat: no-repeat;
    background-size: contain;
    margin-bottom: 9rem;

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
        padding: 1rem 1.2rem;
        text-align: center;
        border-radius: 40px;

        .card_title {
            margin: 1rem auto;
            color: $main_color;
        }

        .card_content {
            line-height: 30px;
        }
    }

    .smart1 {
        background: rgb(238, 222, 208);
        background: linear-gradient(0deg, #eeded0 20%, rgba(255, 255, 255, 1) 80%);
    }

    .smart1:hover {
        background: rgb(238, 222, 208);
        background: linear-gradient(180deg, #eeded0 35%, rgba(255, 255, 255, 1) 65%);
    }

    .smart2 {
        background: rgb(238, 222, 208);
        background: linear-gradient(0deg, #d9d3ff 20%, rgba(255, 255, 255, 1) 80%);
    }

    .smart2:hover {
        background: rgb(238, 222, 208);
        background: linear-gradient(180deg, #d9d3ff 35%, rgba(255, 255, 255, 1) 65%);
    }

    .smart3 {
        background: rgb(238, 222, 208);
        background: linear-gradient(0deg, rgba(255, 205, 208, 1) 20%, rgba(255, 255, 255, 1) 80%);
    }

    .smart3:hover {
        background: rgb(238, 222, 208);
        background: linear-gradient(180deg, rgba(255, 205, 208, 1) 35%, rgba(255, 255, 255, 1) 65%);
    }
}
</style>