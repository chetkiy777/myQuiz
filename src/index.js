const questionOutput = document.querySelector('[data-question]')

const scoreOutput = document.querySelector('[data-text]')

const indexOfQuestionOutput = document.querySelector('.index-of-question'),
      allQuestionsOutput = document.querySelector('.all-questions')

const variant1 = document.querySelector('.var1'),
      variant2 = document.querySelector('.var2'),
      variant3 = document.querySelector('.var3');
      
const allVariants = document.querySelectorAll('.variant__btn')

const circle1 = document.querySelector('#circle-1'),
      circle2 = document.querySelector('#circle-2'),
    circle3 = document.querySelector('#circle-3')

const allCircles = document.querySelectorAll('.circle__item')    

let indexOfCircle = 0

const startPage = document.querySelector('[data-startPage]')
const modal = document.querySelector('[data-modal]')

const startBtn = document.querySelector('[data-start]')
const nextBtn = document.querySelector('[data-nextBtn]')
const restartBtn = document.querySelector('[data-restart]')


let indexOfQuestion = 0



let score = 0

const complitedQuestionsId = []

const questions = [
    {
        id: 1,
        question: "Сколько домашних у твоей ЛП?",
        answers: [
            "2",
            "3",
            "4"
        ],
        correctAnswer: 2
    },
    {
        id: 2,
        question: "Как зовут родителей твоей ЛП?",
        answers: [
            "Игорь и Анна",
            "Федя и Гриша",
            "Андрей и Оксана"
        ],
        correctAnswer: 0
    },
    {
        id: 3,
        question: "Какая марка машины у папы твоей ЛП?",
        answers: [
            "Жигули",
            "Рено",
            "Фольцваген"
        ],
        correctAnswer: 1
    },
    {
        id: 4,
        question: "Каким видом спорта занимается твоя ЛП?",
        answers: [
            "Рисование",
            "Танци",
            "Кикбоксинг"
        ],
        correctAnswer: 2
    },
    {
        id: 5,
        question: "Какая любимая игра твоей ЛП?",
        answers: [
            "Roblox",
            "Peppi House",
            "Brawl Stars"
        ],
        correctAnswer: 0
    },
]


allQuestionsOutput.textContent = questions.length

const renderQuestion = () => {
    nextBtn.disabled = true
    
    questionOutput.textContent = questions[indexOfQuestion].question

    variant1.innerHTML = questions[indexOfQuestion].answers[0]
    variant2.innerHTML = questions[indexOfQuestion].answers[1]
    variant3.innerHTML = questions[indexOfQuestion].answers[2]

    complitedQuestionsId.push(questions[indexOfQuestion].id)
    
}

const quizStart = () => {
    startPage.classList.add('hidden')
}

const quizEnd = () => {
    modal.classList.remove('hidden')

    switch (score) {
        case 1 || 2:
            return scoreOutput.textContent = `до ЛП ещё далеко, всего несколько правильных ответов =(`
        case 3: 
            return scoreOutput.textContent = `Не плохо! Твой результат 3 правильных ответа`
        case 4:
            return scoreOutput.textContent = 'Хорошо Подруга! Всего 1 не правильный ответ!'
        case 5:
            return scoreOutput.textContent = 'Сразу видно кто моя Лучшая Подруга! Все ответы правильные'
        default:
            return scoreOutput.textContent = 'Ничего про меня не знаешь совсем =('
    }
}

const disableBtns = () => {
    allVariants.forEach(item => item.disabled = true)
}

const enableBtns = () => {
    allVariants.forEach(item => {
        item.disabled = false
        item.classList.remove('correct', 'wrong')
    })
}

const activeCircle = status => {
    allCircles[indexOfCircle].classList.add(status)
    indexOfCircle += 1
}

const quizRestart = () => {
    modal.classList.add('hidden')
    score = 0
    indexOfQuestion = 0
    indexOfCircle = 0
    indexOfQuestionOutput.textContent = indexOfQuestion + 1

    allCircles.forEach(item => item.classList.remove('correct', 'wrong'))
    enableBtns()
    renderQuestion()
}

window.addEventListener('load', () => {
    renderQuestion()
})

startBtn.addEventListener('click', () => {
    quizStart()
})

nextBtn.addEventListener('click', () => {

    indexOfQuestion += 1
    indexOfQuestionOutput.textContent = indexOfQuestion + 1
    enableBtns()
    indexOfQuestion === questions.length 
        ? quizEnd()
        : renderQuestion()
    
})

restartBtn.addEventListener('click', () => {
    quizRestart()
})


allVariants.forEach(variant => {
    variant.addEventListener('click', e => {
        nextBtn.disabled = false
        let answer = Number(e.target.dataset.num)

        if (answer === questions[indexOfQuestion].correctAnswer) {
            e.target.classList.add('correct')
            disableBtns()
            activeCircle('correct')
            score += 1
        } else {
            e.target.classList.add('wrong')
            disableBtns()
            activeCircle('wrong')
    }
    })
})
