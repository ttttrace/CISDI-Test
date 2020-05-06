<template>
<div class="wrap">
    <div class="nav" >
        <router-link to="/index" active-class="active">首页</router-link>
        <router-link to="/list" active-class="active">列表</router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<style>
.wrap{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    font-family: microsoft yahei;
    font-size: 16px;
}
.nav{
    position: relative;
    z-index: 999;
    height: 73px;
    text-align: center;
   box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.04);
   background: none repeat scroll 0% 0% #fff;
    margin: auto;
}
a{ display: inline-block;
    text-align: center;
    line-height: 70px;
    padding-left: 40px;
    padding-right: 40px;
     text-decoration: none;
    outline: 0;
    cursor: pointer;
    font-size: 26px;
    font-weight: 400;
    color: rgba(95, 99, 104, 1);
}
.active{
    border-bottom: 4px solid #2c58ab;
    color:#2c58ab;
}
</style>
