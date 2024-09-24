> 随手记

### 1. momentjs 和 dayjs 的区别

momentjs 和 dayjs 最大的区别是 immutable，momentjs 是 mutable 的，dayjs 是 immutable 的。

比如 momentjs 提供的 tz.setDefault() 方法，会改变全局的时区设置，而 dayjs 则不会。

__dayjs__

```javascript
dayjs().format() // 2024-09-24T10:51:15+08:00
dayjs.tz.setDefault('Asia/Tokyo') // 设置时区为东京
dayjs().format() // 2024-09-24T10:51:15+08:00  <<= 时间和偏移都没变
```

__momentjs__

```javascript
moment().format() // 2024-09-24T10:51:15+08:00
moment.tz.setDefault('Asia/Tokyo') // 设置时区为东京
moment().format() // 2024-09-24T11:51:15+09:00  <<=  时间和偏移都变了
```

### 2. 如何获取当前时区

__dayjs__

```javascript
dayjs.tz().format()
// or
dayjs().tz().format()
```

__momentjs__

```javascript
moment().format() // 即可获取当前时区
```
