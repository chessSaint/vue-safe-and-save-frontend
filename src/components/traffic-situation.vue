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
      <div id="map" class="main-container-left col-lg-8"></div>
      <div class="main-container-right col-lg-4"></div>
    </aside>
    <!--main-container分区结束-->
  </div>
</template>

<script>
  export default {
      name: "traffic-situation",
      data () {
          return {
              mapOptions: {
                  scrollWheelZoom: true
              }
          }
      },
      mounted() {
          var map = new BMap.Map('map', {
              enableMapClick: true,
          });
          map.centerAndZoom(new BMap.Point(104.06, 30.67), 11);
          map.enableScrollWheelZoom(true);
          // map.setMapStyleV2({
          //     styleId: '104e675a9969be8180e7daf0ea8d7ce7'
          // });
      }
  }
</script>

<style scoped>
  /*.row {*/
  /*  background-color: #455262;*/
  /*}*/
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
    background-color: #8fd19e;
  }

</style>
