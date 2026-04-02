export interface IModel {
    count(): Promise<number>;
    findMany(args: any): Promise<any[]>;
}
