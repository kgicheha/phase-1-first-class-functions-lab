// Code your solution in this file!
const returnFirstTwoDrivers =(arr) => {
    return arr.slice(0,2)
}
const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (fareMultiplier) => {
    return function(num) {
        return fareMultiplier* num
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arr, cb) => {
    return cb(arr)
}