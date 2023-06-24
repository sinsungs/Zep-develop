// Q 키를 누르면 동작하는 함수
// App.addOnKeyDown(81, function (player) {
// 	player.showPrompt("🔐 Please enter a password", function (inputText) {
// 		if (inputText == "1234") {
// 			player.showCenterLabel("Correct");
// 		} else {
// 			player.showCenterLabel("Incorrect");
// 		}
// 	});
// });

// Q 키를 누르면 동작하는 함수
App.addOnKeyDown(81, function (player) {
	player.showConfirm("confirm", (result) => {
		App.sayToAll(result);
	});
});