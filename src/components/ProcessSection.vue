<script>
import { state } from '../state';

export default {
    name: 'ProcessSection',
    data() {
        return {
            state
        }
    },
    methods: {
        nextBtn() {
            if (state.processIndex < state.processSlider.length - 1) {
                state.processIndex++;
            }
            else {
                state.processIndex = 0;
            }
            console.log(state.processIndex);
        },
        prevBtn() {
            if (state.processIndex > 0) {
                state.processIndex--;
            }
            else {
                state.processIndex = state.processSlider.length - 1;
            }
            console.log(state.processIndex);

        },
        getImageUrl(name) {
            return new URL(name, import.meta.url).href
        },
    }
}
</script>

<template>
    <section class="process_section">

        <div class="container">
            <div class="row">
                <div class="col-6 position-relative">
                    <img class="position-absolute rocket_girl" src="../assets/img/process-thumb.png" alt="">
                </div>
                <div class="col-6">

                    <div class="content">
                        <h5 class="intro">Our Process</h5>
                        <h1 class="title">Our Process for <br>Your Animation Production</h1>
                        <h6 class="sub_title">We have an effective process for working on animation</h6>
                    </div>

                    <div class="row">
                        <div class="col-6">
                            <div class="card rounded-5">
                                <div class="my_circle w-50">

                                    <img class="img-fluid" :src="getImageUrl(state.processSlider[state.processIndex].img)"
                                        alt="">
                                </div>

                                <h5 class="my-1">{{ state.processSlider[state.processIndex].title }}</h5>
                                <p class="my-3">{{ state.processSlider[state.processIndex].description }}</p>
                                <div class="numerator">
                                    <span>{{ state.processSlider[state.processIndex].id }}</span>
                                </div>
                            </div>
                        </div>

                        <div class="col-6">
                            <div class="card rounded-5">
                                <div class="my_circle w-50">

                                    <img class="img-fluid" :src="getImageUrl(state.processSlider[state.processIndex + 1].img)"
                                        alt="">
                                </div>

                                <h5 class="my-1">{{ state.processSlider[state.processIndex + 1].title }}</h5>
                                <p class="my-3">{{ state.processSlider[state.processIndex + 1].description }}</p>
                                <div class="numerator">
                                    <span>{{ state.processSlider[state.processIndex + 1].id }}</span>
                                </div>
                            </div>
                        </div>


                        <div class="arrows d-flex p-3 gap-2">

                            <div @click="prevBtn()" class="prev arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                    class="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                                </svg>
                            </div>
                            <div @click="nextBtn()" class="next arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                                    class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                </svg>
                            </div>

                        </div>
                    </div>


                    <div class="rocket" data-v-9b0d8a65=""><img height="130" class="position-absolute end-0"
                            src="/src/assets/img/smart4.png" alt="" data-v-9b0d8a65=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.process_section {
    margin: 3rem auto 10rem;

    .rocket_girl {
        left: -60%;
    }

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
        padding: 2rem;
        justify-content: center;
        align-items: center;
        text-align: center;

        .my_circle {
            background-color: $semi_dark_light;
            padding: 1rem;
            aspect-ratio: 1;
            border-radius: 50%;
            margin-bottom: 1rem;
        }

        .numerator {
            color: $main_color;
            background: #b1a6fd5c;
            display: flex;
            flex-direction: column;
            justify-content: end;
            width: 2.5rem;
            height: 5rem;
            padding-bottom: 1rem;
            border-bottom-right-radius: 50px;
            border-bottom-left-radius: 50px;

            position: absolute;
            top: 0;
            right: 2rem;

        }
    }

}
</style>