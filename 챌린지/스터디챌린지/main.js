/* 스터디 START */
if(obj.text == 97) {
				
    function promptForInput() {
        sender.showPrompt("챌린지를 수행할 목표시간을 초 단위로 입력해주세요.", function (inputText) {
            if (isNaN(inputText)) {
                sender.showCenterLabel("숫자만 입력해 주세요");
                promptForInput();
                
            } else {

                let countdown = parseInt(inputText);

                function startTimer() {
                  setTimeout(function tick() {
                    if (countdown >= 0) {
                        sender.showCenterLabel(countdown--);
                      setTimeout(tick, 1000);
                    } else {
                        sender.showCenterLabel("Time Over");
                        sender.spawnAt(29, 13, 1);
                      sender.showAlert("챌린지 성공", function() {
                        // Call the promptForInput function again to run the prompt again
                        

                        // 여기에 성공데이터 Post 요청 ㄱㄱ
                    
                    });

                    }
                  }, 1000);
                }

                startTimer();
            }
        });
    }
    
    promptForInput();
}

/* 스터디 END */

if(obj.text == 96) {

    sender.showConfirm("스터디 챌린지에 참가하시겠습니까 ?", (result) => {
        App.sayToAll(result);
        sender.spawnAt(14, 11, 1);

    });
}


/* 스터디 END */