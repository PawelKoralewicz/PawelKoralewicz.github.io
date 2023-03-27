const btr = document.getElementById('battery-status');

if (navigator.getBattery) {
    navigator.getBattery()
    .then(function(battery) {
        var batteryLevel = battery.level * 100;
        btr.innerHTML = `battery level: ${batteryLevel}%`;
        console.log(batteryLevel);
    })
    .catch(function(e) {
        console.error(e);
    });
} else {
    console.log('brak informacji');
}