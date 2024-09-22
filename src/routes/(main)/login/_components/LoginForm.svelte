<script>
    import Form from '$lib/components/Inputs/Form.svelte'

    export let waiting = false
</script>



<Form action="?/login"
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
        <input class="fontS100" name="password" id="password" type="password"
            placeholder="Password"
        >
        <button class="button-slim" type="button">
            <p class="fontW500 fontS100">Forgot Password?</p>
        </button>
    </svelte:fragment>
    <button class="button-pill" type="submit">
        <p class="fontW700 fontS100">Login</p>
    </button>
    <a class="button button-pill alt" href="/login?type=register">
        <p class="fontW700 fontS100">Create Account</p>
    </a>
</Form>