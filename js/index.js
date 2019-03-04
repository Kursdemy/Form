
function validation() {
    var nama = document.getElementById('nama').reset;
    var nim = document.getElementById('nim').reset;
    var kelas = document.getElementById('kelas').reset;
    var jurusan = document.getElementById('jurusan').reset;
    var skripsi = document.getElementById('skripsi').reset;
    var date = document.getElementById('date').reset;
    var time = document.getElementById('time').reset;
    var email = document.getElementById('email').reset;
    var deskripsi = document.getElementById('deskripsi').reset;

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

   