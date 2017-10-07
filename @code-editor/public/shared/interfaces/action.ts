export interface Action<P> {
    readonly type: string
    readonly payload?: P
}