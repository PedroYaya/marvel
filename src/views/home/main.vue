<template>
  <div class="home">
    <div 
      class="card"
      v-for="(item, index) in items"
      :key="index"
      @click="goToDetail(item)"
    > 
      <img
       class="thumbnail"
       :src="getImageUrl(item)"/>
      <div class="main-data">
        <span>{{ item.name }}</span>
        <span>{{ getDescription(item) }}</span>
      </div>
  
    </div>
  </div>
</template>

<script>

  import loadItems from './data/dependencies'
 
export default {

  components: {
    
  },

  data() {
    return {
       items: []
    }
  },

  created() {
    loadItems().then(result => {
      this.items = result;
    });
  },

  methods: {
    getImageUrl(item) {
      return `${item.thumbnail.path}.${item.thumbnail.extension}`;
    },

    getDescription(item) {
      if (item.description) {
        return item.description;
      }

      return "Click here to find out more about me!"
    },

    goToDetail(item) {
      if (item.id) {
        this.$router.push({ name: 'detail', params: { id: item.id }});
      }
    }
  }
}
</script>

<style lang="scss">

  .home {

    .card {
      cursor: pointer;
    }

    .thumbnail {
      width: 200px;
    }
  }
</style>