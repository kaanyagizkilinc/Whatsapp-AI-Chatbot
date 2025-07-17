const {Client, LocalAuth} = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const userContexts =[];

const targetUser = process.argv[2]; // 3. argüman kullanıcı numarası
if (!targetUser) {
    console.error("Lütfen hedef kullanıcı numarasını gir: node index.js 905551112233");
    process.exit(1);
}
const client = new Client({
    authStrategy: new LocalAuth() //oturum bilgisini tutacak
});

client.on('qr', qr =>{
    qrcode.generate(qr, {small: true});
    console.log("QR kodu tarayıp giriş yapınız");
});

client.on('ready', () =>{
    console.log("Bot Hazır..");
});

async function AIresponse(userId, userMessage) {


    const API_KEY ='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';
    const url = 'https://openrouter.ai/api/v1/chat/completions'
        // Eğer context yoksa oluştur
    if (!userContexts[userId]) {
        userContexts[userId] = [];
    }

    // Botun kişilik ve talimatları içeren system mesajı (sadece ilk defa ekleyebiliriz)
    if (!userContexts[userId].some(m => m.role === "system")) {
        userContexts[userId].unshift({
            role: "system",
            content: `Senin Adın Yağız Kaan Kılınç, Samimi, Duygusal, anlayışlı ve her görüşe açıksın.
            Cevapların kısa ve öz olucak.
            Gelen cevaplara 50 kelimeden fazlasını yazmıycaksın.
            Madde, Alt başlık, Başlık kullanımı yok sadece sohbet amaçlı bir botsun.`
        });
    }
// sadece burada eklenecek
    userContexts[userId].push({ role: "user", content: userMessage });


    const body={
        model: "openai/gpt-3.5-turbo:free",
        messages: userContexts[userId],
        stream: false
    };

    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if(data && data.choices && data.choices.length > 0){
            const botReply = data.choices[0].message.content.trim();
             userContexts[userId].push({ role: "assistant", content: botReply });
            if (userContexts[userId].length > 25) {
            // Sistem mesajı hep başta kalacak şekilde kesiyoruz
            userContexts[userId] = [userContexts[userId][0], ...userContexts[userId].slice(-24)];
            console.log(botReply);
            }
            return botReply;
        }
        else{
            return 'WhatsapBot cevap Üretemedi...';
        }
    }catch(error)
    {
        console.error("AI API HATASI: ", error);
        return 'BİR HATA OLUŞTU AIDAN CEVAP ALINAMADI';
    }
}

client.on('message',async  message =>{
    const sender = message.author || message.from;
    console.log(`Yeni Mesaj: ${message.body} from ${sender}`);
    const allowedUser = `${targetUser}@c.us`;
    if(sender == allowedUser){
        const aiResponse = await AIresponse(sender, message.body);
        await message.reply(aiResponse);
    }
});

client.initialize();
process.on('SIGINT', () => {
    console.log('\nBot kapanıyor, WhatsApp bağlantısı sonlandırılıyor...');
    client.destroy();
    process.exit(0);
});