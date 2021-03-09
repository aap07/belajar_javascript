var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
	//jika angkot kosong
	if(penumpang.length==0){
		//tambah penumpang diawal array
		penumpang.push(namaPenumpang);
		//kembalikan isi array dan keluar dari function
		return penumpang;
	}else{
		//telusuri kursi dari awal
		for(var i = 0;i < penumpang.length; i++){
			//jika ada kursi kosong
			if(penumpang[i]==undefined){
				//tambah penumpang dikursi kosong itu
				penumpang[i]=namaPenumpang;
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
			//jika nama penumpang sudah ada
			else if(penumpang[i]==namaPenumpang){
				//tampilkan pesan kesalahan
				console.log(namaPenumpang + ' sudah ada didalam angkot.')
				//kembalikan isi array dan keluar dari funtion
				return penumpang;
			}
			//jika seluruh kursi sudah terisi
			else if(i == penumpang.length-1){
				//tambah nama penumpang diakhir array
				penumpang.push(namaPenumpang);
				//kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}
	}
}
var hapusPenumpang = function(namaPenumpang, penumpang){
	//ketika angkot masih kosong
	if(penumpang.length==0)
	{
		//tampilkan pesan
		console.log('Angkot masih kosong.');
		//kembalikan isi array dan keluar dari function
		return penumpang;
	}else{
		for(var i = 0;i<penumpang.length;i++){
			if(penumpang[i]==namaPenumpang){
				penumpang[i]=undefined;
				return penumpang;
			}else if(i==penumpang.length-1){
				console.log(namaPenumpang + ' tidak ada didalam angkot');
				return penumpang;
			}
		}
	}
}