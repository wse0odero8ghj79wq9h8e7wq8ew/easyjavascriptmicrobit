let canaddhealthvar = true
let coords = [0,0]
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
function grabcoordsbyindex(index:number){
    coords = poses[index - 1]
}
namespace extras {
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
        let randbright = randint(0, 255)
        led.plotBrightness(randx2, randy2, randbright)
    }
    /**
     * Prints a factorial.
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
     * Find number of led from position.
     */
    //% blockId="specialfindlednumberfrompos"
    //% block="find led number from pos $numx $numy"
    //% numm.min=1 numm.max=25
    export function findlednumberfrompos(numx: number, numy: number) {
        let newarray = []
        newarray.push(numx)
        newarray.push(numy)
        if (numx <= -1 || numy >= 5) {
            return 0;
        }
        for (let i = 0; i < 25; i++) {
            grabcoordsbyindex(i)
            if (coords[0] == numx){
                  if (coords[1] == numy){
                      return i;
                      break;
                 }
            }
        }
        return 43;
    }
}
namespace easyScript {
    /**
     * Prints whatever is inside of it on the microbit.
     */
    //% blockId=easyprint
    //% block="print $str"
    export function print(str : string): void {
        basic.showString(str)
    }
    /**
     * Waits for an amount of time in seconds.
     */
    //% blockId=easywait
    //% block="wait $time"
    export function wait(time : number): void {
        basic.pause(time*1000)
    }
    /**
     * Clears the screen.
     */
    //% blockId=easyclear
    //% block="clear"
    export function clear(): void {
        basic.clearScreen()
    }
}
