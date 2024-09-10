<script>
    import { page } from '$app/stores'
    import Form from '$lib/components/Inputs/Form.svelte'

    import healthyFoodSrc from '$lib/assets/images/healthyFood.png'
    

    $: LoadData = $page.data
    $: {
        if (LoadData) {
            console.log(JSON.stringify(LoadData, null, 4))
        }
    }

    $: FormResponse = $page.form
    $: {
        if (FormResponse) {
            console.log(JSON.stringify(FormResponse, null, 4))
        }
    }
</script>

<div class="container__loginPage">
    <h1 class="loginPage__title">
        {
            LoadData.formType === 'login' ? 'Login' :
            LoadData.formType === 'register' ? 'Register' :
            null
        }
    </h1>
    {#if LoadData.formType === 'login'}
        <Form class="loginPage__form" action="?/login">
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
    {:else if LoadData.formType === 'register'}
        <Form class="loginPage__form" action="?/register">
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
    {/if}
    <div class="loginPage__container__image">
        <img class="loginPage__image" src={healthyFoodSrc} alt="Fruit"/>
    </div>
</div>

<style lang="scss">

    .container__loginPage {
        width: 100vw;

        height: 100vh;
        height: 100dvh;

        display: grid;
        grid-template-columns: minmax(auto, 1fr) minmax(50ch, 1fr);
        grid-template-rows: 1fr 1.618fr;
        grid-template-areas:
            "title image"
            "form image";

        // TODO: MAKE MORE RESPONSIVE
        overflow: hidden;


        >.loginPage__title {
            grid-area: title;

            place-content: center;
            text-align: center;

            padding: 1rem;
            padding-bottom: 0;
        }

        >:global(.loginPage__form) {
            grid-area: form;

            justify-self: center;
            justify-content: baseline;

            padding: 1rem;

            max-width: 40ch;
        }

        >.loginPage__container__image {
            grid-area: image;

            
            position: relative;

            >.loginPage__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: left center;

                filter: drop-shadow(-1rem -1rem 1rem rgba(0, 0, 0, 0.2));
            }
        }
    }

</style>