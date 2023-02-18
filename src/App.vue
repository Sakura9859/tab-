<template>
  <div>
    <MyHeader title="tabbar案例" color="" background=""></MyHeader>
    <div class="main">
      <KeepAlive>
        <component :is="comName"></component>
      </KeepAlive>
    </div>
    <MyTabBar :arr="tabList" @changecp="changeFn"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyTabBar from "./components/MyTabBar.vue";
import MyGoodsList from "./views/MyGoodsList.vue";
import MyGoodsSearch from "./views/MyGoodsSearch.vue";
import MyUserInfo from "./views/MyUserInfo.vue";
export default {
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  data() {
    return {
      comName: MyGoodsList,
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          componentName: "MyGoodsList",
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          componentName: "MyGoodsSearch",
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          componentName: "MyUserInfo",
        },
      ],
    };
  },
  methods: {
    changeFn(name) {
      this.comName = name;
    },
  },
};
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 52px;
}
</style>
