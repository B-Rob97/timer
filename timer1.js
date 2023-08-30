const alarms = process.argv.slice(2).filter(num => num > 0).map(Number);

let currentIndex = 0;

const setAlarm = function(alarms) {
  if (currentIndex < alarms.length)
    setTimeout(() => {
      process.stdout.write('.');
      currentIndex++;
      setAlarm(alarms);
    }, alarms[currentIndex]);

  setTimeout(() => {
    process.stdout.write("\n");
  }, alarms[currentIndex]);
    
    
};


setAlarm(alarms);




