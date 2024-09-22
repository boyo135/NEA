<script>
    import Form from '$lib/components/Inputs/Form.svelte'

    export let waiting = false
</script>



<Form action="?/register"
    class={
        "loginPage__form " + 
        (waiting ? "disabled" : "")
    }

    onSubmit={() => {
        waiting = true

        return async ({ update }) => {
            waiting = false
            await update()
        }
    }}

    {...$$restProps}
>
    <svelte:fragment slot="inputs">
        <input class="fontS100" name="username" id="username" type="text"
            placeholder="Username"
        >
        <input class="fontS100" name="email" id="email" type="text"
            placeholder="Email"
        >
        <input class="fontS100" name="password" id="password" type="password"
            placeholder="Password"
        >
        <input class="fontS100" name="confirmPassword" id="confirmPassword" type="password"
            placeholder="Confirm Password"
        >
    </svelte:fragment>
    <button class="button-pill" type="submit">
        <p class="fontW700 fontS100">Register</p>
    </button>
    <a class="button button-pill alt" href="/login?type=login">
        <p class="fontW700 fontS100">I Have An Account</p>
    </a>
</Form>