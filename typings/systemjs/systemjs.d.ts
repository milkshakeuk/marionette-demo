interface System {
    import: (name: string) => {
        then: (successCallback: Function, failCallback?: Function) => void;
    }
}

declare var System: System;