export function createMonth(month) {
  const result = [];
  const date = new Date();
  date.setMonth(month);
  date.setDate(1);
  const startDate = getMonday(date);
  let week = [];
  let count = 0;
  do {
    week = createWeek(startDate);
    result.push(week);
    count++;
  }
  while (count < 6);
  // while(week[6].month === month || week[0].month === month);
  return result;
}

function createWeek(date) {
  const result = [];
  for (let i = 0; i < 7; ++i) {
    result.push({
      day: date.getDate(), month: date.getMonth()
    });
    date.setDate(date.getDate() + 1);
  }
  console.warn(result);
  return result;
}

// function getMonday(date) {
//   const dayOfWeek = date.getDay();
//   const result = new Date(date);
//   result.setDate(date.getDate() - dayOfWeek - 6);
//   return result;
// }
function getMonday(date) {
  const dayOfWeek = date.getDay();
  const result = new Date(date);
  result.setDate(date.getDate() - dayOfWeek + 1);
  return result;
}

export function createCalendar(year){
  const initialDate = new Date(2020, 0, 1);
  const date = getMonday(initialDate);
  const calendar = [];
  const week = [];

  do{

    for (let i = 0; i < 7; ++i){
      const month = date.getMonth();
      const day = date.getDate();
      week.push({year: year, month: month, day: day});
      incDate(date);
    }
    calendar.push(week);
  }
  while(week[0].year === year || week[6].year === year);
}
export function test (){
  const result = [];
  const date = new Date();
  for (let i = 0; i < 10; ++i){

  }
  console.warn();
}

function incDate(date){
  date.setDate(date.getDate() + 1);
}
