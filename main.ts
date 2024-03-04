let canaddhealthvar = true
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
    /**
     * Adds _health variable.
     */
    //% blockId=easyhealth
    //% block="varhealth"
    export function varhealth(): void {
        if (canaddhealthvar == true){
           let _health = 100
           canaddhealthvar = false
        } else {
            let _health2 = 100
        }
    }
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
     * Finds coords of a led using a number instead of position.
     */
    //% blockId="specialfindledbynumber"
    //% block="find led by number $numm"
    //% numm.min = 1 numm.max = 25
    export function findledbynumber(numm: number) {

    }
}
