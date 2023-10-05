import { reactive } from 'vue';

export const state = reactive({

    menuItems: ['home', 'about us', 'portfolio', 'our process', 'pricing', 'blog', 'contact', 'get a quote'],

    footerMenuItems: ['about us', 'portfolio', 'pricing', 'career', 'contact'],

    processIndex: 0,
    processSlider: [
        {
            id: 1,
            title: 'Pre Production',
            description: 'We\'ll take your idea and create a technical script which consist of action notes and animation description',
            img: '../assets/img/process2.png'
        },
        {
            id: 2,
            title: 'Scripting',
            description: 'We\'ll take your idea and create a technical script which consist of action notes and animation description',
            img: '../assets/img/process1.png'
        },
        {
            id: 3,
            title: 'Pre Production',
            description: 'We\'ll take your idea and create a technical script which consist of action notes and animation description',
            img: '../assets/img/process2.png'
        },
        {
            id: 4,
            title: 'Scripting',
            description: 'We\'ll take your idea and create a technical script which consist of action notes and animation description',
            img: '../assets/img/process1.png'
        },
    ]

})