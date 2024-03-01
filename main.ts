namespace easy {
    /**
     * Thingy
     */
    //% blockId=easyprint
    //% block="print $str"
    export function print(str : string): void {
        basic.showString(str)
    }
    export function wait(time : number): void {
        basic.pause(time*1000)
    }
    export function clear(): void {
        basic.clearScreen()
    }
}
