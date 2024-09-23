import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import dayjs from 'dayjs';

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
