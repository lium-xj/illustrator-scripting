# illustrator-scripting
ai画板制作四周添加定位点
上个脚本问题是文字和定位点出现在同一个图层，导致删除会缺少版型备注，多个一步骤。
没有找到直接选择图层添加文字的方式，
现在通过移动图层添加文字，随后将图层移动到最后面.

图层常量
ZOrderMethod.BRINGTOFRONT：将图层置于最前方。
ZOrderMethod.BRINGFORWARD：将图层向前移动一个位置。
ZOrderMethod.SENDTOBACK：将图层置于最后方。
ZOrderMethod.SENDBACKWARD：将图层向后移动一个位置。
这些常量可以与图层对象的zOrder()方法一起使用，以控制图层的堆叠顺序，实现图层的前后关系调整。

此外，还有其他常量用于处理图层可见性、锁定状态等。例如：

LayerVisibility.VISIBLE：使图层可见。
LayerVisibility.HIDDEN：隐藏图层。
LayerLock.LockNone：解锁图层。
LayerLock.ArtworkLock：锁定图层上的艺术内容。
