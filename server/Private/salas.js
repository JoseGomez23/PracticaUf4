
export class Partida
{
    id = "";
    players = [];
    estrelles = [];

    constructor(id,players,estrelles)
    {
        this.id = id;
        this.players = players;
        this.estrelles = estrelles;
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
}
