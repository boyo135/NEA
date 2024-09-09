<script>
    import { enhance } from '$app/forms'

    // Default to current route
    export const action = "?"
</script>

<form method='POST' action={action} use:enhance {...$$restProps}>
    <div class="inputs">
        <slot name="inputs"/>
    </div>
    <slot/>
</form>

<style lang="scss">
    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        >.inputs {
            :global(input + input) {
                margin-top: 1rem;
            }
        }

        :global(input) {
            min-width: 32ch;
            width: 100%;
        }

        :global(button),
        :global(.button) {
            background: none;
            border: none;
            margin: 0;
            padding: 0;

            text-align: center;
            text-decoration: none;

            :global(p) {
                margin: 0;
                padding: 0;
            }
        }

        :global(.button-pill),
        :global(.button-pill.alt) {
            padding: 0.5rem;
        }

        :global(.button-pill) {
            border-radius: 1000000px;
            background-color: var(--cta-1);
            :global(p) {
                color: #ffffff;
            }
        }
        :global(.button-pill.alt) {
            background-color: var(--cta-2);
            :global(p) {
                color: var(--cta-1);
            }
        }

        :global(.button-slim) {
            :global(p) {
                color: var(--cta-1)
            }
        }
    }
</style>