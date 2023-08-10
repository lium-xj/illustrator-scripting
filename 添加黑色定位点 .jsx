var doc = app.activeDocument; // 获取当前活动文档
var artboard = doc.artboards[0]; // 获取第一个画板
var pt = 0.3528
var pt2 =  72 / 25.4

var circleRadius = 6; // 圆的半径为6mm

// 获取画板的位置信息
var left = artboard.artboardRect[0];
var top = -artboard.artboardRect[1];
var width = artboard.artboardRect[2] - left;
var height = -(artboard.artboardRect[3] - top);

// 修改画板尺寸
artboard.artboardRect=[
  artboard.artboardRect[0],
  artboard.artboardRect[1]+15*pt2,
  artboard.artboardRect[2],
  artboard.artboardRect[3]-15*pt2
]; // 将添加的高度加到画板的底部坐标


//添加水平中心上的文字
var text1 = doc.textFrames.add();
text1.contents='请输入填写画板的名字';
//设置文本的字体大小
text1.textRange.characterAttributes.size=5*pt2;
//设置文本的坐标
text1.left =  artboard.artboardRect[0]+width/2-40;
text1.top = artboard.artboardRect[1]-2;

/*
创建四个圆形路径项，并设置它们的位置和样式
createCircle(水平位置(方向向右)，垂直位置(方向向上为正))

artboard.artboardRect[0]水平移动距离，向右为正
artboard.artboardRect[1]垂直移动距离，向上为正
artboard.artboardRect[2]宽度
artboard.artboardRect[3]高度
*/
createCircle(circleRadius + artboard.artboardRect[0]+200, circleRadius + artboard.artboardRect[1]-10); // 左上角
createCircle(circleRadius + artboard.artboardRect[2]-200, circleRadius + artboard.artboardRect[1]-10); // 右上角
createCircle(circleRadius + artboard.artboardRect[0]+20, circleRadius + artboard.artboardRect[3] +10); // 左下角
createCircle(circleRadius + artboard.artboardRect[2]-30, circleRadius + artboard.artboardRect[3]+10); // 右下角

function createCircle(x, y) {
  var circlePosition = [y, x];

  // 创建一个新的圆形路径项
  var circle = doc.pathItems.ellipse(circlePosition[0], circlePosition[1], circleRadius * 2, circleRadius * 2);
  circle.fillColor = new RGBColor(0, 0, 0); // 设置填充颜色为黑色
  circle.stroked = false; // 禁用描边

  // 将圆形路径项添加到画板上
  circle.selected = true;
  doc.selection = [circle];
}
