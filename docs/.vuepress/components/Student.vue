<template>
    <div class="student">
      <img :src="$withBase(image)" :alt="name" />
      <p>
        <a v-if="studentUrl" :href="studentUrl">{{ name }}</a>
        <span v-else>{{ name }}</span>
        <br>{{ year }}
      </p>
    </div>
  </template>
  
  <script>
    export default {
    name: 'Student',
    props: ['name', 'image', 'year', 'studentUrl'],
    mounted() {
        console.log('Student component has been mounted!');
    },
    }
  </script>
  
  <style scoped>
  .student {
    text-align: center;
    /* width: 200px; */
    margin: 10px;
  }
  .student img {
  width: 150px;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
  </style>
