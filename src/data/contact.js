const { ADDRESS } = require('../../backend/config/config');
const { NAME } = require('../../backend/config/config');
const { PHONE } = require('../../backend/config/config');
const { EMAIL } = require('../../backend/config/config');

module.exports = {
  name: NAME,
  address: ADDRESS,
  phone: PHONE,
  email: EMAIL,
  content: 'Jeśli jesteś zainteresowany umówieniem sesji zdjęciowej, lub \
  chciałbyś się skontaktować ze mną w innej sprawie zapraszam do kontaktu \
  telefonicznego, pocztą elektroniczną lub za pomocą poniższego formularza.',
  checkbox: `Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z ustawą \
  o ochroniedanych osobowych w związku z obsługą zapytania przesłanego przez \
  formularz kontaktowy. Podanie danych jest dobrowolne, ale niezbędne do \
  przetworzenia zapytania. Zostałem poinformowany, że przysługuje mi prawo \
  dostępu do swoich danych, możliwości ich poprawiania, żądania zaprzestania \
  ich przetwarzania. Administratorem danych osobowych jest ${NAME}, ${ADDRESS}`
};
