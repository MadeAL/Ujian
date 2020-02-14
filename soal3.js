function jumlahKoin (nilaiUang){
    var jumlahUang = nilaiUang
    var koin = [25, 10, 5, 1]
    var jumlahUangCek = 0
    var koin25 = 0
    var koin10 = 0
    var koin5 = 0
    var koin1 = 0
    while(jumlahUang > jumlahUangCek){
        jumlahUangCek += koin[0];
        koin25 ++
    }
    if(jumlahUangCek > jumlahUang) {
        jumlahUangCek = jumlahUangCek - koin[0];
        koin25 = koin25 - 1
    }
    while(jumlahUang > jumlahUangCek){
        jumlahUangCek += koin[1];
        koin10 ++
    }
    if(jumlahUangCek > jumlahUang) {
        jumlahUangCek = jumlahUangCek - koin[1];
        koin10 = koin10 - 1
    }

    while(jumlahUang > jumlahUangCek){
        jumlahUangCek += koin[2];
        koin5 ++
    }

    if(jumlahUangCek > jumlahUang) {
        jumlahUangCek = jumlahUangCek - koin[2];
        koin5 = koin5 - 1
    }

    while(jumlahUang > jumlahUangCek){
        jumlahUangCek += koin[3];
        koin1 ++
    }

    if(jumlahUangCek > jumlahUang) {
        jumlahUangCek = jumlahUangCek - koin[3];
        koin1 = koin1 - 1
    }
return (koin25 + koin10 + koin5 + koin1)
}

console.log(jumlahKoin(49))
console.log(jumlahKoin(31))
console.log(jumlahKoin(50))