import { Controller, Get, Param } from '@nestjs/common';

@Controller('teams')
export class TeamsController {
  @Get()
  findAll(): Array<Object> {
    return [
      {
        id: 1,
        name: 'Brewers',
        shortName: 'MIL',
        wonGames: '42',
        lostGames: '38',
      },
      {
        id: 2,
        name: 'Mariners',
        shortName: 'SEA',
        wonGames: '37',
        lostGames: '47',
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    let team = {};
    switch (id) {
      case '1':
        team = {
          id: 1,
          name: 'Brewers',
          shortName: 'MIL',
          wonGames: '42',
          lostGames: '38',
        };
        break;
      case '2':
        team = {
          id: 2,
          name: 'Mariners',
          shortName: 'SEA',
          wonGames: '37',
          lostGames: '47',
        };
        break;
    }
    return team;
  }
}
