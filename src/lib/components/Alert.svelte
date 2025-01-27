<script lang="ts">
	import type { Snippet } from 'svelte';
	import WarningIcon from '~icons/custom/warning';

	type AlertType = 'info' | 'warning' | 'error' | 'success';

	type Props = { children: Snippet<[]>; class?: string; type?: AlertType };
	let { children, type = 'warning', class: className = '' }: Props = $props();
</script>

<div
	class:alert-warning={type === 'warning'}
	class="alert rounded-lg border-2 px-6 py-4 font-semibold {className}"
>
	{#if type === 'warning'}
		<WarningIcon class="mr-2 h-14 w-14" />
	{/if}

	<div>
		{@render children()}
	</div>
</div>

<style lang="postcss">
	.alert-warning {
		@apply border-yellow-500/20 bg-yellow-500/20;
		@apply text-yellow-500 dark:border-yellow-400/20 dark:bg-yellow-400/20 dark:text-yellow-400;
	}
</style>
