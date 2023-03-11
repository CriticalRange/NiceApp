# React Native Cookie Clicker

## Yapılacaklar:

### Cookie autoclicker 

* context fonksiyonu: 
```(useReducer + useEffect):
useEffect(() => {
    const interval = setInterval(() => {
      dispatch({type: 'ADD_COOKIE'});
    }, 1000);
    return () => clearInterval(interval);
}, []);
```

### State Management

* ~~MainContext ve birden fazla context kullanabilme (Özellikle Screen'lerin kendilerine özel context'leri olması). Neredeyse tamam, upgradesContext kaldı.~~ Recoiljs kullanıldı ve tamamlandı.

### Oyun kayıt sistemi (Büyük ihtimalle asyncstorage veya RNFS ile)

### Fast upgrades (CookieScreen.js'e hızlı erişilebilir upgrades paneli)

### Option'ı olan bir Options

* Light/Dark mode switch

### Oyuna belli güçlendirmelerle yeniden başlama (Revival gibi bişey)

### Upgrade'lere havalı isimler bulma :D

### DAHA ÇOK PIXEL ART

### Daha iyi bir debugging sistemi

