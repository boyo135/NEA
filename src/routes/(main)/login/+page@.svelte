<script>
    import { page } from '$app/stores'

    import LoginForm from './_components/LoginForm.svelte'
    import RegisterForm from './_components/RegisterForm.svelte'

    import healthyFoodSrc from '$lib/assets/images/healthyFood.png'
    

    $: FormResponseLoading = false

    $: LoadData = $page.data

    $: FormResponse = $page.form
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
        <LoginForm waiting={FormResponseLoading}/>
    {:else if LoadData.formType === 'register'}
        <RegisterForm waiting={FormResponseLoading}/>
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