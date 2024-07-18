<template>
    <div class="award">
      <div class="award-content">
        <span class="year">{{ year }}</span>
        <span class="recipient">{{ recipient }}</span>
        <a v-if="url" :href="url" class="link award-name">
            {{ award }}
        </a>
        <span v-else class="award-name">{{ award }}</span>
        <span class="level">{{ level }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Award',
    props: ['recipient', 'award', 'level', 'url', 'year'],
    mounted() {
      console.log('default component has been mounted!');
    },
  }
  </script>
  
  <style scoped>
    .award {
    border-top: 2px solid #00693e; 
    }

/* .award:nth-child(even) {
  background-color: #00693e;
  color: white;
}

.award:nth-child(odd) {
  background-color: inherit;
  color: #00693e;
}

html.dark .award:nth-child(even) {
  background-color: var(--c-brand);
  color: inherit;
}

html.dark .award:nth-child(odd) {
  background-color: inherit;
  color: var(--c-brand-light);
} */

  .award-content {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }

  .year {
    flex: 1; /* 10% */
  }
  
  .recipient {
    flex: 2; /* 20% */
  }
  
  .award-name {
    flex: 6; /* 70% */
  }
  
  .level {
    flex: 1; /* 10% */
  }
  
  .link {
    color: inherit; 
    text-decoration: none !important; 
  }
  
  .link:hover {
    color: inherit; 
    text-decoration: underline !important; 
  }
  
  </style>