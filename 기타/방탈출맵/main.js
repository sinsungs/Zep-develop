App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

            const text = "OSI 4계층은 무엇일까요 ?"
			const textx = "다시 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"

			if(obj.text == 1) {
				sender.showConfirm("정보처리 산업기사 선택하시겠습니까 ?", (result) => {
					sender.spawnAt(15, 53, 1);
				});
				
			}

			if(obj.text == 2) {
				sender.showConfirm("SQLD 선택하시겠습니까 ?", (result) => {
					sender.spawnAt(15, 53, 1);
				});
			}
			
			/* 미라클 모닝 START */
			if(obj.text == 3) {
				function promptForInput() {
					sender.showPrompt(text, function(inputText){
						if(inputText == "전송계층"){

							sender.showAlert(texto, function() {
								// Call the promptForInput function again to run the prompt again
                                sender.spawnAt(10, 41, 1);
								
                                
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

			if(obj.text == 99) {
					sender.showConfirm("처음으로 돌아가시겠습니까 ?", (result) => {
						sender.spawnAt(4, 63, 1);
					});
			}
        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});