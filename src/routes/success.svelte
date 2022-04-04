<script>
    import {onMount} from "svelte"
    import { page } from "$app/stores";

    let name;

    onMount(() => {
        name = $page.url.searchParams.get("fname")
        console.log($page.url.search)
    })
    console.log("hi")
</script>
<div class="wrapper container section">
    <div class="success">
        <div class="text">
            <h1>Thanks, {name}!</h1>
            <h3>We'll get back to you as soon as we can :)</h3>
        </div>
        <img src="success.svg" alt="success">
    </div> 
</div>