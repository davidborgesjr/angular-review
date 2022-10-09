export interface IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
}

export interface IEpisodeReponse {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    };
    results: IEpisode[];
}

export class FirstAssignment{

    private readonly API_URL = 'https://rickandmortyapi.com/api';
    private readonly CHARACTER_URL_REQUEST = `${this.API_URL}/character/`;
    private readonly CHARACTER_URL_REQUEST_SIZE = this.CHARACTER_URL_REQUEST.length;
    
    constructor() {
        this.fetchJson(`${this.API_URL}/episode`).then((episodes) => {
            this.getEpisodes(episodes);
        })
    } 
    
    private fetchJson(url: string){
        return fetch(url).then((response) => {
            return response.json()
        })
    }

    private getCharacthersIds(episode: IEpisode): number[]{
        return episode.characters.map((eachCharacter) => {
            return parseInt(eachCharacter.slice(this.CHARACTER_URL_REQUEST_SIZE));
        });
    }

    private getEpisodes(episodes: IEpisodeReponse){
        const {results} = episodes;
            results.map(async (episode) => {
                const characthersIds = this.getCharacthersIds(episode);
                const characters = await this.fetchJson(`${this.API_URL}/character/${characthersIds}`);
                episode.characters = [...characters];
                return episode;
            });
            console.log('### FINAL ARRAY OF EPISODES ###');
            console.log(results);
    }
}

let firstAssignment = new FirstAssignment();
