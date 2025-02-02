<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { latestArticles } = $derived(data);

	import Marquee from 'svelte-fast-marquee';
</script>

<svelte:head>
	<title>CyberCup.IT</title>
	<meta name="description" content="Il primo torneo italiano di Capture The Flag" />
</svelte:head>

<div class="absolute inset-x-0 top-0 flex h-screen flex-col justify-center text-white">
	<img
		src="{base}/hero.jpg"
		alt="Immagine di copertina"
		class="absolute inset-0 h-full w-full object-cover object-center"
	/>
	<div class="absolute inset-0 bg-black/60"></div>

	<p class="z-10 mx-auto flex items-center px-4 text-center text-4xl font-bold xl:text-6xl">
		CyberCup.IT 2025
		<img src="{base}/logo.png" alt="CyberCup Logo" class="ml-10 ms-4 hidden h-20 xl:inline-block" />
	</p>

	<p class="z-10 mt-2 px-4 text-center text-2xl font-light xl:mt-4 xl:text-4xl">
		Il primo torneo italiano di Capture The Flag
	</p>

	<div class="absolute inset-x-0 bottom-8 flex items-center justify-center px-4">
		<div
			class="w-full rounded-lg border-2 border-black/20 bg-black/20 p-4 shadow-lg backdrop-blur xl:max-w-xl"
		>
			<h2 class="mb-1 text-center text-xl font-semibold opacity-90 xl:text-2xl">Ultime notizie</h2>
			<Marquee pauseOnHover={true} speed={50} gap={'50px'}>
				{#each latestArticles as latestArticle}
					<a
						href="{base}/news/{latestArticle.path}"
						class="mr-8 flex items-center truncate text-lg"
					>
						<b>{latestArticle.title}</b>
						<span class="mx-2 inline-block h-1 w-1 rounded-lg bg-white"></span>
						<span class="opacity-80">{latestArticle.description}</span>
					</a>
				{/each}
			</Marquee>
		</div>
	</div>
</div>

<div class="prose mx-auto mt-[95vh] flex max-w-4xl flex-col gap-y-16">
	<div>
		<h2 class="mb-6 mt-0 text-center text-5xl font-medium">Come funziona CyberCup?</h2>
		<p>
			Il programma consiste in un torneo <b>Capture The Flag</b>, costituito da vari eventi
			organizzati da team italiani. Al torneo potranno partecipare <b>tutte le squadre</b> (senza limiti
			al numero di partecipanti) che si iscriveranno, incluse quelle di nuova costituzione. La competizione
			sarà caratterizzata da un ranking delle squadre, il punteggio dipende dalle performance ad ogni
			gara selezionata. Gli eventi avranno una difficoltà bilanciata in modo da accogliere sia squadre
			con poca esperienza che quelle più preparate.
		</p>
	</div>

	<div>
		<h2 class="mb-6 mt-0 text-center text-5xl font-medium">Struttura del torneo</h2>

		<p>
			CyberCup inizia a <b>Gennaio 2025</b> e termina a <b>Giugno 2025</b>. Verrà svolta
			<b>una gara al mese</b>.
		</p>
		<p>
			I team saranno divisi in due categorie: <b>Junior e Senior</b>. Sarà presente una classifica
			generale ed una classifica solo per i team Junior. I team Junior potranno partecipare ad
			entrambe le classifiche.
		</p>
		<p>La categoria Junior può essere richiesta secondo i <b>seguenti requisiti</b>:</p>
		<ul>
			<li>
				<b>Non ha raggiunto la metà della classifica</b> nell'edizione precedente di Cybercup.IT;
			</li>
			<li>
				<b>Riceve un endorsement da parte di un referente di sede</b> che, sotto la propria responsabilità,
				dichiara che la squadra è Junior;
			</li>
			<li>
				In caso di squadra completamente nuova (<i>senza endorsement</i>), che fa richiesta per
				essere considerata Junior, <b>si valuterà caso per caso</b> ad insindacabile giudizio del committee.
			</li>
		</ul>
	</div>

	<div>
		<h2 class="mb-6 mt-0 text-center text-5xl font-medium">Punteggio</h2>
		<p>I punteggi saranno calcolati <b>basandosi sulla posizione nella classifica globale</b></p>
		<p>
			Viene assegnato un gettone di presenza (<i>1 punto</i>) per la semplice presenza alla gara
			(intesa come invio del sanity check), a prescindere dal risultato
		</p>
		<p>
			Il punteggio per ogni gara è dato <b>dall'interpolazione lineare dei seguenti punteggi</b>:
		</p>
		<ul class="leading-5">
			<li><b>50 punti</b> se si è arrivati <b>primi nella classifica globale</b></li>
			<li><b>45</b> nei primi <b>5</b></li>
			<li><b>40</b> nei primi <b>10</b></li>
			<li><b>35</b> nei primi <b>20</b></li>
			<li><b>25</b> nei primi <b>50</b></li>
			<li><b>15</b> nei primi <b>100</b></li>
		</ul>
		<p>
			I dettagli della computazione si possono trovare sul <a
				href="https://github.com/CyberCup/punteggi_2023"
				>repository di GitHub dedicato
			</a>.
		</p>
	</div>

	<div>
		<h3 class="mb-6 mt-0 text-center text-5xl font-medium">Peso delle competizioni</h3>
		<p>
			Il peso delle competizioni <b>sarà determinato in base al numero di team iscritti</b>. Se il
			numero di partecipanti che hanno preso almeno la challenge di benvenuto è inferiore al numero
			di soglia per applicazione del punteggio, <b>il punteggio di classifica non si applica</b>.
		</p>
		<p>
			Le competizioni avranno un peso, applicato al punteggio di classifica,
			<b>in base al numero di partecipanti</b>:
		</p>
		<ul class="leading-5">
			<li><b>Peso 1</b> se gli iscritti sono più di <b>100</b></li>
			<li><b>Peso 0.75</b> se gli iscritti sono tra i <b>50 e i 99</b></li>
			<li><b>Peso 0.5</b> se gli iscritti sono tra i <b>20 e i 49</b></li>
			<li><b>Peso 0.25</b> se gli iscritti <b>sono meno di 20</b></li>
		</ul>
	</div>
</div>
