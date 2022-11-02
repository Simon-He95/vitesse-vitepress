# 图片
## Waterfall
🧿瀑布流布局
```typescript
/**
 * @func Waterfall
 * @param {string[]} urlList 图片地址列表
 * @param {string} container  父容器 默认为body
 * @param {number} width   图片宽度 默认为200
 * @return {()=>void} 追加图片函数
 * @desc 瀑布流布局
 * @example
  const append = waterfall([
    "../public/kt.png",
    "../public/favicon.svg",
    "../public/wechat.jpg",
    "../public/favicon.svg",
    "../public/favicon.svg",
    "../public/zfb.jpg",
    "../public/favicon.svg",
    "../public/favicon.svg",
  ]);

  useWindowScroll(() => {
    if (isBottom()) { // 触底追加新图片
      append([
        "../public/kt.png",
        "../public/favicon.svg",
        "../public/wechat.jpg",
        "../public/favicon.svg",
        "../public/favicon.svg",
        "../public/zfb.jpg",
        "../public/favicon.svg",
        "../public/favicon.svg",
      ]);
    }
  });
 */
```

## preload
🧿预加载图片
```typescript
/**
 * @func preload
 * @param {string|string[]} src 图片路径或图片路径集合
 * @return {void}
 * @desc 预加载图片
 * @example
  preload('https://img.yzcdn.cn/vant/cat.jpeg')
  preload(['https://img.yzcdn.cn/vant/cat.jpeg', 'https://img.yzcdn.cn/vant/dog.jpeg'])
  <img src="https://img.yzcdn.cn/vant/cat.jpeg" /> // memory cache
 */
```

## lazyLoad
🧿图片视频懒加载
```typescript
/**
 * @func lazyLoad
 * @param {string|Element} element 父容器
 * @param {Element} root 指定相对容器默认是body
 * @param {string} rootMargin 距离相对容器的距离多少加载图片 默认: '0px 0px 200px 0px' 距离底部200px加载图片
 * @param {number} threshold 指定图片加载的阈值
 * @param {string|Element} element 图片元素
 * @return {void}
 * @desc 图片视频懒加载
 * @example
  // usage
  // main容器下所有的图片和video都会被懒加载，默认会使用一个loading，可以在第二个参数覆盖loading，如果想针对某个设置独立的loading，可以在元素的src="loading.gif" data-src="picture.png"
  <main>
    <video src="xxx.mp4"></video>
    <img src="loading.gif" data-src="picture.png" />
  </main>
    lazyLoad('#main','xxx.loading.gif'); 
 */
```
## compressImage
🧿图片压缩函数
```typescript
/**
 * @func compressImage
 * @param {string | base64 | blob} source 图片路径 | 图片base64 | 图片blob
 * @param {{quality: number, maxWidth: number, maxHeight: number, type: 'Blob' | 'base64'}} options 压缩参数
 * @return {Blob}
 * @desc 📝 图片压缩函数
 * @example
  const file = fileEl.value.files[0];
  const result = await compressImage(file, {
    quality: 0.5,
    maxWidth: 100,
    maxHeight: 100,
    type: "blob",
  }); // Blob {size: 3095, type: 'image/jpeg'}
 */
```
