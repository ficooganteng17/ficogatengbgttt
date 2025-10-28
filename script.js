// 1. pilih tombol berdasarkan ID-nya
const tombolSapa= document.getElementByid('sapaButton')
//2. Tambahkan 'event listener' untuk aksi 'click'
tombolSapa.addEventListener('click',function(){
// 3. Jalankan kode ini ketika tombol di-klil 
  alert('Halo! Terima kasih sudah berkunjung!');
});
