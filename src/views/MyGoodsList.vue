<template>
  <div>
    <MyTable :arr="list">
      <template #herder>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scoped">
        <td>{{ scoped.row.id }}</td>
        <td>{{ scoped.row.goods_name }}</td>
        <td>{{ scoped.row.goods_price }}</td>
        <td>
          <input
            style="width: 120px"
            type="text"
            v-if="scoped.row.inputVisible"
            ref="text"
            v-focus
            class="tag-input form-control"
            @blur="scoped.row.inputVisible = false"
            v-model="scoped.row.inputValue"
            @keydown.enter="addFn(scoped.row)"
            @keydown.esc="scoped.row.inputValue = ''"
          />
          <button
            v-else
            @click="scoped.row.inputVisible = true"
            class="btn btn-primary btn-sm add-tag"
            style="display: block"
          >
            +Tag
          </button>

          <span
            v-for="(str, index) in scoped.row.tags"
            :key="index"
            class="badge badge-warning"
            style="color: black"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scoped.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from ".././components/MyTable.vue";
import axios from "axios";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  created() {
    axios({
      url: "/api/goods",
      method: "get",
    }).then((res) => {
      console.log(res);
      this.list = res.data.data;
    });
  },
  methods: {
    delFn(id) {
      let index = this.list.indexOf((obj) => obj.id === id);
      this.list.splice(index, 1);
    },
    addFn(obj) {
      if (obj.inputValue.length <= 0) {
        alert("请输入值");
      } else {
        obj.tags.push(obj.inputValue);
        obj.inputValue = "";
        // obj.inputVisible = false;
      }
    },
  },
};
</script>

<style scoped></style>
