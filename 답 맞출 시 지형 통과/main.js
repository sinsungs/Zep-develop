Map.putTileEffect(14, 59, TileEffectType.NONE );


App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

            const text = "챌린지 참여 인증을 위해서 \n'미라클 모닝 성공' 정확하게 입력해주세요 "
			const textx = "다시 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"

			/* 미라클 모닝 START */
			if(obj.text == 80) {
				function promptForInput() {
					sender.showPrompt(text, function(inputText){
						if(inputText == "미라클 모닝 성공"){

							sender.showAlert(texto, function() {
								// Call the promptForInput function again to run the prompt again
                                Map.putTileEffect(14, 59, TileEffectType.NONE );
                                Map.putTileEffect(15, 59, TileEffectType.NONE );
                                // obj.destroy();
								
                                
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

        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});