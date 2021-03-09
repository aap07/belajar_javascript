//object
//literal
var mhs1={
 		nama : 'Antonius Adi Pratomo',
 		nrp : '1234567890',
 		email : 'acumajagitu@gmail.com',
 		juurusan : 'Jakarta'
}

var mhs2={
 		nama : 'Antonius Adi Pratomo',
 		nrp : '1234567890',
 		email : 'acumajagitu@gmail.com',
 		juurusan : 'Bandung'
}

//function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan){
	var mhs=[];
	mhs.nama=nama;
	mhs.nrp=nrp;
	mhs.email=email;
	mhs.jurusan=jurusan;
	return mhs;
}

var mhs3 = buatObjectMahasiswa('Ani', '0987654321', 'aniaja@yahoo.com', 'Surabaya')

//cunstroctor
function Mahasiswa(nama, nrp, email, jurusan){
	this.nama=nama;
	this.nrp=nrp;
	this.email=email;
	this.jurusan=jurusan;
}

var mhs4 = new Mahasiswa('Budi', '1234098756', 'budi@yahoo.com', 'Yogyakarta');