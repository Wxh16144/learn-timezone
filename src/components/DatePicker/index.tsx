import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import dayjs from 'dayjs';

// dayjs plugin
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


import { DatePicker as AntDatePicker } from 'antd';

const mergedGenerateConfig: typeof dayjsGenerateConfig = {
  ...dayjsGenerateConfig,
  getNow: () => {
    if (typeof dayjs.tz === 'function') {
      return dayjs.tz();
    }
    return dayjs();
  }
}

const originGeneratePicker = AntDatePicker.generatePicker;

const clonedAntDatePicker = originGeneratePicker(mergedGenerateConfig);

export default Object.assign({}, AntDatePicker, clonedAntDatePicker)
