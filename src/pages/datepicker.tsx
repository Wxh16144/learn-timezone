
import { useState } from "react";
import dayjs from "dayjs";

// import { DatePicker } from 'antd'
import DatePicker from "../components/DatePicker";

/**
 * America/Adak 和 Asia/Shanghai 时区的时间差 17 小时, 方便测试
 */
function Demo() {
  // 方便测试我们用当前时间的前 15 小时
  const [value, setValue] = useState(() =>
    dayjs.tz(dayjs().subtract(15, 'hour'), 'America/Adak')
  );

  return (
    <>
      <pre>
        1. 请使用 `TZ=America/Adak pnpm dev` 启动项目
        <br />
        2. 点击左下角的 `Now` 按钮
        <br />
        3. 查看选择的时间[({value?.toString() ?? 'Unknown'})] 是否满足:
        <br />
        {'\t'}3.1 选择的时间是 America/Adak 的当前时间 (Asia/Shanghai 时间减去 17 小时)
        <br />
        {'\t'}3.2 在 Asia/Shanghai 的 17:00 之前, 你会发现 toDay 的蓝色预选框和已选背景重叠
      </pre>
      <pre>
        {value?.toString()}
      </pre>
      <br />
      <DatePicker
        defaultOpen
        showTime
        value={value}
        onChange={setValue}
      />
    </>
  )
}

export default Demo;