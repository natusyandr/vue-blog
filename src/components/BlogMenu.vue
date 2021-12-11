<template>
  <nav>
    <router-link v-for="link in links" :key="link.path" :to="link.path">{{ link.title }}</router-link>
  </nav>
</template>

<script>

export default {
  props: {
    links: {
      required: true,
      type: Array,
      validator(value){
        if (value.length < 1) return false;
        // проверяем есть ли title и path в каждом обьекте массива, проверка массива метод every
        if (!value.every(link => "title" in link && "path" in link)) return false;
        return true;
      }
    }
  }
}

</script>
