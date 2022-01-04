export interface TodoType {
    id:string;
    name:string;
    complete:boolean;

}

export interface TodoHashType {
    todo:TodoType;
    toggle:any;
    className?:string;
}

export interface TodoListHashType {
    todos:TodoType[];
    toggle:any;
    className?:string;
}