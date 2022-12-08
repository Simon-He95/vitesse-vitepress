# Array
## diff
🧿对比2个数组中的相同或不同的部分
```typescript
/**
 * @func diff
 * @param { array1: any[] } 数组1
 * @param { array2: any[] } 数组2
 * @param {
 * {
 *  compare: 'same' | 'different'
 *  result: 'value' | 'index'
 * }
 * } 样式
 * @desc 📝 设置css变量值
 * @example
  import { diff } from 'lazy-js-utils'

  const arr1 = [1, 3, 5]
  const arr2 = [1, 4, 5]
  diff(arr1, arr2, { compare: 'same', result: 'value' }) // [1, 5]
  diff(arr1, arr2, { compare: 'same', result: 'index' }) // [0, 2]
  diff(arr1, arr2, { compare: 'different', result: 'value' }) // [ [3, 4] ]
  diff(arr1, arr2, { compare: 'different', result: 'index' }) // [1]
 */
```
## forEach
🧿一个可中断的forEach
```typescript
/**
 * @func forEach
 * @param { element:string | HTMLElement } 元素
 * @param { style: string } 样式
 * @param { callback: (css: string) => void } 样式
 * @desc 📝 如果返回值不是undefined，那么就会中断循环
 * @example
  import { forEach } from 'lazy-js-utils'

  const arr = [1, 2, 3, 4, 5]
  const result = forEach(arr, (item, index) => {
    if (item === 3) {
      return 'break'
    }
  }) // 'break'
 */
```
## getAverage
🧿获取数组的平均值
```typescript
/**
 * @func getAverage
 * @param { number[] } 数字数组
 * @param { number } fraction 保留小数位数
 * @desc 📝 获取数组的平均值
 * @example
  import { getAverage } from 'lazy-js-utils'

  const arr = [1, 2, 3, 4, 5]
  getAverage(arr) // 3
  getAverage(arr, 2) // 3.00
 */
```
## quickFilter
🧿快速过滤数组
```typescript
/**
 * @func quickFilter
 * @param { any[] } array 数组
 * @param { string | Array<string> } key 键
 * @return { any[] }
 * @desc 📝 快速过滤数组，key支持多条件和正则
 * @example
  import { quickFilter } from 'lazy-js-utils'
  
  const arr = [{
    name:'zhangsan'
  },{
    name:'lisi'
  },{
    name:'wangwu',
    age: 18
  }]

  quickFilter(arr, 'name=/lisi/') // [ { name: 'lisi' } ]
    quickFilter(arr, ['name=/lisi/','age=/18/']) // [ { name: 'lisi' }, { name: 'wangwu', age: 18 } ]
 */
```
## quickFind
🧿o(1)的根据key查找数组中的项
```typescript
/**
 * @func quickFind
 * @param { any[] } array 数组
 * @param { string | number } id 主键
 * @return {
 * {
 *  find: (id: any) => any
 *  set: (id: any, key: any, value?: any) => any[]
 *  delete: (id: any) => any[]
 * }
 * } 停止监听函数 
 * @desc 📝 o(1)的根据key查找数组中的项
 * @example
  import { quickFind } from 'lazy-js-utils'

  const arr = [{
    id: 1,
    name: 'zhangsan'
  },{
    id: 2,
    name: 'lisi'
  },{
    id: 3,
    name: 'wangwu'
  }]
  const qf = quickFind(arr, 'id')
  qf.find(1) // { id: 1, name: 'zhangsan' }
 */

```
## sort
🧿数组排序
```typescript
/**
 * @func sort
 * @param { any[] } array 数组
 * @param { Array<string | number> | number | string } match匹配条件
 * @return { any[] } 排序后的数组
 * @desc 📝 数组排序
 * @example 
  import { sort } from 'lazy-js-utils'
  
  const arr = [{
    age: 1
  }, {
    age: 4
  }, {
    age: 3
  }]
  // 按照age从小到大排列
  sort(arr, 'age') // [{ age: 1 }, { age: 3 }, { age: 4 }]
  // 按照age从大到小排列
  sort(arr, '-age') // [{ age: 4 }, { age: 3 }, { age: 1 }]
  // 先按照age从小到大排列，再按照name从大到小排列
  sort(arr,['age','-name'])
 */
```

## sortByOrder
🧿按照顺序排序
```typescript
/**
* @func sortByOrder
* @param { any[] } sortArr 数组
* @param { string[] } order 排序规则
* @return { string } prop 根据哪个属性排序 
* @desc 📝 按照顺序排序
* @example 
  import { sortByOrder } from 'lazy-js-utils'

  const order = ['name', '*', 'weight']
  const arr = [{
    props: {
      key: 'weight',
    },
  }, {
    props: {
      key: 'name',
    },
  }, {
    props: {
      key: 'width',
    },
  }, {
    props: {
      key: 'age',
    },
  }]
  sortByOrder(arr, order, 'props.key') // [{ props: { key: 'name' } }, { props: { key: 'weight' } }, { props: { key: 'width' } }, { props: { key: 'age' } }]
*/
```
## uniqueArray
🧿数组根据值去重
```typescript
/**
* @func uniqueArray
* @param { any[] } array 数组
* @return { any[] } 去重后的数组
* @desc 📝 数组根据值去重
* @example 
  import { uniqueArray } from 'lazy-js-utils'

   const array = [
      {
        name: 'simon',
        age: '18',
      },
      {
        name: 'simon',
        age: '18',
      },{
        name:'simon'
      }
    ]
    const result = uniqueArray(array) // [{ name: 'simon', age: '18' }, { name: 'simon', age: '18' }]
*/
```
