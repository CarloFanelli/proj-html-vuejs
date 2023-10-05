<script>
export default {
    name: 'FooterTop'
}
</script>

<template>
    <section class="footer_top position-relative">

        <img class="img-fluid shape_top" src="../assets/img/shape-top.png" alt="">
        <div class="container py-2">

            <div class="row pt-5 my-3">
                <div class="col-7 m-auto">
                    <div class="content text-center">
                        <h5 class="intro">We Create New Worlds!</h5>
                        <h1 class="title">Want Tips On Your<br>Storytelling?</h1>
                        <h6 class="sub_title">Join our newsletter for tips on how to elevate your brand through storytelling
                        </h6>
                    </div>

                    <div class="input-group rounded-5 bg-white p-1 w-75 m-auto my-5">
                        <input type="text" class="py-2 form-control border-0" placeholder="Enter your email"
                            aria-label="Enter your email" aria-describedby="basic-addon2">
                        <button class="my_btn mx-3 my-2 rounded-4 px-4 py-1" type="button">Submit</button>
                    </div>
                </div>
            </div>

        </div>

        <img class="img-fluid shape_bottom" src="../assets/img/shape-bottom.png" alt="">


    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.footer_top {
    margin: 2rem auto;
    background-image: url('../assets/img/preloader.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    .shape_top {
        margin-top: -5px;
        z-index: 2;
        position: relative;
    }

    .shape_bottom {
        margin-bottom: -5px;
        z-index: 2;
        position: relative;
    }

    .content {

        .intro {
            color: $evidence;
        }

        .title {
            color: $light;
        }

        .sub_title {
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

    .input-group {
        input {
            background: transparent;
        }

        .my_btn {
            background: #FAE0ED;
            color: $main_color;
            border: 0;
        }
    }

}
</style>