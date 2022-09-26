# Canvas
## sliderValidation
🧿滑块验证功能
```typescript
/**
 * @Class sliderValidation
 * @param { string } url 背景图片地址
 * @param { (string|Element} container 滑块容器
 * @param {number} width 滑块大小 默认42px
 * @param {()=>void} callback 滑块验证成功回调函数
 * @return {void} 
 * @desc 📝 滑块验证功能
 * @example sliderValidation('/assets/image.jpg', document.body)
 */
```

## Canvas
🧿快速拿到canvas和ctx
```typescript
/**
 * @Class Canvas
 * @param { number } width canvas宽度
 * @param { number } height canvas高度
 * @desc  快速拿到canvas和ctx
 * @return {  { canvas, ctx } } 
 * @example const { canvas, ctx } = new Canvas(150,150)
 */
```

## getImageData
🧿快速获取canvas的imageData
```typescript
/**
 * @Class getImageData
 * @param { string } src 图片地址
 * @desc  快速获取canvas的imageData
 * @return {  { data, width, height } } 
 * @example const { data, width, height } = await getImageData('/assets/image.jpg')
 */
```

## CreateSignatureCanvas
🧿CreateSignatureCanvas
```typescript
/**
 * @Class CreateSignatureCanvas
 * @param { number } width canvas宽度
 * @param { number } height canvas高度
 * @desc  生成一个签名的canvas模板
 * @return {  signature } 
 * @example 
  const signature = new CreateSignatureCanvas(400, 400)
  document.body.appendChild(signature.canvas)
  const base64 = signature.save()
  signature.clear() // 清除签名
 */
```

## DotImageCanvas
🧿将图片的像素转为点阵图片
```typescript
/**
 * @Class DotImageCanvas
 * @param { string } src 图片路径
 * @param { string } color 点阵的颜色 为空则取原像素颜色
 * @param { number } fontWeight 点阵的粗细
 * @param { string } bgColor 图片背景色 默认为白色
 * @desc  将图片的像素转为点阵图片
 * @return {  dotImage  } 
 * @example 
  const dotImage = new DotImageCanvas('./img/1.jpg','red', 1, '#000')
  dotImage.append('#main')
  // 如果有更新,可以调用dotImage.repaint('xxx','xxx',x)更新，url一致回会服用上次的图片，只更新颜色和粗细
  setTimeout(() => {
    dotImage.repaint('./img/1.jpg','yellow' 1, '#000')
  }, 1000)
 */
```

## DotTextCanvas
🧿根据文字返回一个点阵的canvas
```typescript
/**
 * @Class DotTextCanvas
 * @param { string } text 文字
 * @param { number } fontSize 字体大小
 * @param { string } color 字体颜色
 * @param { number } fontWeight 点阵粗细
 * @desc  根据文字返回一个点阵的canvas
 * @return { dotText  } 
 * @example 
  // 可从dotText.status判断是否加载完成,如果加载完成,可以调用dotText.repaint(xxx)更新文字
  const dotText = DotTextCanvas('hello', 20, '#000', 1)
  dotText.append('#main') // 将canvas插入到指定元素中
 */
```
