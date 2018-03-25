namespace Model.Treinador{


    export class Treinador{
        nome : String;
        idade : number;
        timeTreinado: string;
    }

    export class TreinadorHumano extends Treinador{
        timeCoracao: string;

    }

    export class TreinadorVirtual extends Treinador{

    }

}
