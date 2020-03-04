export function createCalendar(year, month){
  const calendar = [];
  const startYear = new Date(year, month, 1);
  const date = getMonday(startYear);
  let currentWeek = [];

  do {
    const week = [];

    for(let i = 0; i < 7; ++i){
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate();

      week.push({ year, month, day });

      incDate(date);
    }
    calendar.push(currentWeek);
    currentWeek = week;
  }
  while(currentWeek[0].month === month
        ||
        currentWeek[6].month === month);
  return calendar;
}
function getMonday(date) {
  const dayOfWeek = date.getDay();
  const result = new Date(date);
  result.setDate(date.getDate() - dayOfWeek + 1);
  return result;
}

function incDate(date){
  date.setDate(date.getDate() + 1);
}
