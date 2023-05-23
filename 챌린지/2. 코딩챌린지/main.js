let java1 = App.loadSpritesheet("001.png");
let java2 = App.loadSpritesheet("002.png");
let java3 = App.loadSpritesheet("003.png");
let java4 = App.loadSpritesheet("004.png");
let java5 = App.loadSpritesheet("005.png");
let java6 = App.loadSpritesheet("006.png");

App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

			const currentTime = formatKoreanTime(new Date());

			function formatKoreanTime(date) {
			  const koreanOffset = 9 * 60; // offset in minutes
			  const utc = date.getTime() + (date.getTimezoneOffset() * 60000); // convert to UTC
			  const koreanTime = new Date(utc + (koreanOffset * 60000)); // add KST offset in minutes
			  const year = koreanTime.getFullYear();
			  const month = ('0' + (koreanTime.getMonth() + 1)).slice(-2);
			  const day = ('0' + koreanTime.getDate()).slice(-2);
			  const hours = ('0' + koreanTime.getHours()).slice(-2);
			  const minutes = ('0' + koreanTime.getMinutes()).slice(-2);
			  const seconds = ('0' + koreanTime.getSeconds()).slice(-2);
			  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
			}
            
			// const quiz = " "
			const quizx = "틀렸습니다 => 다시 입력 해주세요 !"
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
				function promptForInput() {

					sender.showPrompt("파이썬 챌린지의 오늘 정답은 ?", function(inputText){
						if(inputText.toLowerCase() == pyquizAnswer.toLowerCase()){

							App.httpPostJson(
								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									cid: 2,
									cvzepid: sender.name,
									cvtime: currentTime,
									cvsuccessornot: 1
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
                });
			}
		
			/* 파이썬 퀴즈 END */

            /* 자바 퀴즈 START */

			if(obj.text == 3) {
                sender.showConfirm("자바 챌린지에 참가하시겠습니까 ?", (result) => {
				function promptForInput() {
					sender.showPrompt("자바 챌린지의 오늘 정답은 ?", function(inputText){
						if(inputText.toLowerCase() == javaquizAnswer.toLowerCase()){
							App.httpPostJson(

								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									cid: 2,
									cvzepid: sender.name,
									cvtime: currentTime,
									cvsuccessornot: 1
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
                });
			}
		
			/* 자바 퀴즈 END */

			/* 자스 퀴즈 START */

			if(obj.text == 4) {
                sender.showConfirm("자바스크립트 챌린지에 참가하시겠습니까 ?", (result) => {
				function promptForInput() {
					sender.showPrompt("자바스크립트 챌린지의 오늘 정답은 ?", function(inputText){
						if(inputText.toLowerCase() == jsquizAnswer.toLowerCase()){
							
							App.httpPostJson(
								"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
								// "http://localhost:8080/api/zepeto",
								{
									// "test-header": "zep",
								},
								{
									cid: 2,
									cvzepid: sender.name,
									cvtime: currentTime,
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

								promptForInput();

							});
						}
					})  
				}
				promptForInput();
                });
            }

		
			/* 자스 퀴즈 END */

            if(obj.text == 5) {
			    sender.showAlert('코틀린 챌린지는 준비중입니다', function() {
                    
                })
            }
			if(obj.text == 6) {
				sender.showAlert(java1, function() {
				});

			}

			


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});