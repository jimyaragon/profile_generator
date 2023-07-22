function printSpinnerFrame(frame, delay) {
    setTimeout(() => {
      process.stdout.write('\r' + frame + '   ');
    }, delay);
  }
  
  function printSpinner() {
    const frames = ['|', '/', '-', '\\'];
    const delay = 100;
  
    for (let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      const currentTime = i * delay;
  
      printSpinnerFrame(frame, currentTime);
    }
  }
  
  process.stdout.write('hello from spinner1.js... \rheyyy\n');
  printSpinner();