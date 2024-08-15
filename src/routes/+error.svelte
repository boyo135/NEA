<script>
    import { page } from '$app/stores'
</script>

<h1>Congratulations! you've broken it :(</h1>
{#if $page?.status}
    <h3>{$page.status}: {$page.error.message}</h3>
{/if}