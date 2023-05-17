// let _timer = 90;
// let _stateTimer = 0;

// App.onUpdate.Add(function(dt){
// 	_stateTimer += dt;
	
// 	if(_stateTimer >= 1){
// 		_stateTimer = 0;
// 		_timer -= 1;
// 	}

	
// 	if(_timer <= 0){
// 			// time over then...
// 	}
// })

// let countdown = 10;
// let timer = 0;
// App.onUpdate.Add(function(dt){
// 	timer += dt;
// 	if(timer >=1){
// 		if(countdown >= 0)
// 		{
// 			App.showCenterLabel(countdown--);
// 		}
// 		else{
// 			App.showCenterLabel("Time Over");
// 		}
// 		timer = 0;
// 	}
// })

// let countdown = parseInt(inputText);

// function startTimer() {
//   setTimeout(function tick() {
//     if (countdown >= 0) {
//       App.showCenterLabel(countdown--);
//       setTimeout(tick, 1000);
//     } else {
//       App.showCenterLabel("Time Over");

// 	  sender.showAlert("챌린지 성공", function() {
// 		// Call the promptForInput function again to run the prompt again
// 		sender.spawnAt(21, 17, 1);
		
// 	});
//     }
//   }, 1000);
// }





App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

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


			if(obj.text == 96) {

				sender.showConfirm("챌린지에 참가하시겠습니까 ?", (result) => {
					App.sayToAll(result);
					sender.spawnAt(19, 15, 1);

			});

			
				}

		} 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});