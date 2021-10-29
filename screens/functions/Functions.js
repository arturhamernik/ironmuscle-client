export const toHHMMSS = sec_num => {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  return hours === '00'
    ? minutes + ':' + seconds
    : hours + ':' + minutes + ':' + seconds;
};

export const getDate = timestamp => {
  return timestamp.split('T')[0];
};

export const getTime = timestamp => {
  return timestamp.split('T')[1].split('.')[0];
};