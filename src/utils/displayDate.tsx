export function displayDate(timestamp: string) {
  const daysOfWeek = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
  ];
  const monthsOfYear = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ];

  const date = new Date(Number(timestamp));
  const dayOfWeek = daysOfWeek[date.getDay() - 1];
  const dayOfMonth = date.getDate();
  const month = monthsOfYear[date.getMonth() + 1];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const strDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year} г.`;
  const strTime = `в ${hours}:${minutes}:${seconds}`;

  const fullDate: JSX.Element = <>{strDate} <br /> {strTime}</>;

  return fullDate;
}
