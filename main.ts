enum yes{
    r = 5
}
// Variables
let gibc = 0
let canaddhealthvar = true
let coords = [0, 0]
let poses = [
[0, 0],
[1, 0],
[2, 0],
[3, 0],
[4, 0],
[0, 1],
[1, 1],
[2, 1],
[3, 1],
[4, 1],
[0, 2],
[1, 2],
[2, 2],
[3, 2],
[4, 2],
[0, 3],
[1, 3],
[2, 3],
[3, 3],
[4, 3],
[0, 4],
[1, 4],
[2, 4],
[3, 4],
[4, 4]
]
// Functions
function grabindexbycoords(x: number, y: number) {
    for (let i = 1; i < 26; i++) {
        grabcoordsbyindex(i)
        if (coords[0] == x) {
            if (coords[1] == y) {
                gibc = i
                return;
                break;
            }
        }
    }
    gibc = 0
}
function grabcoordsbyindex(index: number) {
    coords = poses[index - 1]
}
// More Math
namespace Math{
    /**
     * Outputs a factorial.
     */
    //% blockId="specialfactorial"
    //% block="factorial $num"
    export function factorial(num: number) {
        let multiply = num
        let answer = 0
        if (num <= -1) {
            return 0;
        }
        if (num == 0 || num == 1) {
            return 1;
        }
        answer = num
        while (multiply >= 3) {
            multiply = multiply - 1
            answer = answer * multiply
        }
        return answer;
    }
}
// More Leds
namespace led {
    /**
     * Lights a random tile.
     */
    //% blockId="specialrandomtile"
    //% block="light random tile"
    export function randomtile(): void {
        let randx = randint(0, 4)
        let randy = randint(0, 4)
        led.plot(randx, randy)
    }
    /**
     * Lights a random tile with random transparency.
     */
    //% blockId="specialrandomtiletransparency"
    //% block="light random transparency tile"
    export function randomtiletransparency(): void {
        let randx2 = randint(0, 4)
        let randy2 = randint(0, 4)
        let randbright2 = randint(0, 255)
        led.plotBrightness(randx2, randy2, randbright2)
    }
    /**
     * Lights a random transparency led with set coordinates.
     */
    //% blockId="led_lrtlwc"
    //% block="light random transparency led with coords $x $y"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    export function lrtlwc(x:number,y:number){
        if (x <= -1||x >= 5||y <= -1||y >= 5){
            return;
        }
        let randbright = randint(0, 255)
        led.plotBrightness(x, y, randbright)
    }
    /**
     * Lights a random position led with set brightness.
     */
    //% blockId="led_lrplwb"
    //% block="light random pos led with brightness $transparency"
    //% x.min=0 x.max=4
    //% y.min=0 y.max=4
    export function lrplwb(transparency: number) {
        if (transparency <= -1||transparency >= 256) {
            return;
        }
        let x = randint(0,4)
        let y = randint(0,4)
        led.plotBrightness(x, y, transparency)
    }
}
// Extra Leds
namespace extraLed {
    /**
     * Finds coords of a led in a table using a number instead of position.
     */
    //% blockId="specialfindledbynumber"
    //% block="find led by number $numm"
    //% numm.min=1 numm.max=25
    export function findledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return [0, 0];
        }
        grabcoordsbyindex(numm)
        return coords;
    }
    /**
     * Finds x coord of a led using a number instead of position.
     */
    //% blockId="specialfindledxbynumber"
    //% block="find led x by number $numm"
    //% numm.min=1 numm.max=25
    export function findledxbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return 0;
        }
        grabcoordsbyindex(numm)
        return coords[0];
    }
    /**
     * Finds y coord of a led using a number instead of position.
     */
    //% blockId="specialfindledybynumber"
    //% block="find led y by number $numm"
    //% numm.min=1 numm.max=25
    export function findledybynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return 0;
        }
        grabcoordsbyindex(numm)
        return coords;
    }
    /**
     * Plots an led using number instead of position.
     */
    //% blockId="specialplotledbynumber"
    //% block="plot led by number $numm"
    //% numm.min=1 numm.max=25
    export function plotledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return;
        }
        grabcoordsbyindex(numm)
        led.plot(coords[0],coords[1])
    }
    /**
     * Finds state of led, on or off by number.
     */
    //% blockId="specialpointledbynumber"
    //% block="point led by number $numm"
    //% numm.min=1 numm.max=25
    export function pointledbynumber(numm: number) {
        if (numm <= 0 || numm >= 26) {
            return false;
        }
        grabcoordsbyindex(numm)
        return led.point(coords[0],coords[1]);
    }
    /**
     * Find number of led from position. X is first and Y is second.
     */
    //% blockId="specialfindlednumberfrompos"
    //% block="find led number from pos $numx $numy"
    //% numm.min=1 numm.max=25
    export function findlednumberfrompos(numx: number, numy: number) {
        if (numx <= -1 || numy >= 5) {
            return 0;
        }
        grabindexbycoords(numx,numy)
        return gibc;
    }
}
