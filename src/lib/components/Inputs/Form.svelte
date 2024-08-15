<script>
    import { enhance } from '$app/forms'

    // Default to current route
    export const action = "?"
</script>

<form method='POST' action={action} use:enhance>
    <slot/>
</form>