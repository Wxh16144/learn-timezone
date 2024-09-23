import dayjs from 'dayjs';

// plugins
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ExportState } from './interface';

dayjs.extend(utc);
dayjs.extend(timezone);

if (__TIMEZONE__) {
  dayjs.tz.setDefault(__TIMEZONE__);
}

const val: ExportState = {
  normal: dayjs().format(),
  nowWithTZ: dayjs().tz().format()
}

export { dayjs };
export default val;