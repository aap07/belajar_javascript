var tanya = true;
while(tanya){
	//pilihan player
	var p = prompt('pilih : gajah, semut, orang');
	//pilihan komputer
	//membangkitkan bilangan random
	var comp = Math.random();
	if(comp<0.34){
		comp = 'gajah';
	}else if(comp>=0.34 && comp<0.67){
		'orang';
	}else{
		comp = 'semut';
	}
	var hasil = '';
	//menentukan rules
	if(p==comp){
		hasil = 'SERI!';
	}else if(p=='gajah'){
		/*if(comp=='orang'){
			hasil = 'MENANG!';
		}else{
			hasil = 'KALAH!';
		}*/
		hasil = (comp=='orang')?'MENANG!':'KALAH!';
	}else if(p=='orang'){
		hasil = (comp=='gajah')?'KALAH!':'MENANG!';
	}else if(p=='semut'){
		hasil = (comp=='orang')?'KALAH!':'MENAG!';
	}else{
		hasil = 'Memasukan Pilihan Yang Salah!!';
	}
	//tampilkan hasil
	alert('Kamu Memilih : ' + p + ' Dan Komputer Memilih ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);
	tanya = confirm('lagi?');
}
alert('Terima Sudah Bermain')