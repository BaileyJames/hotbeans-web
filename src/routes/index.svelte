<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

</svelte:head>
<div class="wrapper">
    <div class="hero">
    
    </div>
    <div class="about container section">
        <h1 class="center">What is HotBeans?</h1>
        <h3 class="center">Who are we and what we do</h3>
        <div class="left-right">
            <p>HotBeans is a well established local website development company based in Braddan, Isle of Man. We primarily develop websites using the newest technology available to us, but also provide website designs and hosting to ensure that our clients are always ahead of their competitors.</p>
            <img src="development2.png" alt="web developers">
        </div>
        <div class="left-right">
            <img src="customer.svg" alt="we take customers input seriously" style="width: 500px;">
            <p>We work closely with our clients and take their input seriously, as we pride ourselves in ensuring complete customer satisfaction. At HotBeans, our clients work <span class="italic">with</span> us, constantly providing their perspective to ensure that we meet <span class="bold">all</span> their needs. </p>
        </div>
    </div>
    <div class="why-us container section">
        <h1 class="center">Why work for us?</h1>
        <h3 class="center">Benefits to being part of the HotBeans team</h3>
        <div class="cards">
            <div class="card">
                <img src="casual.svg" alt="casual environment">
                <h3>Casual environment</h3>
                <p>Work in a casual, yet passion-filled and motivated work environment</p>
            </div>
            <div class="card">
                <img src="salary.svg" alt="casual environment">
                <h3>Competitve Wages</h3>
                <p>Annual wage reviews to ensure you're getting paid handsomely</p>
            </div>
            <div class="card">
                <img src="remote.svg" alt="casual environment">
                <h3>Remote working</h3>
                <p>Work from your happy place, without leaving the door</p>
            </div>
        </div>
    </div>
    <div class="where-to-find-us container section">
        <h1 class="center">Where can you find us?</h1>
        <h3 class="center">Our location</h3>
        <div id="map"></div>
        <div class="address-socials section">
            <div class="address">
                <h2>Address:</h2>
                <p>Unit 17</p>
                <p>Braddan Business Park</p>
                <p>Braddan</p>
                <p>Isle of Man</p>
                <p>IM2 1SS</p>
            </div>
            <div class="socials">
                <h2>Or contact us via:</h2>
                <p>recruitment@hotbeans.com</p>
                <p>+44 01624 999888</p>
            </div>
        </div>
    </div>
</div>
<script>
    import {onMount} from "svelte"
    import {leaflet} from "../scripts/leaflet.js"

    onMount(() => {
        setTimeout(()  => {
            leaflet() 
        }, 1000)
    })

</script>