<template>
  <div class="main">
    <div class="head">
      <div class="change">
        <div class="changeBorder">
          <span :class="{on: on===1}" @click="change(1)">详细因素趋势</span>
          <span :class="{on: on===2}" @click="change(2)">热门因素趋势</span>
        </div>
      </div>
      <ul class="filter clearfix">
        <li class="mt-10px">
          <span class="oneFontMargin">满意度：</span>
          <!--<el-select @change="select" v-model="satisfyVal" placeholder="请选择" style="width: 125px">-->
          <el-select v-model="satisfyVal" placeholder="请选择" style="width: 125px">
            <el-option
              v-for="item in satisfy"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="mt-10px">
          <span class="oneFontMargin carLevel">车级别：</span>
          <mul-select :list.sync="carLevel" v-on:chagesel="level"></mul-select>
          <!--<el-select class="tops" v-model="carLevelVal" multiple placeholder="不限" style="width: 570px">-->
          <!--<el-option-->
          <!--v-for="item in carLevel"-->
          <!--:key="item.value"-->
          <!--:label="item.label"-->
          <!--:value="item.value">-->
          <!--</el-option>-->
          <!--</el-select>-->
        </li>
        <li class="mt-10px">
          <span class="oneFontMargin">价格段：</span>
          <mul-select :list.sync="price" v-on:chagesel=""></mul-select>
          <!--<el-select v-model="priceVal" multiple placeholder="不限" style="width: 525px">-->
          <!--<el-option-->
          <!--v-for="item in price"-->
          <!--:key="item.value"-->
          <!--:label="item.label"-->
          <!--:value="item.value">-->
          <!--</el-option>-->
          <!--</el-select>-->
        </li>
        <el-collapse-transition>
          <div v-show="choseShow">
            <li class="mt-10px">
              <span>购车目的：</span>
              <mul-select :list.sync="carObjective" v-on:chagesel=""></mul-select>
              <!--<el-select v-model="carObjectiveVal" multiple placeholder="不限" style="width: 570px">-->
              <!--<el-option-->
              <!--v-for="item in carObjective"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
              <!--</el-option>-->
              <!--</el-select>-->
            </li>
            <li class="mt-10px">
              <span class="twoFontMargin">国别：</span>
              <mul-select :list.sync="country" v-on:chagesel=""></mul-select>
              <!--<el-select v-model="countryVal" multiple placeholder="不限" style="width: 570px">-->
              <!--<el-option-->
              <!--v-for="item in country"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
              <!--</el-option>-->
              <!--</el-select>-->
            </li>
            <li class="mt-10px">
              <span class="twoFontMargin">站点：</span>
              <mul-select :list.sync="site" v-on:chagesel=""></mul-select>
              <!--<el-select v-model="siteVal" multiple placeholder="不限" style="width: 570px">-->
              <!--<el-option-->
              <!--v-for="item in site"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
              <!--</el-option>-->
              <!--</el-select>-->
            </li>
          </div>
        </el-collapse-transition>
        <!--<li class="mt-10px clearfix">-->
          <!--<span class="oneFontMargin">车级别：</span>-->
          <!--<el-select class="tops" v-model="carLevelVal" multiple placeholder="不限" style="width: 570px">-->
            <!--<el-option-->
              <!--v-for="item in carLevel"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</li>-->
        <!--<li class="mt-10px">-->
          <!--<span class="oneFontMargin">价格段：</span>-->
          <!--<el-select v-model="priceVal" multiple placeholder="不限" style="width: 525px">-->
            <!--<el-option-->
              <!--v-for="item in price"-->
              <!--:key="item.value"-->
              <!--:label="item.label"-->
              <!--:value="item.value">-->
            <!--</el-option>-->
          <!--</el-select>-->
        <!--</li>-->
        <!--<el-collapse-transition>-->
          <!--<div v-show="choseShow">-->
            <!--<li class="mt-10px">-->
              <!--<span>购车目的：</span>-->
              <!--<el-select v-model="carObjectiveVal" multiple placeholder="不限" style="width: 570px">-->
                <!--<el-option-->
                  <!--v-for="item in carObjective"-->
                  <!--:key="item.value"-->
                  <!--:label="item.label"-->
                  <!--:value="item.value">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</li>-->
            <!--<li class="mt-10px">-->
              <!--<span class="twoFontMargin">国别：</span>-->
              <!--<el-select v-model="countryVal" multiple placeholder="不限" style="width: 570px">-->
                <!--<el-option-->
                  <!--v-for="item in country"-->
                  <!--:key="item.value"-->
                  <!--:label="item.label"-->
                  <!--:value="item.value">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</li>-->
            <!--<li class="mt-10px">-->
              <!--<span class="twoFontMargin">站点：</span>-->
              <!--<el-select v-model="siteVal" multiple placeholder="不限" style="width: 570px">-->
                <!--<el-option-->
                  <!--v-for="item in site"-->
                  <!--:key="item.value"-->
                  <!--:label="item.label"-->
                  <!--:value="item.value">-->
                <!--</el-option>-->
              <!--</el-select>-->
            <!--</li>-->
          <!--</div>-->
        <!--</el-collapse-transition>-->
        <li class="more">
          <span @click="moreChose">{{moreChoseContent}}&nbsp;&nbsp;<img v-show="arrow" src="../assets/images/arrowDown.png"><img v-show="!arrow" src="../assets/images/arrowTop.png"></span>
        </li>
        <li v-show="factorShow" class="mt-10px">
          <span>因素类别：</span>
          <el-select v-model="factorVal" placeholder="请选择" style="width: 125px">
            <el-option
              v-for="item in factor"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="mt-10px">
          <span>购车时间：</span>
          <el-select v-model="buyCarTimeVal" placeholder="请选择" style="width: 120px">
            <el-option
              v-for="item in buyCarTime"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-date-picker v-show="timeShow === 0" v-model="weekValue" type="week" format="yyyy-MM-dd" :picker-options="weekOptions" placeholder="请选择周"></el-date-picker>
          <el-date-picker v-show="timeShow === 1" v-model="monthValue" type="month" :picker-options="monthOptions" placeholder="请选择月份"></el-date-picker>
          <el-date-picker v-show="timeShow === 2" v-model="yearValue" type="year" :picker-options="monthOptions" placeholder="请选择年份"></el-date-picker>
        </li>
        <li class="mt-10px">
          <span>选择区域：</span>
          <el-select v-model="areaVal" placeholder="请选择" style="width: 120px">
            <el-option
              v-for="item in area"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="provinceVal" placeholder="请选择">
            <el-option
              v-for="item in province"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-select v-model="cityVal" placeholder="请选择">
            <el-option
              v-for="item in city"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </li>
        <li class="choseList">
          <span>已选条件：</span>
          <span class="list" v-for="item in choseLists">{{item}}</span>
        </li>
        <li>
          <el-button class="btn">开始查询</el-button>
        </li>
      </ul>
      <div class="num">
        <div class="numBorder">
          <span>紧凑型车辆样本=25356</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="charts">
        <div class="title">
          <h3><i class="border-l"></i><span class="titleiner">用户购买决策因素趋势分析</span></h3>
        </div>
        <div v-show="firstChartShow" class="chart clearfix">
          <div class="clearfix">
            <h4>一级购买因素<img src="../assets/images/qmark.png" alt=""></h4>
            <div class="listTitle">
              <span><img src="../assets/images/chart.jpg" alt="">图形</span>
              <i class="greyBorder"></i>
              <span><img src="../assets/images/tab.png" alt="">数据</span>
              <i class="greyBorder"></i>
              <span style="color: #f67858"><img src="../assets/images/download.png" alt="">下载</span>
            </div>
          </div>
          <div id="firstChart"></div>
        </div>
        <div v-show="secondChartShow" class="chart clearfix">
          <div class="clearfix">
            <h4>二级购买因素<img src="../assets/images/qmark.png" alt=""></h4>
            <div class="listTitle">
              <span><img src="../assets/images/chart.jpg" alt="">图形</span>
              <i class="greyBorder"></i>
              <span><img src="../assets/images/tab.png" alt="">数据</span>
              <i class="greyBorder"></i>
              <span style="color: #f67858"><img src="../assets/images/download.png" alt="">下载</span>
            </div>
          </div>
          <div id="secondChart"></div>
        </div>
        <!--<div v-show="thirdChartShow" class="chart clearfix">-->
          <!--<div class="clearfix">-->
            <!--<h4>三级量化指标<img src="../assets/images/qmark.png" alt=""></h4>-->
            <!--<div class="listTitle">-->
              <!--<span><img src="../assets/images/chart.jpg" alt="">图形</span>-->
              <!--<i class="greyBorder"></i>-->
              <!--<span><img src="../assets/images/tab.png" alt="">数据</span>-->
              <!--<i class="greyBorder"></i>-->
              <!--<span style="color: #f67858"><img src="../assets/images/download.png" alt="">下载</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div id="thirdChart"></div>-->
        <!--</div>-->
        <div v-show="hotChartShow" class="chart clearfix">
          <div class="clearfix">
            <h4>热门趋势指标-PPH<img src="../assets/images/qmark.png" alt=""></h4>
            <div class="listTitle">
              <span><img src="../assets/images/chart.jpg" alt="">图形</span>
              <i class="greyBorder"></i>
              <span><img src="../assets/images/tab.png" alt="">数据</span>
              <i class="greyBorder"></i>
              <span style="color: #f67858"><img src="../assets/images/download.png" alt="">下载</span>
            </div>
            <span class="tops">
              <el-select v-model="topsVal" placeholder="请选择" style="width: 100px">
                <el-option
                  v-for="item in tops"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </span>
          </div>
          <div id="hotChart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mulSelect from './module/mulselect';
  export default {
    name: 'name',
    data() {
      return {
        on: 1,
        choseShow: false,
        // 已选条件
        choseLists: [],
        choseList1: [],
        choseList2: '',
        arrow: true,
        firstChartShow: true,
        secondChartShow: false,
        thirdChartShow: false,
        hotChartShow: false,
        timeShow: 2,
        moreChoseContent: '更多选项',
        moreChoseImgPath: `../assets/images/arrowDown.png`,
        carLevel: [{
          name: '不限',
          active: true
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
        satisfy: [{
          value: '不限'
        }, {
          value: '满意指数'
        }, {
          value: 'CPH'
        }],
        price: [{
          name: '不限',
          active: false
        }, {
          name: '5万以下',
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
        carObjective: [{
          name: '不限',
          active: true
        }, {
          name: '泡妞',
          active: false
        }, {
          name: '上下班',
          active: false
        }, {
          name: '自驾游',
          active: false
        }, {
          name: '购物',
          active: false
        }],
        country: [{
          name: '不限',
          active: true
        }, {
          name: '中国',
          active: false
        }, {
          name: '加拿大',
          active: false
        }, {
          name: '美国',
          active: false
        }, {
          name: '日本',
          active: false
        }],
        site: [{
          name: '不限',
          active: true
        }, {
          name: '汽车之家',
          active: false
        }, {
          name: '门户网站汽车频道',
          active: false
        }, {
          name: '微博',
          active: false
        }],
        buyCarTime: [{
          value: '按月查看'
        }, {
          value: '按季查看'
        }, {
          value: '按年查看'
        }],
        area: [{
          value: '按区域'
        }, {
          value: '按地域'
        }, {
          value: '按城市级别'
        }],
        province: [{
          value: '全国'
        }, {
          value: '河北'
        }, {
          value: '北京'
        }],
        city: [{
          value: '全部'
        }, {
          value: '承德'
        }, {
          value: '张家口'
        }],
        tops: [{
          value: 'TOP5'
        }, {
          value: 'TOP10'
        }, {
          value: 'TOP15'
        }, {
          value: 'TOP20'
        }],
        satisfyVal: 'CPH',
        carLevelVal: [],
        priceVal: [],
        carObjectiveVal: [],
        countryVal: [],
        siteVal: [],
        buyCarTimeVal: '按年查看',
        timeRange: [],
        monthValue: '',  // 选择月的时间
        weekValue: '',  // 选择周的时间
        yearValue: '',  // 选择年的时间
        areaVal: '按区域',
        provinceVal: '全国',
        cityVal: '全部',
        topsVal: 'TOP5',
        monthOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now() - 8.64e7;
          }
        },

        weekOptions: {
          disabledDate(time) {
            return time.getTime() + ((new Date().getDay() || 7) - 1) * 1000 * 60 * 60 * 24 > Date.now() - 8.64e7;
          },
          firstDayOfWeek: 1
        },
        firstChartOption: {
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['便捷性', '信息及多媒体功能', '内饰', '动力性', '外观'],
            y: 'bottom'
          },
          grid: {
            left: '0',
            right: '0',
            y: '15',
            bottom: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: true,
            data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年', '2017年']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '便捷性',
              type: 'line',
              stack: '便捷性',
              data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
              name: '信息及多媒体功能',
              type: 'line',
              stack: '信息及多媒体功能',
              data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
              name: '内饰',
              type: 'line',
              stack: '内饰',
              data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
              name: '动力性',
              type: 'line',
              stack: '动力性',
              data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
              name: '外观',
              type: 'line',
              stack: '外观',
              data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
          ]
        }
      };
    },
    components: {
      mulSelect
    },
//    choseLists 总的已选数组
    methods: {
//      select(val) {
//        console.log(val);
//        if (this.choseList1.indexOf(val) === -1) {
//          this.choseList1.push(val);
//          if (this.choseList1.length > 1) {
//            this.choseList1.shift();
//            this.choseLists.shift();
//          }
//        }
//        console.log(this.choseList1);
//        this.choseLists.push(this.choseList1[0]);
//      },
      moreChose() {
        if (this.choseShow === true) {
          this.choseShow = false;
          this.arrow = true;
          this.moreChoseContent = '更多选项';
        } else {
          this.choseShow = true;
          this.arrow = false;
          this.moreChoseContent = '收起';
        }
      },
      change(val) {
        if (this.on !== 1 && val === 1) {
          this.on = val;
          this.firstChartShow = true;
          this.secondChartShow = false;
          this.thirdChartShow = false;
          this.hotChartShow = false;
          this.choseShow = false;
          this.factorShow = false;
          this.moreChoseContent = '更多选项';
          this.satisfyVal = '不限';
          this.carLevelVal = [];
          this.priceVal = [];
          this.carObjectiveVal = [];
          this.countryVal = [];
          this.siteVal = [];
          this.factorVal = '二级因素';
          this.buyCarTimeVal = '按年查看';
          this.monthValue = '';
          this.weekValue = '';
          this.yearValue = '';
          this.areaVal = '按区域';
          this.provinceVal = '全国';
          this.cityVal = '全部';
        }
        if (this.on !== 2 && val === 2) {
          this.on = val;
          this.firstChartShow = false;
          this.secondChartShow = false;
          this.thirdChartShow = false;
          this.hotChartShow = true;
          this.choseShow = false;
          this.factorShow = true;
          this.moreChoseContent = '更多选项';
          this.satisfyVal = '不限';
          this.carLevelVal = [];
          this.priceVal = [];
          this.carObjectiveVal = [];
          this.countryVal = [];
          this.siteVal = [];
          this.factorVal = '二级因素';
          this.buyCarTimeVal = '按年查看';
          this.monthValue = '';
          this.weekValue = '';
          this.yearValue = '';
          this.areaVal = '按区域';
          this.provinceVal = '全国';
          this.cityVal = '全部';
          let hotChart = this.echarts.init(document.getElementById('hotChart'));
          hotChart.setOption(this.firstChartOption);
        }
        // 切换详细和热门后重置数据
      }
    },
//    watch: {
//      buyCarTimeVal: function(nVal) {
//        if (nVal === '按月查看') {
//          this.timeShow = 1;
//        } else if (nVal === '按季查看') {
//          this.timeShow = 0;
//        } else {
//          this.timeShow = 2;
//        }
//      },
//      satisfyVal: function(nVal, oVal) {
//        if (this.choseList1.indexOf(nVal) === -1) {
//          this.choseList1.push(nVal);
//          if (this.choseList1.length > 1) {
//            this.choseList1.shift();
//            this.choseLists.shift();
//          }
//        }
//        console.log(this.choseList1);
//        this.choseLists.push(this.choseList1[0]);
//      },
//      carLevel: function(nVal) {
//        var arr = [];
//        for (let i = 0; i < nVal.length; i++) {
//          if (nVal[i].active === true) {
// //            console.log(nVal[i].name);
// //            if (this.choseList2.indexOf(nVal[i]) === -1) {
// //              this.choseList2.push(nVal[i].name);
// //            }
//            this.choseList2 = '';
//            this.choseList2 += nVal[i].name;
// //            console.log(this.choseList2);
//            arr.push(this.choseList2);
//          }
//        }
//        console.log(arr);
//        var arr2 = this.choseList1.concat(arr);
//        this.choseLists = arr2;
//      }
//    },
    created() {
    },
    mounted() {
      // 点击依次钻取数据
      var _this = this;
      let firstChart = this.echarts.init(document.getElementById('firstChart'));
      firstChart.setOption(this.firstChartOption);
      firstChart.on('click', function(params) {
        _this.$nextTick(function() {
          _this.thirdChartShow = false;
          _this.secondChartShow = true;
          let secondChart = this.echarts.init(document.getElementById('secondChart'));
          secondChart.setOption(this.firstChartOption);
          secondChart.on('click', function(params) {
            _this.thirdChartShow = true;
            _this.$nextTick(function() {
              let thirdChart = this.echarts.init(document.getElementById('thirdChart'));
              thirdChart.setOption(this.firstChartOption);
            });
          });
        });
      });
    },
    destroyed() {
    }
  };
</script>

<style lang="scss">
  $fontColor: #97a8be;
  .oneFontMargin{
    margin-left: 12px;
  }
  .twoFontMargin{
    margin-left: 24px;
  }
  .threeFontMargin{
    margin-left: 36px;
  }
  .el-icon-caret-top:before {
    content: "\E603";
  }
  .el-icon-date:before {
    content: "\E622";
  }
  .main {
    background: #f9f9f9;
    .head {
      box-shadow: 0 0 5px #999;
      margin: 0 20px;
      .change{
        padding: 0 33px;
        background: #fff;
        .changeBorder{
          border-bottom: 1px solid #eee;
          span{
            display: inline-block;
            height: 45px;
            line-height: 45px;
            margin-right: 35px;
            padding: 0 8px;
            font-size: 16px;
            font-weight: bold;
            border-bottom: 4px solid #fff;
            cursor: pointer;
          }
          .on{
            color: #f67858;
            border-color: #f67858;
          }
        }
      }
      .filter {
        background: #fff;
        padding: 0 30px;
        .mt-10px {
          margin-top: 10px;
        }
        .choseList {
          margin-top: 13px;
          .list {
            display: inline-block;
            margin-right: 8px;
            padding: 0 10px;
            height: 22px;
            border: 1px solid #d8d8d8;
            border-radius: 2px;
            line-height: 22px;
            font-size: 14px;
            color: #999;
            background: #f4f4f4;
          }
        }
        .more {
          margin: 15px 74px;
          span {
            color: $fontColor;
            cursor: pointer;
            img {
              vertical-align: text-bottom;
              height: 14px;
            }
          }
        }
        .btn {
          width: 120px;
          height: 40px;
          color: #fff;
          background: #f67858;
          border: 0;
          margin: 18px 0 13px 0;
        }
      }
      .num {
        background: #fff;
        padding: 0 30px;
        height: 65px;
        .numBorder{
          border-top: 1px solid #eee;
        }
        span {
          font-size: 14px;
          line-height: 65px;
          color: #f67858;
        }
      }
    }
    .content {
      box-shadow: 0 0 5px #999;
      margin: 20px 20px;
      .charts {
        background: #fff;
        padding: 40px 30px;
        .title {
          .border-l {
            float: left;
            margin-right: 5px;
            width: 4px;
            height: 15px;
            background: #f67858;
          }
          .titleiner {
            margin-left: 5px;
            color: #f67858;
            font-weight: bold;
          }
        }
        .chart {
          margin: 25px 18px;
          width: 1018px;
          h4 {
            float: left;
            line-height: 28px;
            img {
              height: 10px;
              margin-left: 5px;
            }
          }
          .listTitle {
            width: 178px;
            height: 26px;
            border: 1px solid #d2d2d2;
            border-radius: 2px;
            float: right;
            .greyBorder{
              display: inline-block;
              vertical-align: middle;
              margin-left: 6px;
              width: 1px;
              height: 18px;
              background: #d2d2d2;
            }
            span {
              margin-left: 5px;
              text-align: center;
              line-height: 26px;
              display: inline-block;
              color: #999;
              cursor: pointer;
              img{
                vertical-align: text-bottom;
                margin-right: 2px;
              }
            }
          }
          .tops{
            float: right;
            margin-right:20px;
            margin-top: -2px;
          }
          #firstChart {
            height: 300px;
            width: 1018px;
          }
          #secondChart {
            height: 300px;
            width: 1018px;
          }
          #thirdChart {
            height: 300px;
            width: 1018px;
          }
          #hotChart {
            height: 300px;
            width: 1018px;
          }
        }
      }
    }
  }
</style>
