<script>
    import {onMount} from "svelte"
    let step = 1
    let questiontype = ["Contact details", "Position details", "About you"]

    let buttonToggle = ((button) => {
        console.log(button)
        let option = document.getElementById("option"+button)
        option.classList.toggle("selected")
    })
</script>
<div class="wrapper container">
    <div class="section">
        <h1 class="center">Application</h1>
        <h3 class="center">So, you think you've got what it takes?</h3>
        <div class="section flex apply">
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
                        <label for="hours">Full time or part time?</label>
                        <input type="text" required>
                        <label for="job-role">Are you able to perform the required functions for the job role?</label>
                        <div class="options">
                            <p id="option1"   on:click={() => {buttonToggle(1)}}>✓</p>
                            <p id="option2"   on:click={() => {buttonToggle(2)}}>&#10799</p>
                        </div>
                    </div>
                    <div id="details3" class="disappear">
                        <label for="job-role">Skills related to the role:</label>
                        <input type="text" required>
                        <label for="job-role">What makes you stand out?</label>
                        <input type="text" required>
                        <label for="job-role">Areas of highest proficiency</label>
                        <input type="text" required>
                        <h5>Please note all fields are required</h5>
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
    
                                let newInp = document.createElement("input")
                                let newContent = document.createTextNode("hello")
                                newInp.appendChild(newContent)
                                newInp.setAttribute("type", "submit")
                                newInp.setAttribute("class", "submit-button")
                                document.getElementById("form").appendChild(newInp)
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