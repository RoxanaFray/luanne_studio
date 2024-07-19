import projectsList from "../data/gamesArray.json"

export default function GetCurrentGameIndex(gamePathname: string):number {
    const currentGameIndex = projectsList.findIndex(item => item.link == gamePathname);
    return currentGameIndex;
}