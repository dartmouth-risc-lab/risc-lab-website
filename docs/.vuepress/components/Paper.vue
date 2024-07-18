<template>
    <div class="paper">
      <img :src="$withBase(image)" alt="Paper image" class="paper-image" />
      <div class="paper-info">
        <a :href="projectUrl" v-if="projectUrl" class="title-link">
          <h4>{{ title }}</h4>
        </a>
        <h4 v-else>{{ title }}</h4>
        <p class="journal">{{ journal }}</p>
        <p>{{ author }}</p>
        <p>
          <span v-if="projectUrl">
            <a :href="projectUrl">Project</a> |
          </span>
          <span v-if="codeUrl">
            <a :href="codeUrl">Code</a> |
          </span>
          <span v-if="paperUrl">
            <a :href="paperUrl">PDF</a>
          </span>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Paper',
    props: ['image', 'title', 'journal', 'author', 'projectUrl', 'codeUrl', 'paperUrl'],
    mounted() {
        console.log('Paper component has been mounted!');
    },
  }
  </script>
  
  <style scoped>
  .theme-default-content .paper {
    display: flex;
    align-items: center; 
    margin-bottom: 1em;
  }
  
.theme-default-content .paper-image {
  width: 120px;
  height: 100%; 
  object-fit: cover; 
  margin-right: 20px;
}
  
  .theme-default-content .paper-info {
    display: flex;
    flex-direction: column;
  }
  
  .theme-default-content .paper-info p {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
  }
  
  .theme-default-content .paper-info h4 {
    margin: 0;
    padding-top: 0.5em;
    padding-bottom: 0.25em;
  }

  .journal {
    font-style: italic;
    color: #888888;
  }

  .title-link {
    color: inherit; 
    text-decoration: none !important; 
  }
  .title-link:hover {
    color: inherit; 
    text-decoration: underline !important; 
  }

  .title-link::after {
    content: none !important;
  }
  </style>