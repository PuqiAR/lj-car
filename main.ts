function 右转 () {
    neZha.setMotorSpeed(neZha.MotorList.M2, 马达速度 / 2)
    neZha.setMotorSpeed(neZha.MotorList.M1, 马达速度 + 20)
}
function 左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 马达速度 / 4)
    neZha.setMotorSpeed(neZha.MotorList.M2, 马达速度 + 20)
}
let 马达速度 = 0
马达速度 = -50
let 障碍物距离 = 0
let 往左走还是往右走 = "False"
PlanetX_Display.showUserText(1, "Starting......")
PlanetX_Display.oledClear()
basic.forever(function () {
    障碍物距离 = PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    if (障碍物距离 <= 50) {
        左转()
        basic.pause(2000)
        basic.pause(500)
        往左走还是往右走 = "True"
    } else {
        neZha.setMotorSpeed(neZha.MotorList.M1, 马达速度)
        neZha.setMotorSpeed(neZha.MotorList.M2, 马达速度 + -10)
        往左走还是往右走 = "False"
    }
    PlanetX_Display.showUserText(2, "Line:" + 障碍物距离)
    PlanetX_Display.showUserText(3, "Speed:" + 马达速度)
    PlanetX_Display.showUserText(4, "State:" + 往左走还是往右走)
})
