// // 플레이어가 입장할 때 동작하는 함수
// App.onJoinPlayer.Add(function(player){
// 	App.sayToAll(`id: ${player.id} name: ${player.name}`);
//   })



App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {
            App.sayToAll(`Number = ${obj.text}, Value = ${obj.param1}`, 0xFFFFFF);
			App.sayToAll(`Name = ${sender.name}, id = ${sender.id}`, 0xFFFFFF);

			const currentTime = new Date().toTimeString();
		

			if(obj.text == 1) {
				sender.showConfirm("미라클 모닝 챌린지에 참가하시겠습니까 ?", (result) => {
					sender.spawnAtMap("ADd52m", "8ALKvz");
				});
				
			}
			if(obj.text == 2) {
				sender.showConfirm("코딩 챌린지에 참가하시겠습니까 ?", (result) => {
					sender.spawnAtMap("ADd52m", "yVGP1n");
				});
				
			}

			if(obj.text == 3) {
				sender.showConfirm("책맹탈출 챌린지에 참가하시겠습니까 ?", (result) => {
					sender.spawnAtMap("ADd52m", "ykONgz");
				});
				
			}

			/* 유저 인증 START */
			if (obj.text == 4) {
				function promptForInput() {
				  sender.showPrompt("인증 코드를 입력해 주세요.", function (inputText) {
					// App.sayToAll(randomQuote);
			  
					// if (inputText == randomQuote) {
					  App.httpPostJson(
						"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
						// "http://localhost:8080/api/zepeto",
						{
						  // "test-header": "zep",
						},
						{
						  zepid: sender.name,
						  verifytime: currentTime,
						  verifykey: inputText,
						},
						(res) => {
						  if (res === '인증 성공') {
							sender.showAlert(`${sender.name}님 인증에 성공하셨습니다.`);
							sender.spawnAt(4, 63, 1);
							App.sayToAll(`res = ${res}`, 0xFFFFFF);
						  } 
						  else if(res === "이미 인증된 계정입니다.") {
							sender.showAlert(`${sender.name}님 이미 인증에 성공하셨습니다.`);
						  }
						  else if(res === "인증 코드가 틀렸습니다."){
							sender.showAlert(`${sender.name}님 잘못된 인증 코드입니다.`, function () {
							  App.sayToAll(`res = ${res}`, 0xFFFFFF);
							  promptForInput();
							});
						  }
						  else{
							sender.showAlert(`내부 서버 에러입니다. 죄송합니다.`);
						  }
						  
						}
					  );
					// } else {
					//   sender.showAlert("다시 입력해 주세요.", function () {
					// 	// Call the promptForInput function again to run the prompt again
					// 	promptForInput();
					//   });
					// }
				  });
				}
				promptForInput();
			  }

			/* 유저 인증 END */

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