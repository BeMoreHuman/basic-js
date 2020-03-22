module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const minTurns = Math.pow(2,disksNumber) - 1;
    const perSecond = (turnsSpeed / 3600);

    return {
        seconds: minTurns / perSecond,
        turns: minTurns,
    };
}