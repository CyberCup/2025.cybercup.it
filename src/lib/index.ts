export type Scoreboard = {
	team_name: string;
	affiliation: string;
	score: number;
	logo: string;
	website?: string;
}[];

export type Calendar = {
	title: string;
	ctf?: string;
	date?: string;
	website?: string;
	ctftime?: string;
	writeups?: string;
}[];

export type Edition = {
	year: number;
	edition: number;
	scoreboard: Scoreboard;
	calendar: Calendar;
};

import calendar2024 from './calendars/2024.json';
import calendar2023 from './calendars/2023.json';
import calendar2025 from './calendars/2025.json';

import scoreboard2023 from './scoreboards/2023.json';
import scoreboard2024 from './scoreboards/2024.json';
import scoreboard2025 from './scoreboards/2025.json';

export const editions: Edition[] = [
	{
		year: 2025,
		edition: 3,
		scoreboard: scoreboard2025,
		calendar: calendar2025
	},
	{
		year: 2024,
		edition: 2,
		scoreboard: scoreboard2024,
		calendar: calendar2024
	},
	{
		year: 2023,
		edition: 1,
		scoreboard: scoreboard2023,
		calendar: calendar2023
	}
];

export const currentEdition = editions[0];

export type NewsMetadata = {
	title: string;
	author?: string;
	description?: string;
	date?: string;
	draft?: boolean;
};
