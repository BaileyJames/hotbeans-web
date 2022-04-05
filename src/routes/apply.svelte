<script>
    import {onMount} from "svelte"
    let step = 1
    let questiontype = ["Contact details", "Position details", "About you"]
    onMount(() => {
        // let form2 = document.getElementById("details2")
        // form2.classList.add("disappear")
    })
    
</script>
<div class="wrapper container">
    <div class="section">
        <h1 class="center">Application</h1>
        <h3 class="center">So, you think you've got what it takes?</h3>
        <div class="section flex">
            <div class="form">
                <h3>Step {step} of 3</h3>
                <h2>{questiontype[step - 1]}</h2>
    
                <form action="/success" id="form">
                    <div id="details">
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" required>
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" required>
                        <label for="email">Email</label>
                        <input type="email">
                        <label for="phone">Phone number</label>
                        <input type="tel">
                    </div>
                    <div id="details2" class="disappear">
                        <label for="job-role">Job role:</label>
                        <input type="text" required>
                    </div>
                    <div id="details3" class="disappear">
                        <label for="job-role">Why you:</label>
                        <input type="text" required>
                    </div>
                    <p type="submit" id="submit-button" on:click={() => {
                        if(step < 3) {
                            let form1 = document.getElementById("details")
                            let form2 = document.getElementById("details2")
                            let form3 = document.getElementById("details3")
                            form1.classList.add("disappear")
                            step ++
                            if(step == 2) {
                                form2.classList.remove("disappear")
                            } else {
                                form3.classList.remove("disappear")
                                form2.classList.add("disappear")
                                document.getElementById("submit-button")
    
                                let newDiv = document.createElement("input")
                            let newContent = document.createTextNode("hello")
                            newDiv.appendChild(newContent)
                            newDiv.setAttribute("type", "submit")
                            newDiv.setAttribute("class", "submit-button")
                            document.getElementById("form").appendChild(newDiv)
                            document.getElementById("submit-button").classList.add("disappear")
                            }
                        } 
                        
                    }}>{step === 3 ? "Submit":"Next"}
                    
                </p>
                </form>
            </div>
            <img src="apply.svg" alt="apply here">
        </div>
    </div>
</div>