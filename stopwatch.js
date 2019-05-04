
function Stopwatch() {

    let duration = 0;
    let checkForStart, startTime, endTime;

    this.start = () => {
        if(checkForStart)
            throw new Error('Stopwatch has already started');

        checkForStart = true;

        startTime = new Date();
    };

    this.stop = () => {
        if(!checkForStart)
            throw new Error('Stopwatch has not been started yet.');

        checkForStart = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;

        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        checkForStart = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: () => {return duration},
        set: (value) => { return duration = value;}
    })
}

const sw = new Stopwatch();

console.log(sw.duration);
