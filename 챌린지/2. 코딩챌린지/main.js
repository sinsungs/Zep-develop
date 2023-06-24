var Python = "다음은 Python 알고리즘 퀴즈입니다.\n\n"
        + "오늘의 문제:\n"
        + "다음 코드의 출력 결과는 무엇일까요?\n\n"
        + "a = 1\n"
        + "b = 2\n"
        + "c = a if a > b else b\n"
        + "print(c)\n"

var Java = '다음은 Java 알고리즘 퀴즈입니다.\n\n'
        + '오늘의 문제:\n'
        + '다음 코드의 실행 출력결과는?\n\n'
        + 'int a = 1;\n'
        + 'int b = 2;\n'
        + 'int c = (a > b) ? a : b;\n'
        + 'System.out.println(c);\n';

var JS = "다음은 JavaScript 알고리즘 퀴즈입니다.\n\n"
		+ "오늘의 문제:\n"
		+ "다음 코드의 출력 결과는 무엇일까요?\n\n"
		+ "var a = 1;\n"
		+ "var b = 2;\n"
		+ "var c = (a > b) ? a : b;\n"
		+ "console.log(c);\n";




App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            
			// const quiz = " "
			const quizx = " 다시 입력 해주세요 !"
			const quizo = sender.name + "님 코딩 챌린지 인증에 성공하셨습니다 !"

				let pyquizAnswer = "2"
				let javaquizAnswer = "2"
				let jsquizAnswer = "2"



            if(obj.text == 1) {
                sender.showAlert('C언어 챌린지는 준비중입니다', function() {
                        
                })
            }

			/* 파이썬 퀴즈 START */

			if(obj.text == 2) {
                sender.showConfirm("파이썬 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){

					function promptForInput() {

						sender.showPrompt( Python , function(inputText){
							if(inputText.toLowerCase() == pyquizAnswer.toLowerCase()){

								App.httpPostJson(
									"https://godsaengplanner.com/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.id,
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
		
			/* 파이썬 퀴즈 END */

            /* 자바 퀴즈 START */

			if(obj.text == 3) {
                sender.showConfirm("자바 챌린지에 참가하시겠습니까 ?", (result) => {

				if(result == true){
					
					function promptForInput() {

						sender.showPrompt( Java , function(inputText){
							if(inputText.toLowerCase() == javaquizAnswer.toLowerCase()){
								App.httpPostJson(
									"https://godsaengplanner.com/challenge/zepverify",
									// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
									// "http://localhost:8080/api/zepeto",
									{
										// "test-header": "zep",
									},
									{
										cid: 2,
										cvzepid: sender.id,
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
							sender.showPrompt( JS , function(inputText){
								if(inputText.toLowerCase() == jsquizAnswer.toLowerCase()){
									
									App.httpPostJson(
										"https://godsaengplanner.com/challenge/zepverify",
										// "http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
										// "http://localhost:8080/api/zepeto",
										{
											// "test-header": "zep",
										},
										{
											cid: 2,
											cvzepid: sender.id,
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