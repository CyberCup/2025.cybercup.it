<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="my-20">
	<p class="text-center text-4xl font-bold">
		CyberCup.IT 2025
		<img src="{base}/logo.png" alt="CyberCup Logo" class="ms-4 inline-block h-14" />
	</p>

	<p class="text-center text-2xl font-light">
		CyberCup è il primo torneo italiano di Capture The Flag
	</p>
</div>

<div class="my-8 bg-sky-200 px-8 py-8 text-center text-black">
	<h2 class="mb-8 text-5xl font-light">Come funziona CyberCup?</h2>
	<p>
		Il programma consiste in un torneo Capture The Flag, costituito da vari eventi organizzati da
		team italiani. Al torneo potranno partecipare tutte le squadre (senza limiti al numero di
		partecipanti) che si iscriveranno, incluse quelle di nuova costituzione. La competizione sarà
		caratterizzata da un ranking delle squadre, il punteggio dipende dalle performance ad ogni gara
		selezionata. Gli eventi avranno una difficoltà bilanciata in modo da accogliere sia squadre con
		poca esperienza che quelle più preparate.
	</p>
</div>

<div class="prose mx-8 max-w-full">
	<h2>Struttura del torneo</h2>
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
	<h2>Punteggio</h2>
	<p>I punteggi saranno calcolati basandosi sulla posizione nella classifica globale</p>
	<p>
		Viene assegnato un gettone di presenza (1 punto) per la semplice presenza alla gara (intesa come
		invio del sanity check), a prescindere dal risultato
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
	<h3>Peso delle competizioni</h3>
	<p>
		Il peso delle competizioni sarà determinato in base al numero di team iscritti. Se il numero di
		partecipanti che hanno preso almeno la challenge di benvenuto è inferiore al numero di soglia
		per applicazione del punteggio, il punteggio di classifica non si applica. Le competizioni
		avranno un peso, applicato al punteggio di classifica, in base al numero di partecipanti.
	</p>
	<ul>
		<li>Peso 1 se gli iscritti sono più di 100</li>
		<li>Peso 0.75 se gli iscritti sono tra i 50 e i 99</li>
		<li>Peso 0.5 se gli iscritti sono tra i 20 e i 49</li>
		<li>Peso 0.25 se gli iscritti sono meno di 20</li>
	</ul>
</div>
