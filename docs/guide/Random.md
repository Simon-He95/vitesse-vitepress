# Random

## randomRgb

ð§¿ éæºçæ RGB é¢è²

```typescript
/**
 * @func randomRgb
 * @desc ð éæºçæé¢è²
 * @return { string } éæºçæRGBé¢è²
 * @example 
  import { randomRgb } from 'lazy-js-utils'

  console.log(randomRgb())// 'rgb(255,0,0)'
 */
```

## randomHexColor

ð§¿ éæºçæåå­è¿å¶é¢è²

```typescript
/**
 * @func randomHexColor
 * @desc ð éæºçæåå­è¿å¶é¢è²
 * @return { string } 
 * @example 
  import { randomHexColor } from 'lazy-js-utils'

  console.log(randomHexColor()) // '#ff0000'
 */
```

## randomDate

ð§¿ éæºçææ¥æ

```typescript
/**
 * @func randomDate
 * @param { string } startDate å¼å§æ¥æ 1999/01/01 æ¯æ/æ-
 * @param { string } endDate ç»ææ¥æ é»è®¤æ¯å½åæ¥æ
 * @desc ð éæºçææ¥æ
 * @return { Date } 
 * @example 
  import { randomDate } from 'lazy-js-utils'

  console.log(randomDate('1999/01/01')) // Mon Jun 06 2011 15:11:37 GMT+0800 (ä¸­å½æ åæ¶é´) å¯åéè¿formateDateè½¬æ¢ä¸ºå¶ä»æ ¼å¼ å¦'yyyy-MM-dd'
 */
```

## uuid

ð§¿ çæ uuid

```typescript
/**
 * @func uuid
 * @desc ð çæuuid
 * @param { number } len é¿åº¦ é»è®¤ä¸º8
 * @param { number | string } radix è¿å¶ é»è®¤ä¸º16
 * @return { string } éæºæ°
 * @example
  import { uuid } from 'lazy-js-utils'

  console.log(uuid()) // '71A793A9-BBAE-49FC-B957-5BC71E5AD044'
  console.log(uuid(16, 'hex')) // 'a0b1c2d3e4f5' 
  console.log(uuid(8, 2)) // '11110011'
 */
```

## randomRange

ð§¿ çæå¨èå´åçéæºæ°

```typescript
/**
 * @func randomRange
 * @desc ð çæuuid
 * @param { number } min æå°å¼
 * @param { number } max æå¤§å¼
 * @return { number } éæºæ°
 * @example
  import { randomRange } from 'lazy-js-utils'

  console.log(randomRange(1, 10)) // 5
 */
```
