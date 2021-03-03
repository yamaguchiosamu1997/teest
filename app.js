const quiz = [
    {
      question: 'エンジニアチームのリーダーは誰？',
      answers: [ 'osa', 'nino', 'nakaji', 'kyo' ],
      correct: 'kyo'
    }, {
      question: 'jsで変数を定義するのは？',
      answers: [ 'let', 'const', 'nino', 'bus'],
      correct: 'let'
    }, {
      question: 'jsでループ文を使いたい時に使うのは？',
      answers: [ 'pan', 'gohan', 'while', 'nino'],
      correct: 'while'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// 文字列反映
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert('終了！正解数は' + score + '/' + quizLength + 'です。' );
  }
};
//ボタンをクリックされたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}