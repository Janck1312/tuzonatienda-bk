export interface IModel {
    count(): Promise<number>
    _count():Promise<number>
    findMany(args: any): Promise<any[]>
    _findMany(args?: any): Promise<any[]>
}