// Menangani pengiriman form untuk setiap halaman
document.addEventListener('DOMContentLoaded', function() {
    // Fungsi untuk menangani submit form
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Mencegah pengiriman form default
            
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value; // Mengonversi FormData ke objek
            });

            // Simulasi pengiriman data ke server
            console.log("Data yang dikirim:", data);
            alert('Data berhasil disimpan!'); // Menampilkan notifikasi sukses

            // Reset form setelah pengiriman
            form.reset();
        });
    });
});
