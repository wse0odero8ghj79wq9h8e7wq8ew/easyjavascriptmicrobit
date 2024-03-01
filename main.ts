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
            _health = 100
        }
    }
}
