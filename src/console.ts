export enum ConsoleMessageType {
    User,
    Error,
    Warning,
    Info
}

export interface ConsoleMessage {
    time: Date;
    text: any;
    type: ConsoleMessageType;
}

export class Console {

    public messages: ConsoleMessage[];

    constructor() {
        this.messages = [];
    }

    private add(message: any, type: ConsoleMessageType): void {
        this.messages.push({
            text: message,
            type: type,
            time: new Date()
        });
    }

    public clear(): void {
        this.messages = [];
    }

    public log(message: any) {
        this.add(message, ConsoleMessageType.User);
    }

    public warn(message: any) {
        this.add(message, ConsoleMessageType.Warning);
    }

    public error(message: any) {
        this.add(message, ConsoleMessageType.Error);
        // throw new Error("");
    }

    public info(message: any) {
        this.add(message, ConsoleMessageType.Info);
    }

    public print(): any {
        return console.log(this.messages.map(cm => cm.text));
    }

}