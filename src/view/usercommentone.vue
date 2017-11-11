<template lang="html">
  <div class="usercommentone">

    <mul-select :list.sync="aaa" v-on:chagesel="bbb"></mul-select>
    <mul-select :list.sync="ddd" v-on:chagesel="ccc"></mul-select>
    <br/>
    <el-select v-model="value" placeholder="请选择">
     <el-option
       v-for="item in options"
       :key="item.value"
       :label="item.label"
       :value="item.value">
     </el-option>
   </el-select>
   <bread-crumb :data="nav"></bread-crumb>
   <tool></tool>
  </div>
</template>
<script>
import breadCrumb from './module/breadCrumb';
import mulSelect from './module/mulselect';
import tool from './module/tool';

export default {
  name: 'usercommentone',
  data() {
    return {
      nav: ['目标市场研究', '用户需求趋势研究', '用户好评与痛点趋势'],
      name: '所选车系',
      aaa: [{
        name: '不限',
        active: false
      }, {
        name: 'suv',
        active: false
      }, {
        name: '轿车',
        active: false
      }, {
        name: '卡车',
        active: false
      }, {
        name: '飞机',
        active: false
      }],
      ddd: [{
        name: '不限',
        active: false
      }, {
        name: 'suv1',
        active: false
      }, {
        name: '轿车1',
        active: false
      }],
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    bbb() {
      console.log(`相应组件事件 拿到了值`);
    },
    ccc() {
      console.log(`相应组件事件 拿到了值`);
    }
  },
  components: {
    breadCrumb,
    mulSelect,
    tool
  }
};
</script>

<style lang="css" scoped>
</style>
