# Browser
## setCssVar
🧿设置css变量值
```typescript
/**
 * @func setCssVar
 * @param {element:string | HTMLElement } 元素
 * @param {styleObj: Record<string, string>} 样式
 * @desc 设置css变量值
 * @example
  <div class="box" style="--var-special-color:red"></div>
 setCssVar('.box', {
  '--var-special-color':'red',
  '--var-common-color':'blue'
  })
 */
```
## getCssVar
🧿获取css变量值
```typescript
/**
 * @func getCssVar
 * @param {element:string | HTMLElement } 元素
 * @param {style: string} 样式
 * @param {callback: (css: string) => void} 样式
 * @desc 获取css变量值
 * @example
  <div class="box" style="--var-special-color:red"></div>
 getCssVar('.box', '--var-special-color', (css) => {
    console.log(css) // red
 })
 */
```
## useCamera
🧿调用摄像头
```typescript
/**
 * @func useShare
 * @param {video: {
  width: number
  height: number
} } video宽高 
 * @param {container: string | HTMLVideoElement = 'video'} video容器
 * @desc 调用摄像头
 * @example
  <video></video>
  useCamera(
    video: {
      width: 300,
      height: 300
    },
    'video'
  )
 */
```
## useShare
🧿通过调用本机的共享机制作为 Web Share API 的一部分。
```typescript
/**
 * @func useShare
 * @param {string} url URL
 * @param {string} text 文本
 * @param {string} title 标题
 * @param {file} files 文件
 * @return {void}
 * @desc 通过调用本机的共享机制作为 Web Share API 的一部分。
 * @example
  useShare({
    url: 'https://www.baidu.com',
    text: '分享文本',
    title: '分享标题',
  })
 */
```
## useResizeObserver
🧿监听浏览器窗口变化
```typescript
/**
 * @func useResizeObserver
 * @param {(width:number,height:number)=>void} callback 回调函数
 * @return {()=>void}} 停止监听函数 
 * @desc 📝 监听浏览器窗口变化
 * @example
  const stop = useResizeObserver((width,height)=>{
    console.log(width,height)
  })
  stop() // 停止监听
 */
```
## useWindowScroll
🧿监听浏览器滚动位置
```typescript
/**
 * @func useWindowScroll
 * @param {(left:number,top:number)=>void} callback 回调函数
 * @return {()=>void}} 停止监听函数 
 * @desc 监听浏览器滚动位置
 * @example 
  const stop = useWindowScroll((left,top)=>{
    console.log(left,top)
  })
  stop() // 停止监听
 */
```
## useElementBounding
🧿getBoundingClientRect响应式的封装
```typescript
/**
* @func useElementBounding
* @param {string | Element} element 监听目标
* @param {(rect: DOMRect)=>void} callback 回调函数
* @return {()=>void}} 停止监听函数 
* @desc 📝 getBoundingClientRect响应式的封装
* @example 
  const stop = useElementBounding('#id',(rect)=>{
    console.log(rect)
  })
  stop() // 停止监听
*/
```
## useVideo
🧿video的封装
```typescript
/**
* @func useVideo
* @param {{src:string,type:string}[]} sources 生成的video的source
* @param {{container:string|Element, controls:boolean,width:number,height:number:className:string,style:string}} options video的配置项
* @return {{play:function,playRest:function,playRate:function,playTime:function,playProgress:function}} video的操作方法
* @desc 📝 video的封装
* @example 
  // play 播放 或 暂停
  // playRest 重新播放
  // playRate 播放速率 2倍速 3倍速 4倍速 5倍速 playTime(n)
  // playTime 设置一个播放时间，如果之前有记录播放时间，则从记录的时间开始播放 platTime(n)
  // playProgress 快进n秒 playProgress(n) 或后退n秒 playProgress(-n)
  const { play, playReset, playRate, playTime, playProgress } = useVideo(
    [
      {
        src:
          'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.mp4',
        type: 'video/mp4',
      },
      {
        src:
          'https://mdn.github.io/learning-area/javascript/apis/video-audio/finished/video/sintel-short.webm',
        type: 'video/webm',
      },
    ],
    {
      container: '#main',
      width: 1000,
      height: 600,
      className: 'bg-red',
    },
  )
*/
```
## useIntersectionObserver
🧿监听元素重叠事件
```typescript
/**
 * @func useIntersectionObserver
 * @param {Element | string} element 被观察元素
 * @param {number} callback 回调函数
 * @return {void}
 * @desc 📝 监听元素重叠事件
 * @example 
  useIntersectionObserver('.loading', (entries) => {
    // 相对body容器.loading的重叠事件
  })
*/
```
## useWebp
🧿判断当前环境是否支持webp
```typescript
/**
 * @func useWebp
 * @return {Boolean}
 * @desc 📝 判断当前环境是否支持webp
 * @example useWebp() // true or false
 */
```

## calFps
🧿计算FPS
```typescript
/**
 * @func calFps
 * @return {()=>void} 停止函数
 * @desc 📝 计算FPS
 * @example 
  const stop = calFps()
  stop() // 停止计算
 */
```

## useMutationObserver
🧿MutationObserver封装
```typescript
/**
 * @func useMutationObserver
 * @param { string | Element} element 目标元素
 * @param { (mutationObserver: MutationObserver) => void} callback 回调函数
 * @param { ({childList?: boolean attributes?: boolean characterData?: boolean subtree?: boolean attributeOldValue?: boolean characterDataOldValue?: boolean attributeFilter?: string[] }) => void} options 参数
 * @return {()=>void} 停止函数
 * @desc 📝 MutationObserver封装
 * @example 
  const stop = useMutationObserver('#main', (mutations)=>{
    console.log(mutations)
  }, {attributes:true})
  stop() // 停止监听
 */
```

## picInPic
🧿给video开启画中画模式
```typescript
/**
 * @func picInPic
 * @param { string | HTMLVideoElement } video 背景图片地址
 * @return {()=>void} 开启关闭画中画模式
 * @desc 📝 给video开启画中画模式
 * @example
  const toggle = picInPic('#video')
  toggle() // 开启关闭画中画模式
 */
```

## shareScreen
🧿浏览器屏幕分享
```typescript
/**
 * @func shareScreen
 * @param { string | HTMLVideoElement } container 屏幕分享的展示容器
 * @param { ()=>void } callback  停止分享时的回调
 * @return {void} 
 * @desc 📝 浏览器屏幕分享
 * @example
  shareScreen('#main',() => {
    console.log("已停止分享");
  });
 */
```
## isBottom
🧿判断滚动是否触底
```typescript
/**
 * @func isBottom
 * @return {Boolean} 
 * @desc 📝 判断滚动是否触底
 * @example
  // isBottom(distance: string = 0): boolean
  console.log(isBottom()) // false
 */
```

## copy
🧿js控制复制的内容
```typescript
/**
 * @func copy
 * @param { string} str 待复制的内容
 * @return {Boolean} 
 * @desc 📝 js控制复制的内容
 * @example
  btn.onclick = () =>  {
    if(copy(textarea.value)){
      alert('复制成功')
    }
  }
 */
```
## fullScreen
🧿浏览器全屏
```typescript
/**
 * @func fullScreen
 * @return {void} 
 * @desc 📝 浏览器全屏
 * @example fullScreen()
 */
```
## exitFullScreen
🧿退出浏览器全屏
```typescript
/**
 * @func exitFullScreen
 * @return {void} 
 * @desc 📝 退出浏览器全屏
 * @example exitFullScreen()
 */
```
