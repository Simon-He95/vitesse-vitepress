# Message

## createEventBus

ð§¿ åå»ºä¸ä¸ªäºä»¶æ»çº¿, ç¨äºäºä»¶çåå¸åè®¢é

```typescript
/**
 * @func createEventBus    
 * @desc ð åå»ºä¸ä¸ªäºä»¶æ»çº¿, ç¨äºäºä»¶çåå¸åè®¢é
 * @returns { 
 * { 
 *  data: Record<string, Function[]>; 
 *  emit: (event: string, data?: any) => void;
 *  on: (event: string, fn: (data?: any) => void) => void; 
 *  off: (event: string, fn: Function) => void
 *  } 
 * } 
 * @example 
  import { createEventBus } from 'lazy-js-utils'

  const bus = createEventBus()
  bus.on('test', (data) => {
    console.log(data) // hi
  })

  bus.emit('test','hi')
 */
```

## useStorageListen

ð§¿ æ°å¼é¡µ, çå¬ storage çåå

```typescript
/**
 * @func useStorageListen    
 * @desc ð æ°å¼é¡µ, çå¬storageçåå
 * @param { (type: string, newValue: any, oldValue: any) => void) } callback åè°å½æ°
 * @returns { () => void } stop åæ­¢çå¬
 * @example 
  import { useStorageListen, sendStorage } from 'lazy-js-utils'

  useStorageListen((type, newValue, oldValue) => {
    if(type === 'add'){
      // æ°å¢
      console.log(type, newValue, oldValue)
    }
  })

  sendStorage('add', {
    user: 'simon',
    auth: 'admin'
  })
 */
```
