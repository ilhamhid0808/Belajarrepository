var buah1 = ['mangga'];
buah1[5] = 'pisang';
console.log(buah1);

let buah = ['Jeruk','Nanas','Apel']; buah.push('Duku');
console.log(buah) 
buah[buah.length] = 'Pisang';
console.log(buah)
buah[6] = 'Mangga'; 
console.log(buah)

let nama1 = ['Andi','Budi'];
let nama2 = ['Caca','Dede','Euis'];
let nama3 = nama1.concat(nama2); 
let nama4 = nama2.concat(nama1);
console.log(nama3) 
console.log(nama4)
