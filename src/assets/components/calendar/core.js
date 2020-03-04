function createCalendar(year){
  const calendar = [];
  const startYear = new Date(year, 0, 1);
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
  while(currentWeek[0].year === year
        ||
        currentWeek[6].year === year);
  return calendar;
}
export function createMonth(year, month) {
  const result = [];
  const calendar = createCalendar(year);
  let count = 0;
  let currentWeek = calendar.findIndex( (week) => {
    return week.find( (day) => day.month === month);
  });
  while(calendar[currentWeek].find( (day) => day.month === month)){
    result.push(calendar[currentWeek]);
    currentWeek++;
    count++;
  }
  return result;
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
