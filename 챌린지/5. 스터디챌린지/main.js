
App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

			if(obj.text == 1) {

				sender.showConfirm("챌린지에 참가하시겠습니까 ?", (result) => {
					App.sayToAll(result);
					sender.spawnAt(19, 15, 1);

				});

			}

			if(obj.text == 2) {
				
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
							
								  sender.showAlert("챌린지 성공", function() {
									// Call the promptForInput function again to run the prompt again
									sender.spawnAt(21, 17, 1);

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

			if(obj.text == 3) {
				App.sayToAll(`${sender.name}님의 권한: ${sender.role}`)
				if(sender.role == -1){
					sender.showAlert("챌린지 매니저님 어서오세요 !")
				} else {
					sender.showAlert("챌린지 매니저 전용 기능입니다.")
				}

	// 			sender.showConfirm("관리자님 현재 방안에 인원들을 스터디 챌린지 인증 시키겠습니까 ?", (result) => {
	// 				App.sayToAll(result);
	// 				// sender.spawnAt(19, 15, 1);
	// 				// q 키를 누르면 동작하는 함수

	// //App.players를 이용해 채팅창에 접속해있는 모든 플레이어의 닉네임을 출력하기
	// let players = App.players;
	// for(let i in players){
	// 	let player = players[i]
	// 	App.sayToAll(player.name)
	// 	App.sayToAll(player.id)
	// 	App.sayToAll(`접속자 수: ${App.playerCount}`)
	// }


	// 			});

			}

			// if(obj.text == 4) {
			// 	sender.showConfirm("스터디 챌린지 매니저 신청 하시겠습니까 ?", (result) => {
			// 		sender.showAlert("신청에 성공하셨습니다. 관리자 승인을 기다려주세요.", function() {})
			// 	})
			// }

		} 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});