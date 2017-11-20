/* Chose not to use Moments.js for practice, so one day I can appreciate Moments that much more */

const locales = [
  { name: 'Seattle', lang: 'en-US', utc: { offset: -8, start: 3, end: 10 } },
  { name: 'Cap Haitien', lang: 'fr-HT', utc: { offset: -5, start: 3, end: 10 } }, // sadly, JS can't parse 'ht-HT' for Kreyol Ayisian
  { name: 'Universal', lang: 'en-US', utc: { offset: 0, start: 12, end: 13 } }, // There is no 12 or 13 month, aka- never.
  { name: 'London', lang: 'en-GB', utc: { offset: 1, start: 3, end: 10 } },
  { name: 'Stuttgart', lang: 'de-DE', utc: { offset: 1, start: 3, end: 10 } },
  { name: 'Hong Kong', lang: 'zh-Hans-HK', utc: { offset: 8, start: 3, end: 10 } },
];

class DisplayClock {
  static displayTime(locale, utc) {
    let timeUTC = new Date();
    if (timeUTC.getMonth() >= utc.start && timeUTC.getMonth() < utc.end) {
      timeUTC = timeUTC.setUTCHours(utc.offset - 1);
    } else {
      timeUTC = timeUTC.setUTCHours(utc.offset);
    }
    return new Date(timeUTC).toLocaleTimeString(locale);
  }
  static displayDate(locale) {
    return new Date(Date.now()).toLocaleDateString(locale, { weekday: 'long', month: 'short', day: 'numeric' });
  }
}

$(document).ready(() => {
  locales.forEach((loc) => {
    console.log(loc);
    $('#dynamic-clocks').append(
      `<article class='clock'>
      <div class='place'>${loc.name}</div>
      <div class='time ${loc.name}'></div>
      <div class='date'>${DisplayClock.displayDate(loc.lang)}</div>
      </article>`);
    window.setInterval(() => {
      $(`.${loc.name.split(' ')[0]}`).html(DisplayClock.displayTime(loc.lang, loc.utc));
    }, 1000); // TODO: fix so class names aren't just first word
  });
});
