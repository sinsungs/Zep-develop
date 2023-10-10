App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
			
			// const currentTime = formatKoreanTime(new Date());

			// function formatKoreanTime(date) {
			//   const koreanOffset = 9 * 60; // offset in minutes
			//   const utc = date.getTime() + (date.getTimezoneOffset() * 60000); // convert to UTC
			//   const koreanTime = new Date(utc + (koreanOffset * 60000)); // add KST offset in minutes
			//   const year = koreanTime.getFullYear();
			//   const month = ('0' + (koreanTime.getMonth() + 1)).slice(-2);
			//   const day = ('0' + koreanTime.getDate()).slice(-2);
			//   const hours = ('0' + koreanTime.getHours()).slice(-2);
			//   const minutes = ('0' + koreanTime.getMinutes()).slice(-2);
			//   const seconds = ('0' + koreanTime.getSeconds()).slice(-2);
			//   return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			// }

			const textx = "다시 입력 해주세요 !"
			const texto = "정답입니다 !"
			// const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"

			if(obj.text == 1) {
				sender.showConfirm("정보처리 산업기사 선택하시겠습니까 ?", (result) => {
					if(result == true){
						sender.spawnAt(15, 53, 1);
					}
				});
				
			}

			// if(obj.text == 2) {
			// 	sender.showConfirm("SQLD 선택하시겠습니까 ?", (result) => {
			// 		sender.spawnAt(15, 53, 1);
			// 	});
			// }

			var quizQuestions = [  "OSI 1계층은 무엇일까요 ?",  "OSI 4계층은 무엇일까요 ?", "OSI 7계층은 무엇일까요 ?"  ];
			var quizAnswers = [  "물리계층",  "전송계층",  "응용계층" ];
			

			/* 책맹탈출 챌린지 START */
			if(obj.text == 3) {
				function promptForInput() {
					sender.showPrompt(quizQuestions[0], function(inputText){
						if(inputText == quizAnswers[0]){

							sender.showAlert(texto, function() {

                                sender.spawnAt(10, 41, 1);
                                
							});
						} else {
							sender.showAlert(textx, function() {

								// promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}

			if(obj.text == 4) {
				function promptForInput() {
					sender.showPrompt(quizQuestions[1], function(inputText){
						if(inputText == quizAnswers[1]){

							sender.showAlert(texto, function() {
								// Call the promptForInput function again to run the prompt again
                                sender.spawnAt(18, 30, 1);
								
                                
							});
						} else {
							sender.showAlert(textx, function() {
								// Call the promptForInput function again to run the prompt again
								// promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}

			if(obj.text == 5) {
				function promptForInput() {
					sender.showPrompt(quizQuestions[2], function(inputText){
						if(inputText == quizAnswers[2]){

							sender.showAlert(texto, function() {
								
                                sender.spawnAt(10, 18, 1);
								sender.showCenterLabel("챌린지 성공 !");
                                
							});
						} else {
							sender.showAlert(textx, function() {
								// Call the promptForInput function again to run the prompt again
								// promptForInput();
							  });
						}
					})  
				}
				promptForInput();
			}



			/* 책맹탈출 챌린지 END */
	
			if(obj.text == 98) {
					sender.showConfirm("책맹탈출 참여를 인증하시겠습니까 ?", (result) => {
						if(result == true){
							
						App.httpPostJson(
							"http://13.125.99.177:8070/challenge/zepverify",
							// "http://localhost:8080/api/zepeto",
							{
								// "test-header": "zep",
							},
							{
								cid: 3,
								cvzepid: sender.id,
								// cvtime: currentTime,
								cvsuccessornot: 1
							},
							(res) => {
								
								App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
							}
						);	

							sender.spawnAtMap("ADd52m", "8J6PRM");

						}
					});
			}

			if(obj.text == 99) {
				sender.showConfirm("처음으로 돌아가시겠습니까 ?", (result) => {
					if(result == true){
						sender.spawnAt(4, 63, 1);
					}
				});
		}
        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}

});
