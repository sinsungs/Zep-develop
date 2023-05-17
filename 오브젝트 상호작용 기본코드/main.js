App.onObjectTouched.Add(function (sender, x, y, tileID, obj) {
    if (obj !== null) {
        if (obj.type == ObjectEffectType.INTERACTION_WITH_ZEPSCRIPTS) {

          
			if(obj.text == 80) {


			}


        } 
	} else {
		App.sayToAll(`obj is null`, 0xFFFFFF);
	}
});