class AlarmClock {
    constructor(time, id, callback, setInterval)
    {
        this.alarmCollection = [];
        this.timerId = id;
        this.callback = callback;
        this.time = time;
        //this.timeMS = this.time.getTimes() - getTimes(new Date());
        this.setInterval = setInterval;

    }

    addClock (time, id, callback){
        if(!id){
            const errorOut = new Error('error text');
            throw errorOut;
        }
        if(this.alarmCollection.filter(id)) {
            console.error(`d = $id уже существует`)
            
        }
        else {
            this.alarmCollection.push({time, id, callback}) 
        }
        
    }

    removeClock(id){
        return delete AlarmClock.filter[id];
    }

    getCurrentFormattedTime() {
       const timeHoursMinutes = new Date();

       return timeHoursMinutes.getHours() + ":" + timeHoursMinutes.getMinutes();

    }

    start(){
        function checkClock(alarmCollection) {
            alarmCollection(time => {
               if(time == getCurrentFormattedTime){
                   return alarmCollection.callback;
               }
               else return false;
           });

        function setInterval(alarmCollection){
           //const minTimeMS = Math.min(alarmCollection.timeMS);

        }

        }

    }
}