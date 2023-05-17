App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

            const currentTime = new Date().toTimeString();
            
			// const quiz = " "
			const quizx = "다시 입력 해주세요 !"
			const quizo = sender.name + "님 영단어 챌린지 인증에 성공하셨습니다 !"

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

			if(obj.text == 1) {
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


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});