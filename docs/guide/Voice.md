# Voice
## speech
🧿文字转语音
```typescript
/**
 * @func speech
 * @param {options: SpeechOptions | string = { text: '', lang: 'zh-CN', volume: 1, rate: 1, pitch: 1, voice: null }} url URL
 * @return {
    cancel: () => void
    pause: () => void
    resume: () => void
    speak: (options: string | SpeechOptions | undefined) => void
  }
 * @desc 文字转语音
 * @example
  const {speak,cancel,resume,pause} = speech('你好')
  speak()
 */
