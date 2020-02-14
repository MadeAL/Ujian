function hargaWaktu (waktux){
var waktu = waktux
var hargaBaju = 10000
var hargaCelana = 20000
var hargaKacamata = 30000

var incrBaju = 0.1
var incrCelana = 0.2
var incrKacamata = 0.3

for (i=1; i<= waktu; i++){
    hargaBaju += hargaBaju*incrBaju
    hargaCelana += hargaCelana*incrCelana
    hargaKacamata += hargaKacamata*incrKacamata
    hargaBaju = (Math.ceil(hargaBaju))
    hargaCelana = (Math.ceil(hargaCelana))
    hargaKacamata = (Math.ceil(hargaKacamata))
}

return (`Di menit ke ${waktu} Product Info
Nama Barang = Baju , harga = Rp. ${hargaBaju.toLocaleString('id-ID')}
Nama Barang = Celana , harga = Rp. ${hargaCelana.toLocaleString('id-ID')}
Nama Barang = Kacamata , harga = Rp. ${hargaKacamata.toLocaleString('id-ID')}`)
}

console.log(hargaWaktu(1))