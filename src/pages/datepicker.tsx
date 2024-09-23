
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
        请点击左下角的 `Now` 按钮
        <br />
        查看选择的时间({value?.toString() ?? 'Unknown'}) 是否和当前时间时区相差 17 小时
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