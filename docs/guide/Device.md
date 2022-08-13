# Device
## getDevice
🧿获取系统信息
```typescript
/**
 * @func getDevice
 * @desc  获取系统信息
 * @return {  { os: 'android', dev: 'chrome' } } os:系统 dev:浏览器
 * @example console.log(getDevice()) // { os: 'android', dev: 'chrome' }
 */
```
## getLocation
🧿基于promise封装的获取地理位置信息
```typescript
/**
 * @func getLocation
 * @param {{enableHighAccuracy:boolean,timeout:number,maximumAge:number}} options 配置项 {高精度，超时时间，缓存时间}
 * 
 * @desc  基于promise封装的获取地理位置信息
 * @return { Promise<{ enableHighAccuracy: boolean = false, timeout: number = 5000, maximumAge: number = 0 }> } 是否微信
 * @example console.log(await getLocation()) //  { enableHighAccuracy: boolean = false, timeout: number = 5000, maximumAge: number = 0 }
 */
```
