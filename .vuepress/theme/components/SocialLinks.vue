<template>
    <ul class="list-reset flex flex-wrap w-full my-10 max-w-xs mx-auto">
        <li class="flex-1 mb-12">
            <a href="https://twitter.com/m2de_io"><TwitterIcon class="social-svg" /></a>
        </li>
        <li class="flex-1 mb-12">
            <a href="https://github.com/m2de"><GithubIcon class="social-svg" /></a>
        </li>
        <li class="flex-1 mb-12">
            <a href="https://www.instagram.com/marcomark79/"><InstagramIcon class="social-svg" /></a>
        </li>
        <li class="flex-1 mb-12">
            <a href="https://codepen.io/m2de"><CodepenIcon class="social-svg" /></a>
        </li>
        <li class="flex-1 mb-12">
            <a href="https://www.facebook.com/marcomark79"><FacebookIcon class="social-svg" /></a>
        </li>
        <li class="flex-1 mb-12">
            <a href="https://www.linkedin.com/in/marcomark"><LinkedInIcon class="social-svg" /></a>
        </li>
    </ul>
</template>

<script>
import TwitterIcon from '../svg/twitter.svg'
import FacebookIcon from '../svg/facebook.svg'
import LinkedInIcon from '../svg/linkedin.svg'
import GithubIcon from '../svg/github.svg'
import CodepenIcon from '../svg/codepen.svg'
import InstagramIcon from '../svg/instagram.svg'

export default {
    components: {
        TwitterIcon,
        FacebookIcon,
        LinkedInIcon,
        GithubIcon,
        CodepenIcon,
        InstagramIcon,
    },
}

</script>

<style scoped>
    .social-svg {
        @apply fill-current w-8 h-8 text-teal;
        filter: drop-shadow( 0px 2px 5px rgba(0, 0, 0, .5));
    }

    .social-svg:hover {
        @apply text-teal-light;
    }
</style>
