const btr = document.getElementById('level');

if (navigator.getBattery) {
    navigator.getBattery()
    .then(function(battery) {
        var batteryLevel = battery.level * 100;
        btr.innerHTML = `${batteryLevel}%`;
        btr.style.width = `${batteryLevel}%`;
        if (batteryLevel >= 50) {
            btr.style.background = '#25ee25';
        } else if (batteryLevel > 20 && batteryLevel < 50) {
            btr.style.background = 'rgb(255, 217, 0)';
        } else if (batteryLevel <= 20) {
            btr.style.background = 'rgb(240, 7, 7)';
        }
    })
    .catch(function(e) {
        console.error(e);
    });
} else {
    console.log('brak informacji');
}
