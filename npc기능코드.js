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
			const textx = "옳바르게 입력 해주세요 !"
			const texto = sender.name + "님 미라클 모닝 인증에 성공하셨습니다 !"
			
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
		
			


				if(obj.text == 1) {
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
						App.sayToAll(`${obj.text}입니다`, 0xFFFFFF);
				} else if(obj.text == 2) {
						sender.spawnAtMap("1dQjl4", "23wKVw");
						App.sayToAll(`${obj.text}입니다`, 0xFFFFFF);
				}else if(obj.text == 3) {
						sender.spawnAtMap("87Lryg", "2N1dQx");
				}
				

        }
    } else {
        App.sayToAll(`obj is null`, 0xFFFFFF);
    }
});