
const SCHEDULED='sched'
const PRESCRIBED='prn'
const PRN_KEYS =[]
for (let i = 1; i <= 6; i++) {
  PRN_KEYS.push(`prn${i}`)
}

class ScheduleOptions {
  static OPTIONS = {
    'BID / q12h' : ['08:00','20:00'],
    TID: ['08:00', '16:00', '22:00'],
    q8h: ['06:00','14:00', '22:00'],
    QID: ['08:00','12:00', '17:00', '22:00'],
    q6h: ['06:00', '12:00', '18:00', '22:00', '02:00'],
    q4h: ['06:00', '10:00', '14:00', '18:00', '22:00', '02:00']
  }

  static getKeys () {
    return Object.keys(this.OPTIONS)
  }

  static getSchedule (key) {
    let value = this.OPTIONS[key]
    if(!value) {
      console.error('Could not find a medication schedule for key', key)
    }
    return value
  }
}


/**
 * MedOrder holds a medication order as stored in the db plus it has a list
 * of scheduled times
 */

export default class MedOrder {
  constructor (medOrObj) {
    this._data = medOrObj && medOrObj._data ? medOrObj._data : medOrObj
    const medOrder = this._data
    // console.log('_createSchedule is', medOrder)
    let scheduleTimes = []
    if(medOrder.administration === SCHEDULED) {
      scheduleTimes = ScheduleOptions.getSchedule(medOrder.scheduled)
    } else if(medOrder.administration === PRESCRIBED) {
      PRN_KEYS.forEach(prn => {
        let prnTime = medOrder[prn]
        if (prnTime) {
          scheduleTimes.push(prnTime)
        }
      })
    }
    this._scheduleTimes = scheduleTimes
  }

  get medication () { return this._data.medication }
  get route () { return this._data.route }
  get reason () { return this._data.reason }
  get notes () { return this._data.notes }
  get scheduleTimes () { return this._scheduleTimes}

}