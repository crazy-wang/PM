<template lang="html">
  <div class="leftmenu">
    <el-menu unique-opened="true" :default-active="$route.path" router theme="dark">
      <el-submenu index="1">
        <template slot="title">目标市场研究</template>
        <el-submenu index="1-1">
          <template slot="title">用户需求趋势研究</template>
          <el-menu-item index="/userResearch">用户好评与痛点趋势</el-menu-item>
          <el-menu-item index="/userChose">用户购买决策因素趋势</el-menu-item>
          <el-menu-item index="/useCar">用户场景趋势</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">用户好评与痛点解析</template>
          <el-menu-item index="/indexAnalysis">指标与排行分析</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">用户购买决策因素研究</template>
          <el-menu-item index="/userBuyResearch">用户购买决策因素研究</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">产品细节定义</template>
        <el-submenu index="2-1">
          <template index="1-1" slot="title">细节现状评价</template>
          <el-menu-item index="/detailNow">细节现状评价</el-menu-item>
        </el-submenu>
        <el-submenu index="2-2">
          <template index="1-2" slot="title">用户偏好分析</template>
          <el-menu-item index="1-2-1">用户偏好分析</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">论坛活跃度</template>
        <el-submenu index="3-1">
          <template slot="title">论坛活跃度</template>
          <el-menu-item index="1-1-1">活跃度和热帖排行</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">用户讨论热度排行</template>
        <el-submenu index="4-1">
          <template index="1-1" slot="title">热门文章</template>
          <el-menu-item index="1-1-1">热门文章</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">用户舆论分析</template>
        <el-submenu index="5-1">
          <template slot="title">用户评价全景</template>
          <el-menu-item index="1-1-1">热门指标</el-menu-item>
          <el-menu-item index="1-1-1">二级指标</el-menu-item>
          <el-menu-item index="1-1-1">三级指标</el-menu-item>
          <el-menu-item index="1-1-1">四级指标</el-menu-item>
        </el-submenu>
        <el-submenu index="5-2">
          <template slot="title">用户评价解析</template>
          <el-menu-item index="1-1-1">指标与排行解析</el-menu-item>
        </el-submenu>
        <el-submenu index="5-3">
          <template slot="title">用户评价趋势</template>
          <el-menu-item index="1-1-1">用户评价趋势细分</el-menu-item>
        </el-submenu>
        <el-submenu index="5-4">
          <template slot="title">用户评论分析</template>
          <el-menu-item index="1-1-1">新闻评论-分析详情</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">产品评价解析</template>
        <el-submenu index="6-1">
          <template slot="title">产品评价解析</template>
          <el-menu-item index="1-1-1">指标与排行分析</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">购买意向分析</template>
        <el-submenu index="7-1">
          <template slot="title">购买决策因素分析</template>
          <el-menu-item index="1-1-1">购买决策因素分析</el-menu-item>
        </el-submenu>
        <el-submenu index="7-2">
          <template slot="title">战败因素分析</template>
          <el-menu-item index="1-1-1">文章详情</el-menu-item>
          <el-menu-item index="1-1-1">战败车型因素分析</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'leftmenu'
};
</script>

<style lang="scss" scoped>
.leftmenu {
    user-select: none;
}
</style>
