<template>
  <!-- внешний вид компонента, html-разметка -->
  <blog-menu :links="tabs"></blog-menu>
  <!-- <BlogMenu></BlogMenu> -->
  <router-view></router-view>
</template>

<script>
// необходимо импортировать компонент
// import BlogMenu from "./components/BlogMenu";
import BlogMenu from "@/components/BlogMenu";
// описание компонента
// data, computed, methods, props, emits хуки жизненного цикла
// компонент нужно зарегистрировать
export default {
  components: {BlogMenu}, // - локальная регистрация
  data(){
    return {
      tabs: [
        {title: "Главная", path: "/"},
        {title: "Все записи", path: "/posts"},
      ]
    }
  }
}

</script>

<style lang="css" scoped>
/* описывает стили файлов, используем css синтаксис
если стилей нет, то тег не нужен,
в итоге все уйдет в css-файлик
lang="css" идет по умолчанию
может использовать синаксис:
lang="sass" синтаксис sass
lang="scss" синтаксис scss
lang="less" синтаксис less

scoped - локальные стили */


</style>
