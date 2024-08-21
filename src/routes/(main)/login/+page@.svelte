<script>
    import { page } from '$app/stores'
    import Form from '$lib/components/Inputs/Form.svelte'

    $: FormResponse = $page.form
    $: {
        if (FormResponse) {
            console.log(JSON.stringify(FormResponse, null, 4))
        }
    }

    import healthyFoodSrc from '$lib/assets/images/healthyFood.png'
</script>

<div class="container__loginPage">
    <h1 class="loginPage__title">Login</h1>
    <Form class="loginPage__form">
        <svelte:fragment slot="inputs">
            <input name="username" id="username" type="text"
                placeholder="Username"
            >
            <input name="password" id="password" type="password"
                placeholder="Password"
            >
            <button class="button-slim" type="button">
                <p class="fontW500">Forgot Password?</p>
            </button>
        </svelte:fragment>
        <button class="button-pill" type="submit">
            <p class="fontW700">Login</p>
        </button>
        <button class="button-pill alt" type="button">
            <p class="fontW700">Register</p>
        </button>
    </Form>
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

            overflow: hidden;
            position: relative;

            >.loginPage__image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: left center;
            }
        }
    }

</style>