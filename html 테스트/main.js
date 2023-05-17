let _widget = null;
// q 키를 누르면 동작하는 함수
// App.addOnKeyDown
App.addOnKeyDown(81, function (player) {
	_widget = player.showWidget("sample.html","top",300,300);
	App.sayToAll(`위젯 아이디: ${_widget.id}`)
});