
export class Partida
{
    id = "";
    players = [];
    estrelles = [];
    admin = 0;
    score = [0,0]; // el primero es del verde y el segundo del rojo
    spawnPoints; // el primero es del verde y el segundo del rojo
    status = 0; // 1 = partida on, 0 = partida off

    constructor(id,players,estrelles,max)
    {
        this.id = id;
        this.players = players;
        this.estrelles = estrelles;
        this.score.push(max);
        this.spawnPoints = [{x:10,y:100},{x:10,y:160},{x:10,y:220},{x:10,y:280},{x:10,y:340},{x:10,y:400},{x:10,y:460},{x:10,y:520}];
    }

    //Seters i geters
    get players()
    {
        return this.players;
    }
    get id()
    {
        return this.id;
    }
    get spawnPoints()
    {
        return this.spawnPoints;
    }
    get status()
    {
        return this.status;
    }
    set players(p)
    {
        this.players = p;
        return this.players;
    }
    set id(p)
    {
        this.id = p;
        return this.id;
    }
    set status(p)
    {
        this.status = p;
        return this.status;
    }

    lessPlayersTeam () {
        let verdes = 0;
        let rojos = 0;
        this.players.forEach(element => {
            
            if(element.team == "green") verdes++;
            else rojos ++;
        });
        if(verdes < rojos) return 0;
        else return 1;
    }
    sumarPuntosEquipos () {
        let verdes = 0;
        let rojos = 0;
        this.players.forEach(element => {
            if(element.team == "green") verdes += element.score;
            else rojos += element.score
            let index = this.players.findIndex(obj => obj.id == (element.id));
            this.players[index].score = 0;
        });
        this.score[0] += verdes;
        this.score[1] += rojos;
        console.log(this.score);
        return this.score;
    }
}
