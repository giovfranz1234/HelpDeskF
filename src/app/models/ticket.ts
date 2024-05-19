export class Ticket {

    id: number=0;
    descripcion: string="";
    dispositivo:  number=0;
    asignadoa: number=0;
    prioridad: string="";
    creadoPor: number=0;
    fechaRegistro: Date = new Date();
    fechaInicio:Date | null = null;
    fechaFin:Date | null = null;
    historial:number=0;
    estado: string="";
       
    constructor(){}
}
