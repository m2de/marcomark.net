<template>
    <ul class="list-reset flex flex-wrap w-full my-12">
        <li v-for="{link, text} in navItems" class="flex-1 mb-12">
            <router-link
                :to="link"
                class="router-link hover:text-teal-light"
            >{{ text }}</router-link>
        </li>
    </ul>
</template>

<script>

export default {
    computed: {
        navItems() {
            return this.$site.themeConfig.nav
        }
    },
}

</script>

<style scoped>
    .router-link {
        @apply font-sans text-3xl uppercase no-underline text-teal font-bold text-shadow px-8
    }

    .router-link-exact-active {
        @apply border-b-8 border-orange pb-4;
    }
</style>
