export class Users {
    public Id: number;
    public comment: string;
    public smiley:string;
    
    
    constructor(Id:number,comment: string,smiley:string) {
    this.Id = Id;
    this.comment = comment;
    this.smiley = smiley;
    }
}