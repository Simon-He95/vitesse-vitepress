# Javascript

## listenStack

ð§¿ çå¬ç®æ åçŽ çäºä»¶æ 

```typescript
/**
 * @func listenStack
 * @param { string | Element } target ç®æ åçŽ 
 * @return { () => void } stop åæ­¢çå¬
 * @desc ð çå¬ç®æ åçŽ çäºä»¶æ 
 * @example 
  import { listenStack } from 'lazy-js-utils'

  const stop = listenStack(document.body)
 */
```

## copy

ð§¿ éè¿ js å°åå®¹æŸå¥åªèŽŽæ¿äž­

```typescript
/**
 * @func copy
 * @param { string } text èŠå€å¶çåå®¹
 * @return { boolean } æ¯åŠå€å¶æå
 * @desc ð éè¿jså°åå®¹æŸå¥åªèŽŽæ¿äž­
 * @example 
  import { copy } from 'lazy-js-utils'

  copy('nihaoya')
 */
```

## sleep

ð§¿ ç¡ç åœæ°

```typescript
/**
 * @func sleep
 * @param { number } time ç¡ç æ¶éŽ(åäœ:æ¯«ç§)
 * @param { () => void } callback  ç¡ç ç»æåçåè°åœæ°
 * @return { void }
 * @desc ð ç¡ç åœæ°
 * @example 
  import { sleep } from 'lazy-js-utils'

  sleep(1000, () => {
    console.log('ç¡ç ç»æ')
  })
  // await sleep(1000)
 */
```

## curry

ð§¿ åœæ°æ¯éå

```typescript
/**
 * @func curry
 * @param { Function } fn åŸæ¯éåçåœæ°
 * @return { Function } è¢«æ¯éåçåœæ°
 * @desc ð åœæ°æ¯éå
 * @example 
  import { curry } from 'lazy-js-utils'

  const add = (a, b) => a + b
  const add1 = curry(add)
  const add2 = add1(1)
  const add3 = add2(2)
  add3(3) // 6
 */
```
