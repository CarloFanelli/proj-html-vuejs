<script>
export default {
    name: 'JumboVideo'
}
</script>

<template>
    <section class="jumbo_video position-relative">
        <img class="shape w-100 img-fluid" src="../assets/img/bottom-shape.png" alt="">

        <div class="container">

            <div class="row">
                <div class="col-10 m-auto ">
                    <div class="video d-flex justify-content-center position-relative">
                        <img class="img-fluid" src="../assets/img/middle.png" alt="">

                        <div class="rounded-circle external shadow">
                            <div class="rounded-circle internal shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                    class="bi bi-play-fill position-absolute" viewBox="-1 0 16 16">
                                    <path
                                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.shape {
    position: absolute;
    top: 110px;
}

.external {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5rem;
    height: 5rem;
    background: #9126DA;
    padding: 0.75rem;


    .internal {
        background: #9927E2;
        width: 3.5rem;
        height: 3.5rem;
        padding: 0.5rem;


        .bi.bi-play-fill {
            transform: translate(-50%, -50%);
            color: $light;
            top: 50%;
            left: 50%;
        }
    }
}
</style>