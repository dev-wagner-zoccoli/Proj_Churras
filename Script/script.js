/*  Carnes: Homens (<em>men</em>): 550gr p/ pessoa - (+ de 6h de duração) = 700g;
            Mulhers (<em>women</em>): 400gr p/ pessoa - (+ de 6h de duração) = 575g;
            Crianças (<em>kids</em>) - 175gr p/ pessoa - (+ de 6h de duração) = 225g;
    Refrigerantes/água/sucos: 1L p/ pessoa - (+ de 6h de duração) = 2L;
            2/5 Refrigerante (<em>soda</em>)
            1/5 Água & Suco  (<em>water & juice</em>)
            Álcool é de responsabilidade de cada participante (<em>bring your own alcohol</em)
*/

function button() {
    button.addEventListener("click", calculate);
}

/* -----------------------------------------*/
/* QUANTITY PER INDIVIDUAL, GENRE AND AGE */
/* -----------------------------------------*/

function calculate() {
    console.log("Calculating...");

    let numWomen = document.getElementById("women");
    let numMen = document.getElementById("men");
    let numKids = document.getElementById("kids");
    let numDuration = document.getElementById("duration");

    let women = numWomen.value;
    let men = numMen.value;
    let kids = numKids.value;
    let duration = numDuration.value;

    let meatTotal =
        women * meatPerWomen(duration) + men * meatPerMen(duration) + kids * meatPerKid(duration);
    console.log(meatTotal);

    /* MEAT TYPES */

    let chicken = chickenLegs(meatTotal);
    let pork = bacon(meatTotal);
    let sausage = snag(meatTotal);
    let redMeat = cow(meatTotal);

    let drinkTotal =
        (women * drinkPerPerson(duration) +
            men * drinkPerPerson(duration) +
            kids * drinkPerPerson(duration)) /
        3;
    console.log(drinkTotal);

    /* DRINK TYPES */

    let water = wtr(drinkTotal);
    let juice = jc(drinkTotal);
    let soda = sd(drinkTotal);

    /* -----------------------------------------*/
    /* RESULTS */
    /* -----------------------------------------*/

    /* MEAT RESULTS */

    results.innerHTML = `<p><b>${Math.ceil(meatTotal / 1000)} Kg de carnes:</b></p>`;
    results.innerHTML += `<p>${Math.ceil(chicken / 1000)} Kg de coxinhas de frango.</p>`;
    results.innerHTML += `<p>${Math.ceil(pork / 1000)} Kg de panceta.</p>`;
    results.innerHTML += `<p>${Math.ceil(sausage / 1000)} Kg de linguiça.</p>`;
    results.innerHTML += `<p>${Math.ceil(redMeat / 1000)} Kg de carne vermelha.</p>`;

    /* BEVERAGE RESULTS */

    results.innerHTML += `<p><b>${Math.ceil(drinkTotal / 1000)} L de bebidas:</b></p>`;
    results.innerHTML += `<p>${Math.ceil(water / 1000)} L de água.</p>`;
    results.innerHTML += `<p>${Math.ceil(juice / 1000)} L de suco.</p>`;
    results.innerHTML += `<p>${Math.ceil(soda / 1000)} L de refrigerante.</p>`;

    results.innerHTML += `<h5>*A cerveja é responsabilidade de cada participante!</h5>`;
}

/* -----------------------------------------*/
/* QUANTITY PER EVENT DURATION */
/* -----------------------------------------*/

function meatPerWomen(duration) {
    if (duration >= 6) {
        return 575;
    } else {
        return 400;
    }
}

function meatPerMen(duration) {
    if (duration >= 6) {
        return 700;
    } else {
        return 550;
    }
}

function meatPerKid(duration) {
    if (duration >= 6) {
        return 225;
    } else {
        return 175;
    }
}

function drinkPerPerson(duration) {
    if (duration >= 6) {
        return 2000;
    } else {
        return 1000;
    }
}

/* -----------------------------------------*/
/* MEAT TYPE QUANTITY CALC*/
/* -----------------------------------------*/

function chickenLegs(meatTotal) {
    return meatTotal / 6;
}

function bacon(meatTotal) {
    return meatTotal / 6;
}

function snag(meatTotal) {
    return (meatTotal / 6) * 2;
}

function cow(meatTotal) {
    return (meatTotal / 6) * 2;
}

/* -----------------------------------------*/
/* DRINK TYPE QUANTITY CALC*/
/* -----------------------------------------*/

function wtr(drinkTotal) {
    return drinkTotal / 5;
}

function jc(drinkTotal) {
    return drinkTotal / 5;
}

function sd(drinkTotal) {
    return (drinkTotal / 5) * 3;
}
