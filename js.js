
function sepet() {
    document.getElementById("fo").innerHTML = "<p>Sepet Bilgileri</p>";
}

function ana() {
    window.location.href = "yeniweb.html"
}

function uye() {
        window.location.href = "uyeol.html"
}

function iltsm() {
    document.getElementById("bil").innerHTML = "<p>İletişim Bilgileri: 123-456-789</p>";
}


function adres() {
    document.getElementById("bil").innerHTML = "<p>Adres: Örnek Mah. No: 1, İstanbul</p>";
}

function dhafzla() {
    document.getElementById("dhafzla").innerHTML = `
    <p>Green Koleksiyon, 2024 yılından bu yana saat dünyasında sizlere eşsiz tasarımlar ve kaliteli parçalar sunmak için faaliyet gösteren bir markadır. Modern tasarımlarımızla, her yaştan ve her zevkten saat tutkununa hitap ediyoruz.</p>
    <p>Her bir saat, yalnızca bir zaman ölçme aracı değil, aynı zamanda bir yaşam tarzı simgesidir. Her koleksiyonumuzda zarif tasarımlar ve yüksek kaliteyi bir araya getiriyoruz. Sadece bir saat almak değil, zamanınızı değerli kılacak bir parça edinmeyi hedefliyoruz.</p>
    <p>Misyonda olduğu gibi, markamız her zaman müşterilerine değerli bir deneyim sunmayı amaçlar. Green Koleksiyon ile her anı daha anlamlı hale getirebilirsiniz.</p>
`;

}



function sayfaYonet() {
    var kullaniciAdi = document.getElementById('kullaniciAdi').value;
    var sifre = document.getElementById('sifre').value;

    if(kullaniciAdi === "admin" && sifre === "1234") {

        window.location.href = "anasayfa.html";
    } else {
 
        alert("Kullanıcı adı veya şifre hatalı!");
    }
}