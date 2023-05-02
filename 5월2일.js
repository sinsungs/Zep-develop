// // 플레이어가 입장할 때 동작하는 함수
// App.onJoinPlayer.Add(function(player){
// 	App.sayToAll(`id: ${player.id} name: ${player.name}`);
//   })



App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
			App.sayToAll(`Name = ${sender.name}, id = ${sender.id}`, 0xFFFFFF);
			App.sayToAll(`emailHash = ${sender.emailHash}, email = ${sender.email}`, 0xFFFFFF);
			// App.sayToAll(`tileID = ${tileID} `, 0xFFFFFF);
			// App.sayToAll(`spaceHashID = ${App.spaceHashID}, mapHashID = ${App.mapHashID}`)
			
			// const currentTime = new Date().toLocaleTimeString();
			// const currentTime = new Date().toString();
			const currentTime = new Date().toTimeString();

			
			const text = "챌린지 참여 인증을 위해서 \n'미라클 모닝 성공' 정확하게 입력해주세요 "
			const textx = "다시 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"
			
			/* 미라클 모닝 START */
			if(obj.text == 99) {
				function promptForInput() {
					sender.showPrompt(text, function(inputText){
						if(inputText == "미라클 모닝 성공"){
							App.sayToAll(`inputText = ${inputText}`)
							App.httpPostJson(
								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "https://postman-echo.com/post" ,
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									name: sender.name,
									challenge: currentTime
								},
								(res) => {
									
									App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
								}
							);	

							sender.showAlert(texto, function() {
								// Call the promptForInput function again to run the prompt again

							});
						} else {
							sender.showAlert(textx, function() {
								// Call the promptForInput function again to run the prompt again
								promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}

			/* 미라클 모닝 END */


			// const quiz = " "
			const quizx = "다시 입력 해주세요 !"
			const quizo = sender.name + "님 퀴즈 챌린지 인증에 성공하셨습니다 !"

			let quizData = {
				"자바를 영어로 적으시오": "java",
				"파이썬을 영어로 적으시오": "python",
				"자바스크립트를 영어로 적으시오": "javascript",
				// Add more quiz questions and answers as needed
			  };

			  // Get a random quiz question from the object keys
				let quizQuestion = Object.keys(quizData)[Math.floor(Math.random() * Object.keys(quizData).length)];

				// Get the corresponding answer from the object
				let quizAnswer = quizData[quizQuestion];

			/* 퀴즈 START */

			if(obj.text == 98) {
				function promptForInput() {
					sender.showPrompt(quizQuestion, function(inputText){
						if(inputText.toLowerCase() == quizAnswer.toLowerCase()){
							App.sayToAll(`inputText = ${inputText}`)
							App.httpPostJson(
								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "https://postman-echo.com/post" ,
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									name: sender.name,
									challenge: currentTime
									
									// 챌린지 cid : unique  
									// 젭 이름 zep cvzepid : sender.name
									// 시간 cvtime : currentTime
									// 챌린지성공여부  cvsuccessornot : 0 or 1
									/*        엔티티          */
									// private Long cvid; 
									// private Long cid;
									// private String cvzepid;
									// private Date cvtime;
									// private int cvsuccessornot;
								},
								(res) => {
									
									App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
								}
							);	

							sender.showAlert(quizo, function() {
								// Call the promptForInput function again to run the prompt again

							});
						} else {
							sender.showAlert(quizx, function() {
								// Call the promptForInput function again to run the prompt again
								promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}
		
			/* 퀴즈 END */
			
			if(obj.text == 97) {
				
				function promptForInput() {
					sender.showPrompt("챌린지를 수행할 목표시간을 초 단위로 입력해주세요.", function (inputText) {
						if (isNaN(inputText)) {
							sender.showCenterLabel("숫자만 입력해 주세요");
							promptForInput();
							
						} else {

							sender.showCenterLabel("Correct");
	
							let countdown = parseInt(inputText);
							let timer = 0;
							App.onUpdate.Add(function(dt){
								timer += dt;
								if(timer >=1){
									if(countdown >= 0)
									{
										App.showCenterLabel(countdown--);
									}
									else if (countdown = 0) {
										sender.spawnAt(21, 17, 1);
										App.showCenterLabel("챌린지 성공");
										App.showCenterLabel(countdown--);
									}
									
									timer = 0;
								}
							})
						}
					});
				}
				
				promptForInput();
			}



			if(obj.text == 96) {

				sender.showConfirm("챌린지에 참가하시겠습니까 ?", (result) => {
					App.sayToAll(result);
					sender.spawnAt(19, 15, 1);

			});

			
				}
	
			
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
					  
					  // 입력 받기
					  sender.showPrompt(quizQuestion, function(inputText) {
						// 입력된 값이 정답이면 다음 문제를 푼다.
						if(inputText.toLowerCase() == quizAnswer.toLowerCase()) {
							currentQuestionIndex++;
							correctAnswers++;
						  sender.showAlert(`정답입니다 ! 현재 ${correctAnswers}문제 정답`, function() {
							

							if(currentQuestionIndex == quizQuestions.length) {
							  sender.showAlert(`퀴즈가 끝났습니다! 결과 : ${correctAnswers} / ${totalQuestions}`, function() {
								// 더 이상 문제가 없으므로 더 이상 실행하지 않음
							  });
							}
							// 다음 문제를 푼다.
							

							// 마지막 문제를 풀었을때 이 함수가 실행되서 오류가난ㄴ다 ;;; ㄴ
							  promptForInput();
							
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

				
				// else if(obj.text == 2) {
				// 		sender.spawnAtMap("1dQjl4", "23wKVw");
				// 		App.sayToAll(`${obj.text}입니다`, 0xFFFFFF);
				// }else if(obj.text == 3) {
				// 		sender.spawnAtMap("87Lryg", "2N1dQx");
				// }
				// App.sayToAll(`${obj.text}입니다`, 0xFFFFFF);

        }
    } else {
        App.sayToAll(`obj is null`, 0xFFFFFF);
    }
});



			/* HTTP 코드 START */
			// App.httpPostJson(
			// 	"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
			// 	// "https://postman-echo.com/post" ,
			// 	// "http://localhost:8080/api/zepeto",
			// 	{
			// 		// "test-header": "zep",
			// 	},
			// 	{
			// 		name: sender.name,
			// 		challenge: currentTime
			// 	},
			// 	(res) => {
					
			// 		App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
			// 	}
			// );
			/* HTTP 코드 END */