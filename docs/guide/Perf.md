# Perf
## idleCallbackWrapper
- 包裹了requestIdleCallback和cancelIdleCallback的一个封装函数
- 兼容了浏览器的不同版本
- 简化了调用方式
```typescript
/**
 * @func idleCallbackWrapper
 * @desc  打印
 * @param { Function[] } tasks 待执行的任务数组
 * @param { number } timeout 超时时间(单位:毫秒)
 * @param { ()=>void } callback 执行完成后的回调函数
 * @return { ()=>void } 停止函数
 * @example
  // idleCallbackWrapper(tasks,()=>{console.log('end')}) // 默认第二个参数为2000的简写
  const tasks: Function[] = [
    () => {
      for (let i = 0; i < 3000; i++) {
        console.log(i);
      }
      console.log("first task");
    },
    () => {
      for (let i = 0; i < 30000; i++) {
        console.log(i);
      }
      console.log("second task");
    },
    () => {
      for (let i = 0; i < 30000; i++) {
        console.log(i);
      }
      console.log("third task");
    },
  ];
  // 封装前的场景
  requestIdleCallback(fn, { timeout: 1000 });
  function fn(deadline: Deadline) {
    console.log("deadline", deadline);
    while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && tasks.length > 0) {
      tasks.shift()();
    }
    if (tasks.length > 0) {
      requestIdleCallback(fn1);
    }
  }

  // 封装后的场景 更加简短方便
  const stop = idleCallbackWrapper(tasks, 1000)
 */
```
## animationFrameWrapper
- 包裹了requestAnimationFrame和cancelAnimationFrame的封装函数
- 兼容了浏览器的不同版本
- 简化了调用方式
```typescript
/**
 * @func animationFrameWrapper
 * @desc  打印
 * @param { Function } fn 待执行的函数
 * @param { number } timeout 超时时间(单位:毫秒)
 * @param { Boolean } autoStop  执行一次后停止动画
 * @return { ()=>void } 停止函数
 * @example
  const count = ref(0)
  // 封装前的场景
  const animationId = requestAnimationFrame(fn)

  function fn(timestamp) {
    if (start === null) {
      start = timestamp
    }
    else {
      const delta = timestamp - start
      if (delta > 1000) {
        count.value++
        if (count.value > 10) {
          cancelAnimationFrame(animationId)
        }
      }
    }
    requestAnimationFrame(fn)
  }
  // 封装后的场景 更加简短方便
  const stop = animationFrameWrapper(() => {
    count.value++
    if (count.value > 10) {
      stop()
    }
  }，1000)
 */
```
## fileSplice
大文件切片处理函数
```typescript
/**
 * @func fileSplice
 * @desc  打印
 * @param { File } file 文件对象
 * @param { number } size 切片大小(单位:字节) = 100kb // 切片的数量超过100就设定最大切片数量为100,大小为 File.size / 100
 * @return { Array } 切片数组
 * @example
  // fileSplice(file: File, chunkSize: number = 1024 * 100) 
  const chunks = fileSplice(file, 1024 * 1024) // [ { file: Blob, filename: string } ]
 */
```

## timeCost
计算函数执行时间
```typescript
/**
 * @func timeCost
 * @desc  打印
 * @param { Function } fn 函数
 * @return { void } 
 * @example
  timeCost(()=>{
    let a = 1
    for(let i=0;i<1000;i++){
      a++
    }
  }) // 输出: timeCost: 0.046s
 */
```
## asyncPool
控制异步并发执行的数量
```typescript
/**
 * @func asyncPool
 * @desc  控制异步并发执行的数量
 * @param { number } max 最大并发数量
 * @param { Promise<Array> } Array 异步执行的函数数组
 * @return { void } 
 * @example
  // limit 并发数量 , tasks httpRequest[]
  asyncPool(limit, tasks).then((results) => {
    // results is an array of results
  })
 */
```
## quickFind
效率O(1)的查找数组中的对象
```typescript
/**
 * @func quickFind
 * @desc  效率O(1)的查找数组中的对象
 * @param { Array } array 待查找的数组
 * @param { string } key 待查找的key,根据key来查找
 * @return { Object } 
 * @example
  const find = quickFind([{id:1,name:'simon'},{id:2,name:'simon'}],'id')
  find.find(1) // find: id = 1 => {id:1,name:'simon'}
  find.set({id:1,name:'simon'})
  find.delete(1) // delete: id = 1 => {id:1,name:'simon'}
 */
```
## quickFilter
快速模糊查找key名字的项和值 如: 'name=/h/'
```typescript
/**
 * @func quickFilter
 * @desc  快速模糊查找key名字的项和值 如: 'name=/h/'
 * @param { Array } array 待过滤的数组
 * @param { string } key 待过滤的key,根据key来过滤,支持正则匹配key名字的项和值的项
 * @return { Object } 
 * @example
  // quickFilter(array: any[], key: string | Array<string>)
      const arr = [
        {
          name: 'simon',
          age: 18,
          id: 0,
        },
        {
          name: 'simon5',
          age: 49,
          id: 3,
        },
        {
          name: "hi"
        },
        {
          name: "hi",
          age: "2",
          en: "0"
        }
      ]
  quickFilter(arr,['id=22', 'name=simon5']) // [{"age": 39,"id": 22,"name": "simon3"},{"age": 9,"id": 3,"name": "simon5"}]
  quickFilter(arr,['name=/h/']) // [{"age": "2","en": "0","name": "hi"},{"name": "hi"}]
 */
```
## memorizeFn
根据参数返回一个能缓存结果的函数
```typescript
/**
 * @func memorizeFn
 * @desc  根据参数返回一个能缓存结果的函数
 * @param { Function } fn  待缓存的函数
 * @return { Function } 
 * @example
  let count = 0
  const fn = memorizeFn(()=> count++)
  fn()
  fn()
  console.log(count) // => 1
 */
```

## debounce
函数防抖
```typescript
/**
 * @func debounce
 * @desc  函数防抖
 * @param { Function } fn  待防抖的函数
 * @param { number } delay  延迟时间
 * @return { Function } 
 * @example
const f = debounce(() => {
  console.log('debounce')
}, 1000)
 */
```
## throttle
函数节流
```typescript
/**
 * @func throttle
 * @desc  函数节流
 * @param { Function } fn  待节流的函数
 * @param { number } delay  延迟时间
 * @return { Function } 
 * @example
  const f = throttle(() => {
    console.log('throttle')
  }, 1000)
 */
```
## once
只执行一次的函数
```typescript
/**
 * @func once
 * @desc  只执行一次的函数
 * @param { Function } fn  待执行一次的函数
 * @return { Function } 
 * @example
  document.addEventListener('click', once(() => {
    console.log('click')
  }))
  document.click() // click
  document.click() // 
 */
```
