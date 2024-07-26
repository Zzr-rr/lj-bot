class BaZiCalculator {
  static TG = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  static DZ = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  
  static Gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  static Zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];
  
  static getYear(year) {
    let gzNum = year % 60;
    gzNum = gzNum - 4 < 0 ? gzNum + 56 : gzNum - 4;
    return this.TG[gzNum % 10] + this.DZ[gzNum % 12];
  }

  static getMonth(year, month) {
    const gzYear = this.getYear(year);
    const tgIndex = {"甲": 2, "乙": 4, "丙": 6, "丁": 8, "戊": 0, "己": 2, "庚": 4, "辛": 6, "壬": 8, "癸": 0}[gzYear[0]];
    month = month < 3 ? month + 12 : month; // Adjust month for January and February
    return this.TG[(month - 1 + tgIndex) % 10] + this.DZ[(month - 1 + 2) % 12];
  }

  static getDay(year, month, day) {
    const yearStr = String(year);
    const c = parseInt(yearStr.substring(0, 2));
    let y = parseInt(yearStr.substring(2));
    const m = month === 1 ? 13 : month === 2 ? 14 : month;
    if (m === 13 || m === 14) {
      y--;
    }
    const d = day;
    const i = m % 2 !== 0 ? 0 : 6;

    const itg = (4 * c + Math.floor(c / 4) + 5 * y + Math.floor(y / 4) + Math.floor(3 * (m + 1) / 5) + d - 3) % 10;
    const idz = (8 * c + Math.floor(c / 4) + 5 * y + Math.floor(y / 4) + Math.floor(3 * (m + 1) / 5) + d + 7 + i) % 12;

    return this.TG[itg] + this.DZ[idz];
  }

  static getTime(hour) {
    const dzIndex = Math.floor((hour + 1) / 2) % 12;
    return this.DZ[dzIndex] + "时";
  }

  static calculateBaZi = (date, birthtime) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // JavaScript months are zero-indexed
    const day = date.getDate();
    const hour = parseInt(birthtime.split(':')[0]); // Assuming birthtime is in HH:MM format
    console.log(year, month, day, hour);
    const gzYear = BaZiCalculator.getYear(year);
    const gzMonth = BaZiCalculator.getMonth(year, month);
    const gzDay = BaZiCalculator.getDay(year, month, day);
    const gzTime = BaZiCalculator.getTime(hour);

    return `${gzYear}-${gzMonth}-${gzDay}-${gzTime}`;
  };
}

export default BaZiCalculator;
