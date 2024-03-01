namespace easy_script {
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
