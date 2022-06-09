const aws = require("aws-sdk");

// AWS Güvenlik Bilgileri
aws.config.region = 'us-east-1'
aws.config.credentials = new aws.Credentials('AKIATM3L7KPBXRRKD3MV', 'ejYdMcg4bXIy5biBXA0tYmjP3CWViE3IXYyfT6UG');

const awsTranslate = new aws.Translate();

async function cevir(mesaj, kaynakDil, hedefDil) {
  const sonuc = await awsTranslate.translateText({
    Text: mesaj,
    SourceLanguageCode: kaynakDil,
    TargetLanguageCode: hedefDil
  }).promise();
  return sonuc.TranslatedText;
}

async function main() {
  const cumle = "Bulut Bilişim dersinin final ödevi";
  const ceviri = await cevir(cumle, 'tr', 'en');
  console.log(ceviri); // "Final assignment of Cloud Computing"
}
main();