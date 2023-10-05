<script>
export default {
    name: 'JumboVideo'
}
</script>

<template>
    <div class="container-fluid">
        <div class="row">
            <div class="content position-relative text-center">
                <img src="../assets/img/middle.png" alt="">

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
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.row {
    background-image: url('../assets/img/bottom-shape.png');
    background: rgb(255, 255, 255);
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 0) 50%);
    background-repeat: no-repeat;
    background-size: contain;
    background-position-y: center;


    .content {
        /* background-image: url('../assets/img/bottom-shape.png');
    background-repeat: no-repeat;
    background-size: contain; */

        .external {
            position: absolute;
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

    }
}
</style>