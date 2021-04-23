calculateButton = document.getElementById("calculateButton");

let aProb = 0;
let bProb = 0;
let abProb = 0;
let baProb = 0;

let weKnowPb = false;

const getAnswer = () => {
    if (weKnowPb == true) {
        abProb = (baProb * aProb) / bProb;
    } else {
        abProb = (baProb * aProb) / (aProb * baProb + bProb * (1 - baProb));
    }

    const abProbPer = abProb.toPrecision(2) * 100;

    const answerSpanFind = document.querySelector(".answer");
    if (answerSpanFind != null) {
        answerSpanFind.remove();
    }

    const answerSpan = document.createElement("span");
    answerSpan.classList.add("answer");

    document.getElementById("contentWrappper").appendChild(answerSpan);

    answerSpan.innerText = "Answer ~ " + abProbPer + "%";
}


const produceData = () => {
    aProb = document.getElementById("aProbInput").value;
    bProb = document.getElementById("bProbInput").value;
    baProb = document.getElementById("baProbInput").value;

    getAnswer();
}

document.getElementById("toggleCheckbox").addEventListener("click", () => {
    weKnowPb = !weKnowPb;

    while (document.getElementById("bProbInputsWrapper").firstChild) {
        document.getElementById("bProbInputsWrapper").removeChild(document.getElementById("bProbInputsWrapper").firstChild);
    }

    if (weKnowPb == true) {
        bProbText = document.createElement("span");
        bProbText.classList.add("b-prob-heading");
        bProbText.innerText = "P(b) - "
        document.getElementById("bProbInputsWrapper").appendChild(bProbText);

        bProbInput = document.createElement("input");
        bProbInput.classList.add("b-prob-input");
        bProbInput.id = "bProbInput";
        document.getElementById("bProbInputsWrapper").appendChild(bProbInput);
    } else {
        bProbText = document.createElement("span");
        bProbText.classList.add("b-prob-heading");
        bProbText.innerText = "P(NOT A) - "
        document.getElementById("bProbInputsWrapper").appendChild(bProbText);

        bProbInput = document.createElement("input");
        bProbInput.classList.add("b-prob-input");
        bProbInput.id = "bProbInput";
        document.getElementById("bProbInputsWrapper").appendChild(bProbInput);
    }
})


calculateButton.addEventListener("click", produceData);