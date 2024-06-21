<template>
    <div class="professor">
      <img :src="$withBase(image)" :alt="name" class="person-image" />
      <div class="person-info">
        <a :href="link" class="person-name">{{ name }}</a>
        <slot></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Professor',
  props: {
    name: String,
    image: String,
    link: String
  },
  mounted() {
    console.log('Professor component has been mounted!');
  },
}
</script>

<style scoped>
.professor {
  /* display: flex;
  align-items: center; */
  margin-bottom: 2em;
  margin-top: 2em;
}
.person-image {
  float: left;
  width: 180px;
  margin-right: 1em;
  margin-top: 0.5em;
}
.person-info {
  text-align: justify;
  line-height: 1.5;
}
.person-name {
  font-size: 1.1em;
}

</style>