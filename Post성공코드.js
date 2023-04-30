

// App.addOnKeyDown(81, function (player) {
//     // const url = "https://postman-echo.com/post"; 
//     const url = "http://localhost:8080/api/zepto"; // 변경된 URL

//     const headers = { "test-header": "zep" };
//     // const headers = { 'Content-Type': 'application/json' };
// 	const contentType = "application/json";

//     const data = { name: "zepscript", challenge: "miracle" };
  
//     App.httpPost(url, headers, data, (res) => {
//     //   let response = JSON.parse(res);
//       App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
//     //   App.sayToAll(`보낸 헤더: ${response.headers["test-header"]}`, 0xffffff);
//     //   App.sayToAll(`보낸 데이터: ${response.form.name}`, 0xffffff);
//     //   App.sayToAll(`보낸 데이터: ${response.form.challenge}`, 0xffffff);
//     });
//   });

  



//   App.addOnKeyDown(81, function (player) {
// 	const url = "http://localhost:8080/api/zepto"; // Changed URL
  
// 	const headers = {
// 	//   "Content-Type": "application/json",
// 	  "test-header": "zep"
// 	};
	
// 	const data = { name: "zepscript", challenge: "miracle" };
  
// 	App.httpPostJson(url, headers, data, (res) => {
// 	  let response = JSON.parse(res);
// 	  App.sayToAll(`Headers sent: ${response.headers["test-header"]}`, 0xffffff);
// 	  App.sayToAll(`Data sent: ${response.form.name}`, 0xffffff);
// 	  App.sayToAll(`Data sent: ${response.form.challenge}`, 0xffffff);
// 	});
//   });

  // q를 눌렀을 때 실행되는 함수
App.addOnKeyDown(81, function (player) {

	App.sayToAll(`id: ${player.id} name: ${player.name}`);

	App.httpPostJson(
		"http://ec2-43-201-154-148.ap-northeast-2.compute.amazonaws.com/index.php",
		// "https://postman-echo.com/post" ,
		// "http://localhost:8080/api/zepeto",
		{
			// "test-header": "zep",
		},
		{
			name: player.name,
			challenge: player.id
		},
		(res) => {
			
			App.sayToAll(`HTTP Result: ${JSON.stringify(res)}`);
			// let response = JSON.parse(res);
			// App.sayToAll(`보낸 헤더: ${response.headers["test-header"]}`, 0xffffff);
			// App.sayToAll(`보낸 데이터: ${JSON.stringify(response)}`, 0xffffff);
			// App.sayToAll(`보낸 데이터: ${response.data.challenge}`, 0xffffff);
		}
	);
});

// // 플레이어가 입장할 때 동작하는 함수
// App.onJoinPlayer.Add(function(player){
// 	App.sayToAll(`id: ${player.id} name: ${player.name}`);
//   })