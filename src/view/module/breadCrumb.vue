<template>
<div class="breadcrumb">
  <span class="spa1" v-for="(item,index) in this.data">
    <span :class="{tar: (index+1) === datalength}">{{item}}</span>
  <i class="el-icon-arrow-right"></i>
  </span>
</div>
</template>

<script>
export default {
  props: ['data'],
  name: 'breadcrumb',
  computed: {
    datalength: function() {
      return this.data.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    .spa1 {
        span {
            display: inline-block;
        }
        i {
            margin: 0 12px;
            font-size: 15px;
            color: #e4e4e4;
        }
        .tar {
            color: #c1c1c1;
        }
        &:last-child {
            span {
                + i {
                    display: none;
                }
            }
        }
    }
}
</style>
