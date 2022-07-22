const correct_answers = ["A", "B", "A", "A", "B"];

const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
// const ra = document.querySelectorAll(".ra");
// const wa = document.querySelectorAll(".wa");

form.addEventListener('submit', e => {
    e.preventDefault();

    //start score
    let score = 0;
    //users answers
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    //comparing answers
    userAnswer.forEach( (answer, index) => {

        (answer === correct_answers[index]) ? score += 20 : result;

    });

    //scroll top after submit answers
    scrollTo(0, 0);
    //removing display none to show the content
    result.classList.remove("d-none");
    // for (let i = 0; i < ra.length; i++) {
    //     ra[i].style.display = "inline-block";
    //     wa[i].style.display = "inline-block";
    //   }

    

    //smooth score roll
    let output = 0;
    //creating timer, firing every 10 ms
    const timer = setInterval(() => {
        //updating score inside span
        result.querySelector("span").textContent = `${score}%`;
        //when the score = output it will stop animation
        (output === score) ? clearInterval(timer) : output++;
    }, 30);

});