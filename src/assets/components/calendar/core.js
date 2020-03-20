/*
* UDate - String, date format in this project looks like '01/31/2020'
* events has own property 'date', it's UDate
 */
export function getCurrentDateLocalString() {
  const date = new Date();
  return localStringToUDate(date.toLocaleDateString());
}

export function dateFormatter(dateString) {
  const splited = dateString.split('/');
  const result = splited.map((item) => {
    return item.length === 1 ? '0' + item : item
  });
  return result.join('/');
}

export function localStringToUDate(date) {
  // add zero to month number
  // 04/03/2020
  const dateString = date.split('/');
  let month = dateString[0];
  let day = dateString[1];
  if (month.toString().length === 1) {
    month = '0' + month;
  }
  if (day.toString().length === 1) {
    day = '0' + day;
  }
  return `${month}/${day}/${dateString[2]}`;
}

export function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export function getCurrentMonth() {
  const date = new Date();
  return date.getMonth();
}

export function getCurrentDate() {
  const date = new Date();
  return date.getDate();
}

export function createYear(year) {
  const result = [];
  for (let i = 0; i < 12; ++i)
    result.push(createMonth(year, i));
  return result;
}

export function createMonth(year, month) {
  const calendar = [];
  const startYear = new Date(year, month, 1);
  const date = getMonday(startYear);
  let currentWeek = [];

  do {
    const week = [];

    for (let i = 0; i < 7; ++i) {
      const currentMonth = getCurrentMonth();
      const actual = (month === currentMonth);
      week.push({
        date: dateFormatter(date.toLocaleDateString()),
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
        dayOfWeek: i,
        currentMonth: month,
        actual: actual,
        // actual: this.month === month,
      });

      incDate(date);
    }
    calendar.push(currentWeek);
    currentWeek = week;
  }
  while (currentWeek[0].month === month
  ||
  currentWeek[6].month === month);
  return calendar;
}

function getMonday(date) {
  const dayOfWeek = date.getDay();
  const result = new Date(date);
  if (!date.getDay())
    result.setDate(date.getDate() - 6);
  else
    result.setDate(date.getDate() - dayOfWeek + 1);
  return result;
}

function incDate(date) {
  date.setDate(date.getDate() + 1);
}

