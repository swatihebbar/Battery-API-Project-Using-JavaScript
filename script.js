const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(".batteryDisChargingTime");


//Battery API

const battery = () => {
    if("getBattery" in navigator) {
        navigator.getBattery().then(battery => {
            function updateAllBatteryDetails(){
                updateChrgingInfo();
                updateLevelChange();
                updateDischargingTimeInfo();
                updateChargingTimeChangeInfo();
            }
            updateAllBatteryDetails();
            // console.log(battery);
            //battery charging change
            battery.addEventListener("chargingchange", () => {
                // console.log("Charging has changed - 20%-21%");
                updateChrgingInfo()
            });
            function updateChrgingInfo(){
                const isCharging = battery.charging ? "Yes" : "No";
                console.log(isCharging);
                batteryCharging.innerHTML = isCharging;
            }
            //battery charging time
            battery.addEventListener("chargingtimechange", () => {
                // console.log("Charging time has changed");
                updateChargingTimeChangeInfo();
            });

            function updateChargingTimeChangeInfo() {
                console.log(battery.chargingTime);
                batteryCharging.innerHTML = battery.chargingTime + " seconds"
            }
            //battery discharging time
            battery.addEventListener("dischargingchange", () => {
                // console.log("Discharging has changed");
                updateDischargingTimeInfo();
            });
            function updateDischargingTimeInfo() {
                console.log(battery.dischargingTime);  
                batteryDisChargingTime.innerHTML = battery.dischargingTime + " seconds"
            }
            //battery level change
            battery.addEventListener('levelchange', () => {
                updateLevelChange();
            })
            function updateLevelChange(){
                const level = battery.level * 100 + "%"
                console.log(level)
                batteryLevel.innerHTML = level;
            }
            //battery status

        });
    }
}

battery();