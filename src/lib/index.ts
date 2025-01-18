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
