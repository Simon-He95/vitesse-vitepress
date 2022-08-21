# Dom
## insertElement
🧿插入dom元素
```typescript
/**
 * @func insertElement
 * @param {HTMLElement  | string} parent 父元素
 * @param {HTMLElement  | string} element 插入元素
 * @param {Element | string | null | undefined} target 插入位置 (默认插入到第一个节点)
 * @return {void}
 * @desc 📝 插入dom元素
 * @example
  const div = createElement('div', {
    id: 'test',
    style: 'background: red;font-size:20px',
  })
  insertElement('#main', div) // 插入到第一个节点
  insertElement('#main', '#test') // 插入到第一个节点
  insertElement('#main', div, null) // 插入到最后
 */
```
## createElement
🧿创建dom元素
```typescript
/**
 * @func createElement
 * @param {string} tagName 元素标签名称
 * @param {object} attrs 元素属性对象
 * @return {Element}
 * @desc 📝 创建dom元素
 * @example
  const div = createElement('div', {
    class: 'className',
    style: 'color: red;',
    style: 'color: red;font-size: 20px;'',
  })
```
## removeElement
🧿删除dom元素
```typescript
/**
 * @func removeElement
 * @param {HTMLElement  | string} dom 元素
 * @return {void}
 * @desc 📝 删除dom元素
 * @example removeElement(element) // 返回element的parentNode
 */
```
## findElement
🧿查找dom元素
```typescript
/**
 * @func findElement
 * @param {HTMLElement  | string} selector 查找的选择器
 * @param {Boolean} single 是否只查找一个元素
 * @return {HTMLElement | HTMLElement[]}
 * @desc 📝 查找dom元素
 * @example 
  findElement('video') // <video>
  findElement('video', true) // [<video>, <video>]
 */
```

## addScript
🧿动态添加script标签放 => head
```typescript
/**
 * @func addScript
 * @param {string} src link路径
 * @return {void}
 * @desc 📝 动态添加script标签放 => head
 * @example addLink('https://cdn.bootcss.com/bootstrap/4.1.0/css/bootstrap.min.css')
 */
```
## addLink
🧿动态添加script标签放 => head
```typescript
/**
 * @func addLink
 * @param {string} src script路径
 * @return {void}
 * @desc 📝 动态添加script标签放 => head
 * @example addScript('https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js')
 */
```
## addStyle
🧿动态添加style标签 => head
```typescript
/**
 * @func addStyle
 * @param {string} str style样式
 * @return {void}
 * @desc 📝 动态添加script标签放 => head
 * @example 
  // <style>
  //  .test {
  //   color: red;
  //  }
  // </style>
  // 将会杯插入head标签中
  // 1.
  // addStyle(`
  //   .test {
  //     color: red;
  //   }
  // `)
  // 2.
  // addStyle('element-plus/dist/index.css')
  // 3.
  // addStyle('./index.css')
 */
```
## download
🧿下载文件
```typescript
/**
 * @func download
 * @param {string} url 文件路径
 * @param {string} filename 文件名
 * @return {void}
 * @desc 📝 下载文件
 * @example 
  // 下载名为baidu.png地址为https://www.baidu.com/img/bd_logo1.png图片
  download('https://www.baidu.com/img/bd_logo1.png', 'baidu.png')
 */
```
