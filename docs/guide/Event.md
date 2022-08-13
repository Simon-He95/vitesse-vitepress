# Event

## dragEvent
🧿点击拖拽松开事件封装
```typescript
/**
 * @func dragEvent
 * @param {string | HTMLElement} target 目标元素
 * @param { { dragStart: (e) => void , dragMove: (e) => void , dragEnd: (e) => void  }} options 绑定事件参数
 * @param {boolean } trigger 默认false,在容器上移动就会触发，为true时，只有按下在目标元素上移动才会触发
 * @desc dragEvent会在移动端是切换touch事件,在PC端是用mouse事件，保持接收的event对象基本是一致的
 * @return { ()=>void } 停止事件监听函数
 * @example
  dragEvent('#main', {
    dragStart(e) {
      console.log('start', e.clientX, e.clientY)
    },
    dragMove(e) {
      console.log('move',  e.clientX, e.clientY)
    },
    dragEnd(e) {
      console.log('end',  e.clientX, e.clientY)
    },
  })
 */
```

## addEventListener
🧿给元素添加事件函数
```typescript
/**
 * @func addEventListener
 * @param {string | HTMLElement} target 目标元素
 * @param { string} eventName 事件名称
 * @param {  (e)=>void} callback 回调函数
 * @param {AddEventListenerOptions } useCapture { once?: boolean;    passive?: boolean;    signal?: AbortSignal;}
 * @param {boolean } autoRemove 是否自动移除事件
 * @desc 给元素添加事件函数
 * @return { ()=>void } 停止事件监听函数
 * @example
  const remove = addEventListener('#btn',
    'click',
    () => {
      console.log('click')
    }
  )
  addEventListener(document,'DOMContentLoaded', () => {
    console.log('我就执行一次,然后事件就被自动移除了')
  }, false, true)
 */
```

## createEventBus
🧿创建发布订阅模式的实例
```typescript
/**
 * @func createEventBus
 * @desc 创建发布订阅模式的实例
 * @return { eventBus } 实例
 * @example
  const eventBus = createEventBus()
  eventBus.emit('test', 'hello')
  const listener = (data: string) => {
    console.log(data)
  }
  eventBus.on('test', listener)
  eventBus.off('test',listener)
 */
```
