import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';

const views = {
  hours: 'le ore',
  minutes: 'i minuti',
  seconds: 'i secondi',
};

const itITPickers: Partial<PickersLocaleText<any>> = {
  // Calendar navigation
  previousMonth: 'Mese precedente',
  nextMonth: 'Mese successivo',

  // View navigation
  openPreviousView: 'apri la vista precedente',
  openNextView: 'apri la vista successiva',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? "la vista dell'anno è aperta, passare alla vista del calendario"
      : "la vista dell'calendario è aperta, passare alla vista dell'anno",

  // DateRange placeholders
  start: 'Inizio',
  end: 'Fine',

  // Action bar
  cancelButtonLabel: 'Cancellare',
  clearButtonLabel: 'Sgomberare',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Oggi',

  // Toolbar titles
  datePickerToolbarTitle: 'Seleziona data',
  dateTimePickerToolbarTitle: 'Seleziona data e orario',
  timePickerToolbarTitle: 'Seleziona orario',
  dateRangePickerToolbarTitle: 'Seleziona intervallo di date',

  // Clock labels
  clockLabelText: (view, time, adapter) =>
    `Seleziona ${views[view]}. ${
      time === null
        ? 'Nessun orario selezionato'
        : `L'ora selezionata è ${adapter.format(time, 'fullTime')}`
    }`,
  hoursClockNumberText: (hours) => `${hours} ore`,
  minutesClockNumberText: (minutes) => `${minutes} minuti`,
  secondsClockNumberText: (seconds) => `${seconds} secondi`,

  // Calendar labels
  // calendarWeekNumberHeaderLabel: 'Week number',
  // calendarWeekNumberHeaderText: '#',
  // calendarWeekNumberAriaLabelText: weekNumber => `Week ${weekNumber}`,
  // calendarWeekNumberText: weekNumber => `${weekNumber}`,

  // Open picker labels
  openDatePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Scegli la data, la data selezionata è ${utils.format(value, 'fullDate')}`
      : 'Scegli la data',
  openTimePickerDialogue: (value, utils) =>
    value !== null && utils.isValid(value)
      ? `Scegli l'ora, l'ora selezionata è ${utils.format(value, 'fullTime')}`
      : "Scegli l'ora",

  // Table labels
  timeTableLabel: 'scegli un ora',
  dateTableLabel: 'scegli una data',

  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
};

export const itIT = getPickersLocalization(itITPickers);
