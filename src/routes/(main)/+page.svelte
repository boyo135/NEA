<script>

import healthyFoodSrc from '$lib/assets/images/healthyFood.png'
import PageContent from './_components/PageContent.svelte';
  
</script>


<div class='homepage'>
    <div class="homepage__background-image__container">
        <img class="homepage__background-image" src={healthyFoodSrc} alt="Fruit"/>
    </div>

    <div class="homepage__content">
        <PageContent/>
    </div>
</div>


<style lang='scss'>

    .homepage {
        .homepage__background-image__container {
            grid-area: image;
            position: absolute; 
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1; 

            .homepage__background-image {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
                filter: drop-shadow(-1rem -1rem 1rem rgba(0, 0, 0, 0.2));
            }
        }

        .homepage__content {
            padding: 20px;
            text-align: center;
        }
    }
 
</style>