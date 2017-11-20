/* Chose not to use Moments.js for practice, so one day I can appreciate Moments that much more */

const locales = [
  { name: 'Seattle', lang: 'en-US', utc: { offset: -8, dstStart: 2, dstEnd: 10 } },
  { name: 'Cap Haitien', lang: 'fr-HT', utc: { offset: -5, dstStart: 2, dstEnd: 10 } }, // sadly, JS can't parse 'ht-HT' for Kreyol Ayisian
  { name: 'Universal', lang: 'en-US', utc: { offset: 0, dstStart: 12, dstEnd: 13 } }, // There is no 12 or 13 month, aka- never.
  { name: 'London', lang: 'en-GB', utc: { offset: 0, dstStart: 2, dstEnd: 10 } },
  { name: 'Stuttgart', lang: 'de-DE', utc: { offset: 1, dstStart: 2, dstEnd: 10 } },
  { name: 'Hong Kong', lang: 'zh-Hans-HK', utc: { offset: 8, dstStart: 12, dstEnd: 13 } },
];

class DisplayClock {
  constructor(utc) {
    this.today = new Date();
    if (this.today.getMonth() >= utc.dstStart && this.today.getMonth() < utc.dstEnd) {
      this.today = this.today.setUTCHours(utc.offset + 13);
      // TODO: Why does offset/setUTC push back 12 hours?
    } else {
      this.today = this.today.setUTCHours(utc.offset + 12);
    }
    this.today = new Date(this.today);
  }
  displayTime(locale) {
    return this.today.toLocaleTimeString(locale);
  }
  displayDate(locale) {
    return this.today.toLocaleDateString(locale, { weekday: 'long', month: 'short', day: 'numeric' });
  }
}

$(document).ready(() => {
  locales.forEach((loc) => {
    const localClock = new DisplayClock(loc.utc);
    $('#dynamic-clocks').append(
      `<article class='clock'>
      <div class='place'>${loc.name}</div>
      <div class='time ${loc.name}'></div>
      <div class='date'>${localClock.displayDate(loc.lang)}</div>
      </article>`);
    window.setInterval(() => {
      $(`.${loc.name.split(' ')[0]}`).html(localClock.displayTime(loc.lang));
    }, 1000); // TODO: fix so class names aren't just first word
  });
});
