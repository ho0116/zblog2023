let loginObject = {
	init: function() {
		let _this = this;

		$("#btn-login").on("click", () => {
			_this.login();
		});
	},
	login: function() {
		alert("로그인 요청됨");
		// 회원정보 추출
		let user = {
			username: $("#username").val(),
			password: $("#password").val(),
		}		
		console.log(user);
		$.ajax({
			type: "POST",
			// 시험으로는 /user로 함
			//url: "/user",
			url:"/auth/login",
			data: JSON.stringify(user),
			contentType: "application/json; charset=utf-8"
		}).done(function(response) {
			console.log(response);
			alert(response["data"])
			location = "/";
		}).fail(function(error) {
			alert("!/js/login.js에서 에러발생: " + error);
		});
	},
}
loginObject.init();