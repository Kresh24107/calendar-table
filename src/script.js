function createCalendar(id, year, month) {
  const elem = document.getElementById(id)
  const mon = month - 1;
  const d = new Date(year, mon);
  const monthStartAt = getDay(d);
  const daysOfWeek = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  const table = document.createElement('table');
  const headRow = document.createElement('tr');

  table.append(headRow);
  for (let i = 0; i < daysOfWeek.length; i++) {
    let headItem = document.createElement('td');
    let currentDay = daysOfWeek[i];
    headItem.innerText = currentDay;
    headRow.append(headItem);
  }

  const firstRowDate = document.createElement('tr');
  table.append(firstRowDate);
  if (monthStartAt) {
    for (let i = 0; i < monthStartAt; i++) {
      let emptyItem = document.createElement('td');
      firstRowDate.append(emptyItem);
    }
  }

  while (d.getMonth() === mon) {
    let lastRow = table.lastChild;
    let item = document.createElement('td');
    item.innerHTML = d.getDate();
    lastRow.append(item);
    if (getDay(d) % 7 == 6) {
      let newRow = document.createElement('tr');
      table.append(newRow);
    }
    d.setDate(d.getDate() + 1)
  }

  if (getDay(d) != 0) {
    let lastRow = table.lastChild;
    for (let i = getDay(d); i < 7; i++) {
      let emptyItem = document.createElement('td');
      lastRow.append(emptyItem);
    }
  }
  elem.append(table);
}

function getDay(date) {
  let day = date.getDay();
  if (day === 0) {
    day = 7;
  }
  return day - 1;
}

createCalendar("calendar", 2012, 8);
