<!--
 * @Description: 曲线动画组件
 * @Author: vonnie
 * @LastEditors: Please set LastEditors
 * @Date: 2019-03-10 00:45:27
 * @LastEditTime: 2019-03-10 14:32:53
 -->
<template>
  <canvas :id="id"></canvas>
</template>

<script>
import point from '@/assets/img/point.png'

export default {
  name: 'CurvePath',
  props: {
    id: String,
    width: {
      type: Number,
      default: 35
    },
    height: {
      type: Number,
      default: 55
    },
    lineWidth: {
      type: Number,
      default: 2
    },
    color: {
      type: String,
      default: '#125390'
    }
  },
  mounted () {
    var canvas = document.getElementById(this.id);
    canvas.width = this.width;
    canvas.height = this.height;

    this.drawAnimateCurveLine(canvas);
  },
  methods: {
    drawAnimateCurveLine: function (canvas) {
      var ctx = canvas.getContext('2d');
      var img = new Image();
      img.src = point;

      var percent = 0;
      var vm = this;
      function animate () {
        ctx.clearRect(0, 0, 35, 55);

        ctx.beginPath();
        ctx.save();
        ctx.lineWidth = vm.lineWidth || 2;
        ctx.strokeStyle = vm.color || '#125390';
        vm._drawCurvePath(ctx, [30, 5], [30, 40], -0.6);
        ctx.stroke();
        ctx.restore();
        ctx.closePath();

        ctx.beginPath();
        ctx.save();
        ctx.strokeStyle = '#5bffff';
        ctx.fillStyle = '#5bffff';

        vm._drawCurvePathByPercent(ctx, [30, 5], [30, 40], -0.6, percent);

        var gradient = ctx.createLinearGradient(10, 0, 10, 50);
        gradient.addColorStop(0, '#0084ff');
        gradient.addColorStop(1, '#5bffff');
        ctx.strokeStyle = gradient;
        ctx.lineCap = 'round';
        ctx.lineWidth = 2;

        ctx.stroke();

        ctx.restore();
        ctx.shadowColor = '#5bffff';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 20;
        ctx.closePath();

        percent = (percent + 1) % 100;
        requestAnimationFrame(animate);
      }
      animate();
    },

    /**
     * @description:绘制曲线
     * @param {Object} ctx
     * @param {Array} start - 起始点坐标
     * @param {Array} end - 终点坐标
     * @param {Number} curveness - 曲度
     */
    _drawCurvePath: function (ctx, start, end, curveness) {
      var cp = [
        (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
        (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
      ];
      ctx.moveTo(start[0], start[1]);
      ctx.quadraticCurveTo(cp[0], cp[1], end[0], end[1])
    },

    /**
     * @description:根据百分比绘制曲线
     * @param {Object} ctx
     * @param {Array} start - 起始点坐标
     * @param {Array} end - 终点坐标
     * @param {Number} curveness - 曲度
     * @param {Number} percent - 曲线的百分比
     */
    _drawCurvePathByPercent: function (ctx, start, end, curveness, percent) {
      var x, y;
      var cp = [
        (start[0] + end[0]) / 2 - (start[1] - end[1]) * curveness,
        (start[1] + end[1]) / 2 - (end[0] - start[0]) * curveness
      ];

      var startPoint = percent - 30 < 0 ? 0 : (percent - 30) / 100

      var startX = this.quadraticBezier(start[0], cp[0], end[0], startPoint);
      var startY = this.quadraticBezier(start[1], cp[1], end[1], startPoint);

      ctx.moveTo(startX, startY);

      for (var t = startPoint; t <= percent / 100; t += 0.01) {
        x = this.quadraticBezier(start[0], cp[0], end[0], t);
        y = this.quadraticBezier(start[1], cp[1], end[1], t);

        ctx.lineTo(x, y);
      }
      ctx.arc(x, y, 0.5, 0, 2 * Math.PI);
    },
    /**
     * @description:贝塞尔曲线方程
     * @param {Number} p0
     * @param {Number} p1
     * @param {Number} p2
     * @param {Number} t
     * @return: {Number}
     */
    quadraticBezier (p0, p1, p2, t) {
      var k = 1 - t;
      return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    }
  }
}
</script>

<style>
</style>
