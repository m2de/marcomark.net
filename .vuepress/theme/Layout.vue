<template>
    <div class="mx-auto max-w-lg text-center px-4 md:px-0">
        <NavBar class="relative z-50" />
        <Content class="relative z-50" />
        <SubPages class="relative z-50" />
        <SocialLinks class="relative z-50" />
        <p class="text-orange-lighter text-xl font-serif font-thin">Copyright 2019 Marco Mark</p>
        <NavBar class="relative z-50" />
        <Woman :scroll="scrollPosition" :x="0.95" :y="0.1" :speed="0.45" :scale="0.1" v-show="fullyRendered" :min-height="1000" />
        <Bird :scroll="scrollPosition" :x="0.10" :y="0.2" :speed="0.4" :scale="0.6" v-show="fullyRendered" :min-height="1500" />
        <Bull :scroll="scrollPosition" :x="0.5" :y="0.4" :speed="0.35" :scale="0.5" v-show="fullyRendered" :min-height="1800" />
        <Woman :scroll="scrollPosition" :x="0.90" :y="0.5" :speed="0.25" :scale="0.2" v-show="fullyRendered" :min-height="2500" />
        <Bird :scroll="scrollPosition" :x="0.2" :y="0.6" :speed="0.3" :scale="0.3" v-show="fullyRendered" :min-height="2700" />
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import SocialLinks from './components/SocialLinks.vue'

export default {
    components: {
        NavBar,
        SocialLinks,
    },

    data() {
        return {
            objects: [],
            scrollPosition: 0,
            fullyRendered: false,
        }
    },

    methods: {
        handleScroll() {
            this.scrollPosition = window.scrollY || 0
        },
    },

    '$route' () {
        this.handleScroll()
    },

    mounted() {
        this.handleScroll()
        window.addEventListener('scroll', this.handleScroll)
        this.fullyRendered = true
    },
}
</script>

<style>

.md-heading_open {
    @apply mt-12 mb-8 font-sans uppercase text-orange font-extrabold text-shadow-lg;
}

.md-paragraph_open {
    @apply mb-8 font-serif text-xl text-orange-lighter text-justify leading-normal text-shadow;
}

.md-link_open {
    @apply my-4 font-sans text-xl uppercase no-underline text-teal font-bold text-shadow;
}

.md-link_open:hover {
    @apply text-teal-light;
}

.md-image {
    @apply mx-auto my-16 border-8 border-b-64 border-orange-lighter shadow-lg text-center rounded-sm w-full;
}

.md-bullet_list_open {
    @apply list-reset mb-8 font-serif text-xl font-bold text-orange-lighter text-justify leading-normal text-shadow;
}

.md-bullet_list_open li {
    @apply block border-l-8 pl-4 mb-4;
}

.rotation-1 {
    transform: rotate(1deg);
}

.rotation-2 {
    transform: rotate(-1deg);
}

.rotation-3 {
    transform: rotate(0.5deg);
}

.rotation-4 {
    transform: rotate(-0.5deg);
}

.rotation-5 {
    transform: rotate(1.2deg);
}

.rotation-1 {
    transform: rotate(1deg);
}

.rotation-2 {
    transform: rotate(-1deg);
}

@screen md {
    .md-image {
        @apply mx-0;
    }
}

pre {
    @apply text-left text-base my-20 border-8 border-teal-dark rounded shadow-lg !important;
}

.hljs {
    @apply p-8;
}

</style>
