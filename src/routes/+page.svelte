<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	let { latestArticles } = $derived(data);

	import Marquee from 'svelte-fast-marquee';
</script>

<div class="absolute inset-x-0 top-0 flex h-screen flex-col justify-center text-white">
	<img
		src="{base}/hero.jpg"
		alt="Immagine di copertina"
		class="absolute inset-0 h-full w-full object-cover object-center"
	/>
	<div class="bg-black/60 absolute inset-0"></div>

	<p class="z-10 mx-auto flex items-center text-center xl:text-6xl text-4xl font-bold px-4">
		CyberCup.IT 2025
		<img src="{base}/logo.png" alt="CyberCup Logo" class="ml-10 ms-4 xl:inline-block hidden h-20" />
	</p>

	<p class="z-10 xl:mt-4 mt-2 text-center xl:text-4xl text-2xl font-light px-4">
		Il primo torneo italiano di Capture The Flag
	</p>

	<div class="absolute inset-x-0 bottom-8 flex items-center justify-center px-4">
		<div
			class="w-full xl:max-w-xl rounded-lg bg-black/20 p-4 shadow-lg backdrop-blur"
		>
			<h2 class="mb-1 text-center xl:text-2xl text-xl font-semibold opacity-90">Ultime notizie</h2>
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

<div class="prose mx-auto mt-[90vh] flex flex-col max-w-4xl gap-y-16">
	<div>
		<h2 class="mb-4 mt-0 text-center text-5xl font-medium">Come funziona CyberCup?</h2>
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
		<h2 class="mb-4 mt-0 text-center text-5xl font-medium">Struttura del torneo</h2>

		<p>CyberCup inizia a Gennaio 2025 e termina a Giugno 2025. Verrà svolta una gara al mese.</p>
		<p>
			I team saranno divisi in due categorie: Junior e Senior. Sarà presente una classifica generale
			ed una classifica solo per i team Junior. I team Junior potranno partecipare ad entrambe le
			classifiche.
		</p>
		<p>La categoria Junior può essere richiesta secondo i seguenti requisiti:</p>
		<ul>
			<li>Non ha raggiunto la metà della classifica nell’edizione precedente di Cybercup.it.</li>
			<li>
				Riceve un endorsement da parte di un referente di sede che, sotto la propria responsabilità,
				dichiara che la squadra è Junior.
			</li>
			<li>
				In caso di squadra completamente nuova (senza endorsement), che fa richiesta per essere
				considerata Junior, si valuterà caso per caso ad insindacabile giudizio del committee.
			</li>
		</ul>
	</div>

	<div>
		<h2 class="mb-4 mt-0 text-center text-5xl font-medium">Punteggio</h2>
		<p>I punteggi saranno calcolati basandosi sulla posizione nella classifica globale</p>
		<p>
			Viene assegnato un gettone di presenza (1 punto) per la semplice presenza alla gara (intesa
			come invio del sanity check), a prescindere dal risultato
		</p>
		<p>Il punteggio per ogni gara è dato dall’interpolazione lineare dei seguenti punteggi</p>
		<ul>
			<li>50 punti se si è arrivati primi nella classifica globale</li>
			<li>45 nei primi 5</li>
			<li>40 nei primi 10</li>
			<li>35 nei primi 20</li>
			<li>25 nei primi 50</li>
			<li>15 nei primi 100</li>
		</ul>
		<p>
			I dettagli della computazione si possono trovare sul <a
				href="https://github.com/CyberCup/punteggi_2023"
			>
				repository di GitHub dedicato</a
			>
		</p>
	</div>

	<div>
		<h3 class="mb-4 mt-0 text-center text-5xl font-medium">Peso delle competizioni</h3>
		<p>
			Il peso delle competizioni sarà determinato in base al numero di team iscritti. Se il numero
			di partecipanti che hanno preso almeno la challenge di benvenuto è inferiore al numero di
			soglia per applicazione del punteggio, il punteggio di classifica non si applica. Le
			competizioni avranno un peso, applicato al punteggio di classifica, in base al numero di
			partecipanti.
		</p>
		<ul>
			<li>Peso 1 se gli iscritti sono più di 100</li>
			<li>Peso 0.75 se gli iscritti sono tra i 50 e i 99</li>
			<li>Peso 0.5 se gli iscritti sono tra i 20 e i 49</li>
			<li>Peso 0.25 se gli iscritti sono meno di 20</li>
		</ul>
	</div>
</div>
