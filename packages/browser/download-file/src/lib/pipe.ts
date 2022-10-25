// FP pipe function
type Func<T extends any[], R> = (a: T) => R
// type Pipe = <T extends any[], R>(...fns: Func<any, any>[]) => Func<T, R>
type Fun = (arg: any) => any

type pipeFun<T, R> = (a: T) => R


export default function pipe(...fns: Fun[]) {
    if (fns.length === 0) {
        return (arg: any) => arg
    }
    if (fns.length === 1) {
        return fns[0]
    }
    return (arg: any) => fns.reduce((acc, fn) => fn(acc), arg)
}
