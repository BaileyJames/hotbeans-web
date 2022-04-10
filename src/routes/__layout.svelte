<script>
import { toggle_class } from "svelte/internal";

    import style from "../styles/style.css"

    let open = false

    // setTimeout(() => {
    //     open = true
    // }, 1000)

</script>
<svelte:head>
    <script src="https://kit.fontawesome.com/d56cca5806.js" crossorigin="anonymous"></script>
</svelte:head>
<header class="container">
    <div class="left">
        <a href="/">
            <img src="logo.png" alt="logo">
            <h1>HotBeans</h1>
        </a>
    </div>
    <div class="burger">
        <img src="menu.svg" on:click={() => {open = !open}} alt="menu">
    </div>
    <nav id={open? "open": "closed"}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/apply">Apply</a></li>
        </ul>
    </nav>
</header>
<slot></slot>
<footer>
    <h4>©HotBeans {new Date().getFullYear()}</h4>
    <div class="socials">
        <a href="https://godfatherof.nl/kremvax.html"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://www.linkedin.com/in/elliot-revere-97209b20a/"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://nymag.com/news/features/east-ramapo-hasidim-2013-4/"><i class="fa-brands fa-instagram-square"></i></a>
        <a href="https://bit.ly/IqT6zt"><i class="fa-brands fa-twitter-square"></i></a>
    </div>
</footer>
