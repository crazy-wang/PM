<template>
<div class="mulselect">
  <div tabindex="-1" class="selcont">
    <label class="tip" v-show="tip === 0">请选择</label>
    <template v-for="(item,index) in list">
    <el-tag v-show="item.active" @close="handleClose(item,index)"  tabindex="-1" class="tagitem" type="gray" :closable="true">{{item.name}}</el-tag>
  </template>
    <i tabindex="-1" class="el-icon-delete delbtn" @click="clickdel"></i>
    <i class="el-icon-arrow-down downbtn"></i>
    <ul class="droplist clearfix">
      <li @click="clicklsit(item,index)" v-for="(item,index) in list" class="item"><span class="f-l">{{item.name}}</span> <i :class="[{ active: item.active },'el-icon-check f-r']"></i> </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'mulselect',
  props: ['list'],
  data() {
    return {
      tip: 0
    };
  },
  methods: {
    clickdel() {
      this.list.forEach((v) => {
        v.active = false;
      });
      this.tip = 0;
      this.$emit('update:list', this.list);
      this.$emit('chagesel');
    },
    clicklsit(item, index) {
      if (this.tip >= 5) {
        return;
      }
      if (item.name === '不限' && !item.active) {
        this.list.forEach((v) => {
          v.active = false;
        });
      } else if (item.name !== '不限' && this.list[0].active) {
        return;
      }!item.active ? this.tip += 1 : this.tip -= 1;
      this.list.splice(index, 1, {
        name: item.name,
        active: !item.active
      });
      this.$emit('update:list', this.list);
      this.$emit('chagesel');
    },
    handleClose(item, index) {
      this.tip -= 1;
      this.list.splice(index, 1, {
        name: item.name,
        active: false
      });
      this.$emit('update:list', this.list);
      this.$emit('chagesel');
    }
  },
  mounted() {
    this.list.forEach((v) => {
      v.active ? this.tip++ : '';
    });
  }
};
</script>

<style lang="scss" scoped>
.mulselect {
    height: 36px;
    box-sizing: border-box;
    display: inline-block;
    & .selcont {
        position: relative;
        display: inline-block;
        min-width: 220px;
        text-align: left;
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: inline-block;
        font-size: inherit;
        outline: none;
        padding-left: 5px;
        padding-right: 60px;
        vertical-align: top;
        & .tip {
            color: #bfcbd9;
        }
        & .el-icon-delete {
            position: absolute;
            right: 0;
            top: 0;
            width: 36px;
            height: 36px;
            line-height: 36px;
            text-align: center;
        }
        & .delbtn {
            position: absolute;
            right: 30px;
            top: 3px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
        & .delbtn:focus .droplist {
            display: none;
        }
        & .delbtn:focus {
            outline: none;
        }
        & .tagitem:focus {
            outline: none;
        }
        & .tagitem:focus .dropbtn {
            outline: none;
        }
        & .tagitem {
            margin-right: 5px;
        }
        & .downbtn {
            position: absolute;
            right: 0;
            top: 3px;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }
        &:focus {
            outline: none;
        }
        & .droplist {
            display: none;
            position: absolute;
            right: 0;
            top: 40px;
            width: 220px;
            border: 1px solid #bfcbd9;
            box-sizing: border-box;
            border-radius: 4px;
            max-height: 280px;
            overflow-y: auto;
            overflow-x: hidden;
            z-index: 2003 !important;
            background-color: #fff;
            &::-webkit-scrollbar {
                width: 0;
            }
            &::-ms-scrollbar {
                width: 0;
            }
            &::-moz-scrollbar {
                width: 0;
            }
            & .item {
                width: 100%;
                height: 36px;
                line-height: 36px;
                cursor: pointer;
                & span {
                    // float: left;
                    padding-left: 5px;
                    color: #48576a;
                }
                & i {
                    display: none;
                    // float: right;
                    width: 36px;
                    height: 36px;
                    text-align: center;
                    line-height: 36px;
                    color: #bfcbd9;
                }
                & i.active {
                    display: block;
                    color: rgb(246,162,140);
                }
                &:hover {
                    background-color: #e4e8f1;
                }
            }
        }
        &:focus .droplist {
            display: block;
        }
        &:focus .downbtn {
            transition: all 1s;
            transform: rotate(180deg);
        }
        & .downbtn {
            transition: all 1s;
            transform: rotate(0deg);
        }
    }
}
</style>
