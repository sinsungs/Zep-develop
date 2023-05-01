// // 플레이어가 입장할 때 동작하는 함수
// App.onJoinPlayer.Add(function(player){
// 	App.sayToAll(`id: ${player.id} name: ${player.name}`);
//   })



App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
			App.sayToAll(`Name = ${sender.name}, id = ${sender.id}`, 0xFFFFFF);
			App.sayToAll(`tileID = ${tileID} `, 0xFFFFFF);
			App.sayToAll(`spaceHashID = ${App.spaceHashID}, mapHashID = ${App.mapHashID}`)
			
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