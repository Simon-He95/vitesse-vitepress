# Javascript
## treeToArray
🧿将树结构转换为数组
```typescript
/**
 * @func treeToArray
 * @param {Record<string,any>} tree 树结构数据
 * @param {string} children  子节点字段名
 * @return {Array}
 * @desc 将树结构转换为数组
 * @example 
  const tree = {
    id: 1,
    label: '一级',
    parent_id: 0,
    children: [
      {
        id: 2,
        label: '二级',
        parent_id: 1
      },
      {
        id: 3,
        label: '二级',
        parent_id: 1
      }
    ]
  }

  const arr = treeToArray(tree)
  console.log(arr)
  // [
  //   {"id":1,"parent_id":0,"label":"一级"},
  //   {"id":2,"parent_id":1,"label":"二级"},
  //   {"id":3,"parent_id":1,"label":"二级"}
  // ]
 */
```

## arrayToTree
🧿将树结构转换为数组
```typescript
/**
 * @func arrayToTree
 * @param {Record<string,any>[]} array 数组
 * @param {string|number} rootId  根节点id
 * @param { { id: 'id', pid: 'pid', children: 'children'}} options  配置项
 * @return {Array}
 * @desc 将树结构转换为数组
 * @example 
  const arr = [
    { id: 1, parent_id: 0, label: '一级' },
    { id: 2, parent_id: 1, label: '二级' },
    { id: 3, parent_id: 1, label: '二级' },
  ]
  console.log(arrayToTree(arr, { pid: 'parent_id' }))
  // [
  //   {
  //     id: 1,
  //     parent_id: 0,
  //     label: '一级',
  //     children: [
  //       {id: 2, parent_id: 1, label: '二级', children: []},
  //       {id: 3, parent_id: 1, label: '二级', children: []}
  //     ]
  //   }
  // ]
 */
```

## sleep
🧿睡眠函数
```typescript
/**
 * @func sleep
 * @param {number} time 睡眠时间(单位:毫秒)
 * @param {()=>void} callback  睡眠结束后的回调函数
 * @return {void}
 * @desc 睡眠函数
 * @example 
  sleep(1000, () => {
    console.log('睡眠结束')
  })
  // await sleep(1000)
 */
```

## uniqueArray
🧿去除数组中重复的元素,包括对象
```typescript
/**
 * @func uniqueArray
 * @param {Array} Array 待去重的数组
 * @param {()=>void} callback  睡眠结束后的回调函数
 * @return {Array} 去重后的数组
 * @desc 去除数组中重复的元素,包括对象
 * @example 
// 完全比对值来判断是否重复
const array = [
  {
    name: "simon",
    age: "19",
    hobby: ['1', '2', '3']
  },
  {
    name: "simon",
    age: "19",
    hobby: ['1', '2', '3']
  },
]
uniqueArray(array) 
// [
//   {
//     name: "simon",
//     age: "19",
//     hobby: ['1', '2', '3']
//   }
// ]
 */
```

## deepCompare
🧿深度比较两个对象是否相等
```typescript
/**
 * @func deepCompare
 * @param {Object} a  待比较的对象
 * @param {Object} b 待比较的对象
 * @param {string[] | RegExp} ignoreKeys 忽略指定的keys可以为数组或者正则表达式
 * @return {Array} 去重后的数组
 * @desc 去除数组中重复的元素,包括对象
 * @example 
  // params: { obj1: any, obj2: any, ignoreKeys: string[] | RegExp }
  const obj1 = {a:1,b:2,c:3}
  const obj2 = {a:1,b:2,c:3}
  const obj3 = {a:1,b:2,c:4}
  deepCompare(obj1,obj2) // {error:[],errorMsg:[]}
  deepCompare(obj1,obj3) // {error:['c'],errorMsg:['3','4']}
 */
```
## deepMerge
🧿Object.assign的深度拷贝版本
```typescript
/**
 * @func deepMerge
 * @param {Object} a  待返回的对象
 * @param {Object} b 待合并的对象
 * ...n
 * @return {a} 合并后的对象
 * @desc Object.assign的深度拷贝版本
 * @example 
  // params:  params: { target: Record<any, any>, ...sources: Record<any, any>[] } => target
  const target = { a: 1, b: 2, c: { d: 3, e: 4 } }
  const source1 = { b: 4, c: { d: 5 } }
  const source2 = { c: { e: 6 } }
  const result = deepMerge(target, source1, source2)
  console.log(result) // { a: 1, b: 4, c: { d: 5, e: 6 } }
 */
```

## deepClone
🧿深度拷
```typescript
/**
 * @func deepClone
 * @param {Object} obj  待拷贝的对象
 * @return {Object} 拷贝后的新对象
 * @desc 深度拷
 * @example 
  const obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3
      }
    }
  }
  obj.self = obj
  const obj2 = deepClone(obj) // 返回一个新对象
 */
```
## curry
🧿函数柯里化
```typescript
/**
 * @func curry
 * @param {Function} fn   待柯里化的函数
 * @return {Function} 被柯里化的函数
 * @desc 函数柯里化
 * @example 
  const add = (a, b) => a + b
  const add1 = curry(add)
  const add2 = add1(1)
  const add3 = add2(2)
  add3(3) // 6
 */
```

## traverse
- 遍历对象或数组,快速从options中函数名获取arr中的值
- 函数接收target-当前遍历的值，index-当前遍历的索引, item-当前遍历的那一项
- 使用类似与babel的traverse方法
- 使用场景：快速提取数据中的某些属性,转换为新的数据结构
```typescript
/**
 * @func curry
 * @param {Array} Array   待遍历的对象或数组
 * @param {Record<string,Function>} options   多个函数,以函数名来获取对象或数组中的key的item值
 * @return {void} 
 * @desc 遍历对象或数组
 * @example 
  // traverse(arr, { 'family.name'(target: any, index: number, item: any) { console.log(target, index) } })
  const obj = {
    name: 'simon',
    age: 18,
    family: {
      name: 'simon',
      age: 18,
    },
  }
  traverse(obj, {
    'family.name'(target: any, index: number, item: any) { // 遍历obj.family.name
      console.log(target, index)
    }
  })
 */
```

## transformKey
- 支持多层级的key
- 将对象的key转换成需要的key
- 使用场景: 前端定义字段有后端不一样的key，比如后端的key是id，前端的key是_id
```typescript
/**
 * @func transformKey
 * @param {Array} Array   待遍历的对象或数组
 * @param {Record<string,Function>} options   多个函数,以函数名来获取对象或数组中的key的item值
 * @return {void} 
 * @desc 遍历对象或数组
 * @example 
  // transformKey(obj, { 'family.name': 'familyName', 'family.age': 'familyAge' })
  const obj = {
    family: {
      name: 'simon',
      age: 18
    },
    name: 'simon'
  }
  const newObj = transformKey(obj, { // 将obj的key转换成新的key
    'family.name': 'familyName',
    'family.age': 'familyAge'
  })
  console.log(newObj)
  // { familyName: 'simon', familyAge: 18, name: 'simon' }
 */
```
## stringify
🧿将对象序列化为字符串
```typescript
/**
 * @func stringify
 * @param {Object} obj   要转换的对象
 * @param {{ sep?: 字符串;分隔符默认“&” eq?: 字符串;等号默认“=” hyp?: 布尔值;是否将驼峰设置为连字符默认 false px?: 布尔值;是否启用数字到 px 默认 false }} options   转换选项
 * @return {string} 
 * @desc 将对象序列化为字符串
 * @example 
  console.log(stringify({ user: 'simon', age: '18' })) // 'user=simon&age=18'
  console.log(stringify({ width: 100, height: '18px',backgroundColor:'red' },{ sep:';', eq:':', hyp:true, px: true})) // 'width:100px;height:18px;background-color:red'
 */
```
## parse
🧿将字符串转换为对象
```typescript
/**
 * @func parse
 * @param {string} str 待转换的字符串
 * @param {{ sep?: string; 字符串;分隔符默认“&” eq?: string; 字符串;等号默认“=” camel?: boolean; 布尔值;是否将连字符设置为驼峰默认 false }} options   转换选项
 * @return {string} 
 * @desc 将字符串转换为对象
 * @example 
  console.log(parse('user=simon&age=18')) // { user: 'simon', age: '18' }
  console.log(parse('width:100px;height:18px;background-color:red', {
    sep: ";",
    eq: ":",
    camel: true,
  })) // {width: '100px', height: '18px', backgroundColor: 'red'}
 */
```
## trim
🧿字符串去除空格
```typescript
/**
 * @func trim
 * @param {string} str 待转换的字符串
 * @param {type: 'pre' | 'post' | 'around' | 'all' = 'around'} type: 去除空格类型,默认去除前后空格
 * @return {string} 
 * @desc 字符串去除空格
 * @example 
  trim(str: string,type: 'pre' | 'post' | 'around' | 'all' = 'around') 
  console.log(trim('  h e l l o  ')) // 'h e l l o'
  console.log(trim('  h e l l o  ', 'pre')) // 'h e l l o  '
  console.log(trim('  h e l l o  ', 'post')) // '  h e l l o'
  console.log(trim('  h e l l o  ', 'all')) // 'hello'
 */
```
## compressCss
🧿压缩css
```typescript
/**
 * @func compressCss
 * @param {string} str css内容
 * @return {string} 
 * @desc 压缩css
 * @example compressCss(css: string): string
 */
```

## mapTransform
🧿生成映射对象结构扁平化
```typescript
/**
 * @func mapTransform
 * @param {string} str css内容
 * @return {string} 
 * @desc 生成映射对象结构扁平化
 * @example mapTransform(o: Record<string,any>,map:Record<string,string>): Record<string,any>
 * const o = {
 *   "player":{
 *    name:"simon"
 *  },
 *  bags:[
 *    {
 *    title:"magic"
 *    }
 *  ]
 * }
 * const map = {
 *  "player.name":"name",
 *  "bags[0].title":"attrs"
 * }
 * console.log(mapTransform(o, map)) 
 * {
 *    "name": "simon",
 *    "attrs": "magic"
 * }
 */
```


## mapTransformBack
🧿生成映射对象结构反扁平化
```typescript
/**
 * @func mapTransformBack
 * @param {string} str css内容
 * @return {string} 
 * @desc 生成映射对象结构反扁平化
 * @example mapTransform(o: Record<string,any>,map:Record<string,string>): Record<string,any>

 * const o = {
 *    "name": "simon",
 *    "attrs": "magic"
 * }
 * const map = {
 *  "player.name":"name",
 *  "bags[0].title":"attrs"
 * }
 * console.log(mapTransform(o, map)) 
 * {
 *   "player":{
 *    name:"simon"
 *  },
 *  bags:[
 *    {
 *    title:"magic"
 *    }
 *  ]
 * }
 */
```

## forEach
🧿一个可终止的forEach
```typescript
/**
 * @func forEach
 * @param {any[]} array 数组
 * @param {(value,i,array)=>void} callback 回调函数
 * @return {any} 
 * @desc 一个可终止可有返回值的forEach
 * @example 
 * const result = forEach([1,2,3],(item,i)=>{
 *  if(i===1) return item
 * }) // 2
 */
```

## collisionDetection
🧿检测物体是否碰撞
```typescript
/**
 * @func collisionDetection
 * @param {o1: string | HTMLElement, o2: string | HTMLElement}
 * @return {boolean} 
 * @desc 可传入dom元素或者选择器
 * @example 
 * if(collisionDetection('.box1','.box2')){
 * console.log('碰撞了')
 * }
 */
```

## generateQRCode
🧿根据链接生成二维码
```typescript
/**
 * @func generateQRCode
 * @param {content: string | HTMLCanvasElement, base64?: boolean, options?: Options<T, K>}
 * @return {boolean} 
 * @desc 可传入dom元素或者选择器
 * @example 
 * generateQRCode('http://xxxx',true) // base64 二维码
 * generateQRCode('http://xxxx',false) // svg 二维码
 */
```

## changeStack
🧿监听当前环境目标元素的栈变化
```typescript
/**
 * @func changeStack
 * @param {target: string | Element}
 * @return {boolean} 
 * @desc 可传入dom元素或者选择器
 * @example 
 * changeStack('.box')
 */
```
