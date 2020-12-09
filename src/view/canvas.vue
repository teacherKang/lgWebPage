<template>
  <div>
    <canvas >你的浏览器不支持canvas，请更换浏览器试试！</canvas>
    <!-- <img src="http://qiniu.zdmlg.com/timg.jpg" id="image" alt=""> -->
  </div>
</template>
<script>
  export default{
    data(){
      return {

      }
    },
    mounted(){
      let childcanvas = document.querySelector('canvas');
      // let warpperDom = document.querySelector(".main");
      // let bodyDom = document.querySelector("body");
      // canvas.width  = warpperDom.clientWidth-1;
      // canvas.height = bodyDom.clientHeight - 165;
      // let context = canvas.getContext('2d');
      // context.fillStyle='brown';
      // let image = document.createElement("img");
      // image.src = "http://qiniu.zdmlg.com/timg.jpg";
      // image.onload = function(){
      //   context.save();
      //   context.globalAlpha = 0.5;
      //   context.drawImage(image, 0, 0,warpperDom.clientWidth,bodyDom.clientHeight - 165);
      //   context.restore();
      //   context.font = '48px serif';
      //   context.fillText('标题', 96, 90);
      // }
      // let childcanvas = document.createElement("canvas");
      let childcontext = childcanvas.getContext('2d');
      var center = [20, 20];
      // 线长度和距离圆心距离
      var length = 8, offset = 8;
      // 开始绘制
      childcontext.lineWidth = 4;
      childcontext.lineCap = 'round';
      for (var angle = 0; angle < 360; angle += 45) {
        // 正余弦
        var sin = Math.sin(angle / 180 * Math.PI);
        var cos = Math.cos(angle / 180 * Math.PI);
        // 开始绘制
        childcontext.beginPath();
        childcontext.moveTo(center[0] + offset * cos, center[1] + offset * sin);
        childcontext.lineTo(center[0] + (offset + length) * cos, center[1] + (offset + length) * sin);
        childcontext.strokeStyle = 'rgba(0,0,0,'+ (0.25 + 0.75 * angle / 360) +')';
        childcontext.stroke();
      }
    },
    methods:{

    }
  }
</script>
<style scoped>
  canvas{
    width: 100%;
    height: 100%;
    border: 1px solid brown;
  }
</style>