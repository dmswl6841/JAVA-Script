

document.addEventListener('DOMContentLoaded', function() {	//DOMcontentLoaded 이벤트 : 초기 HTML 문서를 완전히 불러오고 난 후 분석
	let tbl = document.querySelector('#show table');
	let capt = document.createElement('caption');
	capt.innerHTML = '회원리스트';
	tbl.append(capt);

	//리스트 출력
	let ajax = new XMLHttpRequest();
	ajax.open('get', 'member?cmd=list');
	ajax.send();
	ajax.onload = function() {
		let data = JSON.parse(this.responseText);

		let tbody = document.querySelector('#show tbody');
		data.forEach(emp => {
			tbody.append(mkTr(emp));
		})
	}

	//추가
	//form 기본 기능  => ajax 처리 (XMLHttpRequest, fetch)
	document.forms.memberForm.addEventListener("submit", function(e) {
		e.preventDefault();	//preventDefault : 기본기능 차단 이벤트
		let formData = new FormData(e.target);	//e.target = form
		for (let ent of formData.entries()) {
			console.log(ent);
		};

		fetch('MemberUpload', {
			method: 'post',
			body: formData
		})	//get:url, post : 추가정보지정
			.then(function(result) {
				return result.json();
			})
			.then(function(result) {
				console.log(result);
			})
			.catch(function(er) {
				console.error(er);
			})
	})
});

let fields = ['memNo', 'memName', 'memPhone', 'memAddr', 'memBirth', 'memImage'];

//회원정보 => tr 생성
function mkTr(member) {
	let tr = document.createElement('tr');
	//tr.addEventListener('click', showForm)
	tr.setAttribute('id', member.memNo);	//tr의 attribute 활용
	fields.forEach(field => {
		let td = document.createElement('td');
		//null, 0, undefined, '' => false. 이외 true
		td.innerHTML = member[field] ? member[field] : (!'' ? field == 'memImage' ? 'no imag' : '' : '');
		//1. td.innerHTML = member[field]?member[field] : <<<(!''?field == 'memImage'?'no imag': '':'')>>>;
		//2. !''? <<<field == 'memImage'?'no imag': ''>>> :''
		//3. field == 'memImage'?'no imag': ''
		tr.append(td);
	})

	//삭제 버튼
	let btn = document.createElement('button');
	btn.innerHTML = '삭제';
	btn.addEventListener('click', rowDelete, false);
	//bubbling, capture
	let td = document.createElement('td');
	td.append(btn);
	tr.append(td);

	//체크박스. input타입이 체크박스
	let checkbox = document.createElement('input');
	checkbox.setAttribute('type', 'checkbox');
	td = document.createElement('td');
	td.append(checkbox);
	tr.append(td);

	return tr;
}

function rowDelete() {
	let delId = this.parentElement.parentElement.getAttribute('id');
	//document.querySelector('form[name="memberForm"]');
	let formData = new FormData();
	formData.append("cmd", "delete");
	formData.append("delId", delId);

	fetch('MemberUpload', {
		method: 'post',
		headers: { 'Content-type': 'application/x-www-form-urlencoded' },
		body: `cmd=delete&delId=${delId}`
	})
		.then(function(result){
			return result.json();
		})
		.then(function(result){
			console.log(result);
		})
		.catch(function(error){
			console.error(error);
		})
}

