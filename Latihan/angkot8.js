function Angkot(supir, trayek, penumpang, kas){
	this.supir=supir;
	this.trayek=trayek;
	this.penumpang=penumpang;
	this.kas=kas;

	this.penumpangNaik=function(namaPenumpang){
		// this.penumpang.push(namaPenumpang);
		// return this.penumpang;
		if(penumpang.length==0){
			//tambah penumpang diawal array
			this.penumpang.push(namaPenumpang);
			//kembalikan isi array dan keluar dari function
			return this.penumpang;
		}
		else{
			//telusuri kursi dari awal
			for(var i = 0;i < this.penumpang.length; i++){
				//jika ada kursi kosong
				if(this.penumpang[i]==undefined){
					//tambah penumpang dikursi kosong itu
					this.penumpang[i]=namaPenumpang;
					//kembalikan isi array dan keluar dari function
					return penumpang;
				}
				//jika nama penumpang sudah ada
				else if(this.penumpang[i]==namaPenumpang){
					//tampilkan pesan kesalahan
					console.log(namaPenumpang + ' sudah ada didalam angkot.')
					//kembalikan isi array dan keluar dari funtion
					return this.penumpang;
				}
				//jika seluruh kursi sudah terisi
				else if(i == this.penumpang.length-1){
					//tambah nama penumpang diakhir array
					this.penumpang.push(namaPenumpang);
					//kembalikan isi array dan keluar dari function
					return this.penumpang;
				}
			}
		}
	}

	this.penumpangTurun=function(namaPenumpang, bayar){
		if(this.penumpang.length===0){
			alert('Angkot Masih Kosong.');
			return false;
		}
		// for(var i=0;i<this.penumpang.length;i++){
		// 	if(this.penumpang[i]==namaPenumpang){
		// 		this.penumpang[i]=undefined;
		// 		this.kas += bayar;
		// 		return this.penumpang;
		// 	}
		// }
		else{
		for(var i = 0;i<this.penumpang.length;i++){
			if(this.penumpang[i]==namaPenumpang){
				this.penumpang[i]=undefined;
				this.kas += bayar;
				return this.penumpang;
			}else if(i==this.penumpang.length-1){
				console.log(namaPenumpang + ' tidak ada didalam angkot');
				return this.penumpang;
			}
		}
	}
	}
}

var angkot1=new Angkot('Andi', ['P.Gebang','P.Gadung'], [], 0);
var angkot2=new Angkot('Budi', ['P.Ungu','P.Kopi'], [], 0);