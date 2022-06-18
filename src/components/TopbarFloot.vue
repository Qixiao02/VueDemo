<template>
  <div id="dh">
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">共产党历史</a>
        <ul>
          <li><a href="#/TopbarFloot/GCD1">发展史</a></li>
          <li><a href="#/TopbarFloot/History">重大事件</a></li>
        </ul>
      </li>
      <li><a href="#">烈士壮举</a>
        <ul>
          <li><a href="#/TopbarFloot/Hero1">烈士董存瑞</a></li>
          <li><a href="#/TopbarFloot/Hero2">烈士佟麟阁</a></li>
        </ul>
      </li>
      <li><a href="#">团歌团徽</a>
        <ul>
          <li><a href="#/TopbarFloot/Tuange">团歌</a></li>
          <li><a href="#/TopbarFloot/Tuanhui">团徽</a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="tes_one">
  <router-view/>
  </div>
  <!-- 底部 -->
  <div class = "links">
      <a href ="#">关于我们</a>
      <a href ="#">联系我们</a><br /><br />
        <div class = "copyright">
          地址：广东省清远市清城区广东工程职业技术学院
        </div>
  </div>

</template>

<script>
</script>

<style>
  @import url("../css/Home.css");
</style>
