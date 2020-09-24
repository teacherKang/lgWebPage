<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
::-webkit-scrollbar{  
    width:10px;
    height:10px;     
    background-color:#eee;
 } 
 ::-webkit-scrollbar-corner {
   background-color:#fafafa;
 }
 
 ::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(253,253,253,0.8);
  border-radius: 5px;
  background-color:#fafafa;
  padding:3px 0 ;
 }
 ::-webkit-scrollbar-thumb{
   border-radius: 5px;
   -webkit-box-shadow: inset 0 0 6px rgba(194,194,194,.8);
   background-color:#c2c2c2;
 }
 ::-webkit-scrollbar-thumb:hover{
    background-color:#999;
 }
</style>
