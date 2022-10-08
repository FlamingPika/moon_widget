let selected_date = new Date(Date.now());

const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const zodiacData = {
  "Aries":"The feeling of uncertainty can make you solve problems faster then is natural. Do not rush as if there was a deadline. \
          Try to slow down so that you can decide what you want to do and proceed at your own comfortable pace.",
  
  "Taurus":"Your safety depends on the need for stability, which is not easy to satisfy now. You have to learn to accept \
          change as part of your life. The basic problem is finding your own self-respect in order to ensure that you do not \
          mistakenly seek it in material things. When you accept yourself for who you are, it will become easier for you to \
          find peace and tranquility in the outside world.",

  "Gemini":"Moon in Gemini manifests itself by the need for changes and spontaneity. Safety lies in thinking about your \
          feelings and sharing them with others. You can be more talkative and speak with ease these days. \
          You might have a better ability to keep a cool head, but beware, cold heart can discourage others. \
          Harmony of thinking and feeling is important.",

  "Cancer":"Your feeling of safety is now related to your home, family and related activities such as cooking and gardening.\
          You may be prone to emotional fluctuations; you should learn to forgive and forget in order to avoid depression from \
          thinking too much about things. Your perception of the world can be very subjective; try to create a certain distance \
          without being bitter. Due to your rich emotional manifestation you can create a real sense of belonging in the world.",

  "Leo":"You feel safe in moments when you can impress others and get praise and admiration. Yet, when you get into the spotlight, \
        you may find yourself at a loss. Maybe you should admit your fear of criticism and your inability to accept criticism. \
        It is very important to accept feedback and use it for improvement.",

  "Virgo":"Your feeling of safety is now related to order and clarity, even in emotions. You may have the need to organise \
        everything chaotic and disorganized. Try being more tolerant and accept imperfections of life. \
        It is better to trust life and let it run its own way, not everything must be according to our expectations.",

  "Libra":"You might have a strong need for balance and harmony now. You probably desire to keep things nice rather \
          than venturing into fundamental questions in order not to disturb the peace. You must learn to share \
          your good and bad feelings. Do not be afraid to be who you really are, despite what is expected of you.",


  "Scorpio":"Moon in Scorpio creates the need to delve into your feelings as deep as possible. You\
            desire meaningful emotional exchanges now more than at any other time even if it is not easy and you are\
            forced to change many things. Shallow relationships do not satisfy you, because they are not purifying\
            enough",

  "Sagittarius":"The greatest need is to always search for something. In order to feel safe you might find that you \
                need to have a goal, mission or philosophy that gives your life meaning. With Moon in Sagittarius you \
                have an optimistic approach to life and you believe that things will get better even if you get into trouble.",

  "Capricorn":"You might have a strong need for being useful to the society and you look for justification in the outside world. \
              You may underestimate what you want from yourself and for yourself. Shyness may be accompanied by resentment of the \
              fact that others ignore you. Do not seek approval from the outside, it will not help you get rid of your doubt and \
              it is harmful to you. You have to trust your inner values.",

  "Pisces":"Moon in Pisces has the greatest sensitivity and perceptiveness of surroundings. You can experience feelings of insecurity, \
          be passive and only wait and see what happens in your life. If you engage in creative or spiritual search, \
          you will benefit from great imagination of Pisces.",

  "Aquarius":"Your relationship with your emotions might be more complicated, because Moon in Aquarius has a strong need for \
            emotional freedom. However, when you are in a group of people, it is easier for you to understand your feelings \
            and free yourself from negative emotions such as fear, anger and jealousy."

  
}

function normalize(v) {
  v = v - Math.floor(v);
  if (v < 0) {
    v = v + 1;
  }
  return v;
}

function getZodiac(date) {
  var longitude, zodiac; // Moon's zodiac sign 

  var yy, mm, k1, k2, k3, jd;
  var ip, dp, rp;

  var year = date.getFullYear();
  var month = date.getMonth()+1;
  var day = date.getDate();

  yy = year - Math.floor((12 - month) / 10);
  mm = month + 9;
  if (mm >= 12) {
    mm = mm - 12;
  }

  k1 = Math.floor(365.25 * (yy + 4712));
  k2 = Math.floor(30.6 * mm + 0.5);
  k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38;

  jd = k1 + k2 + day + 59;  // for dates in Julian calendar
  if (jd > 2299160) {
    jd = jd - k3;      // for Gregorian calendar
  }

  //calculate moon's age in days
  ip = normalize((jd - 2451550.1) / 29.530588853);
  ip = ip * 2 * Math.PI;  //Convert phase to radians

  // Calculate moon's distance
  dp = 2 * Math.PI * normalize((jd - 2451562.2) / 27.55454988);
  distance = 60.4 - 3.3 * Math.cos(dp) - 0.6 * Math.cos(2 * ip - dp) - 0.5 * Math.cos(2 * ip);

  // Calculate moon's ecliptic longitude
  rp = normalize((jd - 2451555.8) / 27.321582241);
  longitude = 360 * rp + 6.3 * Math.sin(dp) + 1.3 * Math.sin(2 * ip - dp) + 0.7 * Math.sin(2 * ip);

  if (longitude <  33.18) {
    zodiac = 'Aries';
  } else if (longitude <  51.16) {
    zodiac = 'Taurus';
  } else if (longitude <  93.44) {
    zodiac = 'Gemini';
  } else if (longitude < 119.48) {
    zodiac = 'Cancer';
  } else if (longitude < 135.30) {
    zodiac = 'Leo';
  } else if (longitude < 173.34) {
    zodiac = 'Virgo';
  } else if (longitude < 224.17) {
    zodiac = 'Libra';
  } else if (longitude < 242.57) {
    zodiac = 'Scorpio';
  } else if (longitude < 271.26) {
    zodiac = 'Sagittarius';
  } else if (longitude < 302.49) {
    zodiac = 'Capricorn';
  } else if (longitude < 311.72) {
    zodiac = 'Aquarius';
  } else if (longitude < 348.58) {
    zodiac = 'Pisces';
  } else {
    zodiac = 'Aries';
  }

  return zodiac;
}

const getJulianDate = (date = new Date()) => {
  const time = date.getTime();
  const tzoffset = date.getTimezoneOffset()
  
  return (time / 86400000) - (tzoffset / 1440) + 2440587.5;
}

const LUNAR_MONTH = 29.53058770576;

const getLunarAge = (date = new Date()) => {
  const percent = getLunarAgePercent(date);
  const age = percent * LUNAR_MONTH;

  return age;
}

const getLunarAgePercent = (date = new Date()) => {
  let julian_date = (getJulianDate(date) - 2451550.1) / LUNAR_MONTH;
  julian_date = julian_date - Math.floor(julian_date);

  return (julian_date < 0) ? julian_date + 1 : julian_date; 
}

const getLunarPhase = (date) => {
  const age = getLunarAge(date);
  if (age <= 0.9) 
    return "New Moon";
  // else if (age <= 6.382647)
  //   return "Waxing Moon";
  // else if (age <= 8.382647)
  //   return "First Quarter";
  else if (age < 14.6)
    return "Waxing Moon";
  else if (age <= 15.765294)
    return "Full Moon";
  // else if (age <= 21.147941)
  //   return "Waning Moon";
  // else if (age <= 23.147941)
  //   return "Last Quarter";
  else if (age <= 29.1)
    return "Waning Moon";

  return "New Moon";
}

function showMoonDescription(phase, date) {
  let processed_date = new Date(date);
  switch (phase) {
    case 0: 
      phase = "yesterday";
      processed_date.setDate(date.getDate() - 1);
      break;
    case 1:
      phase = "today";
      processed_date.setDate(date.getDate());
      break;
    case 2:
      phase = "tomorrow"
      processed_date.setDate(date.getDate() + 1);
      break;
  }

  document.getElementById(phase).innerHTML = getLunarPhase(processed_date);
  document.getElementById(phase+'-date').innerHTML = monthNames[processed_date.getMonth()] + ' ' + processed_date.getDate();

}

const next = () => {
  selected_date.setDate(selected_date.getDate() + 1)
  refresh_description();
  
  toggle_moon_animation();

  let temp = check_change_phase(selected_date, 1, "tomorrow") + check_change_phase(selected_date, -1, "tomorrow");

  temp = check_change_phase(selected_date, 1, "yesterday") + check_change_phase(selected_date, -1, "yesterday");

}

const prev = () => {
  selected_date.setDate(selected_date.getDate() - 1)
  refresh_description();

  toggle_moon_animation();

  let temp = check_change_phase(selected_date, 1, "tomorrow") + check_change_phase(selected_date, -1, "tomorrow");

  temp = check_change_phase(selected_date, 1, "yesterday") + check_change_phase(selected_date, -1, "yesterday");

}

function refresh_description() {
  document.getElementById("current_date").innerHTML = days[selected_date.getDay()] + ', ' + selected_date.getDate() + ' ' + monthNames[selected_date.getMonth()] + ' ' + selected_date.getFullYear();
  let zodiac = getZodiac(selected_date);
  document.getElementById("zodiac").innerHTML = zodiac;
  document.getElementById("info-text").innerHTML = zodiacData[zodiac];
  showMoonDescription(0, selected_date);
  showMoonDescription(1, selected_date);
  showMoonDescription(2, selected_date);
}

const check_change_phase = (date, increment, when) => {
  let processed_date = new Date(date);
  if (when === "tomorrow") {
    processed_date.setDate(date.getDate() + 1);
  } else if (when === "yesterday") {
    processed_date.setDate(date.getDate() - 1);
  }
  
  if (getLunarPhase(processed_date) === "New Moon" || getLunarPhase(processed_date) === "Full Moon"){
    return 0;
  }

  let target_phase = "";
  let num_of_changes = 0;
  while (target_phase !== "New Moon" && target_phase !== "Full Moon") {
    processed_date.setDate(processed_date.getDate() + increment);
    num_of_changes += 1;
    target_phase = getLunarPhase(processed_date);
  }

  return num_of_changes;
}

const moon_animation = (phase, shadowColor, moonColor, lower_threshold, upper_threshold, pre_bias, post_bias, shift_amount) => {
  if (pre_bias < lower_threshold){
    document.getElementById(phase+"-moon").style.backgroundColor = moonColor;
    document.getElementById(phase+"-moon-shadow").style.backgroundColor = shadowColor;
    document.getElementById(phase+"-moon-shadow").style.borderRadius = "100%";
    document.getElementById(phase+"-moon-shadow").style.right = ((pre_bias + 1) * 10).toString()+"px";
  }
  else if (pre_bias > upper_threshold){
    document.getElementById(phase+"-moon").style.backgroundColor = shadowColor;
    document.getElementById(phase+"-moon-shadow").style.backgroundColor = moonColor;
    document.getElementById(phase+"-moon-shadow").style.borderRadius = "100%";
    
    document.getElementById(phase+"-moon-shadow").style.right = ((2 + post_bias) * -10).toString()+"px";
  }
  else {
    document.getElementById(phase+"-moon-shadow").style.right = (9 * shift_amount).toString() + "px";
    document.getElementById(phase+"-moon-shadow").style.borderRadius = "0%";
  }
}

function check_time_moon_animation(when, pre_bias, post_bias, shift_amount) {

  if (document.getElementById(when).innerHTML === "Full Moon"){
    document.getElementById(when+"-moon-shadow").style.backgroundColor = 'whitesmoke';
  } 

  if (document.getElementById(when).innerHTML === "New Moon"){
    document.getElementById(when+"-moon-shadow").style.backgroundColor = 'black';
  }

  if (pre_bias + 1 + post_bias === 14) {
    if (document.getElementById(when).innerHTML === "Waxing Moon"){
      moon_animation(when, "black", "whitesmoke", 7, 7, pre_bias, post_bias, shift_amount);
    }
    else if (document.getElementById(when).innerHTML === "Waning Moon"){
      moon_animation(when, "whitesmoke", "black", 7, 7, pre_bias, post_bias, shift_amount);
    }
  }
  else if (pre_bias + 1 + post_bias === 13) {
    if (document.getElementById(when).innerHTML === "Waxing Moon"){
      moon_animation(when, "black", "whitesmoke", 6, 6, pre_bias, post_bias, shift_amount);
    }
    else if (document.getElementById(when).innerHTML === "Waning Moon"){
      moon_animation(when, "whitesmoke", "black", 6, 6, pre_bias, post_bias, shift_amount);
    }
  }
  else {
    document.getElementById(when+"-moon-shadow").style.right = "0px";
  }
}

function toggle_moon_animation() {
  let pre_bias = check_change_phase(selected_date, -1, "today") - 1;
  let post_bias = check_change_phase(selected_date, 1, "today") - 1;
  check_time_moon_animation("today", pre_bias, post_bias, 10);

  pre_bias = check_change_phase(selected_date, -1, "yesterday") - 1;
  post_bias = check_change_phase(selected_date, 1, "yesterday") - 1;
  check_time_moon_animation("yesterday", pre_bias, post_bias, 5);

  pre_bias = check_change_phase(selected_date, -1, "tomorrow") - 1;
  post_bias = check_change_phase(selected_date, 1, "tomorrow") - 1;
  check_time_moon_animation("tomorrow", pre_bias, post_bias, 5);
  
}

window.onload = function() {
  refresh_description();

  toggle_moon_animation();

  
};
