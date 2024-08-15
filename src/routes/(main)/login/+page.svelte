<script>
    import { page } from '$app/stores'
    import Form from '$lib/components/Inputs/Form.svelte'

    $: FormResponse = $page.form
</script>

<Form>
    <h1>Login</h1>
    <label for="username">Username</label>
    <input name="username" id="username" type="text" >
    <label for="password">Password</label>
    <input name="password" id="password" type="password">
    <button type="submit">Login</button>
</Form>

{#if FormResponse}
<pre>
{JSON.stringify(FormResponse, null, 4)}
</pre>
{/if}