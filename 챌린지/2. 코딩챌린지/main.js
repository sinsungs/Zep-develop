
App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            
			// const quiz = " "
			const quizx = " 다시 입력 해주세요 !"
			const quizo = sender.name + "님 코딩 챌린지 인증에 성공하셨습니다 !"

				let pyquizAnswer = "22"
				let javaquizAnswer = "30"
				let jsquizAnswer = "-35"



            if(obj.text == 1) {
                sender.showAlert('C언어 챌린지는 준비중입니다', function() {
                        
                })
            }

			/* 파이썬 퀴즈 START */

			if(obj.text == 2) {
                sender.showConfirm("파이썬 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){

					function promptForInput() {

						sender.showPrompt("파이썬 챌린지의 오늘 정답은 ?", function(inputText){
							if(inputText.toLowerCase() == pyquizAnswer.toLowerCase()){

								App.httpPostJson(
									"http://13.125.99.177:8070/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.name,
										// cvtime: currentTime,
										cvsuccessornot: 1
									},
									(res) => {
										
										App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
									}
								);	

								sender.showAlert(quizo, function() {

								});
							} else {
								sender.showAlert(quizx, function() {

									// promptForInput();
								});
							}
						})  
					}
					
				}
				promptForInput();
                });
			}
		
			/* 파이썬 퀴즈 END */

            /* 자바 퀴즈 START */

			if(obj.text == 3) {
                sender.showConfirm("자바 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){
					function promptForInput() {
						sender.showPrompt("자바 챌린지의 오늘 정답은 ?", function(inputText){
							if(inputText.toLowerCase() == javaquizAnswer.toLowerCase()){
								App.httpPostJson(
									"http://13.125.99.177:8070/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.name,
										// cvtime: currentTime,
										cvsuccessornot: 1
									},
									(res) => {
										
										App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
									}
								);	

								sender.showAlert(quizo, function() {

								});
							} else {
								sender.showAlert(quizx, function() {

									// promptForInput();

								});
							}
						})  
					}
					promptForInput();
				}
                });
			}
		
			/* 자바 퀴즈 END */

			/* 자스 퀴즈 START */

			if(obj.text == 4) {
                sender.showConfirm("자바스크립트 챌린지에 참가하시겠습니까 ?", (result) => {
				
					if(result == true){	
						function promptForInput() {
							sender.showPrompt("자바스크립트 챌린지의 오늘 정답은 ?", function(inputText){
								if(inputText.toLowerCase() == jsquizAnswer.toLowerCase()){
									
									App.httpPostJson(
										"http://13.125.99.177:8070/challenge/zepverify",
										// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
										// "http://localhost:8080/api/zepeto",
										{
											// "test-header": "zep",
										},
										{
											cid: 2,
											cvzepid: sender.name,
											// cvtime: currentTime,
											cvsuccessornot: 1
										},
										(res) => {
											
											App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
										}
									);	

									sender.showAlert(quizo, function() {

									});
								} else {
									sender.showAlert(quizx, function() {

										// promptForInput();

									});
								}
							})  
						}
						promptForInput();
					}	
                });
            }

		
			/* 자스 퀴즈 END */

            if(obj.text == 5) {
			    sender.showAlert('코틀린 챌린지는 준비중입니다', function() {
                    
                })
            }
			if(obj.text == 6) {
				sender.showAlert("코딩 챌린지에 오신걸 \n 환영합니다.", function() {
				});

			}

			


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});