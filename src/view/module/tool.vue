<template>
<div class="listTool">
  <span @click="showChart"><img src="../../assets/images/table.png" alt="" >图形</span>
  <span class="borderline" @click="showData"><img src="../../assets/images/echarts.png" alt="">数据</span>
  <span class="loadBtn">
      <img src="../../assets/images/download.png" alt="">下载
      <div class="tipBox">
        <ul class="selectList">
          <li><a href="javascript:void(0)" @click="downTable">打印报表</a></li>
          <li><a href="javascript:void(0)" @click="downExcel">下载excel数据</a></li>
          <li><a href="javascript:void(0)" @click="downJPG">下载JPG图片格式</a></li>
          <li><a href="javascript:void(0)" @click="downPDF">下载PDF文档格式</a></li>
          <li><a href="javascript:void(0)" @click="downSVG">下载SVG图片格式</a></li>
        </ul>
      </div>
    </span>
</div>
</template>

<script>
export default {
  name: 'name',
  data() {
    return {
      ifshow: false
    };
  },
  methods: {
    showChart() {
      this.$emit('sChart');
    },
    showData() {
      this.$emit('sData');
    },
    downTable() {
      this.$emit('dTable');
    },
    downExcel() {
      this.$emit('dExcel');
    },
    downJPG() {
      this.$emit('dJPG');
    },
    downPDF() {
      this.$emit('dPDF');
    },
    downSVG() {
      this.$emit('dSVG');
    }
  }
};
</script>
<style lang="scss" scoped>
.tipBox {
    position: absolute;
    top: 32px;
    right: 0;
    width: 130px;
    height: 125px;
    padding: 0 5px;
    background-color: #FFFFFF;
    border: #cccccc solid 1px;
    border-radius: 3px;
    display: none;
    &.active {
        display: block;
    }
    z-index: 999;
}
.tipBox:before {
    box-sizing: content-box;
    width: 0;
    height: 0;
    position: absolute;
    top: -16px;
    right: 11px;
    padding: 0;
    border-bottom: 8px solid #FFFFFF;
    border-top: 8px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    display: block;
    content: '';
    z-index: 12;
}
.tipBox:after {
    box-sizing: content-box;
    width: 0;
    height: 0;
    position: absolute;
    top: -18px;
    right: 10px;
    padding: 0;
    border-bottom: 9px solid #cccccc;
    border-top: 9px solid transparent;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    display: block;
    content: '';
    z-index: 10;
}
.listTool * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.listTool {
    width: 184px;
    height: 28px;
    border: 1px solid #d2d2d2;
    border-radius: 2px;
    padding: 4px;
    color: #d2d2d2;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;

    span {
        display: inline-block;
        float: left;
        padding: 0 6px;
        text-align: center;
        line-height: 18px;
        color: #999;
        cursor: pointer;
        box-sizing: border-box;
        font-size: 12px;
        &:hover {
            color: #f67858;
        }
        &.borderline {
            box-sizing: border-box;
            border-left: 1px solid #d2d2d2;
            border-right: 1px solid #d2d2d2;
        }
        &.loadBtn:hover {
            & > .tipBox,
            & > .tipBox:hover {
                display: block;
            }
        }
    }
    img {
        vertical-align: text-bottom;
        margin-right: 3px;
    }
}

.selectList li {

    a {
        display: block;
        height: 25px;
        line-height: 25px;
        font-size: 12px;
        color: #666;
        border-top: 1px dashed #ebebeb;
        text-decoration: none;
        text-align: left;
        padding: 0 10px;
    }
    &:first-child a {
        border-top: none;
    }
    & > a:hover {
        color: #f67858;
    }
}
</style>
