import { Injectable } from "@nestjs/common";
import { Team } from "./interfaces/team.interface";

@Injectable()
export class TeamsService {
  private readonly teams: Team[] = [
    {
      id: 1,
      name: "Brewers",
      shortName: "MIL",
      wonGames: 42,
      lostGames: 38
    },
    {
      id: 2,
      name: "Mariners",
      shortName: "SEA",
      wonGames: 37,
      lostGames: 47
    }
  ];

  create(teams: Team) {
    this.teams.push(teams);
  }

  findAll(): Team[] {
    return this.teams;
  }
}
