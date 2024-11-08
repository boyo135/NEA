<script>

import { page } from '$app/stores';  

$: path = $page.url.pathname

</script>


<nav>
    <a class:selected={path === '/'} href="/">Home</a>
    <a class:selected={path.startsWith('/challenge')} href="/challenge">Challenge</a>
    <a class:selected={path.startsWith('/diets')} href="/diets">Diets</a>
    <a class:selected={path.startsWith('/recipes')} href="/recipies">Recipes</a>
</nav>
<slot/>


<style lang='scss'>

nav {
    display: flex;
    justify-content: space-around;
    background-color: #ff3b5c;
    padding: 10px;
}

nav a {
    text-decoration: none;
    background-color: #ff3b5c;
    color: white;
    font-size: 1.2em;
    padding: 10px;
    cursor: pointer;
}

nav a.selected {
    background-color: #f7d4da;
    color: #ff3b5c;
    border-radius: 20px;
    padding: 10px 20px;
}
  
</style>