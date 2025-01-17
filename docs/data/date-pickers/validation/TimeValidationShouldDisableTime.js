import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const shouldDisableTime = (value, view) =>
  view === 'minutes' && value.minute() >= 45;

const defaultValue = dayjs().set('hour', 10).set('minute', 50).startOf('minute');

export default function TimeValidationShouldDisableTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer>
        <DemoItem label="TimePicker">
          <TimePicker
            defaultValue={defaultValue}
            shouldDisableTime={shouldDisableTime}
          />
        </DemoItem>
        <DemoItem label="DateTimePicker">
          <DateTimePicker
            defaultValue={defaultValue}
            shouldDisableTime={shouldDisableTime}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
