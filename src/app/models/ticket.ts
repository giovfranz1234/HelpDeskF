export class Ticket {

    id: number=0;
    descripcion: string="";
    dispositivo:  number=0;
    asignadoa: string="";
    prioridad: string="";
    creadoPor: number=0;
    fechaRegistro: Date=new Date();
    fechaInicio:Date= new Date();
    fechaFin:Date= new Date();
    historial:number=0;
    estado: string="";
       
    constructor(){}
}
