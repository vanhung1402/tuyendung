<template>
    <div>
        <Hero></Hero>
        <Worksection :workCate="'outstanding'"></Worksection>
        <Cateworksection></Cateworksection>
        <Worksection :workCate="'newest'"></Worksection>
    </div>
</template>

<script>
import Hero from './components/Herosection'
import Worksection from './components/Worksection'
import Cateworksection from './components/Cateworksection'

export default {
    components: {
        Hero,
        Worksection,
        Cateworksection,
    }
}
</script>