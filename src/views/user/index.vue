<!-- 
 * @author miracle_dan<denghan@qianhaikeji.cn> 
-->
<template>
  <div>
    <keep-alive>
      <!-- <list v-if="showList"></list> -->
      <infoTable v-if="showList"></infoTable>
    </keep-alive>
    <profile v-if="!showList"></profile>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import list from './list'
import profile from './profile'
import infoTable from './infoTable'
export default {
  computed: {
    ...mapGetters({
      showList: 'isListMode'
    })
  },
  components: {
    list,
    profile,
    infoTable
  },
  methods: {
    ...mapMutations({
      initListProfile: 'INIT_LIST_AND_PROFILE'
    })
  },
  mounted () {
    this.initListProfile()
  }
}
</script>

<style scoped>
</style>
