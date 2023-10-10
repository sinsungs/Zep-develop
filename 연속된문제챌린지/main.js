if(obj.text == 95) {
    var quizQuestions = [  "자바를 영어로 적으시오",  "파이썬을 영어로 적으시오",  "자바스크립트를 영어로 적으시오",  "스프링부트를 영어로 적으시오",  "웹 페이지를 꾸며주는 언어는 ?"];
    var quizAnswers = [  "java",  "python",  "javascript",  "springboot",  "css"];
    
    // 현재 문제의 인덱스를 저장하는 변수
    var currentQuestionIndex = 0;
    var totalQuestions = quizQuestions.length;
      var correctAnswers = 0;
    
    // 문제를 푸는 함수
    function promptForInput() {
      // 현재 문제와 정답을 가져오기
      var quizQuestion = quizQuestions[currentQuestionIndex];
      var quizAnswer = quizAnswers[currentQuestionIndex];
      var ss = 0;
      // 입력 받기
      sender.showPrompt(quizQuestion, function(inputText) {
        // 입력된 값이 정답이면 다음 문제를 푼다.
        if(inputText.toLowerCase() == quizAnswer.toLowerCase()) {
            currentQuestionIndex++;
            correctAnswers++;
        
            
          sender.showAlert(`정답입니다 ! 현재 ${correctAnswers}문제 정답`, function() {
            

            
            // 다음 문제를 푼다.
            if(currentQuestionIndex != quizQuestions.length) {
            // 마지막 문제를 풀었을때 이 함수가 실행되서 오류가난ㄴ다 ;;; ㄴ
              promptForInput();
            } else {

                sender.spawnAt(29, 13, 1);
                ss++;
                // sender.showAlert(`퀴즈가 끝났습니다! 결과 : ${correctAnswers} / ${totalQuestions}`, function() {
                // 	  // 더 이상 문제가 없으므로 더 이상 실행하지 않음
                // });
                  
            }

            if(ss == 1){
                sender.showCenterLabel("챌린지 성공");
            }
            App.sayToAll(`ss=${ss}`);

            
          });
        }
        // 입력된 값이 정답이 아니면 다시 입력 받는다.
        else {
          sender.showAlert("틀렸습니다. 다시 시도하세요.", function() {
            promptForInput();
          });
        }



      });

    
    }
    
    // 첫 번째 문제를 풀기 위해 promptForInput 함수를 호출
    promptForInput();
}

if(obj.text == 94) {

    sender.showConfirm("연속 퀴즈 챌린지에 참가하시겠습니까 ?", (result) => {
        App.sayToAll(result);
        sender.spawnAt(42, 11, 1);

    });
}