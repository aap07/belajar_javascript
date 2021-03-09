var a = prompt('Masukan Sisi Kubus A');
var b = prompt('Masukan Sisi Kubus B');
function jumlahVolumeDuaKubus(a, b){
	var total, volumeA, volumeB;
	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total;

}
var total1 = jumlahVolumeDuaKubus(a, b);
alert('Total Volume Kubus Dengan Sisi ' + a + ' Ditambah Dengan Volume Kubus ' + b + ' Adalah ' + total1);