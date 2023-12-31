import { useEffect, useState } from 'react'
import apiClient from '../services/apiClient'

export interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number;
    name: string;
    background_image:string,
    parent_platforms: {platform: Platform}[]
    
}



interface FetchResponseData {
    count: number;
    results: Game[];
}

const useFetchGames = () => {


    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchResponseData>("/games")
            .then((res) => setGames(res.data.results))
            .catch((err) => setError(err.message));
    });
    return { games, error }
}

export default useFetchGames