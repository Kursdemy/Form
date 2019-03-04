function validation() {
    var nama = document.getElementById('nama').value;
    var nim = document.getElementById('nim').value;
    var kelas = document.getElementById('kelas').value;
    var jurusan = document.getElementById('jurusan').value;
    var skripsi = document.getElementById('skripsi').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var email = document.getElementById('email').value;
    var deskripsi = document.getElementById('deskripsi').value;

    if (nama == "") {
        document.getElementById('fullname').innerHTML = " ** Please field Name";
        return false;
    }

    if (nim == ""){
        document.getElementById('nim-siswa').innerHTML = " ** please field NIM";
        return false;
    }

    if (kelas == "") {
        document.getElementById('kelas-siswa').innerHTML = " ** please field Kelas";
        return false;
    }

    if (jurusan == "") {
        document.getElementById('jurusan-siswa').innerHTML = " ** Please field Jurusan";
        return false;
    }

    if (skripsi == "") {
        document.getElementById('skripsi-siswa').innerHTML = " ** Plese field Judul";
        return false;
    }

    if (date == "") {
        document.getElementById('date-local').innerHTML = " ** Please field Date";
        return false;
    }

    if ( time == "") {
        document.getElementById('time-local').innerHTML = " ** Please field time";
        return false;
    }

    if ( email == "") {
        document.getElementById('email-id').innerHTML = " ** Please field Email";
        return false;
    }

    if ( deskripsi == "") {
        document.getElementById('deskripsi-siswa').innerHTML = " ** Please field Deskripsi";
        return false;
    }

}

   