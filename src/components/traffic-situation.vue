<template>
  <div>
    <!--header分区开始-->
    <header id="traffic-situation-menu" class="row no-gutters">
      <div class="nav menu-pull-left col-lg-8">
        <ul>
          <li><a href="#"><i class="menu-icon fa-laptop"></i>数据源配置</a></li>
          <li><a href="#"><i class="menu-icon fa-laptop"></i>实时路况</a></li>
          <li><a href="#contact"><i class="menu-icon fa-laptop"></i>预测</a></li>
        </ul>
      </div>
      <div class="menu-pull-right col-lg-4">
        <ul class="row">
          <li><a href="#"><i class="menu-icon fa-laptop"></i>高速</a></li>
          <li><a href="#"><i class="menu-icon fa-laptop"></i>景区</a></li>
          <li><a href="#"><i class="menu-icon fa-laptop"></i>购物</a></li>
          <li><a href="#"><i class="menu-icon fa-laptop"></i>全国</a></li>
        </ul>
      </div>

    </header>
    <!--header分区结束-->

    <!--main-container分区开始-->
    <aside id="main-container" class="row no-gutters my-no-gutters col-lg-12">
      <baidu-map :center="center" :zoom="zoom" :mapStyle="mapStyle" scroll-wheel-zoom="true" @ready="handler" class="main-container-left col-lg-8"></baidu-map>
      <div class="main-container-right col-lg-4">
        <div id="myChart1"></div>
        <div id="details">
          <h2 id="details-head" class="text-center">实时路况拥堵排行</h2>
          <div id="situation-table" class="container my-no-gutters">
            <table class="table table-bordered">
                <thead style="display:block;overflow-y: scroll;border-bottom:1px solid #eee;">
                <tr class="row no-gutters">
                  <th class="col-2">栏目一</th>
                  <th class="col-2">栏目二</th>
                  <th class="col-2">栏目三</th>
                  <th class="col-2">栏目一</th>
                  <th class="col-2">栏目二</th>
                  <th class="col-2">栏目三</th>
                </tr>
                </thead>
                <tbody style="display:block; max-height:200px;overflow-y: scroll;">
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                <tr class="row no-gutters">
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                  <td class="col-2">星期一</td>
                  <td class="col-2">星期二</td>
                  <td class="col-2">星期三</td>
                </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </aside>
    <!--main-container分区结束-->
  </div>
</template>

<script>
  export default {
      name: "traffic-situation",
      data () {
          return {
              center: {lng: 0, lat: 0},
              zoom: 3,
              mapStyle: {style: 'midnight'},
          }
      },
      methods: {
          handler ({BMap, map}) {
              this.center.lng = 110.404;
              this.center.lat = 36.915;
              this.zoom = 5;
              this.map.scrollWheelZoom(true);
          },
          drawChart() {
              let myChart1 = this.$echarts.init(document.getElementById('myChart1'));
              let option = {
                  backgroundColor: '#080b30',
                  title: {
                      text: '拥堵里程(km)',
                      textStyle: {
                          align: 'center',
                          color: '#fff',
                          fontSize: 20,
                      },
                      top: '5%',
                      left: 'center',
                  },
                  tooltip: {
                      trigger: 'axis',
                      axisPointer: {
                          lineStyle: {
                              color: {
                                  type: 'linear',
                                  x: 0,
                                  y: 0,
                                  x2: 0,
                                  y2: 1,
                                  colorStops: [{
                                      offset: 0,
                                      color: 'rgba(0, 255, 233,0)'
                                  }, {
                                      offset: 0.5,
                                      color: 'rgba(255, 255, 255,1)',
                                  }, {
                                      offset: 1,
                                      color: 'rgba(0, 255, 233,0)'
                                  }],
                                  global: false
                              }
                          },
                      },
                  },
                  grid: {
                      top: '15%',
                      left: '5%',
                      right: '5%',
                      bottom: '15%',
                      // containLabel: true
                  },
                  xAxis: [{
                      type: 'category',
                      axisLine: {
                          show: true
                      },
                      splitArea: {
                          // show: true,
                          color: '#f00',
                          lineStyle: {
                              color: '#f00'
                          },
                      },
                      axisLabel: {
                          color: '#fff'
                      },
                      splitLine: {
                          show: false
                      },
                      boundaryGap: false,
                      data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],

                  }],

                  yAxis: [{
                      type: 'value',
                      min: 0,
                      // max: 140,
                      splitNumber: 4,
                      splitLine: {
                          show: true,
                          lineStyle: {
                              color: 'rgba(255,255,255,0.1)'
                          }
                      },
                      axisLine: {
                          show: false,
                      },
                      axisLabel: {
                          show: false,
                          margin: 20,
                          textStyle: {
                              color: '#d1e6eb',

                          },
                      },
                      axisTick: {
                          show: false,
                      },
                  }],
                  series: [{
                      name: '注册总量',
                      type: 'line',
                      // smooth: true, //是否平滑
                      showAllSymbol: true,
                      // symbol: 'image://./static/images/guang-circle.png',
                      symbol: 'circle',
                      symbolSize: 25,
                      lineStyle: {
                          normal: {
                              color: "#6c50f3",
                              shadowColor: 'rgba(0, 0, 0, .3)',
                              shadowBlur: 0,
                              shadowOffsetY: 5,
                              shadowOffsetX: 5,
                          },
                      },
                      label: {
                          show: true,
                          position: 'top',
                          textStyle: {
                              color: '#6c50f3',
                          }
                      },
                      itemStyle: {
                          color: "#6c50f3",
                          borderColor: "#fff",
                          borderWidth: 3,
                          shadowColor: 'rgba(0, 0, 0, .3)',
                          shadowBlur: 0,
                          shadowOffsetY: 2,
                          shadowOffsetX: 2,
                      },
                      tooltip: {
                          show: false
                      },
                      areaStyle: {
                          normal: {
                              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                  offset: 0,
                                  color: 'rgba(108,80,243,0.3)'
                              },
                                  {
                                      offset: 1,
                                      color: 'rgba(108,80,243,0)'
                                  }
                              ], false),
                              shadowColor: 'rgba(108,80,243, 0.9)',
                              shadowBlur: 20
                          }
                      },
                      data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02, ]
                  },
                      {
                          name: '注册总量',
                          type: 'line',
                          // smooth: true, //是否平滑
                          showAllSymbol: true,
                          // symbol: 'image://./static/images/guang-circle.png',
                          symbol: 'circle',
                          symbolSize: 25,
                          lineStyle: {
                              normal: {
                                  color: "#00ca95",
                                  shadowColor: 'rgba(0, 0, 0, .3)',
                                  shadowBlur: 0,
                                  shadowOffsetY: 5,
                                  shadowOffsetX: 5,
                              },
                          },
                          label: {
                              show: true,
                              position: 'top',
                              textStyle: {
                                  color: '#00ca95',
                              }
                          },

                          itemStyle: {
                              color: "#00ca95",
                              borderColor: "#fff",
                              borderWidth: 3,
                              shadowColor: 'rgba(0, 0, 0, .3)',
                              shadowBlur: 0,
                              shadowOffsetY: 2,
                              shadowOffsetX: 2,
                          },
                          tooltip: {
                              show: false
                          },
                          areaStyle: {
                              normal: {
                                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                      offset: 0,
                                      color: 'rgba(0,202,149,0.3)'
                                  },
                                      {
                                          offset: 1,
                                          color: 'rgba(0,202,149,0)'
                                      }
                                  ], false),
                                  shadowColor: 'rgba(0,202,149, 0.9)',
                                  shadowBlur: 20
                              }
                          },
                          data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
                      },
                  ]
              };
              myChart1.setOption(option);
          }
      },
      mounted() {
          this.drawChart();
      },
  };
</script>

<style scoped>
  .my-no-gutters {
    padding-left: 0;
    padding-right: 0;
  }
  #traffic-situation-menu {
    width: 100%;
    height: 60px;
    background-color: #455262;
  }
  .menu-pull-right ul{
    float:left;
    list-style:none;
    display: flex;
    margin:0px;
    padding: 0 0 0 60px;
  }
  .menu-pull-right li:nth-child(1) {
    border-left: 2px solid #8fd19e;
  }
  .menu-pull-right ul li a{
    width: 80px;
    line-height:60px;
    font-size: 16px;
    text-decoration:none;
    text-align: center;
    color:#fff;
    display:block;
  }

  .menu-pull-right ul li a:hover{
    background:#262626;
    color:#fff;
  }
  #main-container {
    height: calc(100vh - 60px);
  }
  .main-container-left {
    height: 100%;
    background-color: #0b2e13;
  }
  .main-container-right {
    position: relative;
  }
  #myChart1 {
    height: 50%;
    background-color: #f1b0b7;
  }
  #details {
    height: 50%;
    background-color: #474A4F;
  }
  #details-head {
    color: white;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
  }

</style>
