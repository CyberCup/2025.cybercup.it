<script lang="ts">
	let agreement = $state(false);
	let timer = $state(10);

	$effect(() => {
		const interval = setInterval(() => {
			timer -= 1;
			if (timer === 0) {
				clearInterval(interval);
				agreement = true;
			}
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="prose mx-auto mt-8">
	<p class="alert alert-warning">
		Prima di inoltrare il modulo di iscrizione, devi leggere questa breve informativa e prestare il
		Tuo consenso al trattamento dei dati che ci fornirai.
	</p>

	<h2>
		Informativa e consenso relativi al trattamento dei dati personali, art 13 del GDPR, per gli
		iscritti al progetto CyberCup.IT del Cybersecurity National Lab (Privacy Policy)
	</h2>

	<h3>1. Chi è il Titolare del trattamento</h3>
	<p>
		Titolare del trattamento è il Consorzio Interuniversitario Nazionale per l'Informatica - CINI,
		con sede legale e amministrativa in Roma, via Ariosto, 25.
	</p>
	<p>
		Il Responsabile della Protezione dei Dati (Data Protection Officer) per il Consorzio
		Interuniversitario Nazionale per l'Informatica - CINI è raggiungibile al seguente indirizzo
		email dpo@consorzio-cini.it.
	</p>

	<h3>2. Per quali finalità trattiamo i dati personali</h3>
	<p>
		I Tuoi dati personali verranno utilizzati esclusivamente per le finalità proprie dell'iniziativa
		a cui aderisci, in particolare:
	</p>
	<ul>
		<li>per aggiornarti su nuovo materiale o risorse disponibili all'interno del portale;</li>
		<li>
			per aggiornarti su nuove iniziative organizzate o supportate dal Cybersecurity National Lab.
		</li>
	</ul>

	<h3>3. Per quanto tempo saranno conservati i tuo dati</h3>
	<p>
		I dati personali verranno conservati per un tempo non superiore a quello strettamente necessario
		a perseguire le finalità per i quali gli stessi sono stati raccolti.
	</p>
	<p>
		I dati potranno esser conservati per finalità di archiviazione, ricerca scientifica e statistica
		con le garanzie di cui all'art. 89 GDPR.
	</p>

	<h3>4. Quali sono i Tuoi diritti e a chi puoi rivolgerTi per farli valere</h3>
	<p>
		Potrai rivolgerti al Responsabile della Protezione dei Dati (DPO), che il CINI ha provveduto a
		nominare, per far valere i tuoi diritti, così come indicato dagli artt. 15 e seguenti del RGPD
		n. 679/2016, tra i quali in particolare: il diritto di accesso per conoscere come vengono
		trattati i tuoi dati; di rettifica dei tuoi dati personali inesatti; di cancellazione, di
		limitazione al trattamento o di opposizione; potrai revocare il trattamento basato sul consenso
		in qualsiasi momento, senza che ciò pregiudichi la liceità del trattamento prima del tuo atto di
		revoca; esercitare il diritto alla portabilità dei dati da te forniti.
	</p>
	<p>
		Potrai ovviamente proporre reclamo ad un'Autorità di controllo quale il Garante per la
		protezione dei dati personali in caso di violazione dei principi di liceità del trattamento.
	</p>

	<div class="divider"></div>

	<div class="container alert mx-auto">
		<div>
			<h3 class="mt-0">Consenso al trattamento dei dati personali</h3>
			<p class="mb-0">
				Acconsento al trattamento dei miei dati personali per le finalità indicate nella presente
				informativa.
			</p>
		</div>

		<div class="form-control mx-auto w-max">
			<label class="label cursor-pointer">
				<span class="label-text me-4 font-bold">Acconsento</span>
				<input class="checkbox" type="checkbox" bind:checked={agreement} />
			</label>
		</div>
	</div>

	{#if agreement}
		{#if timer > 0}
			<p class="alert alert-warning text-center">
				Sicuro di aver letto tutto? (Attendi {timer} secondi)
			</p>
		{:else}
			<p class="text-center">
				Iscriviti tramite il seguente link:
				<a href="https://forms.gle/ypchStbQ8JZQmxGEA">Google Forms</a>
			</p>
		{/if}
	{/if}
</div>
